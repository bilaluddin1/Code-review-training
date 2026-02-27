/**
 * Dynamically determine the Socket.IO server URL based on how the page is accessed.
 *
 * Two deployment modes are supported:
 *
 * 1. DIRECT mode (docker-compose.yml — no Nginx):
 *    - Port 4001 is exposed directly to the host
 *    - Browser connects to hostname:4001
 *
 * 2. PROXY mode (docker-compose.production.yml — with Nginx):
 *    - Only port 3000 is exposed (via Nginx)
 *    - Nginx proxies /socket.io/ requests to internal port 4001
 *    - Browser connects to hostname:3000 (same origin)
 *
 * Toggle the USE_NGINX_PROXY flag below based on which docker-compose file you use.
 */

// ========================================================
// SET THIS TO true  WHEN USING docker-compose.production.yml (with Nginx)
// SET THIS TO false WHEN USING docker-compose.yml (without Nginx)
// ========================================================
const USE_NGINX_PROXY = false;

export function getSocketUrl(): string {
    // Server-side rendering - return a default
    if (typeof window === 'undefined') {
        return 'http://localhost:4001';
    }

    const { protocol, hostname } = window.location;

    // Localhost always connects directly to port 4001
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return `${protocol}//${hostname}:4001`;
    }

    if (USE_NGINX_PROXY) {
        // Nginx mode: connect to same origin, Nginx will proxy /socket.io/ → port 4001
        return window.location.origin;
    } else {
        // Direct mode: connect to port 4001 directly
        return `${protocol}//${hostname}:4001`;
    }
}
