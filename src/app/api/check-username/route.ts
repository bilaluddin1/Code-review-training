import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { validateLoginName } from "@/lib/validateLoginName";

export async function POST(request: Request) {
  try {
    const { username } = await request.json();
    if (!username || typeof username !== 'string') {
      return NextResponse.json({ error: 'Invalid username' }, { status: 400 });
    }

    const check = validateLoginName(username);
    if (!check.ok) {
      return NextResponse.json({
        available: false,
        reserved: check.reason === "reserved",
        error: check.error,
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