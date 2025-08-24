import { createServer } from 'http';
import { Server } from 'socket.io';

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: '*',
  },
});

// Set to track unique user IDs
const activeUsers = new Set();

// Timer state per challenge
const challengeTimers = {};

// Helper to broadcast timer state
function broadcastTimerUpdate(challengeId) {
  const timer = challengeTimers[challengeId];
  if (timer) {
    io.emit('timer:update', { challengeId, ...timer });
  }
}

io.on('connection', (socket) => {
  let userId = null;
  let isAdmin = false;

  // Helper to emit user count to all clients
  function emitUserCount() {
    io.emit('userCount', activeUsers.size);
  }

  // Expect the client to send their userId and admin flag immediately after connecting
  socket.on('register', (id, adminFlag) => {
    userId = id;
    isAdmin = !!adminFlag;
    socket.data = { userId: id, isAdmin };
    if (!isAdmin) {
      if (!activeUsers.has(id)) {
        activeUsers.add(id);
        emitUserCount();
      }
    }
  });

  socket.on('disconnect', () => {
    const id = socket.data?.userId;
    const wasAdmin = socket.data?.isAdmin;
    if (id && !wasAdmin) {
      // Check if any other sockets with the same userId are still connected
      const stillConnected = Array.from(io.sockets.sockets.values()).some(
        (s) => s !== socket && s.data?.userId === id && !s.data?.isAdmin
      );
      if (!stillConnected) {
        activeUsers.delete(id);
        emitUserCount();
      }
    }
  });

  // Admin starts timer for a challenge
  socket.on('admin:startTimer', ({ challengeId, duration }) => {
    const now = Date.now();
    challengeTimers[challengeId] = {
      startTime: now,
      duration,
      isRunning: true,
      isPaused: false,
      pausedAt: undefined,
      remaining: undefined,
    };
    broadcastTimerUpdate(challengeId);
  });

  // Admin pauses timer
  socket.on('admin:pauseTimer', ({ challengeId }) => {
    const timer = challengeTimers[challengeId];
    if (timer && timer.isRunning && !timer.isPaused) {
      timer.isPaused = true;
      timer.pausedAt = Date.now();
      timer.remaining = (timer.startTime + timer.duration) - timer.pausedAt;
      timer.isRunning = false;
      broadcastTimerUpdate(challengeId);
    }
  });

  // Admin resumes timer
  socket.on('admin:resumeTimer', ({ challengeId }) => {
    const timer = challengeTimers[challengeId];
    if (timer && timer.isPaused && timer.remaining && timer.remaining > 0) {
      timer.isPaused = false;
      timer.isRunning = true;
      timer.startTime = Date.now();
      timer.duration = timer.remaining;
      timer.pausedAt = undefined;
      timer.remaining = undefined;
      broadcastTimerUpdate(challengeId);
    }
  });

  // Admin resets timer
  socket.on('admin:resetTimer', ({ challengeId }) => {
    if (challengeTimers[challengeId]) {
      delete challengeTimers[challengeId];
      broadcastTimerUpdate(challengeId);
    }
  });

  // On user connect, send current timer state for all running timers
  Object.entries(challengeTimers).forEach(([challengeId, timer]) => {
    if (timer.isRunning || timer.isPaused) {
      socket.emit('timer:update', { challengeId, ...timer });
    }
  });
});

// Try different ports if 4001 is busy
const tryPort = (port) => {
  return new Promise((resolve, reject) => {
    const server = httpServer.listen(port, () => {
      const actualPort = server.address()?.port;
      server.close(() => resolve(actualPort));
    });

    server.on('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        console.log(`Port ${port} is busy, trying ${port + 1}...`);
        resolve(tryPort(port + 1));
      } else {
        reject(err);
      }
    });
  });
};

const startServer = async () => {
  try {
    const port = await tryPort(4001);
    httpServer.listen(port, () => {
      console.log(`Socket.IO server running on port ${port}`);
      // Update environment variable for the client
      process.env.NEXT_PUBLIC_SOCKET_URL = `http://localhost:${port}`;
    });
  } catch (error) {
    console.error('Failed to start socket server:', error);
    process.exit(1);
  }
};

startServer();
