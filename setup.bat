@echo off
echo 🔧 Setting up Code Review Challenge Platform...

REM Check Node.js version
node --version >nul 2>&1
if errorlevel 1 (
    echo ❌ Node.js is not installed. Please install Node.js 18 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Install dependencies
echo 📦 Installing dependencies...
npm install

REM Create environment file
echo 🔐 Creating environment file...
(
echo DATABASE_URL="file:./dev.db"
echo ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
echo NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"
echo FLAG_CHALLENGE1="flag{test-challenge-1-flag}"
echo FLAG_CHALLENGE2="flag{test-challenge-2-flag}"
echo FLAG_CHALLENGE3="flag{test-challenge-3-flag}"
echo FLAG_CHALLENGE4="flag{test-challenge-4-flag}"
echo FLAG_CHALLENGE5="flag{test-challenge-5-flag}"
) > .env.local

REM Setup database
echo 🗄️ Setting up database...
npx prisma generate
npx prisma db push

echo ✅ Setup complete!
echo.
echo 🚀 To start the application:
echo    npm run dev
echo.
echo 🌐 Access points:
echo    Main App: http://localhost:3000
echo    Admin Panel: http://localhost:3000/admin (password: admin123)
pause
