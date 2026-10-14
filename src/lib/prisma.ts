import { PrismaClient } from "@/generated/prisma";

// ONE shared Prisma client for the whole app. Every API route used to create
// its own `new PrismaClient()` (22 separate instances found, Oct 2026) - each
// one opens its own connection pool to the same SQLite file. Under real
// concurrent load (many devs submitting at once), those pools collide on
// SQLite's single-writer lock, and a write occasionally loses the race
// silently instead of throwing - which is exactly what "leaderboard score
// stuck / not updating" looks like from a user's side. Reproduced locally:
// 10 concurrent submissions to a fresh challenge dropped 1 leaderboard
// update per round, a different user each time (random, not deterministic -
// textbook write race, not a logic bug).
//
// Fix has two parts, both needed:
// 1. One shared client (here), cached across hot-reloads in dev.
// 2. WAL journal mode + a busy_timeout (see prismaSqlitePragmas below),
//    so SQLite queues and retries a write that arrives while another is in
//    flight, instead of the two colliding.
const globalForPrisma = global as unknown as { prisma?: PrismaClient };

export const prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// Idempotent - safe to call every time a route module loads. Applies once
// per connection; cheap enough that there's no need to track "already ran".
let pragmasApplied = false;
export async function ensureSqlitePragmas() {
  if (pragmasApplied) return;
  pragmasApplied = true;
  try {
    // Both PRAGMAs return a result row in SQLite (even in "set" form), so
    // $executeRawUnsafe (write-only, no result set) rejects them with
    // "Execute returned results, which is not allowed in SQLite" - use
    // $queryRawUnsafe instead, which accepts rows back.
    const [wal] = await prisma.$queryRawUnsafe<{ journal_mode: string }[]>("PRAGMA journal_mode = WAL;");
    await prisma.$queryRawUnsafe("PRAGMA busy_timeout = 5000;");
    console.log("SQLite journal_mode set to:", wal?.journal_mode);
  } catch (err) {
    console.error("Could not set SQLite WAL/busy_timeout pragmas:", err);
  }
}
void ensureSqlitePragmas();
