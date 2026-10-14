import { NextRequest, NextResponse } from "next/server";
import { vulnerableOrderLookup } from "@/lib/labsSandbox";

// Explicit rather than relying on Next's implicit "uses searchParams/headers ->
// dynamic" detection - see /api/leaderboard for the bug caused by trusting that.
export const dynamic = 'force-dynamic';

// LAB-CONFIG-01 sandbox: two bugs in one endpoint.
// 1) An unhandled exception's message (and a fake "stack") goes straight to the
//    client - send id=abc instead of a number.
// 2) CORS reflects whatever the caller claims as its origin, with credentials
//    allowed - send any value as X-Demo-Origin and see it echoed back unchecked.
export async function GET(req: NextRequest) {
  const demoOrigin = req.headers.get("x-demo-origin") ?? "(not sent)";
  try {
    const order = vulnerableOrderLookup(req.nextUrl.searchParams.get("id") ?? "1");
    return NextResponse.json(
      { order },
      { headers: { "Access-Control-Allow-Origin": demoOrigin, "Access-Control-Allow-Credentials": "true" } }
    );
  } catch (err) {
    const e = err as Error;
    return NextResponse.json(
      {
        error: e.message,
        stack: "at vulnerableOrderLookup (labsSandbox.ts:line) <- leaked to the client",
        flag: "FLAG{530b775212}",
      },
      { status: 500, headers: { "Access-Control-Allow-Origin": demoOrigin, "Access-Control-Allow-Credentials": "true" } }
    );
  }
}
