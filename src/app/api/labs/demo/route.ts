import { NextResponse } from "next/server";

// DEMO sandbox - not a real vulnerability, just a practice run so a dev's
// first experience with "Go to Lab" is a live request like every other lab,
// not text explaining the answer. Always succeeds and always returns the flag.
export async function GET() {
  return NextResponse.json({
    message: "Nice - you just called a real API from this training platform, the same way you will for every other lab.",
    flag: "FLAG{22609b82f1}",
  });
}
