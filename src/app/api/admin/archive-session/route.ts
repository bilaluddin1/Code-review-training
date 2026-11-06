import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { randomUUID } from "crypto";
import { prisma } from "@/lib/prisma";

// POST /api/admin/archive-session { teamName? }
// Snapshots the CURRENT leaderboard into SessionArchive AND the current
// live feedback (FeedbackResponse rows with no archivedSessionId yet) under
// the same sessionId - WITHOUT touching the live leaderboard or deleting
// any feedback. Call this before /api/admin-reset so results and feedback
// survive a reset. Safe to call more than once - it's additive, never
// destructive. Each row is tagged with its OWN LeaderboardUser.teamName
// (set at that person's login) when present; teamName in the body is only
// a fallback label for rows from before per-user teams existed.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { teamName } = await req.json().catch(() => ({ teamName: "" }));
  const fallbackTeamName = typeof teamName === "string" ? teamName.trim() : "";

  const [users, liveFeedback] = await Promise.all([
    prisma.leaderboardUser.findMany({ orderBy: { score: "desc" } }),
    prisma.feedbackResponse.findMany({ where: { archivedSessionId: null }, select: { id: true } }),
  ]);

  if (users.length === 0 && liveFeedback.length === 0) {
    return NextResponse.json({ archived: 0, feedbackArchived: 0, message: "Nothing live to archive." });
  }

  const sessionId = randomUUID();
  if (users.length > 0) {
    await prisma.sessionArchive.createMany({
      data: users.map((u) => ({
        sessionId,
        teamName: u.teamName || fallbackTeamName || "Unassigned",
        userName: u.name,
        avatar: u.avatar,
        score: u.score,
      })),
    });
  }
  if (liveFeedback.length > 0) {
    await prisma.feedbackResponse.updateMany({
      where: { id: { in: liveFeedback.map((f) => f.id) } },
      data: { archivedSessionId: sessionId, archivedAt: new Date() },
    });
  }

  return NextResponse.json({ archived: users.length, feedbackArchived: liveFeedback.length, sessionId });
}
