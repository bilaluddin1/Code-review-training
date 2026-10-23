import fs from 'fs/promises';
import path from 'path';
import { PLAYGROUNDS as STATIC_PLAYGROUNDS } from './labsPlaygroundConfig';
import type { PlaygroundConfig } from './labsPlaygroundConfig';

export type { PlaygroundConfig, PlaygroundField } from './labsPlaygroundConfig';

// Same pattern as loadChallenges.ts: a runtime, admin-editable JSON file
// (outside src/ to avoid build conflicts, gitignored so a live edit never
// collides with a source deploy) that overrides the static baseline one
// lab-key at a time. A lab nobody has edited yet still works straight from
// labsPlaygroundConfig.ts; an edited one serves the saved version.
const getPlaygroundsPath = () => path.join(process.cwd(), 'data', 'playgrounds.json');

export async function loadPlaygrounds(): Promise<Record<string, PlaygroundConfig>> {
  try {
    const raw = await fs.readFile(getPlaygroundsPath(), 'utf-8');
    const overrides = JSON.parse(raw) as Record<string, PlaygroundConfig>;
    return { ...STATIC_PLAYGROUNDS, ...overrides };
  } catch {
    return STATIC_PLAYGROUNDS;
  }
}

export function getPlaygroundsFilePath(): string {
  return getPlaygroundsPath();
}
