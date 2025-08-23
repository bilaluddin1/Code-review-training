import type { Challenge } from "../types/challenge"

export const challenges: Challenge[] = [
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
]