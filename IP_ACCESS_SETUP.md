# IP Address Access Setup

This guide explains how to configure the application to be accessed via IP address instead of domain name.

## Quick Setup

### 1. Find Your Server IP Address

```bash
# On Linux
hostname -I
# or
ip addr show

# On the VM, you can also check:
docker inspect nginx-proxy | grep IPAddress
```

### 2. Set the Socket URL Environment Variable

Create or update `.env.local` file:

```bash
# Replace YOUR_SERVER_IP with your actual IP (e.g., 192.168.1.100)
NEXT_PUBLIC_SOCKET_URL=https://YOUR_SERVER_IP:3000
```

**Example:**
```bash
NEXT_PUBLIC_SOCKET_URL=https://192.168.1.100:3000
```

### 3. Update docker-compose.production.yml (Alternative)

You can also set it directly in the docker-compose file:

```yaml
environment:
  - NEXT_PUBLIC_SOCKET_URL=https://192.168.1.100:3000
```

Or use environment variable:

```bash
# Export before running docker-compose
export NEXT_PUBLIC_SOCKET_URL=https://192.168.1.100:3000
docker-compose -f docker-compose.production.yml up -d --build
```

### 4. Restart Services

```bash
docker-compose -f docker-compose.production.yml down
docker-compose -f docker-compose.production.yml up -d --build
```

## Access the Application

Once configured, access the application at:
- **Main App**: `https://YOUR_SERVER_IP:3000`
- **Example**: `https://192.168.1.100:3000`

## SSL Certificate Note

⚠️ **Important**: When accessing via IP address, you may see SSL certificate warnings because:
- SSL certificates are typically issued for domain names, not IP addresses
- The certificate might not match the IP address

**Options:**
1. **Accept the warning** (for testing/internal use)
2. **Use a self-signed certificate** for the IP address
3. **Use domain name** when possible (recommended for production)

## Configuration Summary

### nginx.conf
- `server_name _;` - Accepts any hostname/IP address ✅

### docker-compose.production.yml
- `NEXT_PUBLIC_SOCKET_URL` - Must be set to your server IP ✅

### Access URL Format
- `https://YOUR_SERVER_IP:3000` ✅

## Troubleshooting

### Socket.IO Not Connecting

If Socket.IO doesn't work:
1. Check that `NEXT_PUBLIC_SOCKET_URL` matches your actual IP
2. Verify the IP is accessible from your network
3. Check firewall rules allow port 3000
4. Check browser console for WebSocket errors

### SSL Certificate Errors

If you see certificate errors:
- This is expected when using IP addresses
- Click "Advanced" → "Proceed anyway" (for testing)
- For production, use a domain name with proper SSL certificate

### Finding Your IP

```bash
# Get all IP addresses
ip -4 addr show | grep -oP '(?<=inet\s)\d+(\.\d+){3}'

# Get primary IP
hostname -I | awk '{print $1}'
```


