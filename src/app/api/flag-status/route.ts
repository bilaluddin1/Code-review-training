import { NextResponse } from 'next/server';
import { prisma } from "@/lib/prisma";
import { loadChallenges } from '@/lib/loadChallenges';

export async function POST(request: Request) {
  try {
    const { name, challengeId } = await request.json();
    if (!name || !challengeId) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const challenges = await loadChallenges();
    const challenge = challenges.find((c) => c.id === challengeId);
    const expectedFlags = challenge?.flags ?? (challenge?.flag ? [challenge.flag] : []);

    if (expectedFlags.length <= 1) {
      const solved = await prisma.flagSubmission.findFirst({
        where: { userName: name, challengeId, correct: true },
      });
      return NextResponse.json({ solved: !!solved });
    }

    // Multi-flag challenge: the submit form should stay visible until EVERY
    // distinct flag has its own correct submission - otherwise solving the
    // first one hides the form before the second can ever be entered.
    const correctSubmissions = await prisma.flagSubmission.findMany({
      where: { userName: name, challengeId, correct: true },
      select: { flag: true },
    });
    const solvedFlags = new Set(correctSubmissions.map((s) => s.flag.trim()));
    const allSolved = expectedFlags.every((f) => solvedFlags.has(f.trim()));
    return NextResponse.json({ solved: allSolved, solvedCount: solvedFlags.size, totalFlags: expectedFlags.length });
  } catch (error) {
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}