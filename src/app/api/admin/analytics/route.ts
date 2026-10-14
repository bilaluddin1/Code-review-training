import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// Explicit, so this GET can never get frozen into a build-time static
// response - see /api/leaderboard for the bug this caused.
export const dynamic = 'force-dynamic';

// GET /api/admin/analytics
// Returns every archived team session (grouped by sessionId), most recent
// first, PLUS the current live leaderboard as a pseudo-session so admin can
// export "right now" data any time, not only at reset.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const [archived, live] = await Promise.all([
    prisma.sessionArchive.findMany({ orderBy: { archivedAt: "desc" } }),
    prisma.leaderboardUser.findMany({ orderBy: { score: "desc" } }),
  ]);

  const bySession = new Map<string, { sessionId: string; teamName: string; archivedAt: string; results: { userName: string; avatar: string; score: number }[] }>();
  for (const row of archived) {
    if (!bySession.has(row.sessionId)) {
      bySession.set(row.sessionId, {
        sessionId: row.sessionId,
        teamName: row.teamName,
        archivedAt: row.archivedAt.toISOString(),
        results: [],
      });
    }
    bySession.get(row.sessionId)!.results.push({ userName: row.userName, avatar: row.avatar, score: row.score });
  }

  return NextResponse.json({
    sessions: Array.from(bySession.values()),
    live: live.map((u) => ({ userName: u.name, avatar: u.avatar, score: u.score })),
  });
}
