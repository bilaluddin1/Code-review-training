# Simple Dockerfile for Code Review Challenge Platform
FROM node:18-alpine

# Install dumb-init and su-exec for proper signal handling and user switching
RUN apk add --no-cache dumb-init su-exec

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

# Copy entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Set proper permissions for database and data directories
RUN mkdir -p prisma data && \
    chown -R nextjs:nodejs prisma data

# Set environment variables
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV DATABASE_URL="file:./prisma/dev.db"
ENV ADMIN_SESSION_SECRET="your-super-secret-admin-session-key-at-least-32-chars"
ENV NEXT_PUBLIC_SOCKET_URL="http://localhost:4001"

# Note: We stay as root here, entrypoint script will switch to nextjs user after fixing permissions

# Expose ports
EXPOSE 3000
EXPOSE 4001

# Use dumb-init as PID 1 with entrypoint script
ENTRYPOINT ["dumb-init", "--", "/usr/local/bin/docker-entrypoint.sh"]

# Create startup script to initialize database and start the application
CMD ["sh", "-c", "npx prisma db push && npm run start:prod"]

