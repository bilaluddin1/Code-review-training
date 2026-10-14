import type { Challenge } from "../types/challenge"

export const challenges: Challenge[] = [
  {
    "id": "DEMO",
    "title": "How to Play: Demo Challenge",
    "description": "Use it to practice how to view code, check hints, read explanations, and submit answers in this lab environment. For this walkthrough, the flag is FLAG{getting_started} - try pasting it into Submit Flag to see how that works too.",
    "difficulty": "beginner",
    "vulnerableLines": [
      3
    ],
    "hints": [
      "There is no security bug here\u2014just a Hello World!",
      "Use this challenge to learn how the interface works.",
      "Try submitting any answer to see how submissions are handled."
    ],
    "explanations": {
      "3": "Good work"
    },
    "code": "@GetMapping(\"/hello-world\")\npublic ResponseEntity<String> helloWorld() {\n    return ResponseEntity.ok(\"I am vulnerable line!\");\n}",
    "labUrl": "/demo",
    "maxSelectableLines": 1,
    "flag": "FLAG{getting_started}"
  },
  {
    "id": "CHALLENGE1",
    "title": "New challenge",
    "description": "this is for sql injection",
    "code": "@GetMapping(\"/open-door\")\n    public ResponseEntity<String> fetchUrl(@RequestParam String url) {\n        try {\n            HttpClient client = HttpClient.newHttpClient();\n            HttpRequest request = HttpRequest.newBuilder()\n                    .uri(URI.create(url))\n                    .GET()\n                    .build();\n            HttpResponse<String> response = client.send(request, HttpResponse.BodyHandlers.ofString());\n            return ResponseEntity.status(response.statusCode()).body(response.body());\n        } catch (Exception e) {\n            return ResponseEntity.badRequest().body(\"Error: \" + e.getMessage());\n        }\n    }",
    "vulnerableLines": [
      9
    ],
    "difficulty": "beginner",
    "hints": [
      "Look for places where user input is passed directly without sanitization"
    ],
    "explanations": {
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
      "Notice what addresses are being blocked\u2014and what isn't."
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
      "15": "Replaces hostname with IP but doesn't block internal IPs\u2014enables SSRF after DNS resolution.",
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
  },
  {
    "id": "9",
    "title": "data should be persist",
    "description": "",
    "code": "testing",
    "vulnerableLines": [
      1
    ],
    "difficulty": "beginner",
    "hints": [],
    "explanations": {
      "1": "sdsd"
    },
    "maxSelectableLines": 1
  },
  {
    "id": "LAB-BAC-01",
    "title": "LAB: Order Document Access (Broken Access Control)",
    "description": "A document is loaded by its own id after the parent order's tenant was already checked. Select the vulnerable line(s), then try the live exploit.",
    "code": "[Authorization]\n[HttpGet]\n[Route(\"clients/{clientId}/orders/{orderId}/documents/{docId}\")]\npublic IActionResult GetDocument(int clientId, int orderId, int docId)\n{\n    var order = _orderService.GetById(orderId);\n    if (order == null || order.ClientId != clientId)\n        return NotFound();\n\n    var doc = _documentService.GetById(docId);\n    if (doc == null)\n        return NotFound();\n\n    return Ok(doc);\n}",
    "vulnerableLines": [
      10
    ],
    "difficulty": "intermediate",
    "hints": [
      "The order's tenant was checked on line 7. Is docId ever tied back to that order?",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "10": "The document is loaded by its own id with no check that it belongs to orderId (or that order belongs to clientId). Any authenticated user can read any tenant's document by guessing/incrementing docId. Fix: load with GetByIdForOrder(docId, orderId) so the WHERE clause itself enforces the link, and return 404 (not 403) either way."
    },
    "labUrl": "/labs/bac-01",
    "maxSelectableLines": 1,
    "flag": "FLAG{f6de2f2645}",
    "productOrigin": "Pattern based on confirmed findings in: OmniValVMS, Knoccs, VL-Core (IDOR/missing tenant scoping)"
  },
  {
    "id": "LAB-INJ-01",
    "title": "LAB: Order Search (SQL Injection)",
    "description": "The search term is concatenated straight into a WHERE clause, and the tenant filter is appended after it. Select the vulnerable line, then try the live exploit.",
    "code": "public IEnumerable<Order> SearchOrders(string type, int clientId)\n{\n    string sql = \"SELECT * FROM Orders WHERE Type = '\" + type + \"'\";\n    sql += \" AND ClientId = \" + clientId;\n\n    return _db.CustomQuery<Order>(sql);\n}",
    "vulnerableLines": [
      3
    ],
    "difficulty": "intermediate",
    "hints": [
      "What happens if 'type' contains a single quote and a SQL comment marker?",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "3": "User input is concatenated directly into the query. A payload like Appraisal' OR '1'='1' -- comments out the rest of the clause, including the ClientId filter on line 4, returning every tenant's orders. Fix: use a parameterized query (SqlParameter / Dapper named params), never string concatenation."
    },
    "labUrl": "/labs/inj-01",
    "maxSelectableLines": 1,
    "flag": "FLAG{99fb5ff84f}",
    "productOrigin": "Pattern based on confirmed findings in: Valuelink-CrossCheck, VL-Core, VL-Direct (concatenated SQL, tenant filter appended after the injectable part)"
  },
  {
    "id": "LAB-INJ-02",
    "title": "LAB: Engagement Instructions (Stored XSS)",
    "description": "Instructions written by another party are trusted as HTML with no sanitizer. Select the vulnerable line, then try the live exploit.",
    "code": "ngOnInit(): void {\n  this.orderService.orderDetails$.subscribe((data) => {\n    this.engagementInstructions = this.sanitizer.bypassSecurityTrustHtml(\n      data.engagementInstructions\n    );\n  });\n}\n// template: <div [innerHTML]=\"engagementInstructions\"></div>",
    "vulnerableLines": [
      3
    ],
    "difficulty": "intermediate",
    "hints": [
      "bypassSecurityTrustHtml does exactly what its name says - bypasses Angular's own XSS protection.",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "3": "bypassSecurityTrustHtml() is called on content written by another party with no sanitizing step first. Anything they write, including <script>/onerror handlers, executes in the viewer's session. Fix: sanitize with DOMPurify before the bypass call (or better, don't bypass at all and let Angular's default [innerHTML] sanitizer handle it)."
    },
    "labUrl": "/labs/inj-02",
    "maxSelectableLines": 1,
    "flag": "FLAG{3f6daa1cd6}",
    "productOrigin": "Pattern based on confirmed findings in: AppraiserLinkConnect (bypassSecurityTrustHtml with no sanitizer)"
  },
  {
    "id": "LAB-CRYPTO-01",
    "title": "LAB: Remember-Me Cookie (Hardcoded Crypto Key)",
    "description": "A 'remember me' cookie is built from a hardcoded key. Select the vulnerable line, then try forging an admin cookie in the live exploit.",
    "code": "public static class CookieProtector\n{\n    private static string StaticKey = \"vl-training-demo-key-2026\";\n\n    public static string Encrypt(string username)\n    {\n        string raw = username + \"::\" + StaticKey;\n        return Convert.ToBase64String(Encoding.UTF8.GetBytes(raw));\n    }\n}",
    "vulnerableLines": [
      3
    ],
    "difficulty": "intermediate",
    "hints": [
      "If you can read this source file, you can read StaticKey too. What stops you building your own cookie?",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "3": "The key used to build every user's cookie is a string literal committed to source. Anyone with read access to the repo can reproduce Encrypt() and forge a cookie for any username, including 'admin'. Fix: never derive an auth token from a value only the source code holds - use a server-issued, random, single-use session token stored server-side, with the key itself in Key Vault, not source."
    },
    "labUrl": "/labs/crypto-01",
    "maxSelectableLines": 1,
    "flag": "FLAG{43141c521f}",
    "productOrigin": "Pattern based on confirmed findings in: VL-Core, AppraiserLinkConnect, Valuelink-CrossCheck, ValueLinkEPC (shared EncryptorDecryptorEngine helper, hardcoded key)"
  },
  {
    "id": "LAB-AUTH-01",
    "title": "LAB: Token Validity Check (Fails Open)",
    "description": "A helper decides whether a token is still valid. Select the vulnerable line, then try the live exploit with a malformed token.",
    "code": "public static bool IsTokenExpired(string token)\n{\n    try\n    {\n        var principal = handler.ValidateToken(token, validationParams, out _);\n        return false;\n    }\n    catch (Exception)\n    {\n        return false;\n    }\n}",
    "vulnerableLines": [
      10
    ],
    "difficulty": "intermediate",
    "hints": [
      "What does this function return if the token is garbage and ValidateToken throws?",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "10": "If validation throws for any reason (malformed token, bad signature, wrong algorithm), the catch block returns false - meaning 'not expired' - instead of denying the request. A caller sending a broken token gets treated as if they had a valid one. Fix: an exception during validation must deny access (return true from IsTokenExpired, or better, make the caller fail closed on any exception)."
    },
    "labUrl": "/labs/auth-01",
    "maxSelectableLines": 1,
    "flag": "FLAG{842139d233}",
    "productOrigin": "Pattern based on confirmed findings in: VL-Core, Knoccs, OmniValVMS, ValueLinkEPC (shared JWTBuilder helper, fail-open IsTokenExpired)"
  },
  {
    "id": "LAB-CONFIG-01",
    "title": "LAB: Order Lookup (Error Leak + Open CORS)",
    "description": "Two misconfigurations in one small handler. Select both vulnerable lines, then try the live exploit.",
    "code": "app.UseCors(builder => builder\n    .SetIsOriginAllowed(origin => true)\n    .AllowCredentials());\n\n[HttpGet(\"orders/{id}\")]\npublic IActionResult GetOrder(string id)\n{\n    try\n    {\n        int orderId = int.Parse(id);\n        return Ok(_orderService.GetById(orderId));\n    }\n    catch (Exception ex)\n    {\n        return StatusCode(500, ex.Message);\n    }\n}",
    "vulnerableLines": [
      2,
      15
    ],
    "difficulty": "intermediate",
    "hints": [
      "One line is about who is allowed to call this. The other is about what gets sent back when something goes wrong.",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "2": "SetIsOriginAllowed(origin => true) combined with AllowCredentials() lets ANY website make authenticated requests to this API on a victim's behalf. Fix: use WithOrigins(...) with an explicit allow-list, never reflect-any-origin with credentials.",
      "15": "The raw exception message is returned to the client. Sending id=abc reveals internal type/parsing details an attacker can use to fingerprint the stack. Fix: log ex internally, return a generic error to the client."
    },
    "labUrl": "/labs/config-01",
    "maxSelectableLines": 2,
    "flag": "FLAG{530b775212}",
    "productOrigin": "Pattern based on confirmed findings in: Knoccs (CORS allow-any+credentials), multiple repos (exception message returned to client)"
  }
]