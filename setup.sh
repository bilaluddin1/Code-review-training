#!/bin/bash

echo "🔧 Setting up Code Review Challenge Platform..."

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js version 18 or higher is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm install

# Create environment file
echo "🔐 Creating environment file..."
cat > .env.local << EOF
DATABASE_URL="file:./dev.db"
ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"
FLAG_CHALLENGE1="flag{test-challenge-1-flag}"
FLAG_CHALLENGE2="flag{test-challenge-2-flag}"
FLAG_CHALLENGE3="flag{test-challenge-3-flag}"
FLAG_CHALLENGE4="flag{test-challenge-4-flag}"
FLAG_CHALLENGE5="flag{test-challenge-5-flag}"
EOF

# Setup database
echo "🗄️ Setting up database..."
npx prisma generate
npx prisma db push

echo "✅ Setup complete!"
echo ""
echo "🚀 To start the application:"
echo "   npm run dev"
echo ""
echo "🌐 Access points:"
echo "   Main App: http://localhost:3000"
echo "   Admin Panel: http://localhost:3000/admin (password: admin123)"
