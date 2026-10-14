import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";

const prisma = new PrismaClient();

// GET /api/admin/feedback - every response with its answers, most recent
// first, plus per-question averages. Entirely driven by what's actually in
// FeedbackAnswer (via each answer's own labelSnapshot) - never depends on
// the live FeedbackQuestion list, so renaming or deactivating a question
// never changes historical reports. Columns are ordered using the live
// question order when available (a deleted question can't happen while it
// has answers - see the DELETE guard), so the CSV reads naturally.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const [responses, liveQuestions] = await Promise.all([
    prisma.feedbackResponse.findMany({
      orderBy: { createdAt: "desc" },
      include: { answers: true },
    }),
    prisma.feedbackQuestion.findMany({ orderBy: { order: "asc" } }),
  ]);

  const liveOrder = new Map(liveQuestions.map((q, i) => [q.id, i]));
  const seen = new Map<string, { questionId: string; label: string; firstSeenOrder: number }>();
  let fallbackOrder = liveQuestions.length;
  for (const r of responses) {
    for (const a of r.answers) {
      if (!seen.has(a.questionId)) {
        seen.set(a.questionId, {
          questionId: a.questionId,
          label: a.labelSnapshot,
          firstSeenOrder: liveOrder.get(a.questionId) ?? fallbackOrder++,
        });
      }
    }
  }
  const columns = Array.from(seen.values()).sort((a, b) => a.firstSeenOrder - b.firstSeenOrder);

  const averages = columns.map((col) => {
    const ratings = responses.flatMap((r) => r.answers.filter((a) => a.questionId === col.questionId).map((a) => a.rating));
    const avg = ratings.length ? Math.round((ratings.reduce((s, v) => s + v, 0) / ratings.length) * 10) / 10 : null;
    return { questionId: col.questionId, label: col.label, average: avg, count: ratings.length };
  });

  return NextResponse.json({
    count: responses.length,
    columns: columns.map((c) => ({ questionId: c.questionId, label: c.label })),
    averages,
    responses: responses.map((r) => ({
      userName: r.userName,
      teamName: r.teamName,
      comments: r.comments,
      createdAt: r.createdAt.toISOString(),
      answers: r.answers.map((a) => ({ questionId: a.questionId, label: a.labelSnapshot, rating: a.rating })),
    })),
  });
}
