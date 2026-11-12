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

// PATCH /api/admin/session-archive/[sessionId] { teamName } - relabels an
// already-archived leaderboard session (every SessionArchive row sharing
// that sessionId). The label was set once at archive time from whatever the
// "Archive label" box held that day - this fixes a wrong or stale label
// after the fact without touching any of the archived player rows/scores.
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ sessionId: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { sessionId } = await params;
  const { teamName } = await req.json().catch(() => ({ teamName: "" }));
  if (typeof teamName !== "string" || !teamName.trim()) {
    return NextResponse.json({ error: "teamName is required" }, { status: 400 });
  }
  const { count } = await prisma.sessionArchive.updateMany({ where: { sessionId }, data: { teamName: teamName.trim() } });
  if (count === 0) {
    return NextResponse.json({ error: "Session not found" }, { status: 404 });
  }
  return NextResponse.json({ success: true, updated: count });
}
