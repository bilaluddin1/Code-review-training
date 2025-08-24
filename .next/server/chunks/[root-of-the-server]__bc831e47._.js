module.exports = {

"[project]/.next-internal/server/app/api/admin/challenges/route/actions.js [app-rsc] (server actions loader, ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({});
}}),
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}}),
"[project]/src/data/challenges.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "challenges": (()=>challenges)
});
const challenges = [
    {
        "id": "DEMO",
        "title": "How to Play: Demo Challenge",
        "description": "Use it to practice how to view code, check hints, read explanations, and submit answers in this lab environment.",
        "difficulty": "beginner",
        "vulnerableLines": [
            3
        ],
        "hints": [
            "There is no security bug here—just a Hello World!",
            "Use this challenge to learn how the interface works.",
            "Try submitting any answer to see how submissions are handled."
        ],
        "explanations": {
            "3": "Good work"
        },
        "code": "@GetMapping(\"/hello-world\")\npublic ResponseEntity<String> helloWorld() {\n    return ResponseEntity.ok(\"I am vulnerable line!\");\n}",
        "labUrl": "/demo",
        "maxSelectableLines": 1
    },
    {
        "id": "CHALLENGE1",
        "title": "Open Door",
        "description": "Find the obvious SSRF vulnerability in this API",
        "code": "@GetMapping(\"/open-door\")\n    public ResponseEntity<String> fetchUrl(@RequestParam String url) {\n        try {\n            HttpClient client = HttpClient.newHttpClient();\n            HttpRequest request = HttpRequest.newBuilder()\n                    .uri(URI.create(url))\n                    .GET()\n                    .build();\n            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n            return ResponseEntity.status(response.statusCode()).body(response.body());\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().body(\"Error: \" + e.getMessage());\n        }\n    }",
        "vulnerableLines": [
            6,
            9
        ],
        "difficulty": "beginner",
        "hints": [
            "Look for places where user input is passed directly without sanitization"
        ],
        "explanations": {
            "6": "Uses unvalidated user input to build the request URL, allowing SSRF.",
            "9": "Sends server-side request to attacker-controlled URL."
        },
        "labUrl": "https://musabkhan.me/lab/1",
        "maxSelectableLines": 2
    },
    {
        "id": "CHALLENGE2",
        "title": "Basic Blacklist",
        "description": "The server blocks obvious localhost patterns, but its defenses are naive.",
        "difficulty": "beginner",
        "vulnerableLines": [
            3,
            9,
            12
        ],
        "hints": [
            "How many ways can you write the same IP address?",
            "Does 'contains' catch everything that resolves to localhost?"
        ],
        "explanations": {
            "3": "The 'contains' check only blocks exact string matches for 'localhost' and '127.0.0.1'. It fails to detect other numeric notations that resolve to localhost, enabling SSRF.",
            "9": "Uses unvalidated user input to build the request URL, allowing SSRF.",
            "12": "Sends server-side request to attacker-controlled URL."
        },
        "code": "@GetMapping(\"/bypass-basic\")\n    public ResponseEntity<String> fetchDecimal(@RequestParam String url) {\n        if (url.contains(\"localhost\") || url.contains(\"127.0.0.1\")) {\n            return ResponseEntity.badRequest().body(\"Blocked by blacklist: localhost and 127.0.0.1 are not allowed\");\n        }\n        try {\n            HttpClient client = HttpClient.newHttpClient();\n            HttpRequest request = HttpRequest.newBuilder()\n                    .uri(URI.create(url))\n                    .GET()\n                    .build();\n            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n            return ResponseEntity.status(response.statusCode()).body(response.body());\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().body(\"Error: \" + e.getMessage());\n        }\n    }",
        "labUrl": "/bypass-basic?url=here",
        "maxSelectableLines": 3
    },
    {
        "id": "CHALLENGE3",
        "title": "Sixth Sense",
        "description": "Even with IPv4 blacklisting, IPv6 can be a backdoor.",
        "difficulty": "intermediate",
        "vulnerableLines": [
            4,
            9,
            15,
            23
        ],
        "hints": [
            "Can loopback still be accessed if formatted in a certain way?",
            "Why is ::1 explicitly allowed?",
            "Notice what addresses are being blocked—and what isn't."
        ],
        "explanations": {
            "4": "Blocks IPv4 and localhost but ignores IPv6 attacks (e.g., ::1), letting SSRF to local services through.",
            "9": "Uses unvalidated user input to build the request URL, allowing SSRF.",
            "15": "This logic explicitly permits requests to the IPv6 loopback (::1), allowing attackers to bypass blacklist filters and trigger SSRF to internal services.",
            "23": "Sends server-side request to attacker-controlled URL."
        },
        "code": "@GetMapping(\"/sixth-sense\")\n    public ResponseEntity<String> fetchIpv6(@RequestParam String url) {\n        if (\n            url.contains(\"127.0.0.1\") || url.contains(\"localhost\") || url.matches(\".*\\b(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?\\b.*\") || url.matches(\".*\\b\\d{7,10}(:\\d+)?\\b.*\")\n        ) {\n            return ResponseEntity.badRequest().body(\"Blocked by blacklist: IPv4 addresses and localhost are not allowed\");\n        }\n        try {\n            URI uri = URI.create(url);\n            String host = uri.getHost();\n            if (host == null) {\n                return ResponseEntity.badRequest().body(\"Invalid IPv6 loopback address. Use http://[::1]:PORT/\");\n            }\n            String normalizedHost = host.replace(\"[\", \"\").replace(\"]\", \"\");\n            if (!normalizedHost.equals(\"::1\") && !normalizedHost.equalsIgnoreCase(\"0:0:0:0:0:0:0:1\")) {\n                return ResponseEntity.badRequest().body(\"Invalid IPv6 loopback address. Use http://[::1]:PORT/\");\n            }\n            HttpClient client = HttpClient.newHttpClient();\n            HttpRequest request = HttpRequest.newBuilder()\n                    .uri(uri)\n                    .GET()\n                    .build();\n            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n            return ResponseEntity.status(response.statusCode()).body(response.body());\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().body(\"Error: \" + e.getMessage());\n        }\n    }",
        "labUrl": "/sixth-sense?url=here",
        "maxSelectableLines": 4
    },
    {
        "id": "CHALLENGE4",
        "title": "Name Game",
        "description": "The server fetches DNS data from a user-supplied URL, but can you trick it into talking to internal systems?",
        "difficulty": "intermediate",
        "vulnerableLines": [
            3,
            15,
            18,
            21
        ],
        "hints": [
            "Think about the security of DNS lookups.",
            "Check how the server handles the user-provided URL.",
            "Is there any protection against internal IP resolution?"
        ],
        "explanations": {
            "3": "Blacklist approach vulnerable to bypasses",
            "15": "Replaces hostname with IP but doesn't block internal IPs—enables SSRF after DNS resolution.",
            "18": "This lets user input control the final destination after DNS resolution.",
            "21": "Sends server-side request to attacker-controlled URL."
        },
        "code": "@GetMapping(\"/name-game\")\npublic ResponseEntity<String> fetchDns(@RequestParam String url) {\n    if (url.matches(\".*\\b(\\d{1,3}\\.){3}\\d{1,3}(:\\d+)?\\b.*\") || url.matches(\".*\\b\\d{7,10}(:\\d+)?\\b.*\") || url.matches(\".*\\[.*:.*:.*\\].*\") || url.contains(\"127.0.0.1\")  || url.contains(\"localhost\")\n    ) {\n        return ResponseEntity.badRequest().body(\"Blocked by blacklist: direct IP addresses are not allowed\");\n    }\n    try {\n        URI uri = URI.create(url);\n        String host = uri.getHost();\n        if (host == null) {\n            return ResponseEntity.badRequest().body(\"Invalid host in URL\");\n        }\n        java.net.InetAddress address = java.net.InetAddress.getByName(host);\n        String resolvedIp = address.getHostAddress();\n        String newUrl = url.replaceFirst(host, resolvedIp);\n        HttpClient client = HttpClient.newHttpClient();\n        HttpRequest request = HttpRequest.newBuilder()\n            .uri(URI.create(newUrl))\n            .GET()\n            .build();\n        HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n        return ResponseEntity.status(response.statusCode()).body(response.body() + \"\n[Resolved IP: \" + resolvedIp + \"]\");\n    } catch (Exception e) {\n        return ResponseEntity.badRequest().body(\"Error: \" + e.getMessage());\n    }\n}",
        "labUrl": "/name-game?url=here",
        "maxSelectableLines": 4
    },
    {
        "id": "CHALLENGE5",
        "title": "Real World",
        "description": "Real world live exploitation",
        "code": "<?php\nif (isset($_GET['url'])) {\n    $ch = curl_init($_GET['url']);\n    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);\n    $output = curl_exec($ch);\n    curl_close($ch);\n    echo \"<pre>\" . htmlspecialchars($output) . \"</pre>\";\n} else {\n    echo \"Please provide a URL.\";\n}",
        "vulnerableLines": [
            5
        ],
        "difficulty": "intermediate",
        "hints": [
            "Can we use file protocol ?",
            "There is a flag in tmp directory"
        ],
        "explanations": {
            "5": "Using unsanitize user input is directly passed in curl_exec() function"
        },
        "labUrl": "http://testphp.vulnweb.com/",
        "maxSelectableLines": 1
    },
    {
        "id": "XSS",
        "title": "Easy XSS 1",
        "description": "This is demo XSS Challenge",
        "code": "import java.io.*;\nimport java.net.*;\n\npublic class SSRFVulnerable {\n    public static void main(String[] args) throws Exception {\n        String url = args[0]; // attacker controls this\n        URLConnection conn = new URL(url).openConnection();\n        BufferedReader in = new BufferedReader(new InputStreamReader(conn.getInputStream()));\n        String inputLine;\n        while ((inputLine = in.readLine()) != null)\n            System.out.println(inputLine);\n        in.close();\n    }\n}\n",
        "vulnerableLines": [
            10
        ],
        "difficulty": "beginner",
        "hints": [
            "Line#10 - Vulnerable"
        ],
        "explanations": {
            "10": "This is vulnerable to XSS"
        },
        "labUrl": "https://musabkhan.me/xss/lab/1",
        "maxSelectableLines": 1,
        "flag": "flat{xss_demo_1}"
    }
];
}}),
"[externals]/fs/promises [external] (fs/promises, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}}),
"[externals]/path [external] (path, cjs)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}}),
"[project]/src/app/api/admin/challenges/route.ts [app-route] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "DELETE": (()=>DELETE),
    "GET": (()=>GET),
    "POST": (()=>POST),
    "PUT": (()=>PUT)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/challenges.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
;
;
const CHALLENGES_FILE_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'src/data/challenges.ts');
async function GET(req) {
    try {
        console.log('GET /api/admin/challenges called');
        // Temporarily bypass session check for development
        // const isAdmin = await isAdminSession(req);
        const isAdmin = true; // Temporary bypass
        console.log('Admin session check result:', isAdmin);
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        console.log('Returning challenges:', __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].length, 'challenges');
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"]);
    } catch (error) {
        console.error('Error in GET /api/admin/challenges:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    try {
        // Temporarily bypass session check for development
        // const isAdmin = await isAdminSession(req);
        const isAdmin = true; // Temporary bypass
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const challenge = await req.json();
        // Validate required fields
        if (!challenge.id || !challenge.title || !challenge.code || !challenge.vulnerableLines) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        // Check if challenge already exists
        const existingIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].findIndex((c)=>c.id === challenge.id);
        if (existingIndex !== -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Challenge with this ID already exists'
            }, {
                status: 409
            });
        }
        // Add new challenge
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].push(challenge);
        await updateChallengesFile();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(challenge, {
            status: 201
        });
    } catch (error) {
        console.error('Error in POST /api/admin/challenges:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function PUT(req) {
    try {
        // Temporarily bypass session check for development
        // const isAdmin = await isAdminSession(req);
        const isAdmin = true; // Temporary bypass
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const challenge = await req.json();
        // Validate required fields
        if (!challenge.id || !challenge.title || !challenge.code || !challenge.vulnerableLines) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Missing required fields'
            }, {
                status: 400
            });
        }
        // Find and update challenge
        const existingIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].findIndex((c)=>c.id === challenge.id);
        if (existingIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Challenge not found'
            }, {
                status: 404
            });
        }
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"][existingIndex] = challenge;
        await updateChallengesFile();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(challenge);
    } catch (error) {
        console.error('Error in PUT /api/admin/challenges:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
async function DELETE(req) {
    try {
        // Temporarily bypass session check for development
        // const isAdmin = await isAdminSession(req);
        const isAdmin = true; // Temporary bypass
        if ("TURBOPACK compile-time falsy", 0) {
            "TURBOPACK unreachable";
        }
        const { searchParams } = new URL(req.url);
        const id = searchParams.get('id');
        if (!id) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Challenge ID is required'
            }, {
                status: 400
            });
        }
        // Prevent deletion of DEMO challenge
        if (id === 'DEMO') {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Cannot delete DEMO challenge'
            }, {
                status: 403
            });
        }
        // Find and remove challenge
        const existingIndex = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].findIndex((c)=>c.id === id);
        if (existingIndex === -1) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: 'Challenge not found'
            }, {
                status: 404
            });
        }
        const deletedChallenge = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"].splice(existingIndex, 1)[0];
        await updateChallengesFile();
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: 'Challenge deleted successfully',
            challenge: deletedChallenge
        });
    } catch (error) {
        console.error('Error in DELETE /api/admin/challenges:', error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: 'Internal server error'
        }, {
            status: 500
        });
    }
}
// Helper function to update the challenges file
async function updateChallengesFile() {
    try {
        const challengesContent = `import type { Challenge } from "../types/challenge"

export const challenges: Challenge[] = ${JSON.stringify(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$challenges$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["challenges"], null, 2)}`;
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(CHALLENGES_FILE_PATH, challengesContent, 'utf-8');
    } catch (error) {
        console.error('Error updating challenges file:', error);
        throw new Error('Failed to update challenges file');
    }
}
}}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__bc831e47._.js.map