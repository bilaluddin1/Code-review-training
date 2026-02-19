#!/bin/sh
set -e

# Fix permissions for mounted volumes
# This ensures the nextjs user (UID 1001) can write to mounted directories
echo "Fixing permissions for mounted volumes..."

# Ensure directories exist
mkdir -p /app/prisma /app/data /app/src/data

# Fix ownership and permissions (run as root)
if [ -d "/app/prisma" ]; then
    chown -R 1001:1001 /app/prisma 2>/dev/null || true
    chmod -R 775 /app/prisma 2>/dev/null || true
fi

if [ -d "/app/data" ]; then
    chown -R 1001:1001 /app/data 2>/dev/null || true
    chmod -R 775 /app/data 2>/dev/null || true
fi

if [ -d "/app/src/data" ]; then
    chown -R 1001:1001 /app/src/data 2>/dev/null || true
    chmod -R 775 /app/src/data 2>/dev/null || true
fi

echo "Permissions fixed. Switching to nextjs user..."

# Switch to nextjs user and execute the original command
exec su-exec nextjs "$@"

