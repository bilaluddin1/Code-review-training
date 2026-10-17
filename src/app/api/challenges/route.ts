import { NextResponse } from 'next/server';
import { loadChallenges } from '@/lib/loadChallenges';

// Same static-caching trap as /api/leaderboard: no cookies()/headers() call
// here, so without this an admin's edits to challenges.json (new labs,
// unlock changes to content) could get frozen at build time.
export const dynamic = 'force-dynamic';

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
      // How many DISTINCT flags this challenge needs - just a count, never
      // the flag values themselves, so the UI can render one submission box
      // per flag instead of forcing everything into a single input (which
      // only works for a one-flag challenge).
      flagCount: c.flags?.length ?? (c.flag ? 1 : 0),
    }));
    return NextResponse.json(safe);
  } catch (error) {
    console.error('Error in GET /api/challenges:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
