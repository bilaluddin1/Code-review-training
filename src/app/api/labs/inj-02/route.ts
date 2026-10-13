import { NextRequest, NextResponse } from "next/server";
import { getEngagementInstructions, setEngagementInstructions } from "@/lib/labsSandbox";

// LAB-INJ-02 sandbox: "engagement instructions" another party wrote are stored and
// later rendered as raw HTML, with no sanitizer anywhere in the pipeline - mirrors
// bypassSecurityTrustHtml()/Html.Raw() used on untrusted content. Rendered inside a
// sandboxed iframe on the client (no same-origin, no cookie access) so this stays safe.
export async function GET() {
  return NextResponse.json({ html: getEngagementInstructions() });
}
export async function POST(req: NextRequest) {
  const { html } = await req.json().catch(() => ({ html: "" }));
  return NextResponse.json({ html: setEngagementInstructions(String(html ?? "")) });
}
