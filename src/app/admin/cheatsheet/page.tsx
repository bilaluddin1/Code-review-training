"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

type LabAnswer = {
  id: string
  title: string
  labUrl: string
  steps: string[]
  flags: string[]
}

// Admin-only reference - every payload needed to solve every lab, in one
// place, so the trainer isn't hunting through 6 separate pages mid-session.
// Never linked from anywhere a player can reach; gated the same way every
// other /admin page is (admin-login session check below).
const ANSWERS: LabAnswer[] = [
  {
    id: "LAB-BAC-01",
    title: "Secure Notes (IDOR)",
    labUrl: "/labs/bac-01",
    steps: ["Change Note ID from 101 to 102 (Bob's note) and send the request."],
    flags: ["FLAG{f6de2f2645}"],
  },
  {
    id: "LAB-INJ-01",
    title: "Order Search (SQL Injection)",
    labUrl: "/labs/inj-01",
    steps: ["Order type: Appraisal' OR '1'='1' --"],
    flags: ["FLAG{99fb5ff84f}"],
  },
  {
    id: "LAB-INJ-02",
    title: "Engagement Instructions (Stored XSS)",
    labUrl: "/labs/inj-02",
    steps: [
      "Instructions: <script>alert(document.cookie)</script> - then use \"Pop out in a new tab\" for a real alert() popup",
      "Or, to see it written straight into the embedded preview: <img src=x onerror=\"document.body.innerHTML=document.cookie\">",
    ],
    flags: ["FLAG{3f6daa1cd6}"],
  },
  {
    id: "LAB-CRYPTO-01",
    title: "Remember-Me Cookie (Hardcoded Crypto Key)",
    labUrl: "/labs/crypto-01",
    steps: [
      "Load with no cookie first to see the static key and your own cookie.",
      "Cookie value field: YWRtaW46OnZsLXRyYWluaW5nLWRlbW8ta2V5LTIwMjY= (base64 of admin::vl-training-demo-key-2026)",
    ],
    flags: ["FLAG{43141c521f}"],
  },
  {
    id: "LAB-AUTH-01",
    title: "Token Check (Fails Open)",
    labUrl: "/labs/auth-01",
    steps: [
      "GET the page first to fetch a real sample token (not needed for the exploit itself).",
      "Token field: garbage (any malformed, non-token string triggers the fail-open path).",
    ],
    flags: ["FLAG{842139d233}"],
  },
  {
    id: "LAB-CONFIG-01",
    title: "Order Lookup (Error Leak + Open CORS)",
    labUrl: "/labs/config-01",
    steps: [
      "Order ID: abc (non-numeric, non-empty) -> error leak flag.",
      "Pretend caller Origin: https://evil.example (must start with https://) -> CORS flag, independent of Order ID.",
    ],
    flags: ["FLAG{530b775212}  (error leak)", "FLAG{a1c9f04e73}  (open CORS)"],
  },
]

export default function CheatsheetPage() {
  const [authenticated, setAuthenticated] = useState<boolean | null>(null)
  const router = useRouter()

  useEffect(() => {
    fetch("/api/admin-login", { method: "GET" })
      .then((res) => res.json())
      .then((data) => {
        if (!data.authenticated) {
          router.replace("/admin")
        } else {
          setAuthenticated(true)
        }
      })
  }, [router])

  if (authenticated !== true) return null

  return (
    <div className="max-w-4xl mx-auto p-8 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Trainer Cheat Sheet</h1>
        <Button variant="outline" onClick={() => router.push("/admin/dashboard")}>
          Back to dashboard
        </Button>
      </div>
      <p className="text-sm text-gray-500">
        Every working payload for every lab, in one place - admin-only, never linked from anywhere a player can
        reach.
      </p>
      {ANSWERS.map((lab) => (
        <Card key={lab.id}>
          <CardHeader>
            <CardTitle className="text-base">
              {lab.id} - {lab.title}{" "}
              <span className="text-xs font-normal text-gray-500">({lab.labUrl})</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            <ul className="list-disc list-inside text-sm space-y-1">
              {lab.steps.map((s, i) => (
                <li key={i}>{s}</li>
              ))}
            </ul>
            <div className="text-sm font-mono bg-gray-900 text-green-400 rounded p-2">
              {lab.flags.map((f, i) => (
                <div key={i}>{f}</div>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
