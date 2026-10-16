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
// A string merely CONTAINING "<script" or "onerror=" isn't proof of a
// working payload - "<script>(alert)</script>" has a real script tag but
// does nothing (a bare reference, never called), and still won the flag
// before this fix. Require content that would actually DO something: a
// function call (name(...)) or an assignment (x = y) inside the tag/handler,
// not just its presence.
function looksExecutable(code: string): boolean {
  return /\w+\s*\([^)]*\)/.test(code) || /=\s*[^=]/.test(code);
}
function isRealPayload(stored: string): boolean {
  const scriptMatch = /<script[^>]*>([\s\S]*?)<\/script>/i.exec(stored);
  if (scriptMatch && looksExecutable(scriptMatch[1])) return true;
  // Handler value can be quoted ("..."/'...') OR bare/unquoted - both are
  // valid HTML (<img onerror=alert(1)> works in every browser).
  const handlerMatch = /on(?:error|load)\s*=\s*(?:(["'])([\s\S]*?)\1|([^\s>]+))/i.exec(stored);
  if (handlerMatch && looksExecutable(handlerMatch[2] ?? handlerMatch[3] ?? "")) return true;
  return false;
}

export async function POST(req: NextRequest) {
  const { html } = await req.json().catch(() => ({ html: "" }));
  const stored = setEngagementInstructions(String(html ?? ""));
  const exploited = isRealPayload(stored);
  return NextResponse.json({ html: stored, ...(exploited ? { flag: "FLAG{3f6daa1cd6}" } : {}) });
}
