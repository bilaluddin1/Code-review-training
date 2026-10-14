/**
 * Dynamically determine the Socket.IO server URL based on how the page is
 * being accessed - no manual toggle to remember before building the image.
 *
 * - localhost / 127.0.0.1 (local dev, docker-compose.yml): port 4001 is
 *   exposed directly, so connect straight to it.
 * - Anything else (a real deployment): assumed to be behind nginx
 *   (docker-compose.production.yml), which proxies /socket.io/ on the SAME
 *   origin/port the page was loaded on - port 4001 isn't reachable from
 *   outside in that setup at all, so trying it (the previous hardcoded
 *   USE_NGINX_PROXY=false default) just hung and showed
 *   "Socket.IO not connected" with no way to fix it short of a rebuild.
 */
export function getSocketUrl(): string {
  // Server-side rendering - return a default
  if (typeof window === 'undefined') {
    return 'http://localhost:4001';
  }

  const { protocol, hostname } = window.location;

  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return `${protocol}//${hostname}:4001`;
  }

  // Real deployment: same-origin, let nginx proxy /socket.io/ to port 4001 internally.
  return window.location.origin;
}
