import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// POST /api/admin/feedback-enabled { enabled?, currentTeam? } - admin-only.
// Either field can be sent alone (e.g. just updating the team name without
// touching the on/off state).
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const body = await req.json().catch(() => ({}));
  const { enabled, currentTeam } = body as { enabled?: unknown; currentTeam?: unknown };

  const data: { enabled?: boolean; currentTeam?: string | null } = {};
  if (enabled !== undefined) {
    if (typeof enabled !== "boolean") {
      return NextResponse.json({ error: "enabled must be a boolean" }, { status: 400 });
    }
    data.enabled = enabled;
  }
  if (currentTeam !== undefined) {
    if (typeof currentTeam !== "string") {
      return NextResponse.json({ error: "currentTeam must be a string" }, { status: 400 });
    }
    data.currentTeam = currentTeam.trim() || null;
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }

  const row = await prisma.feedbackToggle.upsert({
    where: { id: 1 },
    update: data,
    create: { id: 1, enabled: data.enabled ?? false, currentTeam: data.currentTeam ?? null },
  });
  return NextResponse.json({ enabled: row.enabled, currentTeam: row.currentTeam });
}
