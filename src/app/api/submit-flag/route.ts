import { NextRequest, NextResponse } from 'next/server';
import { loadChallenges } from '@/lib/loadChallenges';
import { prisma } from "@/lib/prisma";
export async function POST(req: NextRequest) {
  try {
    const { challengeId, flag, name } = await req.json();
    console.log('Flag submission attempt:', { challengeId, flag: flag ? '***' : 'undefined', name });

    if (!challengeId || !flag || !name) {
      return NextResponse.json({ success: false, error: 'Missing fields' }, { status: 400 });
    }

    // Load challenges and find the challenge
    const challenges = await loadChallenges();
    const challenge = challenges.find(c => c.id === challengeId);
    if (!challenge) {
      return NextResponse.json({ success: false, error: 'Challenge not found' }, { status: 404 });
    }

    // Support either a single `flag` or multiple independently-solvable
    // `flags` (e.g. a lab with two separate bugs, each with its own flag).
    let expectedFlags: string[] = challenge.flags ?? (challenge.flag ? [challenge.flag] : []);

    // If no flag in challenge object, try environment variable
    if (expectedFlags.length === 0) {
      const envVarName = `FLAG_${challengeId}`;
      const envFlag = process.env[envVarName];
      if (envFlag) expectedFlags = [envFlag];
      console.log('Looking for flag in env var:', envVarName, 'Found:', envFlag ? 'yes' : 'no');
    }

    if (expectedFlags.length === 0) {
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

    const submittedFlag = flag.trim();

    // Check the flag FIRST so "already solved" is scoped to this exact
    // flag string - a multi-flag lab's two flags are solved (and tracked)
    // independently, so finding one doesn't block submitting the other.
    const correct = expectedFlags.some((f) => f.trim() === submittedFlag);
    console.log('Flag check:', { submitted: submittedFlag, correct });

    if (correct) {
      const existing = await prisma.flagSubmission.findFirst({
        where: { userName: name, challengeId, flag: submittedFlag, correct: true },
      });
      if (existing) {
        const user = await prisma.leaderboardUser.findUnique({ where: { name } });
        return NextResponse.json({ success: true, correct: true, alreadySolved: true, score: user?.score ?? 0 });
      }
    }

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