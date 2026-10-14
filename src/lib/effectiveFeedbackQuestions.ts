import { PrismaClient } from "@/generated/prisma";
import { FEEDBACK_QUESTIONS, type EffectiveQuestion } from "@/lib/feedbackQuestions";

const prisma = new PrismaClient();

// Returns the admin-customized question list (wording/order) if one has been
// saved, otherwise the built-in defaults. Always exactly the same set of
// keys as FEEDBACK_QUESTIONS - only label text and order can be customized,
// since each key maps to a fixed, already-shipped database column.
export async function getEffectiveFeedbackQuestions(): Promise<EffectiveQuestion[]> {
  const row = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  if (!row?.questionsJson) return FEEDBACK_QUESTIONS.map((q) => ({ key: q.key, label: q.label }));
  try {
    const parsed = JSON.parse(row.questionsJson) as EffectiveQuestion[];
    const knownKeys = new Set(FEEDBACK_QUESTIONS.map((q) => q.key));
    const valid = parsed.filter((q) => knownKeys.has(q.key) && typeof q.label === "string" && q.label.trim());
    // Guard against a corrupted/partial save silently hiding questions -
    // only trust it if every known key is present exactly once.
    if (valid.length === FEEDBACK_QUESTIONS.length && new Set(valid.map((q) => q.key)).size === FEEDBACK_QUESTIONS.length) {
      return valid;
    }
  } catch {
    // fall through to defaults
  }
  return FEEDBACK_QUESTIONS.map((q) => ({ key: q.key, label: q.label }));
}
