"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { PlaygroundConfig } from "@/lib/labsPlaygroundConfig";

export default function PlaygroundPage() {
  const params = useParams<{ id: string }>();
  // Fetched rather than statically imported, so an admin's edit via the
  // lab-page editor (saved to data/playgrounds.json) shows up without a
  // rebuild - see /api/playground-config and /api/admin/playgrounds.
  const [config, setConfig] = useState<PlaygroundConfig | null | undefined>(undefined);
  const [values, setValues] = useState<Record<string, string>>({});
  const [headerValues, setHeaderValues] = useState<Record<string, string>>({});
  const [response, setResponse] = useState<{ status: number; body: unknown; headers: Record<string, string> } | null>(null);
  const [loading, setLoading] = useState(false);
  const [showHint, setShowHint] = useState(false);
  const [secondaryValue, setSecondaryValue] = useState("");
  const [secondaryResponse, setSecondaryResponse] = useState<{ status: number; body: unknown; headers: Record<string, string> } | null>(null);
  const [secondaryLoading, setSecondaryLoading] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/playground-config")
      .then((r) => r.json())
      .then((all: Record<string, PlaygroundConfig>) => {
        if (cancelled) return;
        const found = all[params.id] ?? null;
        setConfig(found);
        if (found) {
          setValues(Object.fromEntries((found.fields ?? []).map((f) => [f.name, f.defaultValue ?? ""])));
          setHeaderValues(Object.fromEntries((found.headerFields ?? []).map((f) => [f.name, ""])));
          setSecondaryValue(found.secondaryField?.defaultValue ?? "");
        }
      })
      .catch(() => { if (!cancelled) setConfig(null); });
    return () => { cancelled = true; };
  }, [params.id]);

  if (config === undefined) {
    return <div className="p-8 text-gray-500">Loading...</div>;
  }
  if (!config) {
    return <div className="p-8">No sandbox named &quot;{params.id}&quot;.</div>;
  }

  const sendBody = async (
    body: Record<string, string>,
    setResp: (r: { status: number; body: unknown; headers: Record<string, string> }) => void,
    setBusy: (b: boolean) => void
  ) => {
    setBusy(true);
    try {
      let url = config.endpoint;
      const init: RequestInit = { method: config.method, headers: {} };
      if (config.method === "GET") {
        const qs = new URLSearchParams(body).toString();
        url = `${url}?${qs}`;
        init.headers = { ...headerValues };
      } else {
        init.headers = { "Content-Type": "application/json" };
        init.body = JSON.stringify(body);
      }
      const res = await fetch(url, init);
      const responseBody = await res.json().catch(() => null);
      const headers: Record<string, string> = {};
      res.headers.forEach((v, k) => (headers[k] = v));
      setResp({ status: res.status, body: responseBody, headers });
    } finally {
      setBusy(false);
    }
  };

  const send = () => sendBody(values, setResponse, setLoading);
  const sendSecondary = () =>
    config.secondaryField && sendBody({ [config.secondaryField.name]: secondaryValue }, setSecondaryResponse, setSecondaryLoading);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-3xl mx-auto space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>{config.title}</CardTitle>
            <p className="text-sm text-gray-500 mt-1">{config.blurb}</p>
          </CardHeader>
          <CardContent className="space-y-4">
            {config.explainer && (
              <div className="space-y-2">
                <Button type="button" variant="outline" size="sm" onClick={() => setShowHint((s) => !s)}>
                  {showHint ? "Hide Hint" : "Show Hint"}
                </Button>
                {showHint && (
                  <div className="rounded-md bg-blue-50 border border-blue-200 p-3 text-sm text-blue-900">
                    {config.explainer}
                  </div>
                )}
              </div>
            )}
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
            {config.startingHint && <p className="text-xs text-gray-500 italic">{config.startingHint}</p>}
            <Button onClick={send} disabled={loading}>
              {loading ? "Sending..." : "Send request"}
            </Button>

            {config.secondaryField && (
              <div className="pt-4 mt-4 border-t space-y-1">
                <label className="text-sm font-medium">{config.secondaryField.label}</label>
                {config.secondaryField.type === "textarea" ? (
                  <Textarea
                    value={secondaryValue}
                    placeholder={config.secondaryField.placeholder}
                    onChange={(e) => setSecondaryValue(e.target.value)}
                  />
                ) : (
                  <Input
                    type={config.secondaryField.type === "number" ? "number" : "text"}
                    value={secondaryValue}
                    placeholder={config.secondaryField.placeholder}
                    onChange={(e) => setSecondaryValue(e.target.value)}
                  />
                )}
                <Button onClick={sendSecondary} disabled={secondaryLoading}>
                  {secondaryLoading ? "Sending..." : "Send request"}
                </Button>
              </div>
            )}
          </CardContent>
        </Card>

        {secondaryResponse && (
          <Card>
            <CardHeader>
              <CardTitle>Response ({config.secondaryField?.label}) - HTTP {secondaryResponse.status}</CardTitle>
            </CardHeader>
            <CardContent>
              <pre className="bg-gray-900 text-green-400 text-xs p-3 rounded overflow-x-auto">
                {JSON.stringify(secondaryResponse.body, null, 2)}
              </pre>
              <p className="text-xs font-medium mt-3 mb-1">Response headers</p>
              <pre className="bg-gray-900 text-blue-300 text-xs p-3 rounded overflow-x-auto">
                {JSON.stringify(secondaryResponse.headers, null, 2)}
              </pre>
            </CardContent>
          </Card>
        )}

        {response && (
          <Card>
            <CardHeader>
              <CardTitle>
                Response{config.secondaryField ? ` (${config.fields[0]?.label})` : ""} - HTTP {response.status}
              </CardTitle>
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
              <CardTitle>Rendered as HTML</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <iframe
                sandbox="allow-scripts allow-modals"
                // No allow-same-origin, so this iframe gets its own unique,
                // throwaway origin - document.cookie here is a private jar
                // that shares NOTHING with the real app, any other tab, or
                // any real user's session. The seed script below plants a
                // fake session cookie into that isolated jar before the
                // player's payload runs, so a DOM-writing payload (e.g.
                // document.body.innerHTML = document.cookie) shows a
                // believable value - proving real impact without ever
                // touching anything real.
                //
                // alert()/confirm()/prompt() will NOT visibly pop here even
                // though allow-modals is set: Chrome separately blocks
                // those dialogs from any cross-origin iframe outright, and
                // this iframe's opaque origin always counts as cross-origin
                // - no sandbox flag can change that. Use "Pop out" below for
                // a real alert() popup instead.
                srcDoc={`<script>document.cookie = "session_id=sess_8f2a91cd4b7e3f06; path=/";<\/script>${(response.body as { html: string }).html}`}
                className="w-full h-48 border rounded bg-white"
              />
              <Button
                type="button"
                variant="outline"
                size="sm"
                onClick={() => window.open(`${config.endpoint}/preview`, "_blank", "noopener,noreferrer")}
              >
                Pop out in a new tab
              </Button>
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
