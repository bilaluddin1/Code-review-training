/**
 * Dynamically determine the Socket.IO server URL based on how the page is accessed.
 * 
 * The socket server always runs on port 4001. This function uses the same
 * hostname/IP that the user typed in their browser, but points to port 4001.
 * 
 * - localhost:3000 → localhost:4001
 * - 172.190.116.41:3000 → 172.190.116.41:4001
 * - any-domain.com:3000 → any-domain.com:4001
 */
export function getSocketUrl(): string {
    // Server-side rendering - return a default
    if (typeof window === 'undefined') {
        return 'http://localhost:4001';
    }

    const { hostname } = window.location;

    // If accessing from localhost/dev mode, assume direct access to ports
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        return 'http://localhost:4001';
    }

    // For remote access (VM), use the same origin (Nginx will proxy)
    return window.location.origin;
}
