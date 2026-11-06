import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// POST /api/admin/session-teams { name } - admin-only. Adds one team to the
// login dropdown's pre-populated list.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name } = await req.json().catch(() => ({ name: "" }));
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  const trimmed = name.trim();
  const existing = await prisma.sessionTeam.findUnique({ where: { name: trimmed } });
  if (existing) {
    return NextResponse.json({ error: `"${trimmed}" is already in the list` }, { status: 409 });
  }
  const count = await prisma.sessionTeam.count();
  const team = await prisma.sessionTeam.create({ data: { name: trimmed, order: count } });
  return NextResponse.json({ team: { id: team.id, name: team.name } });
}

// DELETE /api/admin/session-teams { name } - admin-only. Removes one team
// from the dropdown. Does not touch anyone who already logged in with it -
// their LeaderboardUser.teamName is untouched.
export async function DELETE(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { name } = await req.json().catch(() => ({ name: "" }));
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  await prisma.sessionTeam.delete({ where: { name: name.trim() } }).catch(() => null);
  return NextResponse.json({ success: true });
}
