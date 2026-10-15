// Synthetic, in-memory-only data for the "go exploit it" lab sandboxes.
// No real users, no real secrets, no real database connection, no eval()/Function().
// Everything here is intentionally vulnerable BY DESIGN for training purposes only.
import crypto from "crypto";

// ---------- LAB-BAC-01: IDOR ("Secure Notes") ----------
// Two decoys at nearby ids (102, 103) are readable too - the bug lets you
// read ANY note, not just one specific neighbor - but only the note marked
// flagNote actually completes the lab. Its id is deliberately not adjacent
// to 101, so a single "try the next number" guess finds the vulnerability
// but not the flag - same as a real IDOR target rarely sitting right next
// to your own id.
export type Note = { id: number; owner: string; title: string; body: string; flagNote?: boolean };
export const NOTES: Note[] = [
  { id: 101, owner: "alice", title: "Alice's note", body: "Password reset backup code: 482913" },
  { id: 102, owner: "bob", title: "Bob's note", body: "Salary review draft: recommend promotion, do not share yet" },
  { id: 103, owner: "carol", title: "Carol's note", body: "Interview feedback: strong candidate, proceed to final round" },
  { id: 500, owner: "admin", title: "Admin note", body: "Incident checklist: escalate any confirmed data exposure immediately", flagNote: true },
];

// ---------- LAB-INJ-01: SQL injection via tenant-filter-after-input ----------
export const ORDERS = [
  { id: 1, Type: "Appraisal", ClientID: "ACME" },
  { id: 2, Type: "Inspection", ClientID: "ACME" },
  { id: 3, Type: "Appraisal", ClientID: "OtherCo" },
  { id: 4, Type: "Appraisal", ClientID: "RivalBank" },
  { id: 5, Type: "Inspection", ClientID: "RivalBank" },
];

// Safe, hand-rolled WHERE-clause evaluator: string/regex only, no eval/Function.
// Mirrors the real bug pattern: `Type = '{input}' AND ClientID = '{tenant}'`
// so a classic payload (' OR '1'='1' --) strips the tenant filter via a SQL comment.
function evalAtom(atom: string, row: Record<string, string>): boolean {
  atom = atom.trim();
  let m = atom.match(/^'([^']*)'\s*=\s*'([^']*)'$/);
  if (m) return m[1] === m[2];
  m = atom.match(/^(\w+)\s*=\s*'([^']*)'$/);
  if (m) return String(row[m[1]] ?? "").toLowerCase() === m[2].toLowerCase();
  return false; // unparsable atom fails closed in this toy, which is fine - it's not the point
}
export function evalWhere(clause: string, row: Record<string, string>): boolean {
  const stripped = clause.split(/--|#/)[0]; // classic SQL line-comment technique
  return stripped
    .split(/\s+OR\s+/i)
    .some((group) => group.split(/\s+AND\s+/i).every((atom) => evalAtom(atom, row)));
}
export function vulnerableOrderSearch(input: string, tenant: string) {
  const whereClause = `Type = '${input}' AND ClientID = '${tenant}'`; // <-- the real-world mistake
  const rows = ORDERS.filter((o) =>
    evalWhere(whereClause, o as unknown as Record<string, string>)
  );
  return { whereClauseBuilt: whereClause, rows };
}

// ---------- LAB-INJ-02: stored XSS, no sanitizer before rendering as HTML ----------
let storedEngagementInstructions = "Please inspect the property before 5pm. Gate code is on file.";
export function getEngagementInstructions() {
  return storedEngagementInstructions;
}
export function setEngagementInstructions(html: string) {
  storedEngagementInstructions = html; // <-- stored RAW, exactly like the real bug: no sanitizer anywhere in the pipeline
  return storedEngagementInstructions;
}

// ---------- LAB-CRYPTO-01: reversible, hardcoded-key "remember me" cookie ----------
// Deliberately weak: base64(username + "::" + STATIC_KEY), reversible by anyone who
// knows STATIC_KEY - which is hardcoded in source, exactly like the real finding.
export const STATIC_KEY = "vl-training-demo-key-2026"; // intentionally disclosed on the lab page
export function makeCookie(username: string) {
  return Buffer.from(`${username}::${STATIC_KEY}`).toString("base64");
}
export function readCookie(cookie: string): { username: string; valid: boolean } {
  try {
    const decoded = Buffer.from(cookie, "base64").toString("utf8");
    const [username, key] = decoded.split("::");
    return { username, valid: key === STATIC_KEY };
  } catch {
    return { username: "", valid: false };
  }
}

// ---------- LAB-AUTH-01: JWT check that fails OPEN on a malformed token ----------
const JWT_SECRET = "server-side-only-secret-never-sent-to-client";
export function signDemoToken(payload: object) {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify(payload)).toString("base64url");
  const sig = crypto.createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${sig}`;
}
// Mirrors the real bug: any exception during verification is swallowed and treated
// as "not invalid" instead of denying the request.
export function isTokenRejected(token: string): { rejected: boolean; reason: string } {
  try {
    const [header, body, sig] = token.split(".");
    if (!header || !body || !sig) throw new Error("malformed token");
    const expected = crypto.createHmac("sha256", JWT_SECRET).update(`${header}.${body}`).digest("base64url");
    if (sig !== expected) return { rejected: true, reason: "bad signature" };
    const payload = JSON.parse(Buffer.from(body, "base64url").toString("utf8"));
    if (payload.exp && Date.now() / 1000 > payload.exp) return { rejected: true, reason: "expired" };
    return { rejected: false, reason: "valid" };
  } catch {
    return { rejected: false, reason: "FAIL-OPEN: exception during verification was treated as 'not invalid'" }; // <-- the bug
  }
}

// ---------- LAB-CONFIG-01: exception leak + reflect-any-origin CORS ----------
export function vulnerableOrderLookup(idParam: string) {
  const id = parseInt(idParam, 10);
  if (Number.isNaN(id)) {
    // Deliberately mirrors `return BadRequest(ex.Message)` / `lbl.Text = ex.Message`
    const err = new Error(`Invalid order id '${idParam}': input string was not in a correct format.`);
    throw err;
  }
  return ORDERS.find((o) => o.id === id) ?? null;
}
