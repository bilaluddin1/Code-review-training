import { NextRequest, NextResponse } from "next/server";
import { STATIC_KEY, makeCookie, readCookie } from "@/lib/labsSandbox";

// Explicit rather than relying on Next's implicit "uses searchParams -> dynamic"
// detection - see /api/leaderboard for the bug caused by trusting that.
export const dynamic = 'force-dynamic';

// LAB-CRYPTO-01 sandbox: the "remember me" cookie is base64(username::STATIC_KEY).
// STATIC_KEY is hardcoded and disclosed right here on the lab page, exactly like a
// real hardcoded crypto key committed to source. Anyone who reads the code can
// forge a cookie for ANY username, including "admin".
export async function GET(req: NextRequest) {
  const cookie = req.nextUrl.searchParams.get("cookie");
  if (!cookie) {
    return NextResponse.json({
      staticKey: STATIC_KEY,
      yourCookie: makeCookie("alice"),
      hint: "This is your real cookie for 'alice'. The key above is hardcoded in source - forge one for 'admin' yourself and submit it as ?cookie=",
    });
  }
  const { username, valid } = readCookie(cookie);
  if (!valid) return NextResponse.json({ error: "Invalid cookie" }, { status: 401 });
  if (username === "admin") {
    return NextResponse.json({
      loggedInAs: username,
      secret: "ADMIN-ONLY: Q4 pricing changes, do not share externally",
      flag: "FLAG{43141c521f}",
    });
  }
  return NextResponse.json({ loggedInAs: username, secret: null });
}
