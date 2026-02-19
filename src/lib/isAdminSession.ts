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
    // Set secure to false because we are often running on HTTP (localhost)
    secure: false,
    sameSite: 'lax' as const,
  },
};

type AdminSession = {
  isAdmin?: boolean;
};

export async function isAdminSession(request: NextRequest) {
  try {
    // Check if session exists using the same logic as admin-login
    const session = await getIronSession<AdminSession>(request.cookies as any, sessionOptions);
    console.log('[ADMIN-SESSION] Check result:', session);
    return !!session.isAdmin;
  } catch (error) {
    console.error('[ADMIN-SESSION] Error checking session:', error);
    return false;
  }
} 