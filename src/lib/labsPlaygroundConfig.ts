// Config-driven "go exploit it" sandbox pages. Each entry renders a small
// request-builder UI at /labs/<key> that calls its matching /api/labs/<key> route.
export type PlaygroundField = {
  name: string;
  label: string;
  placeholder?: string;
  type?: "text" | "number" | "textarea";
  defaultValue?: string;
};

export type PlaygroundConfig = {
  title: string;
  linkedChallengeId: string;
  blurb: string;
  method: "GET" | "POST";
  endpoint: string; // relative API path
  fields: PlaygroundField[]; // GET -> query params, POST -> JSON body
  headerFields?: PlaygroundField[]; // sent as request headers (GET only, for the CORS demo)
  startingHint?: string;
  preview?: boolean; // render response.body.html inside a sandboxed <iframe> (XSS demo)
  // Optional explanation shown only after clicking "Show Hint" - for a lab
  // whose mechanism needs more than one sentence to set up correctly.
  explainer?: string;
  // Optional second, independent field + Send button + response panel,
  // hitting the same endpoint - for a lab with two distinct ways to trigger
  // the bug that deserve their own separate attempt box rather than sharing one.
  secondaryField?: PlaygroundField;
};

export const PLAYGROUNDS: Record<string, PlaygroundConfig> = {
  "demo": {
    title: "Practice Run",
    linkedChallengeId: "DEMO",
    blurb: "This isn't a real vulnerability - it's just practice using the same live-exploit flow every other lab uses.",
    method: "GET",
    endpoint: "/api/labs/demo",
    fields: [],
    startingHint: "Click Send request below.",
  },
  "bac-01": {
    title: "Secure Notes (IDOR)",
    linkedChallengeId: "LAB-BAC-01",
    blurb: "You are logged in as alice, whose note is id 101. Synthetic data only - nothing here is real.",
    method: "GET",
    endpoint: "/api/labs/bac-01",
    fields: [{ name: "id", label: "Note ID", type: "number", defaultValue: "101" }],
  },
  "inj-01": {
    title: "Order Search (SQL Injection)",
    linkedChallengeId: "LAB-INJ-01",
    blurb: "You are tenant ACME. The search box feeds straight into a WHERE clause, tenant filter appended AFTER it - synthetic data only.",
    method: "GET",
    endpoint: "/api/labs/inj-01",
    fields: [{ name: "type", label: "Order type", type: "text", defaultValue: "Appraisal" }],
    startingHint: "Try breaking out of the search value with a SQL comment.",
  },
  "inj-02": {
    title: "Engagement Instructions (Stored XSS)",
    linkedChallengeId: "LAB-INJ-02",
    blurb: "Another party's 'engagement instructions' are stored and rendered with no sanitizer. Rendered in a sandboxed iframe here, so it's safe to try.",
    method: "POST",
    endpoint: "/api/labs/inj-02",
    fields: [{ name: "html", label: "Instructions (HTML allowed)", type: "textarea", defaultValue: "Please inspect before 5pm." }],
    startingHint: "Try submitting an HTML tag that runs script when the page renders it - write a value into the page itself to prove it here (this sandboxed preview blocks alert() popups on purpose). For a real alert() popup, use \"Pop out in a new tab\" instead - that's a real page, not sandboxed, so alert(document.cookie) actually pops.",
    preview: true,
  },
  "crypto-01": {
    title: "Remember-Me Cookie (Hardcoded Key)",
    linkedChallengeId: "LAB-CRYPTO-01",
    blurb: "Your cookie is base64(username::STATIC_KEY). The key is hardcoded in source and shown below - synthetic data only.",
    method: "GET",
    endpoint: "/api/labs/crypto-01",
    fields: [{ name: "cookie", label: "Cookie value (leave blank to see your own)", type: "text" }],
    startingHint: "First load with no cookie to see the key and your own cookie, then forge one for 'admin'.",
  },
  "auth-01": {
    title: "Token Check (Fails Open)",
    linkedChallengeId: "LAB-AUTH-01",
    blurb: "Tokens are really HMAC-signed - the bug is in the verification code, not the crypto. Synthetic data only.",
    method: "POST",
    endpoint: "/api/labs/auth-01",
    fields: [{ name: "token", label: "Garbage Token", type: "textarea" }],
    secondaryField: { name: "token", label: "Forged Incomplete Token", type: "textarea" },
    explainer: "The advanced flag wants you to actually forge a header (needs a real \"alg\" field, e.g. {\"alg\":\"HS256\",\"typ\":\"JWT\"}) and a payload (any non-empty JSON, e.g. {\"role\":\"admin\"}) - base64url-encode each (CyberChef's 'To Base64' + URL-safe alphabet works) - and submit it with the signature missing entirely.",
    startingHint: "Two separate flags here, two separate ways to break verification without ever needing the signing key.",
  },
  "config-01": {
    title: "Order Lookup (Error Leak + Open CORS)",
    linkedChallengeId: "LAB-CONFIG-01",
    blurb: "Looks up an order by numeric id. Synthetic data only.",
    method: "GET",
    endpoint: "/api/labs/config-01",
    fields: [{ name: "id", label: "Order ID", type: "text", defaultValue: "1" }],
    headerFields: [{ name: "x-demo-origin", label: "Pretend caller Origin (X-Demo-Origin header)" }],
    startingHint: "Two separate bugs here, two separate flags - look closely at both the Order ID field and the Origin header.",
  },
};
