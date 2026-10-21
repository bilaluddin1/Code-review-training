import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// DELETE /api/admin/session-archive/[sessionId] - permanently removes one
// archived leaderboard session (every SessionArchive row sharing that
// sessionId). Does not touch the live leaderboard or any feedback archived
// under the same sessionId - the two archives are deleted independently.
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { sessionId } = await params;
  const { count } = await prisma.sessionArchive.deleteMany({ where: { sessionId } });
  return NextResponse.json({ success: true, deleted: count });
}
