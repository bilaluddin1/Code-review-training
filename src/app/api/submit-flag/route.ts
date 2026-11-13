import { NextRequest, NextResponse } from 'next/server';
import { loadChallenges } from '@/lib/loadChallenges';
import { prisma } from "@/lib/prisma";
export async function POST(req: NextRequest) {
  try {
    const { challengeId, flag, name, flagIndex: rawFlagIndex } = await req.json();
    const flagIndex = typeof rawFlagIndex === 'number' ? rawFlagIndex : 0;
    console.log('Flag submission attempt:', { challengeId, flag: flag ? '***' : 'undefined', name, flagIndex });

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

    // Check if challenge is locked. A challenge with no row yet defaults to
    // LOCKED here, matching the UI's own default (locks[id] !== false) - see
    // the same fix in submit-challenge/route.ts.
    const lock = await prisma.challengeLock.findUnique({ where: { id: challengeId } });
    if (!lock || lock.locked) {
      return NextResponse.json({ success: false, error: 'Challenge is locked' }, { status: 423 });
    }

    const submittedFlag = flag.trim();

    // Each box only accepts ITS OWN flag (expectedFlags[flagIndex]) - not
    // just "any of the challenge's flags". Without this, flag A typed into
    // box B's input was silently accepted as correct for box B, as long as
    // nothing else had already claimed that exact string - so pasting the
    // one flag you found into every box "solved" all of them.
    const expectedForThisBox = expectedFlags[flagIndex];
    const correct = typeof expectedForThisBox === 'string' && expectedForThisBox.trim() === submittedFlag;
    // A real flag from this challenge, just typed into the wrong box - worth
    // telling the player that explicitly (it confirms they found something
    // real) rather than a generic "incorrect", without saying which box it
    // actually belongs to.
    const wrongBox = !correct && expectedFlags.some((f) => f.trim() === submittedFlag);
    console.log('Flag check:', { submitted: submittedFlag, correct, wrongBox });

    if (wrongBox) {
      const user = await prisma.leaderboardUser.findUnique({ where: { name } });
      await prisma.flagSubmission.create({ data: { userName: name, challengeId, flag, correct: false, flagIndex } });
      return NextResponse.json({
        success: true,
        correct: false,
        wrongBox: true,
        error: 'That flag is real, but it belongs to a different box on this challenge - put it in the matching one.',
        score: user?.score ?? 0,
      });
    }

    if (correct) {
      const existing = await prisma.flagSubmission.findFirst({
        where: { userName: name, challengeId, flag: submittedFlag, correct: true },
      });
      if (existing) {
        const user = await prisma.leaderboardUser.findUnique({ where: { name } });
        if (existing.flagIndex === flagIndex) {
          // Same box, same flag as before - a harmless re-submit.
          return NextResponse.json({ success: true, correct: true, alreadySolved: true, score: user?.score ?? 0 });
        }
        // A DIFFERENT box already got credit for this exact flag string. A
        // multi-flag challenge needs one genuinely different flag per box -
        // pasting the one you found into every box must not "solve" them
        // all. Reject this box without touching the credit the other box
        // already earned.
        return NextResponse.json({
          success: true,
          correct: false,
          duplicateFlag: true,
          error: 'This flag was already credited to another box on this challenge - find the other, different flag.',
          score: user?.score ?? 0,
        });
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
          flagIndex,
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