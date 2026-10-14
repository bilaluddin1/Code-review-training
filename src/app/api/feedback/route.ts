import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";

const prisma = new PrismaClient();

// POST /api/feedback - public, submitted by devs themselves. Not gated
// behind finishing every lab; the button is available any time.
export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);
  if (!body) return NextResponse.json({ error: "Invalid payload" }, { status: 400 });

  const { userName, teamName, overall, relevantToRole, realWorld, paceAndStructure, comments } = body;
  const ratings = { overall, relevantToRole, realWorld, paceAndStructure };
  for (const [key, val] of Object.entries(ratings)) {
    if (typeof val !== "number" || val < 1 || val > 5) {
      return NextResponse.json({ error: `${key} must be a rating from 1 to 5` }, { status: 400 });
    }
  }
  if (typeof userName !== "string" || !userName.trim()) {
    return NextResponse.json({ error: "userName is required" }, { status: 400 });
  }

  await prisma.feedbackResponse.create({
    data: {
      userName: userName.trim(),
      teamName: typeof teamName === "string" && teamName.trim() ? teamName.trim() : null,
      overall,
      relevantToRole,
      realWorld,
      paceAndStructure,
      comments: typeof comments === "string" && comments.trim() ? comments.trim().slice(0, 2000) : null,
    },
  });

  return NextResponse.json({ success: true });
}
