import { NextRequest } from 'next/server';
import { getIronSession, SessionOptions } from 'iron-session';

const SESSION_COOKIE = 'admin_session';
const SESSION_SECRET = process.env.ADMIN_SESSION_SECRET || 'complex_password_at_least_32_characters_long';

export const sessionOptions: SessionOptions = {
  cookieName: SESSION_COOKIE,
  password: SESSION_SECRET,
  cookieOptions: {
    maxAge: 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax' as const,
  },
};

type AdminSession = {
  isAdmin?: boolean;
};

export async function isAdminSession(request: NextRequest) {
  try {
    // Get the admin session cookie directly
    const adminSessionCookie = request.cookies.get(SESSION_COOKIE);
    
    if (!adminSessionCookie?.value) {
      console.log('[ADMIN-LOGIN] No admin session cookie found');
      return false;
    }

    // Create a simple cookie handler for iron-session
    const cookies = {
      get: (name: string) => {
        if (name === SESSION_COOKIE) {
          return adminSessionCookie.value;
        }
        return undefined;
      },
      set: () => {}, // No-op for read-only
      delete: () => {}, // No-op for read-only
    };

    const session = await getIronSession<AdminSession>(cookies as any, sessionOptions);
    console.log('[ADMIN-LOGIN] isAdminSession result:', session);
    return !!session.isAdmin;
  } catch (error) {
    console.error('[ADMIN-LOGIN] Error checking admin session:', error);
    return false;
  }
} 