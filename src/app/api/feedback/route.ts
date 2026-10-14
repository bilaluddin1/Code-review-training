import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { FEEDBACK_QUESTIONS, type FeedbackQuestionKey } from "@/lib/feedbackQuestions";

const prisma = new PrismaClient();

// POST /api/feedback - public, submitted by devs themselves. Not gated
// behind finishing every lab; the button is available any time (once an
// admin has turned it on).
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const { userName, teamName, comments } = body;
  if (typeof userName !== "string" || !userName.trim()) {
    return NextResponse.json({ error: "userName is required" }, { status: 400 });
  }
  if (typeof teamName !== "string" || !teamName.trim()) {
    return NextResponse.json({ error: "teamName is required" }, { status: 400 });
  }

  const ratings = {} as Record<FeedbackQuestionKey, number>;
  for (const q of FEEDBACK_QUESTIONS) {
    const val = body[q.key];
    if (typeof val !== "number" || val < 1 || val > 5) {
      return NextResponse.json({ error: `${q.key} must be a rating from 1 to 5` }, { status: 400 });
    }
    ratings[q.key] = val;
  }

  await prisma.feedbackResponse.create({
    data: {
      userName: userName.trim(),
      teamName: teamName.trim(),
      ...ratings,
      comments: typeof comments === "string" && comments.trim() ? comments.trim().slice(0, 2000) : null,
    },
  });

  return NextResponse.json({ success: true });
}
