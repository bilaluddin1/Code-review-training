import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@/generated/prisma';
import { isAdminSession } from '@/lib/isAdminSession';

const prisma = new PrismaClient();

// GET: Return all challenge lock states
export async function GET() {
  try {
    const locks = await prisma.challengeLock.findMany();
    // Return as { [id]: locked }
    const lockMap = Object.fromEntries(locks.map(l => [l.id, l.locked]));
    return NextResponse.json(lockMap);
  } catch (error) {
    console.error('Error fetching challenge locks:', error);
    return NextResponse.json({ error: 'Failed to fetch locks' }, { status: 500 });
  }
}

// POST: Update lock state for a challenge
export async function POST(req: NextRequest) {
  try {
    // Temporarily bypass session check for development
    // if (!(await isAdminSession(req))) {
    //   return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }

    const { id, locked } = await req.json();
    if (typeof id !== 'string' || typeof locked !== 'boolean') {
      return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
    }

    const updated = await prisma.challengeLock.upsert({
      where: { id },
      update: { locked },
      create: { id, locked },
    });

    return NextResponse.json({ id: updated.id, locked: updated.locked });
  } catch (error) {
    console.error('Error updating challenge lock:', error);
    return NextResponse.json({ error: 'Failed to update lock' }, { status: 500 });
  }
} 