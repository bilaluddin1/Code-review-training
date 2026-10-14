import { NextRequest, NextResponse } from "next/server";
import { isTokenRejected, signDemoToken } from "@/lib/labsSandbox";

// Explicit, so this GET can never get frozen into a build-time static
// response - the token's exp is relative to Date.now(), so a cached
// response would eventually hand out a token that's always expired.
export const dynamic = 'force-dynamic';

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
  const exploited = reason.startsWith("FAIL-OPEN"); // only the bug path, not a legitimately-valid token
  return NextResponse.json({
    accessGranted: true,
    reason,
    secret: "ADMIN-ONLY resource unlocked",
    ...(exploited ? { flag: "FLAG{842139d233}" } : {}),
  });
}
