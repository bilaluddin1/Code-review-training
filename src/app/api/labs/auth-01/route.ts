import { NextRequest, NextResponse } from "next/server";
import { isTokenRejected, signDemoToken } from "@/lib/labsSandbox";

// LAB-AUTH-01 sandbox: real HMAC-signed tokens (Node's crypto, not a toy scheme) -
// the bug is in the verification CODE, not the crypto. Any exception while
// verifying (e.g. a malformed token) is swallowed and treated as "not invalid",
// exactly mirroring the real IsTokenExpired() fail-open pattern found in review.
export async function GET() {
  // Hand the player a real, validly-signed non-admin token to see the happy path.
  return NextResponse.json({ sampleUserToken: signDemoToken({ role: "user", exp: Math.floor(Date.now() / 1000) + 3600 }) });
}
export async function POST(req: NextRequest) {
  const { token } = await req.json().catch(() => ({ token: "" }));
  const { rejected, reason } = isTokenRejected(token ?? "");
  if (rejected) return NextResponse.json({ accessGranted: false, reason }, { status: 401 });
  return NextResponse.json({ accessGranted: true, reason, secret: "ADMIN-ONLY resource unlocked" });
}
