import { NextResponse } from 'next/server';
import { loadChallenges } from '@/lib/loadChallenges';

// Public endpoint used by the player UI.
// It MUST NOT expose the answer key. vulnerableLines, explanations and flag
// are removed here; the server reveals them (via /api/submit-challenge) only
// once a player has solved the lab or run out of attempts.
export async function GET() {
  try {
    const challenges = await loadChallenges();
    const safe = challenges.map((c) => ({
      id: c.id,
      title: c.title,
      description: c.description,
      code: c.code,
      difficulty: c.difficulty,
      hints: c.hints,
      labUrl: c.labUrl,
      maxSelectableLines: c.maxSelectableLines,
    }));
    return NextResponse.json(safe);
  } catch (error) {
    console.error('Error in GET /api/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
