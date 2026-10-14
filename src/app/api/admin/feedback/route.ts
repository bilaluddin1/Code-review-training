import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";

const prisma = new PrismaClient();

// GET /api/admin/feedback - every response, most recent first, plus
// simple averages so the admin panel can show a quick summary without
// recomputing it client-side.
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const responses = await prisma.feedbackResponse.findMany({ orderBy: { createdAt: "desc" } });

  const avg = (key: "overall" | "relevantToRole" | "realWorld" | "paceAndStructure") =>
    responses.length ? Math.round((responses.reduce((sum, r) => sum + r[key], 0) / responses.length) * 10) / 10 : null;

  return NextResponse.json({
    count: responses.length,
    averages: {
      overall: avg("overall"),
      relevantToRole: avg("relevantToRole"),
      realWorld: avg("realWorld"),
      paceAndStructure: avg("paceAndStructure"),
    },
    responses: responses.map((r) => ({
      userName: r.userName,
      teamName: r.teamName,
      overall: r.overall,
      relevantToRole: r.relevantToRole,
      realWorld: r.realWorld,
      paceAndStructure: r.paceAndStructure,
      comments: r.comments,
      createdAt: r.createdAt.toISOString(),
    })),
  });
}
