#!/bin/bash

# Cross-platform startup script for Code Review Challenge Platform
# Compatible with Linux, macOS, and Windows (WSL)

echo "🚀 Starting Code Review Challenge Platform..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18 or higher."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Kill any existing processes on port 4001
echo "🔧 Checking for existing processes on port 4001..."
if command -v lsof &> /dev/null; then
    # macOS/Linux
    lsof -ti:4001 | xargs kill -9 2>/dev/null || true
elif command -v netstat &> /dev/null; then
    # Windows/WSL
    netstat -ano | grep :4001 | awk '{print $5}' | xargs kill -9 2>/dev/null || true
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Generate Prisma client
echo "🗄️ Setting up database..."
npx prisma generate

# Push database schema
echo "📊 Initializing database..."
npx prisma db push

# Set environment variables
export DATABASE_URL="file:./dev.db"
export ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
export NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"
export FLAG_CHALLENGE1="flag{test-challenge-1-flag}"
export FLAG_CHALLENGE2="flag{test-challenge-2-flag}"
export FLAG_CHALLENGE3="flag{test-challenge-3-flag}"
export FLAG_CHALLENGE4="flag{test-challenge-4-flag}"
export FLAG_CHALLENGE5="flag{test-challenge-5-flag}"

echo "🌟 Starting development server..."
echo "📱 Application will be available at: http://localhost:3000"
echo "🔧 Admin panel will be available at: http://localhost:3000/admin"
echo "🔑 Admin password: admin123"
echo ""
echo "Press Ctrl+C to stop the server"

# Start the development server
npm run dev
