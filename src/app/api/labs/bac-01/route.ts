import { NextRequest, NextResponse } from "next/server";
import { NOTES } from "@/lib/labsSandbox";

// LAB-BAC-01 sandbox: "you are alice (note id 101)". No ownership check on read -
// changing the id to 102 reads bob's note. Synthetic data only.
export async function GET(req: NextRequest) {
  const id = Number(req.nextUrl.searchParams.get("id") ?? "101");
  const note = NOTES.find((n) => n.id === id);
  if (!note) return NextResponse.json({ error: "No note with that id" }, { status: 404 });
  const exploited = note.owner !== "alice";
  return NextResponse.json({
    note,
    hint: "You are logged in as alice. Nothing here checks that note.owner === 'alice'.",
    ...(exploited ? { flag: "FLAG{f6de2f2645}" } : {}),
  });
}
