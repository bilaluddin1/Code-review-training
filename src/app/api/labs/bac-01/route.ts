import { NextRequest, NextResponse } from "next/server";
import { NOTES } from "@/lib/labsSandbox";

// Explicit rather than relying on Next's implicit "uses searchParams -> dynamic"
// detection - see /api/leaderboard for the bug caused by trusting that.
export const dynamic = 'force-dynamic';

// LAB-BAC-01 sandbox: "you are alice (note id 101)". No ownership check on read -
// any id reads that note regardless of owner. Bob's and Carol's notes (102,
// 103) prove the bug but aren't the target - only the admin note (not
// adjacent to 101) completes the lab, so finding it takes more than one
// "try the next number" guess. Synthetic data only.
export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id") ?? "101");
  const note = NOTES.find((n) => n.id === id);
  if (!note) return NextResponse.json({ error: "No note with that id" }, { status: 404 });
  const exploited = note.owner !== "alice" && !!note.flagNote;
  return NextResponse.json({
    note,
    hint: "You are logged in as alice. Nothing here checks that note.owner === 'alice'. Reading someone else's note proves the bug - but not every note is the one that matters.",
    ...(exploited ? { flag: "FLAG{f6de2f2645}" } : {}),
  });
}
