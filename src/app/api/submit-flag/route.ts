import { NextRequest, NextResponse } from 'next/server';
import { challenges } from '@/data/challenges';
import { PrismaClient } from '@/generated/prisma'

const prisma = new PrismaClient()

export async function POST(req: NextRequest) {
  try {
    const { challengeId, flag, name } = await req.json();
    console.log('Flag submission attempt:', { challengeId, flag: flag ? '***' : 'undefined', name });

    if (!challengeId || !flag || !name) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // Find the challenge
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) {
      return NextResponse.json({ success: false, error: 'Challenge not found' }, { status: 404 });
    }

    // Check if challenge has a flag property (for challenges created via admin panel)
    let expectedFlag = challenge.flag;

    // If no flag in challenge object, try environment variable
    if (!expectedFlag) {
      const envVarName = `FLAG_${challengeId}`;
      expectedFlag = process.env[envVarName];
      console.log('Looking for flag in env var:', envVarName, 'Found:', expectedFlag ? 'yes' : 'no');
    }

    if (!expectedFlag) {
      return NextResponse.json({
        success: false,
        error: `Flag for challenge ${challengeId} not found. Please set FLAG_${challengeId} environment variable or add flag to challenge.`
      }, { status: 500 });
    }

    // Check if challenge is locked
    const lock = await prisma.challengeLock.findUnique({ where: { id: challengeId } });
    if (lock && lock.locked) {
      return NextResponse.json({ success: false, error: 'Challenge is locked' }, { status: 423 });
    }

    // Check if user already solved this flag
    const existing = await prisma.flagSubmission.findFirst({
      where: { userName: name, challengeId, correct: true },
    });
    if (existing) {
      // Already solved
      const user = await prisma.leaderboardUser.findUnique({ where: { name } });
      return NextResponse.json({ success: true, correct: true, alreadySolved: true, score: user?.score ?? 0 });
    }

    // Check flag
    const correct = flag.trim() === expectedFlag.trim();
    console.log('Flag check:', { submitted: flag.trim(), expected: expectedFlag.trim(), correct });

    let score = 0;
    if (correct) {
      // Award 5 points and mark as solved
      await prisma.flagSubmission.create({
        data: {
          userName: name,
          challengeId,
          flag,
          correct: true,
        },
      });
      const user = await prisma.leaderboardUser.upsert({
        where: { name },
        update: { score: { increment: 5 } },
        create: { name, score: 5, avatar: "" },
      });
      score = user.score;
    } else {
      // Incorrect flag, record attempt
      await prisma.flagSubmission.create({
        data: {
          userName: name,
          challengeId,
          flag,
          correct: false,
        },
      });
      const user = await prisma.leaderboardUser.findUnique({ where: { name } });
      score = user?.score ?? 0;
    }

    return NextResponse.json({ success: true, correct, alreadySolved: false, score });
  } catch (error) {
    console.error('Error in flag submission:', error);
    return NextResponse.json({ success: false, error: 'Internal server error' }, { status: 500 });
  }
} 