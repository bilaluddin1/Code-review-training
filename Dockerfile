# Simple Dockerfile for Code Review Challenge Platform
FROM node:18-alpine

# Install dumb-init for proper signal handling
RUN apk add --no-cache dumb-init

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install all dependencies
RUN npm ci --no-audit --no-fund && \
    npm cache clean --force

# Copy application code
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build Next.js application only
RUN npm run build:next

# Create non-root user
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Set proper permissions for database directory
RUN mkdir -p prisma && \
    chown -R nextjs:nodejs prisma

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV DATABASE_URL="file:./prisma/dev.db"
ENV ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
ENV NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"

# Switch to non-root user
USER nextjs

# Expose ports
EXPOSE 3000
EXPOSE 4001

# Use dumb-init as PID 1
ENTRYPOINT ["dumb-init", "--"]

# Create startup script to initialize database and start the application
CMD ["sh", "-c", "npx prisma db push && npm run start:prod"]
