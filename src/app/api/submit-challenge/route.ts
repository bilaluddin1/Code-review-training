import { NextRequest, NextResponse } from 'next/server';
import { loadChallenges } from '@/lib/loadChallenges';
import { prisma } from "@/lib/prisma";

export async function POST(req: NextRequest) {
  const { name, avatar, challengeId, selectedLines } = await req.json();
  if (
    typeof name !== 'string' ||
    typeof avatar !== 'string' ||
    typeof challengeId !== 'string' ||
    !Array.isArray(selectedLines) ||
    !selectedLines.every((n) => typeof n === 'number')
  ) {
    return NextResponse.json({ error: 'Invalid payload' }, { status: 400 });
  }

  // Load challenges and find the challenge
  const challenges = await loadChallenges();
  const challenge = challenges.find((c) => c.id === challengeId);
  if (!challenge) {
    return NextResponse.json({ error: 'Challenge not found' }, { status: 404 });
  }

  // Check if challenge is locked
  const lock = await prisma.challengeLock.findUnique({ where: { id: challengeId } });
  if (lock && lock.locked) {
    return NextResponse.json({ error: 'Challenge is locked' }, { status: 423 });
  }

  // No cap on how many lines a dev can select - maxSelectableLines is no
  // longer enforced (devs can mark as many candidate lines as they want);
  // per-line feedback is still withheld on an incorrect submission so this
  // can't be used to find the answer by selecting everything.

  // Validate the answer: all and only vulnerable lines must be selected
  const vulnerableLines = challenge.vulnerableLines;
  const selectedSet = new Set(selectedLines);
  const vulnerableSet = new Set(vulnerableLines);
  const allCorrect =
    selectedLines.length === vulnerableLines.length &&
    selectedLines.every((line) => vulnerableSet.has(line));

  // Per-line feedback (only for selected lines)
  const feedback = selectedLines.map((line) => {
    if (vulnerableSet.has(line)) return { line, status: 'correct' };
    return { line, status: 'incorrect' };
  });
  // (No missed lines in feedback)

  // Check if user already solved this challenge correctly
  if (allCorrect) {
    const alreadySolved = await prisma.challengeSubmission.findFirst({
      where: {
        userName: name,
        challengeId,
        correct: true,
      },
    });
    if (alreadySolved) {
      return NextResponse.json({ error: 'Challenge already solved', alreadySolved: true }, { status: 403 });
    }
  }

  // Count attempts for this user/challenge
  const attempts = await prisma.challengeSubmission.count({
    where: { userName: name, challengeId },
  });
  const maxAttempts = 3;
  const attemptsRemaining = Math.max(0, maxAttempts - attempts);

  if (attempts >= maxAttempts) {
    return NextResponse.json({
      error: 'No attempts remaining',
      attemptsUsed: attempts,
      attemptsRemaining: 0,
    }, { status: 403 });
  }

  // Store the submission (store selectedLines as JSON)
  await prisma.challengeSubmission.create({
    data: {
      userName: name,
      challengeId,
      selectedLines: JSON.stringify(selectedLines),
      correct: allCorrect,
    },
  });

  // Re-count attempts after the new submission
  const attemptsAfter = await prisma.challengeSubmission.count({
    where: { userName: name, challengeId },
  });

  // Update the leaderboard score if correct
  let user;
  if (allCorrect) {
    // +1 for correct
    user = await prisma.leaderboardUser.upsert({
      where: { name },
      update: { score: { increment: 1 }, avatar },
      create: { name, avatar, score: 1 },
    });
  } else {
    // No penalty for incorrect answers; just return the current score
    user = await prisma.leaderboardUser.findUnique({ where: { name } });
    // If user doesn't exist yet, create with score 0
    if (!user) {
      user = await prisma.leaderboardUser.create({ data: { name, avatar, score: 0 } });
    }
  }

  // Reveal the answer key only once the attempt is resolved: the player
  // either solved it, or has no attempts left. Otherwise the answers stay
  // server-side so they can't be read ahead of time.
  const resolved = allCorrect || attemptsAfter >= maxAttempts;

  return NextResponse.json({
    correct: allCorrect,
    score: user.score,
    attemptsUsed: attemptsAfter,
    attemptsRemaining: Math.max(0, maxAttempts - attemptsAfter),
    feedback,
    ...(resolved
      ? { vulnerableLines: challenge.vulnerableLines, explanations: challenge.explanations }
      : {}),
  });
} 