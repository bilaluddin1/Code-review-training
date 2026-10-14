import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";
import { FEEDBACK_QUESTIONS, type FeedbackQuestionKey } from "@/lib/feedbackQuestions";

const prisma = new PrismaClient();

// GET /api/admin/feedback - every response, most recent first, plus
// per-question averages so the admin panel can show a quick summary without
// recomputing it client-side.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const responses = await prisma.feedbackResponse.findMany({ orderBy: { createdAt: "desc" } });

  const averages = {} as Record<FeedbackQuestionKey, number | null>;
  for (const q of FEEDBACK_QUESTIONS) {
    const sum = responses.reduce((acc, r) => acc + (r[q.key] as number), 0);
    averages[q.key] = responses.length ? Math.round((sum / responses.length) * 10) / 10 : null;
  }

  return NextResponse.json({
    count: responses.length,
    averages,
    responses: responses.map((r) => ({
      userName: r.userName,
      teamName: r.teamName,
      ...Object.fromEntries(FEEDBACK_QUESTIONS.map((q) => [q.key, r[q.key as keyof typeof r]])),
      comments: r.comments,
      createdAt: r.createdAt.toISOString(),
    })),
  });
}
