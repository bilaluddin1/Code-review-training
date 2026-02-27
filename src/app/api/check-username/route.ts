import { NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

// Reserved usernames that cannot be used by regular participants
const RESERVED_USERNAMES = ['admin', 'administrator', 'root', 'system', 'moderator'];

export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    if (!username || typeof username !== 'string') {
      return NextResponse.json({ error: 'Invalid username' }, { status: 400 });
    }

    // Block reserved usernames
    if (RESERVED_USERNAMES.includes(username.toLowerCase().trim())) {
      return NextResponse.json({
        available: false,
        reserved: true,
        error: `"${username}" is a reserved name and cannot be used.`
      });
    }

    const user = await prisma.leaderboardUser.findUnique({
      where: { name: username },
    });
    return NextResponse.json({ available: !user });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}