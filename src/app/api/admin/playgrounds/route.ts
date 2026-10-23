import { NextRequest, NextResponse } from "next/server";
import { isAdminSession } from "@/lib/isAdminSession";
import { loadPlaygrounds, getPlaygroundsFilePath } from "@/lib/loadPlaygrounds";
import type { PlaygroundConfig } from "@/lib/loadPlaygrounds";
import fs from "fs/promises";
import path from "path";

export const dynamic = 'force-dynamic';

// GET: every lab's live-exploit page config (title/blurb/fields/hint/etc.)
export async function GET(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const playgrounds = await loadPlaygrounds();
  return NextResponse.json(playgrounds);
}

// PUT { key, config }: save one lab's edited config into the runtime
// override file. `key` is the lab's URL slug (e.g. "crypto-01"), matching
// labsPlaygroundConfig.ts's PLAYGROUNDS object key - never the challenge id.
export async function PUT(req: NextRequest) {
  if (!(await isAdminSession(req))) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { key, config } = (await req.json()) as { key?: string; config?: PlaygroundConfig };
  if (!key || !config || !config.title || !config.endpoint) {
    return NextResponse.json({ error: "Missing key, or config is missing title/endpoint" }, { status: 400 });
  }

  const current = await loadPlaygrounds();
  current[key] = config;

  const filePath = getPlaygroundsFilePath();
  await fs.mkdir(path.dirname(filePath), { recursive: true });
  await fs.writeFile(filePath, JSON.stringify(current, null, 2), "utf-8");

  return NextResponse.json(config);
}
