import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Without this, a GET with no cookies()/headers() call gets cached as a
// static response at build time - devs would keep seeing the button's
// build-time state forever, no matter what the admin toggles later.
export const dynamic = 'force-dynamic';

// GET /api/feedback-enabled - public. Whether the "Give Feedback" button is
// live for players right now, and which team the session is currently set
// to (so the player can see it, even though they never type it themselves).
export async function GET() {
  const row = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  return NextResponse.json({ enabled: row?.enabled ?? false, currentTeam: row?.currentTeam ?? null });
}
