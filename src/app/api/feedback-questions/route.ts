import { NextResponse } from "next/server";
import { getActiveFeedbackQuestions } from "@/lib/effectiveFeedbackQuestions";

// Same static-caching trap as /api/leaderboard: no cookies()/headers() call
// here, so without this the form would keep rendering build-time questions
// forever, ignoring every edit an admin makes afterward.
export const dynamic = 'force-dynamic';

// GET /api/feedback-questions - public. The feedback form renders from this
// (id + wording + order) - fully admin-controlled, no hardcoded list.
export async function GET() {
  const questions = await getActiveFeedbackQuestions();
  return NextResponse.json({ questions: questions.map((q) => ({ id: q.id, label: q.label, followUpLabel: q.followUpLabel })) });
}
