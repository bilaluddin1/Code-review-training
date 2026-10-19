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
  // An empty/missing token isn't a deliberate attempt at anything - it just
  // happens to throw in isTokenRejected's destructuring, same shape as the
  // real bug. Require a real, non-empty submission before treating this as
  // "found the fail-open path" (same fix as the empty Order ID in LAB-CONFIG-01).
  if (typeof token !== "string" || !token.trim()) {
    return NextResponse.json({ error: "Token is required" }, { status: 400 });
  }
  const trimmed = token.trim();
  const { rejected, reason } = isTokenRejected(trimmed);
  if (rejected) return NextResponse.json({ accessGranted: false, reason }, { status: 401 });
  const exploited = reason.startsWith("FAIL-OPEN"); // only the bug path, not a legitimately-valid token

  // Two INDEPENDENT ways to hit the same fail-open catch block, two flags:
  // - Pure unstructured garbage ("garbage", no dots at all) crashes at the
  //   very first destructuring step - trivial, no understanding of the
  //   token format required.
  // - A deliberately INCOMPLETE token shape - looks like it's going
  //   somewhere (has the dots a real header.payload.signature token has)
  //   but is missing a segment - ALSO throws there, same bug, but requires
  //   actually understanding the 3-part structure to construct on purpose.
  // Note what does NOT work: a full 3-part token with a wrong signature
  // (e.g. "xxx.yyy.zzz") never reaches this bug at all - the signature
  // check inside the try block correctly rejects it before anything can
  // throw. Only an incomplete shape slips past that check entirely.
  let flag: string | undefined;
  let advancedFlag: string | undefined;
  if (exploited) {
    const parts = trimmed.split(".");
    // "too few parts" (e.g. "xxx.yyy", only 2) is just as incomplete as
    // "has an empty part" (e.g. "xxx.yyy.") - destructuring a short array
    // leaves the missing slot undefined, not an empty string, so both need
    // checking explicitly.
    const looksLikeIncompleteToken = parts.length >= 2 && (parts.length < 3 || parts.some((p) => !p));
    if (looksLikeIncompleteToken) {
      advancedFlag = "FLAG{7c2e91ab4d}";
    } else {
      flag = "FLAG{842139d233}";
    }
  }
  return NextResponse.json({
    accessGranted: true,
    reason,
    secret: "ADMIN-ONLY resource unlocked",
    ...(flag ? { flag } : {}),
    ...(advancedFlag ? { advancedFlag } : {}),
  });
}
