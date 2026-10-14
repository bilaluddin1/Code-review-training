import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";
import { type FeedbackQuestionKey } from "@/lib/feedbackQuestions";
import { getEffectiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

const prisma = new PrismaClient();

// GET /api/admin/feedback - every response, most recent first, plus
// per-question averages so the admin panel can show a quick summary without
// recomputing it client-side. Labels reflect any admin customization.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const [responses, questions] = await Promise.all([
    prisma.feedbackResponse.findMany({ orderBy: { createdAt: "desc" } }),
    getEffectiveFeedbackQuestions(),
  ]);

  const averages = {} as Record<FeedbackQuestionKey, number | null>;
  for (const q of questions) {
    const sum = responses.reduce((acc, r) => acc + (r[q.key] as number), 0);
    averages[q.key] = responses.length ? Math.round((sum / responses.length) * 10) / 10 : null;
  }

  return NextResponse.json({
    count: responses.length,
    questions,
    averages,
    responses: responses.map((r) => ({
      userName: r.userName,
      teamName: r.teamName,
      ...Object.fromEntries(questions.map((q) => [q.key, r[q.key as keyof typeof r]])),
      comments: r.comments,
      createdAt: r.createdAt.toISOString(),
    })),
  });
}
