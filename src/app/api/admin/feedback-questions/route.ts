import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";
import { getActiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

const prisma = new PrismaClient();

// GET /api/admin/feedback-questions - every question, including inactive
// ones, ordered - the full editor list (unlike the public endpoint, which
// only returns active ones).
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  await getActiveFeedbackQuestions(); // ensures the table is seeded at least once
  const questions = await prisma.feedbackQuestion.findMany({ orderBy: { order: "asc" } });
  return NextResponse.json({ questions });
}

// POST /api/admin/feedback-questions { label, followUpLabel } - add a brand
// new rating+follow-up pair, appended to the end of the order, active by
// default. Both the rating question and its open-text follow-up are
// required - a rating with no paired "why" question is exactly the gap
// this redesign closes.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { label, followUpLabel } = await req.json().catch(() => ({ label: "", followUpLabel: "" }));
  if (typeof label !== "string" || !label.trim()) {
    return NextResponse.json({ error: "label is required" }, { status: 400 });
  }
  if (typeof followUpLabel !== "string" || !followUpLabel.trim()) {
    return NextResponse.json({ error: "followUpLabel is required - every rating needs its own open-text question" }, { status: 400 });
  }
  const max = await prisma.feedbackQuestion.aggregate({ _max: { order: true } });
  const question = await prisma.feedbackQuestion.create({
    data: { label: label.trim(), followUpLabel: followUpLabel.trim(), order: (max._max.order ?? -1) + 1, active: true },
  });
  return NextResponse.json({ question });
}
