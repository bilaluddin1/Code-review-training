import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { getActiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";
import { prisma } from "@/lib/prisma";

// Explicit, so this GET can never get frozen into a build-time static
// response - see /api/leaderboard for the bug this caused.
export const dynamic = 'force-dynamic';

// GET /api/admin/feedback-questions - every question, including inactive
// ones, ordered - the full editor list (unlike the public endpoint, which
// only returns active ones).
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await getActiveFeedbackQuestions(); // ensures the table is seeded at least once
  const questions = await prisma.feedbackQuestion.findMany({ orderBy: { order: "asc" } });
  // `options` is stored as a JSON string (see schema) - the editor UI needs
  // the parsed array, same as the public endpoint already gives it.
  return NextResponse.json({
    questions: questions.map((q) => ({
      ...q,
      options: q.questionType === "choice" && q.options ? (JSON.parse(q.options) as string[]) : undefined,
    })),
  });
}

// POST /api/admin/feedback-questions { label, followUpLabel } - add a brand
// new rating+follow-up pair, appended to the end of the order, active by
// default. Both the rating question and its open-text follow-up are
// required - a rating with no paired "why" question is exactly the gap
// this redesign closes.
// POST /api/admin/feedback-questions { label, questionType?, followUpLabel?, options? }
// questionType "rating" (default): label + followUpLabel required, as before.
// questionType "choice": label + at least 2 non-empty options required instead -
// the dev picks one option rather than rating 1-5.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const { label, followUpLabel, questionType, options } = body as {
    label?: string; followUpLabel?: string; questionType?: string; options?: unknown;
  };
  if (typeof label !== "string" || !label.trim()) {
    return NextResponse.json({ error: "label is required" }, { status: 400 });
  }
  const max = await prisma.feedbackQuestion.aggregate({ _max: { order: true } });
  const order = (max._max.order ?? -1) + 1;

  if (questionType === "choice") {
    const cleanOptions = Array.isArray(options)
      ? (options as unknown[]).filter((o): o is string => typeof o === "string").map((o) => o.trim()).filter(Boolean)
      : [];
    if (cleanOptions.length < 2) {
      return NextResponse.json({ error: "A choice question needs at least 2 options" }, { status: 400 });
    }
    const question = await prisma.feedbackQuestion.create({
      data: { label: label.trim(), followUpLabel: null, questionType: "choice", options: JSON.stringify(cleanOptions), order, active: true },
    });
    return NextResponse.json({ question });
  }

  if (typeof followUpLabel !== "string" || !followUpLabel.trim()) {
    return NextResponse.json({ error: "followUpLabel is required - every rating needs its own open-text question" }, { status: 400 });
  }
  const question = await prisma.feedbackQuestion.create({
    data: { label: label.trim(), followUpLabel: followUpLabel.trim(), questionType: "rating", order, active: true },
  });
  return NextResponse.json({ question });
}
