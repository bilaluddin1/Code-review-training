"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PLAYGROUNDS } from "@/lib/labsPlaygroundConfig";

export default function PlaygroundPage() {
  const params = useParams<{ id: string }>();
  const config = PLAYGROUNDS[params.id];
  const [values, setValues] = useState<Record<string, string>>(
    Object.fromEntries((config?.fields ?? []).map((f) => [f.name, f.defaultValue ?? ""]))
  );
  const [headerValues, setHeaderValues] = useState<Record<string, string>>(
    Object.fromEntries((config?.headerFields ?? []).map((f) => [f.name, ""]))
  );
  const [response, setResponse] = useState<{ status: number; body: unknown; headers: Record<string, string> } | null>(null);
  const [loading, setLoading] = useState(false);

  if (!config) {
    return <div className="p-8">No sandbox named &quot;{params.id}&quot;.</div>;
  }

  const send = async () => {
    setLoading(true);
    try {
      let url = config.endpoint;
      const init: RequestInit = { method: config.method, headers: {} };
      if (config.method === "GET") {
        const qs = new URLSearchParams(values).toString();
        url = `${url}?${qs}`;
        init.headers = { ...headerValues };
      } else {
        init.headers = { "Content-Type": "application/json" };
        init.body = JSON.stringify(values);
      }
      const res = await fetch(url, init);
      const body = await res.json().catch(() => null);
      const headers: Record<string, string> = {};
      res.headers.forEach((v, k) => (headers[k] = v));
      setResponse({ status: res.status, body, headers });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <div className="rounded-md bg-yellow-50 border border-yellow-300 p-3 text-sm text-yellow-800">
          Training sandbox - synthetic data only. Nothing here touches a real system.
        </div>
        <Card>
          <CardHeader>
            <CardTitle>{config.title}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{config.blurb}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {config.fields.map((f) => (
              <div key={f.name} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                {f.type === "textarea" ? (
                  <Textarea
                    value={values[f.name]}
                    placeholder={f.placeholder}
                    onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  />
                ) : (
                  <Input
                    type={f.type === "number" ? "number" : "text"}
                    value={values[f.name]}
                    placeholder={f.placeholder}
                    onChange={(e) => setValues((v) => ({ ...v, [f.name]: e.target.value }))}
                  />
                )}
              </div>
            ))}
            {(config.headerFields ?? []).map((f) => (
              <div key={f.name} className="space-y-1">
                <label className="text-sm font-medium">{f.label}</label>
                <Input
                  value={headerValues[f.name]}
                  placeholder={f.placeholder}
                  onChange={(e) => setHeaderValues((v) => ({ ...v, [f.name]: e.target.value }))}
                />
              </div>
            ))}
            <p className="text-xs text-gray-500 italic">{config.startingHint}</p>
            <Button onClick={send} disabled={loading}>
              {loading ? "Sending..." : "Send request"}
            </Button>
          </CardContent>
        </Card>

        {response && (
          <Card>
            <CardHeader>
              <CardTitle>Response - HTTP {response.status}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded overflow-x-auto">
                {JSON.stringify(response.body, null, 2)}
              </pre>
              <p className="text-xs font-medium mt-3 mb-1">Response headers</p>
              <pre className="bg-gray-900 text-blue-300 text-xs p-3 rounded overflow-x-auto">
                {JSON.stringify(response.headers, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {config.preview && response && typeof (response.body as { html?: string })?.html === "string" && (
          <Card>
            <CardHeader>
              <CardTitle>Rendered as HTML (sandboxed - no cookie/DOM access to the rest of the app)</CardTitle>
            </CardHeader>
            <CardContent>
              <iframe
                sandbox="allow-scripts allow-modals"
                // allow-modals is ONLY so alert()/confirm()/prompt() aren't
                // silently swallowed (sandboxed iframes block them by
                // default) - it grants nothing else. No allow-same-origin,
                // so this iframe gets its own unique,
                // throwaway origin - document.cookie here is a private jar
                // that shares NOTHING with the real app, any other tab, or
                // any real user's session. The seed script below plants a
                // fake session cookie into that isolated jar before the
                // player's payload runs, so a document.cookie-stealing
                // payload (e.g. alert(document.cookie)) pops a believable
                // value - proving real impact without ever touching
                // anything real. This is the same trick a reflected/stored
                // XSS demo on a real site would show, just fully contained.
                srcDoc={`<script>document.cookie = "session_id=sess_8f2a91cd4b7e3f06; path=/";<\/script>${(response.body as { html: string }).html}`}
                className="w-full h-48 border rounded bg-white"
              />
            </CardContent>
          </Card>
        )}

        <p className="text-sm text-gray-500">
          Go back to the lab list, select this lab (&quot;{config.linkedChallengeId}&quot;), and pick the vulnerable
          line(s) in the code - now that you&apos;ve seen the real impact.
        </p>
      </div>
    </div>
  );
}
