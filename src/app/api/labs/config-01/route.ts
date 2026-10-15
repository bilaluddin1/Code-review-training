import { NextRequest, NextResponse } from "next/server";
import { vulnerableOrderLookup } from "@/lib/labsSandbox";

// Explicit rather than relying on Next's implicit "uses searchParams/headers ->
// dynamic" detection - see /api/leaderboard for the bug caused by trusting that.
export const dynamic = 'force-dynamic';

// LAB-CONFIG-01 sandbox: two INDEPENDENT bugs in one endpoint, two
// independent flags - triggering one doesn't prove you found the other.
// 1) An unhandled exception's message (and a fake "stack") goes straight to the
//    client - send id=abc instead of a number.
// 2) CORS reflects whatever the caller claims as its origin, with credentials
//    allowed - send a plausible attacker origin as X-Demo-Origin and see it
//    echoed back unchecked.
export async function GET(req: NextRequest) {
  const rawOrigin = req.headers.get("x-demo-origin");
  const demoOrigin = rawOrigin ?? "(not sent)";
  const corsHeaders = { "Access-Control-Allow-Origin": demoOrigin, "Access-Control-Allow-Credentials": "true" };

  // Only counts once a plausible attacker-style origin (a URL) is actually
  // sent - not just "no header" or a blank/garbage value.
  const corsExploited = !!rawOrigin && /^https?:\/\//i.test(rawOrigin.trim());
  const corsFlag = corsExploited ? "FLAG{a1c9f04e73}" : undefined;

  const idParam = req.nextUrl.searchParams.get("id");
  // An EMPTY id is not an attempt at anything - require a real, deliberately
  // invalid value before treating this as "found the error leak".
  if (!idParam || !idParam.trim()) {
    return NextResponse.json(
      { error: "Order ID is required", ...(corsFlag ? { corsFlag } : {}) },
      { status: 400, headers: corsHeaders }
    );
  }

  try {
    const order = vulnerableOrderLookup(idParam);
    return NextResponse.json({ order, ...(corsFlag ? { corsFlag } : {}) }, { headers: corsHeaders });
  } catch (err) {
    const e = err as Error;
    return NextResponse.json(
      {
        error: e.message,
        stack: "at vulnerableOrderLookup (labsSandbox.ts:line) <- leaked to the client",
        errorFlag: "FLAG{530b775212}",
        ...(corsFlag ? { corsFlag } : {}),
      },
      { status: 500, headers: corsHeaders }
    );
  }
}
