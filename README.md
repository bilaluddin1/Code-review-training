# Code Review Challenge Platform

Interactive web-based platform for security vulnerability training, focusing on SSRF (Server-Side Request Forgery) and other security challenges.

## 🚀 Quick Start

### Prerequisites
- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher

### Automated Setup

**macOS/Linux:**
```bash
chmod +x start.sh
./start.sh
```

**Windows:**
```bash
start.bat
```

### Manual Setup

**Option 1: Quick Setup Script**

**macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
npm run dev
```

**Windows:**
```bash
setup.bat
npm run dev
```

**Option 2: Step by Step**
1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```bash
   # Create .env.local file
   echo 'DATABASE_URL="file:./dev.db"
   ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
   NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"' > .env.local
   ```

3. **Initialize database:**
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```

## 🌐 Access

- **Main App**: http://localhost:3000
- **Admin Panel**: http://localhost:3000/admin
- **Admin Password**: `admin123`

## 🎯 Features

- **Interactive Code Review**: Click to select vulnerable lines in code snippets
- **Real-time Admin Dashboard**: Create, edit, and manage challenges
- **Challenge Locking**: Control access to challenges
- **Timer Management**: Set time limits for challenges
- **Flag Submission**: Additional points for finding flags
- **Live Leaderboard**: Real-time score tracking
- **Multi-tab Support**: Prevents duplicate user counts

## 🛠️ Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, SQLite
- **Real-time**: Socket.IO
- **Authentication**: Iron Session
- **Code Highlighting**: React Syntax Highlighter

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   ├── admin/             # Admin dashboard
│   └── page.tsx           # Main interface
├── components/            # React components
├── data/                  # Challenge definitions
├── lib/                   # Utilities
└── types/                 # TypeScript types
```

## 🔧 Development

```bash
# Development
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Clean build artifacts
npm run clean
```

## 🐳 Docker

```bash
docker-compose up --build
```

## 📝 License

MIT License
