# Production Setup with Nginx and SSL

This guide explains how to set up the Code Review Training platform with Nginx reverse proxy and SSL/HTTPS.

## Prerequisites

1. SSL certificates (nginx.crt and nginx.key)
2. Docker and Docker Compose installed
3. Domain name pointing to your server (training.spurams.com)

## Files Created

1. **nginx.conf** - Nginx configuration with SSL and WebSocket support
2. **docker-compose.production.yml** - Production docker-compose file

## Setup Steps

### 1. Update SSL Certificate Paths

Edit `docker-compose.production.yml` and update the SSL certificate paths:

```yaml
volumes:
  - /path/to/your/ssl/nginx.crt:/etc/nginx/ssl/nginx.crt:ro
  - /path/to/your/ssl/nginx.key:/etc/nginx/ssl/nginx.key:ro
```

### 2. Update Domain Name

If your domain is different from `training.spurams.com`, update:
- `nginx.conf` - Replace `training.spurams.com` with your domain
- `docker-compose.production.yml` - Update `NEXT_PUBLIC_SOCKET_URL`

### 3. Create Environment File

Create `.env.local` file:

```bash
ADMIN_SESSION_SECRET=your-super-secret-admin-session-key-at-least-32-chars
DATABASE_URL=file:./prisma/dev.db
```

### 4. Start Services

```bash
# Build and start
docker-compose -f docker-compose.production.yml up -d --build

# View logs
docker-compose -f docker-compose.production.yml logs -f

# Stop services
docker-compose -f docker-compose.production.yml down
```

## Architecture

```
Internet → Nginx (Port 3000, HTTPS) → App Container (Port 3000, HTTP)
                                    → Socket.IO (Port 4001, HTTP)
```

## Port Configuration

- **Nginx**: Listens on port 3000 (HTTPS) and port 80 (HTTP redirect)
- **App Container**: Exposes ports 3000 (Next.js) and 4001 (Socket.IO) internally
- **External Access**: Only port 3000 is exposed to the internet

## SSL Certificate Requirements

- Certificate file: `nginx.crt`
- Private key file: `nginx.key`
- Both files must be readable by the nginx container

## Troubleshooting

### Socket.IO Connection Issues

If Socket.IO doesn't work:
1. Check that `NEXT_PUBLIC_SOCKET_URL` points to the nginx URL (https://training.spurams.com:3000)
2. Verify WebSocket upgrade headers in nginx logs
3. Check browser console for WebSocket connection errors

### Permission Errors

If you see permission errors:
1. Ensure SSL certificate files are readable
2. Check that volume mounts have correct permissions
3. The entrypoint script should fix permissions automatically

### Database Issues

If database doesn't persist:
1. Check that `./prisma` directory exists and is writable
2. Verify volume mounts in docker-compose
3. Check container logs for database errors

## Security Notes

1. **SSL Certificates**: Keep your private key secure and never commit it to git
2. **Environment Variables**: Use `.env.local` for sensitive data (already in .gitignore)
3. **Firewall**: Only expose necessary ports (80, 3000)
4. **Updates**: Regularly update Docker images and SSL certificates

## Maintenance

### View Logs
```bash
# All services
docker-compose -f docker-compose.production.yml logs -f

# Specific service
docker-compose -f docker-compose.production.yml logs -f app
docker-compose -f docker-compose.production.yml logs -f nginx
```

### Restart Services
```bash
docker-compose -f docker-compose.production.yml restart
```

### Update Application
```bash
# Rebuild and restart
docker-compose -f docker-compose.production.yml up -d --build
```


