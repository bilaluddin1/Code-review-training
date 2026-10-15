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
      "There is no security bug here\u2014just a Hello World!",
      "Use this challenge to learn how the interface works.",
      "Try submitting any answer to see how submissions are handled.",
      "Click 'Go to Lab' to try the real flow - it works the same way for every lab."
    ],
    "explanations": {
      "3": "Good work"
    },
    "code": "@GetMapping(\"/hello-world\")\npublic ResponseEntity<String> helloWorld() {\n    return ResponseEntity.ok(\"I am vulnerable line!\");\n}",
    "labUrl": "/labs/demo",
    "maxSelectableLines": 1,
    "flag": "FLAG{22609b82f1}"
  },
  {
    "id": "CHALLENGE1",
    "title": "LAB: 01 User Search Vulnerability",
    "description": "Identify where user input is used and find improper error handling",
    "code": "using System;\nusing System.Collections.Generic;\nusing System.Data;\nusing System.Data.SqlClient;\nusing System.Threading.Tasks;\nusing Microsoft.AspNetCore.Mvc;\n{\n    [Route(\"api/lab1/users\")]\n    [ApiController]\n    public class Lab1_UserSearchController : ControllerBase\n    {\n        private readonly string _connectionString;\n        public Lab1_UserSearchController(IConfiguration config)\n        {\n            _connectionString = config.GetConnectionString(\"DefaultConnection\");\n        }\n        [HttpGet(\"search\")]\n        public async Task<IActionResult> SearchUsers([FromQuery] string username)\n        {\n            if (string.IsNullOrWhiteSpace(username))\n            {\n                return BadRequest(new { message = \"Username is required\" });\n            }\n            try\n            {\n                using (SqlConnection conn = new SqlConnection(_connectionString))\n                {\n                    await conn.OpenAsync();\n                    string query = \"SELECT User_Id, Username, Email, Role FROM tbl_Users WHERE Username = '\" + username + \"'\";\n                    SqlCommand cmd = new SqlCommand(query, conn);\n                    SqlDataReader reader = await cmd.ExecuteReaderAsync();\n                    List<dynamic> users = new List<dynamic>();\n                    while (await reader.ReadAsync())\n                    {\n                        users.Add(new\n                        {\n                            userId = reader.GetInt32(0),\n                            username = reader.GetString(1),\n                            email = reader.GetString(2),\n                            role = reader.GetString(3)\n                        });\n                    }\n                    return Ok(new { success = true, data = users });\n                }\n            }\n            catch (Exception ex)\n            {\n                return StatusCode(500, new { error = ex.Message });\n            }\n        }\n    }\n}\n",
    "vulnerableLines": [
      29,
      48
    ],
    "difficulty": "beginner",
    "hints": [
      "Look for places where user input is passed directly without sanitization"
    ],
    "explanations": {
      "29": "User-controlled input (username) is directly concatenated into a SQL query.",
      "48": "The information is returned directly to the client."
    },
    "labUrl": "https://musabkhan.me/lab/1",
    "maxSelectableLines": 2
  },
  {
    "id": "LAB: 02",
    "title": "LAB: 02 Stored Procedure with Dynamic SQL",
    "description": "This lab demonstrates the EXACT vulnerability pattern found in our products",
    "code": "CREATE PROCEDURE [dbo].[Lab2_GetClientDocuments_Vulnerable]\n(\n    @ClientId INT,\n    @DocumentType NVARCHAR(50),\n    @SearchKeyword NVARCHAR(MAX),\n    @SortColumn NVARCHAR(50),\n    @SortOrder NVARCHAR(10),\n    @Offset INT,\n    @Limit INT,\n    @TotalRecords INT OUTPUT\n)\nAS\nBEGIN\n    \n    DECLARE @SQL NVARCHAR(MAX)\n    DECLARE @WhereClause NVARCHAR(MAX) = ' WHERE Client_Id = ' + CAST(@ClientId AS NVARCHAR(10))\n    \n    IF @DocumentType IS NOT NULL AND @DocumentType != ''\n    BEGIN\n        SET @WhereClause = @WhereClause + ' AND Document_Type = ''' + @DocumentType + ''''\n    END\n    \n    IF @SearchKeyword IS NOT NULL AND @SearchKeyword != ''\n    BEGIN\n        SET @WhereClause = @WhereClause + ' AND (Document_Name LIKE ''%' + @SearchKeyword + '%'' OR Document_Description LIKE ''%' + @SearchKeyword + '%'')'\n    END\n    \n    DECLARE @OrderClause NVARCHAR(200) = ' ORDER BY ' + @SortColumn + ' ' + @SortOrder\n    \n    -- Build the complete query\n    SET @SQL = 'SELECT Document_Id, Document_Name, Document_Type, Document_Description, Created_On, Created_By ' +\n               'FROM tbl_Client_Documents ' + \n               @WhereClause + \n               @OrderClause;\n    \n    EXEC(@SQL)\n    \nEND\nGO\n",
    "vulnerableLines": [
      20,
      25,
      28
    ],
    "difficulty": "intermediate",
    "hints": [
      "Any line where user input is concatenated into an SQL string"
    ],
    "explanations": {
      "20": "Unsensitized string concatenation",
      "25": "Classic SQL injection vector using LIKE",
      "28": "cannot be parameterized \u2192 must be whitelisted"
    },
    "maxSelectableLines": 3
  },
  {
    "id": "LAB: 03",
    "title": "LAB: 03 Authentication Bypass",
    "description": "Authentication queries are the MOST DANGEROUS place for SQL injection!",
    "code": "{\n    [Route(\"api/lab3/auth\")]\n    [ApiController]\n    public class Lab3_AuthenticationController : ControllerBase\n    {\n        private readonly string _connectionString;\n        public Lab3_AuthenticationController(IConfiguration config)\n        {\n            _connectionString = config.GetConnectionString(\"DefaultConnection\");\n        }\n      \n        [HttpPost(\"login\")]\n        public async Task<IActionResult> Login([FromBody] LoginRequest request)\n        {\n            if (string.IsNullOrWhiteSpace(request.Username) || \n                string.IsNullOrWhiteSpace(request.Password))\n            {\n                return BadRequest(new { message = \"Username and password are required\" });\n            }\n            try\n            {\n                using (SqlConnection conn = new SqlConnection(_connectionString))\n                {\n                    await conn.OpenAsync();\n                    string query = \"SELECT User_Id, Username, Email, Role, Client_Id \" +\n                                  \"FROM tbl_Users \" +\n                                  \"WHERE Username = '\" + request.Username + \"' \" +\n                                  \"AND Password = '\" + request.Password + \"' \" +\n                                  \"AND Active = 1\";\n                    SqlCommand cmd = new SqlCommand(query, conn);\n                    SqlDataReader reader = await cmd.ExecuteReaderAsync();\n                    if (await reader.ReadAsync())\n                    {\n                        var user = new\n                        {\n                            userId = reader.GetInt32(0),\n                            username = reader.GetString(1),\n                            email = reader.GetString(2),\n                            role = reader.GetString(3),\n                            clientId = reader.IsDBNull(4) ? (int?)null : reader.GetInt32(4)\n                        };\n                        // Generate JWT token \n                        string token = GenerateFakeJwtToken(user.userId, user.username, user.role);\n                        return Ok(new\n                        {\n                            success = true,\n                            message = \"Login successful\",\n                            token = token,\n                            user = user\n                        });\n                    }\n                    return Unauthorized(new { message = \"Invalid username or password\" });\n                }\n            }\n            catch (Exception ex)\n            {\n               \n                return StatusCode(500, new { error = ex.Message });\n            }\n        }\n        private string GenerateFakeJwtToken(int userId, string username, string role)\n        {\n            return $\"fake-jwt-token-{userId}-{username}-{role}\";\n        }\n    }\n    public class LoginRequest\n    {\n        public string Username { get; set; }\n        public string Password { get; set; }\n    }\n}\n",
    "vulnerableLines": [
      27,
      28
    ],
    "difficulty": "beginner",
    "hints": [
      "What happens if we can manipulate the WHERE clause to always be TRUE"
    ],
    "explanations": {
      "27": "They are directly concatenated into an SQL query",
      "28": "request.Username and request.Password are user-controlled."
    },
    "maxSelectableLines": 2
  },
  {
    "id": "LAB: 04",
    "title": "LAB: 04 Blind Sql Six Sense",
    "description": "This is more difficult than regular SQL injection but still very dangerous!",
    "code": "{\n    [Route(\"api/lab4/reports\")]\n    [ApiController]\n    public class Lab4_BlindSQLInjectionController : ControllerBase\n    {\n        private readonly string _connectionString;\n        public Lab4_BlindSQLInjectionController(IConfiguration config)\n        {\n            _connectionString = config.GetConnectionString(\"DefaultConnection\");\n        }\n       \n        [HttpGet(\"client/{clientId}/orders\")]\n        public async Task<IActionResult> GetClientOrders(\n            int clientId,\n            [FromQuery] string sortBy = \"order_date\",\n            [FromQuery] string sortOrder = \"DESC\")\n        {\n            try\n            {\n                using (SqlConnection conn = new SqlConnection(_connectionString))\n                {\n                    await conn.OpenAsync();\n                   \n                    string query = $@\"\n                        SELECT \n                            Order_Id, \n                            Order_Number, \n                            Product_Name, \n                            Order_Status, \n                            Order_Date,\n                            Total_Fee\n                        FROM tbl_Orders\n                        WHERE Client_Id = @ClientId\n                        AND Active = 1\n                        ORDER BY {sortBy} {sortOrder}\";\n                    SqlCommand cmd = new SqlCommand(query, conn);\n                    cmd.Parameters.AddWithValue(\"@ClientId\", clientId);\n                    SqlDataReader reader = await cmd.ExecuteReaderAsync();\n                    List<dynamic> orders = new List<dynamic>();\n                    while (await reader.ReadAsync())\n                    {\n                        orders.Add(new\n                        {\n                            orderId = reader.GetInt32(0),\n                            orderNumber = reader.GetString(1),\n                            productName = reader.GetString(2),\n                            status = reader.GetString(3),\n                            orderDate = reader.GetDateTime(4),\n                            totalFee = reader.GetDecimal(5)\n                        });\n                    }\n                    return Ok(new { data = orders, count = orders.Count });\n                }\n            }\n           \n        }\n    }\n}\n",
    "vulnerableLines": [
      35
    ],
    "difficulty": "intermediate",
    "hints": [
      "Find where parameterization is not used."
    ],
    "explanations": {
      "35": "The sortBy and sortOrder are directly interpolated into the ORDER BY clause."
    },
    "maxSelectableLines": 1
  },
  {
    "id": "Lab: 05",
    "title": "Lab: 05 Flask SQL Injection",
    "description": "",
    "code": "from flask import Flask, request, render_template\nimport psycopg2\nimport os\n\napp = Flask(__name__)\n\n\n# --- Flask Routes ---\n\n@app.route('/')\ndef index():\n    return render_template('index.html')\n\n@app.route('/products')\ndef products():\n    category = request.args.get('category', '')\n    \n    if not category:\n        return 'Please provide a product category.'\n    \n    query = f\"SELECT name, price FROM products WHERE category = '{category}' AND published = true\"\n    \n    try:\n        conn = get_db_connection()\n        cur = conn.cursor()\n        cur.execute(query)\n        results = cur.fetchall()\n        cur.close()\n        conn.close()\n        \n        return \"Search completed successfully.\"\n        \n    except Exception as e:\n        return \"Search completed successfully.\"\n\n\n@app.route('/search', methods=['GET', 'POST'])\ndef search():\n    if request.method == 'GET':\n        return render_template('search.html')\n    \n    product_name = request.form.get('name', '')\n    conn = get_db_connection()\n    cur = conn.cursor()\n    cur.execute(\"SELECT name, category, price FROM products WHERE name = %s AND published = true\", \n                [product_name])\n    products = cur.fetchall()\n    cur.close()\n    conn.close()\n    \n    return render_template('search_results.html', products=products)\n\n@app.route('/users')\ndef users():\n    conn = get_db_connection()\n    cur = conn.cursor()\n    cur.execute(\"SELECT username FROM users\")\n    users = cur.fetchall()\n    cur.close()\n    conn.close()\n    \n    return render_template('users.html', users=users)\n\nif __name__ == '__main__':\n    app.run(host='0.0.0.0', port=80, debug=False)",
    "vulnerableLines": [
      21
    ],
    "difficulty": "intermediate",
    "hints": [
      "The endpoint uses an f-string"
    ],
    "explanations": {
      "21": "The {category} variable is injected directly and raw into the SQL string."
    },
    "maxSelectableLines": 1
  },
  {
    "id": "SQL_INPUT_VALIDATION",
    "title": "SQL Input Validation",
    "description": "A stored procedure uses NVARCHAR(30) to enforce length \u2014 but does that really protect against bad input? Identify the lines that give a false sense of security.",
    "code": "CREATE PROCEDURE dbo.SelectAllCustomers\n    @City       NVARCHAR(30),\n    @PostalCode NVARCHAR(10)\nAS BEGIN\n    -- Redundant: data type already\n    --    enforces max length.\n    --    This adds zero protection.\n    IF LEN(@City) > 30\n       OR LEN(@PostalCode) > 10\n        RETURN;\n\n    -- All of these pass silently:\n    -- @City = ''     (empty)\n    -- @City = NULL   (null)\n    -- @City = '   '  (whitespace)\n    -- @PostalCode = '???' (garbage)\n\n    SELECT CustomerId, Name,\n           City, PostalCode\n    FROM   dbo.Customers\n    WHERE  City       = @City\n      AND  PostalCode = @PostalCode;\nEND;\nGO",
    "vulnerableLines": [
      8,
      9,
      10
    ],
    "difficulty": "beginner",
    "hints": [
      "NVARCHAR(30) already enforces a max length of 30 characters \u2014 so what does LEN(@City) > 30 actually catch?",
      "What happens if @City is NULL, empty, or just whitespace?",
      "The procedure silently RETURNs with no error message \u2014 is that helpful for the caller?"
    ],
    "explanations": {
      "8": "This check is redundant \u2014 SQL Server already truncates or rejects values longer than NVARCHAR(30). It provides zero additional protection and creates a false sense of security.",
      "9": "Same redundancy for @PostalCode. More importantly, it does not validate format \u2014 '???' or '!@#$%' would pass just fine.",
      "10": "Silent RETURN gives the caller no feedback about what went wrong. Use THROW with a meaningful error number and message instead."
    },
    "labUrl": "/labs/secure-coding-lab.html",
    "maxSelectableLines": 3
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
    "id": "LAB-BAC-01",
    "title": "LAB:01 Order Document Access (Broken Access Control)",
    "description": "A document is loaded by its own id after the order's tenant was already checked. Select the vulnerable line(s), then try the live exploit.",
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
    "code": "public IEnumerable<Order> SearchOrders(string type, int clientId)\n{\n    string tenantCode = GetTenantCode(clientId); // looked up server-side, never from user input\n    string sql = \"SELECT * FROM Orders WHERE Type = '\" + type + \"'\";\n    sql += \" AND ClientId = '\" + tenantCode + \"'\";\n\n    return _db.CustomQuery<Order>(sql);\n}",
    "vulnerableLines": [
      4
    ],
    "difficulty": "intermediate",
    "hints": [
      "Both concatenated lines look the same. Where does each value actually come from?",
      "A successful exploit response from the live lab includes a flag - paste it into Submit Flag. (The flag format gives nothing away - it's the same opaque pattern on every lab.)"
    ],
    "explanations": {
      "4": "Both line 4 and line 5 build the query the same way - string concatenation - but that's not what makes line 4 the bug. 'type' comes straight from the caller; 'tenantCode' is looked up server-side and never touches user input. A payload like Appraisal' OR '1'='1' -- comments out the rest of the clause, including the ClientId filter, returning every tenant's orders. Fix: use a parameterized query (SqlParameter / Dapper named params) for 'type' - concatenation isn't automatically safe or unsafe, trusted-vs-untrusted data is what matters."
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
      "This one has TWO separate bugs, and TWO separate flags - triggering the error leak doesn't also prove you found the CORS issue, and vice versa. Submit each one you find."
    ],
    "explanations": {
      "2": "SetIsOriginAllowed(origin => true) combined with AllowCredentials() lets ANY website make authenticated requests to this API on a victim's behalf. Fix: use WithOrigins(...) with an explicit allow-list, never reflect-any-origin with credentials.",
      "15": "The raw exception message is returned to the client. Sending id=abc reveals internal type/parsing details an attacker can use to fingerprint the stack. Fix: log ex internally, return a generic error to the client."
    },
    "labUrl": "/labs/config-01",
    "maxSelectableLines": 2,
    "flags": ["FLAG{530b775212}", "FLAG{a1c9f04e73}"],
    "productOrigin": "Pattern based on confirmed findings in: Knoccs (CORS allow-any+credentials), multiple repos (exception message returned to client)"
  }
]