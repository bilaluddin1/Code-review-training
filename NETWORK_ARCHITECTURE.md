# Network Architecture & Port Management

## How Nginx Handles Ports Without Direct Exposure

### Understanding `expose` vs `ports`

#### `expose` (Used in App Container)
```yaml
expose:
  - "3000"
  - "4001"
```
- **What it does**: Makes ports available to OTHER CONTAINERS on the same Docker network
- **NOT accessible from**: Host machine or internet
- **Accessible from**: Other containers on `code-review-net` network
- **How nginx accesses it**: Using container name `app:3000` and `app:4001`

#### `ports` (Used in Nginx Container)
```yaml
ports:
  - "0.0.0.0:3000:3000"
  - "0.0.0.0:80:80"
```
- **What it does**: Maps host machine ports to container ports
- **Accessible from**: Internet and host machine
- **Format**: `host_port:container_port`

### Network Flow Diagram

```
Internet Request
    ↓
Host Machine Port 3000 (HTTPS)
    ↓
Nginx Container (Port 3000)
    ↓
Docker Network: code-review-net
    ↓
App Container (Port 3000) ← Accessed via "app:3000"
Socket.IO (Port 4001)      ← Accessed via "app:4001"
```

### How Nginx Connects to App Container

In `nginx.conf`, we define upstream servers:
```nginx
upstream app_server {
    server app:3000;  # "app" is the container name
}

upstream socket_server {
    server app:4001;  # "app" is the container name
}
```

Docker's internal DNS resolves `app` to the app container's IP on the `code-review-net` network.

## Bind Mounts vs Named Volumes

### Bind Mounts (Currently Used)
```yaml
volumes:
  - ./prisma:/app/prisma
  - ./data:/app/data
```

**Pros:**
- ✅ Direct access from host machine
- ✅ Easy to backup (just copy the directory)
- ✅ Easy to inspect/modify files
- ✅ Persists even if container is removed
- ✅ Can use existing directories

**Cons:**
- ❌ Path must exist on host
- ❌ Permission issues possible (fixed by entrypoint script)
- ❌ Platform-specific paths (Windows vs Linux)

### Named Volumes (Alternative)
```yaml
volumes:
  code_review_data:
    external: true
```

**Pros:**
- ✅ Managed by Docker
- ✅ Works across platforms
- ✅ Better for production (isolated)

**Cons:**
- ❌ Harder to access from host
- ❌ Requires `docker volume` commands to access
- ❌ Need to create volume first

### Recommendation
**Use bind mounts** for development and when you need easy file access. The entrypoint script handles permission issues automatically.

## DefectDojo Coexistence Analysis

### Potential Conflicts

#### 1. Port Conflicts ⚠️

**DefectDojo typically uses:**
- Port 8000 (web interface)
- Port 8080 (optional)
- Port 80/443 (if using nginx)

**Code Review Training uses:**
- Port 3000 (HTTPS via nginx)
- Port 80 (HTTP redirect)

**Conflict Check:**
- ✅ Port 3000: No conflict (DefectDojo doesn't use it)
- ⚠️ Port 80: **POTENTIAL CONFLICT** if DefectDojo also uses port 80

**Solution:**
If DefectDojo uses port 80, you have two options:

**Option A: Remove HTTP redirect (Recommended)**
```yaml
# In docker-compose.production.yml, comment out port 80:
ports:
  - "0.0.0.0:3000:3000"
  # - "0.0.0.0:80:80"  # Commented out
```

**Option B: Use different port for HTTP redirect**
```yaml
ports:
  - "0.0.0.0:3000:3000"
  - "0.0.0.0:8080:80"  # Use port 8080 for HTTP redirect
```

And update `nginx.conf` to listen on port 8080 for HTTP:
```nginx
server {
    listen 8080;  # Changed from 80
    server_name training.spurams.com;
    return 301 https://$server_name$request_uri;
}
```

#### 2. SSL Certificate Sharing ✅

**Current Setup:**
```yaml
volumes:
  - /home/jamesbond/defectdojo/django-DefectDojo/ssl/nginx.crt:/etc/nginx/ssl/nginx.crt:ro
  - /home/jamesbond/defectdojo/django-DefectDojo/ssl/nginx.key:/etc/nginx/ssl/nginx.key:ro
```

**Is this OK?**
- ✅ **YES** - If using the same domain or wildcard certificate
- ✅ **YES** - Certificates are read-only (`:ro` flag)
- ⚠️ **NO** - If DefectDojo uses a different domain (need separate certs)

**If different domains:**
- DefectDojo: `defectdojo.spurams.com`
- Training: `training.spurams.com`

You'll need separate SSL certificates or a wildcard certificate (`*.spurams.com`).

#### 3. Docker Network Isolation ✅

**No Conflicts:**
- Each docker-compose file creates its own network
- DefectDojo network: `defectdojo_default` (or custom)
- Training network: `code-review-net`
- Networks are isolated - no interference

#### 4. Bind Mount Paths ✅

**No Conflicts:**
- DefectDojo: Uses its own directories
- Training: Uses `./prisma`, `./data`, `./src/data`
- Different paths = no conflicts

### Recommended Configuration for Coexistence

```yaml
# docker-compose.production.yml
services:
  nginx:
    ports:
      - "0.0.0.0:3000:3000"  # HTTPS for training
      # Port 80 removed if DefectDojo uses it
      # Or use port 8080 for HTTP redirect
```

### Checking for Port Conflicts

Before starting, check what ports are in use:

```bash
# Check if port 80 is in use
sudo netstat -tulpn | grep :80
# or
sudo ss -tulpn | grep :80

# Check if port 3000 is in use
sudo netstat -tulpn | grep :3000
# or
sudo ss -tulpn | grep :3000
```

### Summary

| Aspect | Status | Notes |
|--------|--------|-------|
| Port 3000 | ✅ Safe | DefectDojo doesn't use it |
| Port 80 | ⚠️ Check | May conflict if DefectDojo uses it |
| SSL Certs | ✅ OK | If same domain or wildcard |
| Networks | ✅ Isolated | No conflicts |
| Bind Mounts | ✅ Safe | Different directories |
| Container Names | ✅ Safe | Different names |

### Action Items

1. **Check DefectDojo port usage:**
   ```bash
   docker ps | grep defectdojo
   docker inspect <defectdojo_container> | grep -A 10 "Ports"
   ```

2. **If DefectDojo uses port 80:**
   - Remove or change port 80 mapping in training's docker-compose
   - Update nginx.conf HTTP redirect port if needed

3. **If different domains:**
   - Get separate SSL certificates
   - Or use wildcard certificate `*.spurams.com`

4. **Test both services:**
   ```bash
   # Start training
   docker-compose -f docker-compose.production.yml up -d
   
   # Verify DefectDojo still works
   curl -I http://defectdojo.spurams.com
   
   # Verify training works
   curl -I https://training.spurams.com:3000
   ```


