import { NextRequest, NextResponse } from "next/server";

// Explicit, so this GET can never get silently cached - see /api/leaderboard
// for the bug this caused elsewhere.
export const dynamic = 'force-dynamic';

// DEMO sandbox - not a real vulnerability, just a practice run so a dev's
// first experience with "Go to Lab" is a live request-and-response loop like
// every other lab, not text explaining the answer. Mirrors the exact shape
// every real lab uses: a field whose DEFAULT value gets a "nothing to see
// here" response and hint, while CHANGING it gets a different response and
// the flag - same mechanic as bac-01's note id, just with no real bug behind
// it, so there's nothing here to actually exploit.
export async function GET(req: NextRequest) {
  const visitor = (req.nextUrl.searchParams.get("visitor") ?? "guest").trim();
  const changed = visitor.toLowerCase() !== "guest" && visitor !== "";

  if (!changed) {
    return NextResponse.json({
      message: `Hello, ${visitor || "guest"}. This is the default value - nothing happens yet.`,
      hint: "Change the 'Visitor name' field to anything else and send the request again.",
    });
  }

  return NextResponse.json({
    message: `Hello, ${visitor}! You changed the input and got a different response back.`,
    hint: "That's the whole idea behind every lab here: change what you send, read the response, look for what it reveals.",
    flag: "FLAG{22609b82f1}",
  });
}
