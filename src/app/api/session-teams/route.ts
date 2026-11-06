import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/session-teams - public. Backs the login screen's team dropdown.
export async function GET() {
  const teams = await prisma.sessionTeam.findMany({ orderBy: [{ order: "asc" }, { name: "asc" }] });
  return NextResponse.json({ teams: teams.map((t) => t.name) });
}
