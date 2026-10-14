import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";
import { FEEDBACK_QUESTIONS } from "@/lib/feedbackQuestions";

const prisma = new PrismaClient();

// POST /api/admin/feedback-questions { questions: [{key,label}] } - admin only.
// Lets the admin rename wording and reorder the 13 questions. The set of
// keys is fixed (each maps to a real database column), so this rejects
// anything that isn't exactly a relabeled/reordered copy of the same keys -
// adding or removing questions needs a schema change, not just this endpoint.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { questions } = await req.json().catch(() => ({ questions: null }));
  if (!Array.isArray(questions)) {
    return NextResponse.json({ error: "questions must be an array" }, { status: 400 });
  }

  const knownKeys = FEEDBACK_QUESTIONS.map((q) => q.key);
  const sentKeys = questions.map((q) => q?.key);
  const sameSet = knownKeys.length === sentKeys.length && knownKeys.every((k) => sentKeys.includes(k));
  if (!sameSet) {
    return NextResponse.json({ error: "Must include exactly the existing question keys, reordered/relabeled - adding or removing questions isn't supported here" }, { status: 400 });
  }
  for (const q of questions) {
    if (typeof q.label !== "string" || !q.label.trim()) {
      return NextResponse.json({ error: `${q.key} needs a non-empty label` }, { status: 400 });
    }
  }

  const cleaned = questions.map((q) => ({ key: q.key, label: q.label.trim() }));
  const row = await prisma.feedbackToggle.upsert({
    where: { id: 1 },
    update: { questionsJson: JSON.stringify(cleaned) },
    create: { id: 1, enabled: false, questionsJson: JSON.stringify(cleaned) },
  });
  return NextResponse.json({ questions: JSON.parse(row.questionsJson!) });
}
