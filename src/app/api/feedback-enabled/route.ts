import { NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// GET /api/feedback-enabled - public. Whether the "Give Feedback" button is
// live for players right now. Defaults to off until an admin turns it on.
export async function GET() {
  const row = await prisma.feedbackToggle.findUnique({ where: { id: 1 } });
  return NextResponse.json({ enabled: row?.enabled ?? false });
}
