import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { validateLoginName } from "@/lib/validateLoginName";

// POST /api/login { name, teamName } - public. Called once at login so
// teamName is on record immediately (feedback can be given before solving
// anything, so it can't wait for the first correct flag's lazy upsert in
// submit-flag). teamName must be one of the admin-populated SessionTeam
// names, not free text, so it can't be mistyped.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const { name, teamName } = body as { name?: unknown; teamName?: unknown };
  if (typeof name !== "string" || !name.trim()) {
    return NextResponse.json({ error: "name is required" }, { status: 400 });
  }
  if (typeof teamName !== "string" || !teamName.trim()) {
    return NextResponse.json({ error: "teamName is required" }, { status: 400 });
  }

  const check = validateLoginName(name);
  if (!check.ok) {
    return NextResponse.json({ error: check.error }, { status: 400 });
  }

  const trimmedName = name.trim();
  const trimmedTeam = teamName.trim();
  const validTeam = await prisma.sessionTeam.findUnique({ where: { name: trimmedTeam } });
  if (!validTeam) {
    return NextResponse.json({ error: `"${trimmedTeam}" isn't one of this session's teams - ask your trainer.` }, { status: 400 });
  }

  const existing = await prisma.leaderboardUser.findUnique({ where: { name: trimmedName } });
  if (existing && existing.teamName && existing.teamName !== trimmedTeam) {
    // Someone else already took this name under a different team - block it
    // the same way check-username would have, rather than silently
    // reassigning their team.
    return NextResponse.json({ error: `"${trimmedName}" is already logged in under a different team.` }, { status: 409 });
  }

  const AVATARS = ["\u{1F98A}", "\u{1F43B}", "\u{1F43C}", "\u{1F438}", "\u{1F435}", "\u{1F436}", "\u{1F431}", "\u{1F981}", "\u{1F42F}", "\u{1F428}", "\u{1F430}", "\u{1F984}", "\u{1F419}", "\u{1F427}", "\u{1F422}", "\u{1F426}", "\u{1F41D}", "\u{1F42C}", "\u{1F98B}", "\u{1F41E}"];
  const avatar = existing?.avatar || AVATARS[Math.floor(Math.random() * AVATARS.length)];

  const user = await prisma.leaderboardUser.upsert({
    where: { name: trimmedName },
    update: { teamName: trimmedTeam },
    create: { name: trimmedName, teamName: trimmedTeam, avatar, score: 0 },
  });

  return NextResponse.json({ name: user.name, teamName: user.teamName, avatar: user.avatar, score: user.score });
}
