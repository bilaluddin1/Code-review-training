import { NextResponse } from "next/server";

// Explicit, so this GET can never get silently cached - see /api/leaderboard
// for the bug this caused elsewhere. Harmless here since the response is
// always identical, but kept consistent with every other route.
export const dynamic = 'force-dynamic';

// DEMO sandbox - not a real vulnerability, just a practice run so a dev's
// first experience with "Go to Lab" is a live request like every other lab,
// not text explaining the answer. Always succeeds and always returns the flag.
export async function GET() {
  return NextResponse.json({
    message: "Nice - you just called a real API from this training platform, the same way you will for every other lab.",
    flag: "FLAG{22609b82f1}",
  });
}
