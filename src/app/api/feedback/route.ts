import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { getActiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

const prisma = new PrismaClient();

// POST /api/feedback { userName, comments?, answers: [{questionId, rating}] }
// Public, submitted by devs themselves. Every currently-active question
// must be answered (1-5); team is never taken from the client - it's
// derived server-side from the admin-set session setting.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const { userName, comments, answers } = body;
  if (typeof userName !== "string" || !userName.trim()) {
    return NextResponse.json({ error: "userName is required" }, { status: 400 });
  }
  if (!Array.isArray(answers)) {
    return NextResponse.json({ error: "answers must be an array" }, { status: 400 });
  }

  const settings = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  if (!settings?.currentTeam) {
    return NextResponse.json({ error: "Your trainer hasn't set a team name for this session yet - ask them to set it before submitting feedback." }, { status: 409 });
  }

  const activeQuestions = await getActiveFeedbackQuestions();
  const byId = new Map(activeQuestions.map((q) => [q.id, q.label]));
  const answered = new Map<string, number>();
  for (const a of answers) {
    if (typeof a?.questionId !== "string" || typeof a?.rating !== "number" || a.rating < 1 || a.rating > 5) {
      return NextResponse.json({ error: "Each answer needs a questionId and a rating from 1 to 5" }, { status: 400 });
    }
    answered.set(a.questionId, a.rating);
  }
  const missing = activeQuestions.filter((q) => !answered.has(q.id));
  if (missing.length > 0) {
    return NextResponse.json({ error: `Missing answers for: ${missing.map((q) => q.label).join(", ")}` }, { status: 400 });
  }

  await prisma.feedbackResponse.create({
    data: {
      userName: userName.trim(),
      teamName: settings.currentTeam,
      comments: typeof comments === "string" && comments.trim() ? comments.trim().slice(0, 2000) : null,
      answers: {
        create: Array.from(answered.entries())
          .filter(([questionId]) => byId.has(questionId)) // ignore stray/unknown ids rather than rejecting the whole submission
          .map(([questionId, rating]) => ({ questionId, labelSnapshot: byId.get(questionId)!, rating })),
      },
    },
  });

  return NextResponse.json({ success: true });
}
