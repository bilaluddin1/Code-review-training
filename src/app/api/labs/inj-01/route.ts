import { NextRequest, NextResponse } from "next/server";
import { vulnerableOrderSearch, ORDERS } from "@/lib/labsSandbox";

// Explicit rather than relying on Next's implicit "uses searchParams -> dynamic"
// detection - see /api/leaderboard for the bug caused by trusting that.
export const dynamic = 'force-dynamic';

// LAB-INJ-01 sandbox: "you are ACME". Normal input returns only ACME's orders.
// A classic breakout (' OR '1'='1' --) strips the tenant filter via a SQL comment,
// exactly the real-world pattern (tenant filter appended after the injectable part).
export async function GET(req: NextRequest) {
  const input = req.nextUrl.searchParams.get("type") ?? "Appraisal";
  const { whereClauseBuilt, rows } = vulnerableOrderSearch(input, "ACME");
  // Require a FULL bypass (every order, every tenant) rather than "any
  // cross-tenant row" - two of our rows happen to share Type "Appraisal"
  // across tenants, so a half-finished payload (no comment, dangling quote)
  // leaked a couple of rows by accident without actually defeating the
  // tenant filter. Only a real universal condition (e.g. ' OR '1'='1' --)
  // returns every row, including the other tenants' non-Appraisal orders.
  const leaked = rows.length === ORDERS.length;
  return NextResponse.json({
    whereClauseBuilt,
    rowsReturned: rows.length,
    rows,
    hint: "You are tenant ACME. The tenant filter is appended after your input - try breaking out of the quoted value with a SQL comment.",
    ...(leaked ? { flag: "FLAG{99fb5ff84f}" } : {}),
  });
}
