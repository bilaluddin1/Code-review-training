import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

// GET /api/admin/feedback-archive - every ARCHIVED feedback response
// (archivedSessionId set by /api/admin/archive-session), grouped by that
// sessionId into one "past feedback session" per team archive, newest
// first. Mirrors /api/admin/analytics' "sessions" grouping for the
// leaderboard, so the two "Past sessions" lists line up side by side.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const [responses, liveQuestions] = await Promise.all([
    prisma.feedbackResponse.findMany({
      where: { archivedSessionId: { not: null } },
      orderBy: { archivedAt: "desc" },
      include: { answers: true },
    }),
    prisma.feedbackQuestion.findMany({ orderBy: { order: "asc" } }),
  ]);

  const liveOrder = new Map(liveQuestions.map((q, i) => [q.id, i]));
  const seen = new Map<string, { questionId: string; label: string; followUpLabel: string; firstSeenOrder: number }>();
  let fallbackOrder = liveQuestions.length;
  for (const r of responses) {
    for (const a of r.answers) {
      if (!seen.has(a.questionId)) {
        seen.set(a.questionId, {
          questionId: a.questionId,
          label: a.labelSnapshot,
          followUpLabel: a.followUpLabelSnapshot,
          firstSeenOrder: liveOrder.get(a.questionId) ?? fallbackOrder++,
        });
      }
    }
  }
  const columns = Array.from(seen.values()).sort((a, b) => a.firstSeenOrder - b.firstSeenOrder);

  const bySession = new Map<string, typeof responses>();
  for (const r of responses) {
    const key = r.archivedSessionId as string;
    if (!bySession.has(key)) bySession.set(key, []);
    bySession.get(key)!.push(r);
  }

  const sessions = Array.from(bySession.entries())
    .map(([sessionId, rs]) => ({
      sessionId,
      teamName: rs[0].teamName ?? "",
      archivedAt: rs[0].archivedAt!.toISOString(),
      responses: rs.map((r) => ({
        id: r.id,
        userName: r.userName,
        teamName: r.teamName,
        comments: r.comments,
        createdAt: r.createdAt.toISOString(),
        answers: r.answers.map((a) => ({
          questionId: a.questionId,
          label: a.labelSnapshot,
          rating: a.rating,
          followUpLabel: a.followUpLabelSnapshot,
          followUpText: a.followUpText,
        })),
      })),
    }))
    .sort((a, b) => new Date(b.archivedAt).getTime() - new Date(a.archivedAt).getTime());

  return NextResponse.json({
    count: responses.length,
    columns: columns.map((c) => ({ questionId: c.questionId, label: c.label, followUpLabel: c.followUpLabel })),
    sessions,
  });
}
