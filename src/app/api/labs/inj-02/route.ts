import { NextRequest, NextResponse } from "next/server";
import { getEngagementInstructions, setEngagementInstructions } from "@/lib/labsSandbox";

// Explicit, so this GET can never get frozen into a build-time static
// response - it reads mutable state the POST below just wrote, so a cached
// response would never show a player's own injected payload.
export const dynamic = 'force-dynamic';

// LAB-INJ-02 sandbox: "engagement instructions" another party wrote are stored and
// later rendered as raw HTML, with no sanitizer anywhere in the pipeline - mirrors
// bypassSecurityTrustHtml()/Html.Raw() used on untrusted content. Rendered inside a
// sandboxed iframe on the client (no same-origin, no cookie access) so this stays safe.
export async function GET() {
  return NextResponse.json({ html: getEngagementInstructions() });
}
export async function POST(req: NextRequest) {
  const { html } = await req.json().catch(() => ({ html: "" }));
  const stored = setEngagementInstructions(String(html ?? ""));
  const exploited = /<script|onerror\s*=|onload\s*=|<img/i.test(stored);
  return NextResponse.json({ html: stored, ...(exploited ? { flag: "FLAG{3f6daa1cd6}" } : {}) });
}
