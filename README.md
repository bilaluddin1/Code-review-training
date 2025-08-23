# Code Review Challenge Platform

A comprehensive web-based platform for creating and managing interactive code review challenges focused on security vulnerabilities like SSRF (Server-Side Request Forgery).

## 🌟 Features

- **Interactive Code Review**: Users select vulnerable lines in code snippets
- **Real-time Admin Dashboard**: Create, edit, and manage challenges through a web interface
- **Challenge Locking System**: Control access to challenges with admin controls
- **Timer Management**: Set time limits for challenges
- **Flag Submission**: Additional points for finding flags in lab environments
- **Real-time Leaderboard**: Live score tracking and user statistics
- **Multi-tab Coordination**: Prevents duplicate user counts across browser tabs

## 🖥️ System Requirements

- **Node.js**: Version 18 or higher
- **npm**: Version 8 or higher
- **Operating System**: Windows, macOS, or Linux

## 🚀 Quick Start

### Option 1: Automated Setup (Recommended)

#### For Windows:
```bash
# Double-click the start.bat file or run:
start.bat
```

#### For macOS/Linux:
```bash
# Make the script executable and run:
chmod +x start.sh
./start.sh
```

### Option 2: Manual Setup

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd codereview.musabkhan.me
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Set up the database**:
   ```bash
   npx prisma generate
   npx prisma db push
   ```

4. **Create environment file**:
   ```bash
   # Create .env.local file with the following content:
   DATABASE_URL="file:./dev.db"
   ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
   NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"
   FLAG_CHALLENGE1="flag{test-challenge-1-flag}"
   FLAG_CHALLENGE2="flag{test-challenge-2-flag}"
   FLAG_CHALLENGE3="flag{test-challenge-3-flag}"
   FLAG_CHALLENGE4="flag{test-challenge-4-flag}"
   FLAG_CHALLENGE5="flag{test-challenge-5-flag}"
   ```

5. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🌐 Access the Application

- **Main Application**: http://localhost:3000
- **Admin Dashboard**: http://localhost:3000/admin
- **Admin Password**: `admin123`

## 🛠️ Admin Features

### Challenge Management
- **Create New Challenges**: Add custom code review challenges
- **Edit Existing Challenges**: Modify challenge content, vulnerable lines, and explanations
- **Delete Challenges**: Remove challenges from the platform
- **Visual Code Editor**: Click on lines to mark them as vulnerable

### Challenge Controls
- **Lock/Unlock Challenges**: Control user access to challenges
- **Timer Management**: Set, pause, resume, and reset challenge timers
- **Real-time User Count**: Monitor active users

### Challenge Configuration
- **Difficulty Levels**: Beginner, Intermediate, Advanced
- **Hints System**: Add multiple hints to help users
- **Line Explanations**: Detailed explanations for each vulnerable line
- **Flag System**: Set flags for additional points
- **Lab URLs**: Link to external lab environments

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── api/               # API routes
│   │   ├── admin/         # Admin API endpoints
│   │   ├── challenge-*    # Challenge management APIs
│   │   └── submit-*       # Submission APIs
│   ├── admin/             # Admin dashboard pages
│   └── page.tsx           # Main challenge interface
├── components/            # React components
│   ├── admin/             # Admin-specific components
│   └── ui/                # Reusable UI components
├── data/                  # Challenge definitions
├── lib/                   # Utilities and configurations
└── types/                 # TypeScript type definitions
```

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint
- `npm run clean` - Clean build artifacts
- `npm run setup` - Complete setup (install + database)

### Database

The application uses SQLite with Prisma ORM:

```bash
# Generate Prisma client
npx prisma generate

# Push schema changes
npx prisma db push

# Open Prisma Studio (database GUI)
npx prisma studio
```

## 🐳 Docker Support

For production deployment:

```bash
# Build and run with Docker Compose
docker-compose up --build
```

## 🔒 Security Features

- **Admin Authentication**: Secure session-based admin login
- **Input Validation**: Comprehensive validation on all endpoints
- **Environment Variables**: Secure flag storage
- **Challenge Locking**: Access control for challenges
- **Attempt Limits**: Prevents abuse with attempt tracking

## 🌍 Cross-Platform Compatibility

### Windows
- ✅ Full support
- ✅ PowerShell and Command Prompt
- ✅ WSL (Windows Subsystem for Linux)

### macOS
- ✅ Full support
- ✅ Terminal and iTerm2
- ✅ Homebrew package manager

### Linux
- ✅ Full support
- ✅ All major distributions (Ubuntu, CentOS, etc.)
- ✅ Package managers (apt, yum, etc.)

## 🚨 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 4001
npm run kill-port

# Or manually:
# Windows: netstat -ano | findstr :4001
# macOS/Linux: lsof -ti:4001 | xargs kill -9
```

### Database Issues
```bash
# Reset database
rm dev.db
npx prisma db push
```

### Module Errors
```bash
# Clear cache and reinstall
npm run clean
npm install
```

### Permission Issues (Linux/macOS)
```bash
# Make scripts executable
chmod +x start.sh
```

## 📝 License

This project is licensed under the MIT License.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues and questions:
- Check the troubleshooting section
- Review the documentation
- Open an issue on GitHub
