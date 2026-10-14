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

  const { userName, comments } = body;
  if (typeof userName !== "string" || !userName.trim()) {
    return NextResponse.json({ error: "userName is required" }, { status: 400 });
  }

  // Team comes from the admin-set session setting, never from the client -
  // one name, set once, instead of every dev typing their own.
  const settings = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  if (!settings?.currentTeam) {
    return NextResponse.json({ error: "Your trainer hasn't set a team name for this session yet - ask them to set it before submitting feedback." }, { status: 409 });
  }
  const teamName = settings.currentTeam;

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
      teamName,
      ...ratings,
      comments: typeof comments === "string" && comments.trim() ? comments.trim().slice(0, 2000) : null,
    },
  });

  return NextResponse.json({ success: true });
}
