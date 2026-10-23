import { NextResponse } from "next/server";
import { loadPlaygrounds } from "@/lib/loadPlaygrounds";

// Public - the live-exploit lab pages (/labs/[id]) fetch their own copy
// and title/blurb/hint text from here rather than bundling it statically,
// so an admin edit via /api/admin/playgrounds shows up with no rebuild.
export const dynamic = 'force-dynamic';

export async function GET() {
  const playgrounds = await loadPlaygrounds();
  return NextResponse.json(playgrounds);
}
