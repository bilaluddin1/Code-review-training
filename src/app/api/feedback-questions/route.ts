import { NextResponse } from "next/server";
import { getActiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

// GET /api/feedback-questions - public. The feedback form renders from this
// (id + wording + order) - fully admin-controlled, no hardcoded list.
export async function GET() {
  const questions = await getActiveFeedbackQuestions();
  return NextResponse.json({ questions: questions.map((q) => ({ id: q.id, label: q.label })) });
}
