import { PrismaClient } from "@/generated/prisma";
import { DEFAULT_FEEDBACK_QUESTIONS } from "@/lib/feedbackQuestions";

const prisma = new PrismaClient();

// Returns the live, active feedback questions in order - the ONLY source of
// truth now (no hardcoded key list anywhere else). If the table is empty
// (first run), seeds it once with the default wording.
export async function getActiveFeedbackQuestions() {
  const count = await prisma.feedbackQuestion.count();
  if (count === 0) {
    await prisma.feedbackQuestion.createMany({
      data: DEFAULT_FEEDBACK_QUESTIONS.map((label, i) => ({ label, order: i, active: true })),
    });
  }
  return prisma.feedbackQuestion.findMany({ where: { active: true }, orderBy: { order: "asc" } });
}
