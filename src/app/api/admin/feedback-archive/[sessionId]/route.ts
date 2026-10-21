import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// DELETE /api/admin/feedback-archive/[sessionId] - permanently removes one
// archived feedback session (every FeedbackResponse sharing that
// archivedSessionId, plus their answers). Independent of the leaderboard's
// SessionArchive for the same sessionId - deleting one does not delete the other.
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { sessionId } = await params;
  const responses = await prisma.feedbackResponse.findMany({ where: { archivedSessionId: sessionId }, select: { id: true } });
  await prisma.$transaction([
    prisma.feedbackAnswer.deleteMany({ where: { responseId: { in: responses.map((r) => r.id) } } }),
    prisma.feedbackResponse.deleteMany({ where: { archivedSessionId: sessionId } }),
  ]);
  return NextResponse.json({ success: true, deleted: responses.length });
}
