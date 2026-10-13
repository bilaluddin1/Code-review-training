import { NextRequest, NextResponse } from "next/server";
import { vulnerableOrderSearch } from "@/lib/labsSandbox";

// LAB-INJ-01 sandbox: "you are ACME". Normal input returns only ACME's orders.
// A classic breakout (' OR '1'='1' --) strips the tenant filter via a SQL comment,
// exactly the real-world pattern (tenant filter appended after the injectable part).
export async function GET(req: NextRequest) {
  const input = req.nextUrl.searchParams.get("type") ?? "Appraisal";
  const { whereClauseBuilt, rows } = vulnerableOrderSearch(input, "ACME");
  return NextResponse.json({
    whereClauseBuilt,
    rowsReturned: rows.length,
    rows,
    hint: "You are tenant ACME. Try: Appraisal' OR '1'='1' --",
  });
}
