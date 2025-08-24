@echo off
echo 🚀 Starting Code Review Challenge Platform...

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Kill any existing processes on port 4001
echo 🔧 Checking for existing processes on port 4001...
for /f "tokens=5" %%a in ('netstat -ano ^| findstr :4001') do taskkill /f /pid %%a >nul 2>&1

REM Install dependencies if node_modules doesn't exist
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    npm install
)

REM Generate Prisma client
echo 🗄️ Setting up database...
npx prisma generate

REM Push database schema
echo 📊 Initializing database...
npx prisma db push

REM Set environment variables
set DATABASE_URL=file:./dev.db
set ADMIN_SESSION_SECRET=your-super-secret-admin-session-key-at-least-32-chars
set NEXT_PUBLIC_SOCKET_URL=http://localhost:4001
set FLAG_CHALLENGE1=flag{test-challenge-1-flag}
set FLAG_CHALLENGE2=flag{test-challenge-2-flag}
set FLAG_CHALLENGE3=flag{test-challenge-3-flag}
set FLAG_CHALLENGE4=flag{test-challenge-4-flag}
set FLAG_CHALLENGE5=flag{test-challenge-5-flag}

echo 🌟 Starting development server...
echo 📱 Application will be available at: http://localhost:3000
echo 🔧 Admin panel will be available at: http://localhost:3000/admin
echo 🔑 Admin password: admin123
echo.
echo Press Ctrl+C to stop the server

REM Start the development server
npm run dev
