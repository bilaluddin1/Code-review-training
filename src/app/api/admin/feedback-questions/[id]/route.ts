import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { prisma } from "@/lib/prisma";

// PATCH /api/admin/feedback-questions/[id] { label?, followUpLabel?, active?, order?, ratingStyle? }
export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const body = await req.json().catch(() => ({}));
  const data: { label?: string; followUpLabel?: string | null; active?: boolean; order?: number; ratingStyle?: string; questionType?: string; options?: string } = {};
  if (body.label !== undefined) {
    if (typeof body.label !== "string" || !body.label.trim()) {
      return NextResponse.json({ error: "label must be a non-empty string" }, { status: 400 });
    }
    data.label = body.label.trim();
  }
  if (body.followUpLabel !== undefined) {
    if (typeof body.followUpLabel !== "string" || !body.followUpLabel.trim()) {
      return NextResponse.json({ error: "followUpLabel must be a non-empty string" }, { status: 400 });
    }
    data.followUpLabel = body.followUpLabel.trim();
  }
  if (body.active !== undefined) {
    if (typeof body.active !== "boolean") {
      return NextResponse.json({ error: "active must be a boolean" }, { status: 400 });
    }
    data.active = body.active;
  }
  if (body.order !== undefined) {
    if (typeof body.order !== "number") {
      return NextResponse.json({ error: "order must be a number" }, { status: 400 });
    }
    data.order = body.order;
  }
  if (body.ratingStyle !== undefined) {
    if (body.ratingStyle !== "words" && body.ratingStyle !== "numbers") {
      return NextResponse.json({ error: "ratingStyle must be 'words' or 'numbers'" }, { status: 400 });
    }
    data.ratingStyle = body.ratingStyle;
  }
  if (body.questionType !== undefined) {
    if (body.questionType !== "rating" && body.questionType !== "choice") {
      return NextResponse.json({ error: "questionType must be 'rating' or 'choice'" }, { status: 400 });
    }
    data.questionType = body.questionType;
  }
  if (body.options !== undefined) {
    if (!Array.isArray(body.options) || body.options.some((o: unknown) => typeof o !== "string")) {
      return NextResponse.json({ error: "options must be an array of strings" }, { status: 400 });
    }
    const cleaned = (body.options as string[]).map((o) => o.trim()).filter(Boolean);
    if (cleaned.length < 2) {
      return NextResponse.json({ error: "A choice question needs at least 2 options" }, { status: 400 });
    }
    data.options = JSON.stringify(cleaned);
  }
  if (Object.keys(data).length === 0) {
    return NextResponse.json({ error: "Nothing to update" }, { status: 400 });
  }
  try {
    const question = await prisma.feedbackQuestion.update({ where: { id }, data });
    return NextResponse.json({ question });
  } catch {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
}

// DELETE /api/admin/feedback-questions/[id] - only allowed if no one has
// answered it yet. Once answers exist, deactivate instead (keeps historical
// reports intact via each answer's own labelSnapshot).
export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = await params;
  const answerCount = await prisma.feedbackAnswer.count({ where: { questionId: id } });
  if (answerCount > 0) {
    return NextResponse.json(
      { error: `${answerCount} response(s) already answered this question - deactivate it instead of deleting, so past reports stay meaningful.` },
      { status: 409 }
    );
  }
  try {
    await prisma.feedbackQuestion.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Question not found" }, { status: 404 });
  }
}
