import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@/generated/prisma";
import { isAdminSession } from "@/lib/isAdminSession";

const prisma = new PrismaClient();

// POST /api/admin/feedback-enabled { enabled } - admin-only toggle.
export async function POST(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { enabled } = await req.json().catch(() => ({ enabled: undefined }));
  if (typeof enabled !== "boolean") {
    return NextResponse.json({ error: "enabled must be a boolean" }, { status: 400 });
  }
  const row = await prisma.feedbackToggle.upsert({
    where: { id: 1 },
    update: { enabled },
    create: { id: 1, enabled },
  });
  return NextResponse.json({ enabled: row.enabled });
}
