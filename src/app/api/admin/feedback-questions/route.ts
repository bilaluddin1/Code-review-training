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

// POST /api/admin/feedback-questions { label } - add a brand new question,
// appended to the end of the order, active by default.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { label } = await req.json().catch(() => ({ label: "" }));
  if (typeof label !== "string" || !label.trim()) {
    return NextResponse.json({ error: "label is required" }, { status: 400 });
  }
  const max = await prisma.feedbackQuestion.aggregate({ _max: { order: true } });
  const question = await prisma.feedbackQuestion.create({
    data: { label: label.trim(), order: (max._max.order ?? -1) + 1, active: true },
  });
  return NextResponse.json({ question });
}
