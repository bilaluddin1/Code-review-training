// Shared "looks like a real name, not a joke/fake one" check for login.
// Used by both /api/check-username (live typing feedback) and /api/login
// (the actual write), so a name can't slip through one but not the other.
// Pairs are expected to type "Name1/Name2" (e.g. "Bilal/Zain") - the slash
// is allowed on purpose, each side just needs to look like a real name.
const RESERVED_USERNAMES = ["admin", "administrator", "root", "system", "moderator"];
const JOKE_NAMES = [
  "test", "testing", "asdf", "asdfasdf", "xxx", "foo", "bar", "foobar",
  "demo", "sample", "fake", "none", "nobody", "anonymous", "anon",
  "null", "undefined", "n/a", "na", "qwerty", "abc", "123",
];

export function validateLoginName(rawName: string): { ok: true } | { ok: false; reason: "reserved" | "invalid"; error: string } {
  const name = rawName.trim();
  const lower = name.toLowerCase();

  if (RESERVED_USERNAMES.includes(lower)) {
    return { ok: false, reason: "reserved", error: `"${name}" is a reserved name and cannot be used.` };
  }

  // Each "/"-separated part (one per pair member) is checked on its own,
  // so "Bilal/Zain" passes but "test/fake" is still caught.
  const parts = name.split("/").map((p) => p.trim());
  for (const part of parts) {
    const partLower = part.toLowerCase();
    if (part.length < 2 || JOKE_NAMES.includes(partLower) || !/[a-zA-Z]{2}/.test(part)) {
      return { ok: false, reason: "invalid", error: `"${part || name}" doesn't look like a real name - please enter your actual name.` };
    }
  }
  return { ok: true };
}
