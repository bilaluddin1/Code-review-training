import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";
import { randomUUID } from "crypto";

const prisma = new PrismaClient();

// POST /api/admin/archive-session { teamName }
// Snapshots the CURRENT leaderboard into SessionArchive, tagged with a team
// name and a shared sessionId, WITHOUT touching the live leaderboard. Call
// this before /api/admin-reset so a team's results survive the next team's
// reset. Safe to call more than once - it's additive, never destructive.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { teamName } = await req.json().catch(() => ({ teamName: "" }));
  if (!teamName || typeof teamName !== "string" || !teamName.trim()) {
    return NextResponse.json({ error: "teamName is required" }, { status: 400 });
  }

  const users = await prisma.leaderboardUser.findMany({ orderBy: { score: "desc" } });
  if (users.length === 0) {
    return NextResponse.json({ archived: 0, message: "Leaderboard is already empty - nothing to archive." });
  }

  const sessionId = randomUUID();
  await prisma.sessionArchive.createMany({
    data: users.map((u) => ({
      sessionId,
      teamName: teamName.trim(),
      userName: u.name,
      avatar: u.avatar,
      score: u.score,
    })),
  });

  return NextResponse.json({ archived: users.length, sessionId, teamName: teamName.trim() });
}
