import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/feedback-enabled - public. Whether the "Give Feedback" button is
// live for players right now, and which team the session is currently set
// to (so the player can see it, even though they never type it themselves).
export async function GET() {
  const row = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  return NextResponse.json({ enabled: row?.enabled ?? false, currentTeam: row?.currentTeam ?? null });
}
