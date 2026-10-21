import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// DELETE /api/admin/feedback/[id] - permanently removes one feedback
// response (live or archived) and its answers. For a stray test/bad
// submission an admin wants gone outright, not archived - unlike the
// normal reset flow, this has no recovery path.
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  await prisma.$transaction([
    prisma.feedbackAnswer.deleteMany({ where: { responseId: id } }),
    prisma.feedbackResponse.delete({ where: { id } }),
  ]);
  return NextResponse.json({ success: true });
}
