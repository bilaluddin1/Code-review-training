#!/bin/bash

echo "🔄 Restarting Code Review Challenge Platform..."

# Kill any existing Node.js processes for this project
echo "🛑 Stopping existing processes..."
pkill -f "npm-run-all" || true
pkill -f "next dev" || true
pkill -f "ts-node.*socket-server" || true

# Wait a moment for processes to stop
sleep 3

# Clear any port conflicts
echo "🧹 Clearing port conflicts..."
lsof -ti:4001 | xargs kill -9 2>/dev/null || true
lsof -ti:4002 | xargs kill -9 2>/dev/null || true
lsof -ti:4003 | xargs kill -9 2>/dev/null || true

# Wait a moment
sleep 1

echo "🚀 Starting development server..."
npm run dev