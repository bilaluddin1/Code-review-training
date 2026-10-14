import { NextResponse } from "next/server";
import { getEffectiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

// GET /api/feedback-questions - public. The feedback form renders from this
// (wording + order), not the hardcoded defaults directly, so an admin's
// customization is reflected immediately for every dev.
export async function GET() {
  return NextResponse.json({ questions: await getEffectiveFeedbackQuestions() });
}
