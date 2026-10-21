import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// DELETE /api/admin/leaderboard/[id] - permanently removes one LIVE
// leaderboard entry (a stray/test player an admin wants gone right now,
// without resetting or archiving everyone else). Does not touch
// ChallengeSubmission/FlagSubmission history for that user - only the
// scoreboard row.
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  await prisma.leaderboardUser.delete({ where: { id } });
  return NextResponse.json({ success: true });
}
