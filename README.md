# Code Review Challenge Platform

A web-based platform for code review training challenges with real-time user tracking and leaderboard functionality.

## Quick Start with Docker

### Option 1: Pull from Docker Hub
```bash
docker pull yourusername/code-review-challenge:latest
docker run -d --name code_review_training -p 3000:3000 -p 4001:4001 yourusername/code-review-challenge:latest
```

### Option 2: Build and Run Locally
```bash
# Build the image
docker build -t code-review-challenge .

# Run the container
docker run -d --name code_review_training -p 3000:3000 -p 4001:4001 code-review-challenge
```

### Access the Application
- **Main App**: http://localhost:3000
- **Socket.IO Server**: http://localhost:4001

## Local Development Setup

### Prerequisites
- Node.js 18+
- npm or yarn
- Git

### Installation
```bash
# Clone the repository
git clone https://github.com/imusabkhan/code_review_training.git
cd code_review_training

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Set up database
npx prisma generate
npx prisma db push

# Start development server
npm run dev
```

## Features

- **Code Review Challenges**: Interactive challenges with vulnerability detection
- **Real-time User Tracking**: Live user count and challenge timers
- **Leaderboard System**: Track user scores and rankings
- **Admin Panel**: Manage challenges and monitor submissions
- **Flag Submission**: Secure flag validation system

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js API Routes, Prisma ORM, SQLite
- **Real-time**: Socket.IO
- **Authentication**: Iron Session (admin)
- **Styling**: Radix UI components

## Environment Variables

Create a `.env.local` file with:
```env
DATABASE_URL="file:./prisma/dev.db"
ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"
FLAG_CHALLENGE1="flag{your-flag-here}"
FLAG_CHALLENGE2="flag{another-flag}"
FLAG_CHALLENGE3="flag{your-flag-here}"
FLAG_CHALLENGE4="flag{your-flag-here}"
FLAG_CHALLENGE5="flag{your-flag-here}"
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run start:prod` - Start with socket server

## Docker Commands

```bash
# Build image
docker build -t code-review-challenge .

# Run container
docker run -d --name code_review_training -p 3000:3000 -p 4001:4001 code-review-challenge

# View logs
docker logs code_review_training

# Stop container
docker stop code_review_training

# Remove container
docker rm code_review_training
```

## Admin Access

- **URL**: http://localhost:3000/admin
- **Username**: admin
- **Password**: admin123

## License

MIT License
