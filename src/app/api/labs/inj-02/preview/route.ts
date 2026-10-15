import { NextResponse } from "next/server";
import { getEngagementInstructions } from "@/lib/labsSandbox";

// Explicit, same reason as every other dynamic GET here - this reads
// mutable state and must never get frozen into a build-time snapshot.
export const dynamic = 'force-dynamic';

// A real top-level page (opened via window.open(..., 'noopener'), never an
// iframe) so alert()/confirm()/prompt() actually fire - Chrome silently
// blocks those dialogs from any CROSS-ORIGIN IFRAME regardless of sandbox
// flags, which is why the embedded preview could run document.cookie-theft
// payloads but never pop a visible alert(). A plain window has no such
// restriction. `noopener` means this page gets `window.opener === null`,
// so even though it shares our real origin (needed for document.cookie to
// show anything at all), it has zero ability to reach back into the
// trainer's actual open tab - only the fake seeded cookie below is at risk,
// never the real app.
export async function GET() {
  const html = `<!doctype html>
<html>
<head><meta charset="utf-8"><title>Engagement Instructions (rendered)</title></head>
<body style="font-family: sans-serif; padding: 24px;">
<p style="color:#666">This is a real top-level page (not an iframe) - open via "noopener" so it can never reach back into the training app, even though it shares this domain.</p>
<script>document.cookie = "session_id=sess_8f2a91cd4b7e3f06; path=/";<\/script>
${getEngagementInstructions()}
</body>
</html>`;
  return new NextResponse(html, { headers: { "Content-Type": "text/html; charset=utf-8" } });
}
