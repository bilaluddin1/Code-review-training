
import { useState, useEffect, useRef, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, XCircle, AlertTriangle, ArrowLeft, Lightbulb, Lock, Unlock, X } from "lucide-react"
import type { Challenge } from "@/types/challenge"
import type { PlaygroundConfig, PlaygroundField } from "@/lib/loadPlaygrounds"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { io, Socket } from 'socket.io-client'
import { getSocketUrl } from '@/lib/get-socket-url'

// Feedback questions are fully dynamic now (admin add/remove/reorder via
// UI, stored server-side) - these are just the shapes the API returns.
type RatingStyle = "words" | "numbers";
type FeedbackQuestion = { id: string; label: string; followUpLabel: string; ratingStyle: RatingStyle };
type AdminFeedbackQuestion = { id: string; label: string; followUpLabel: string; order: number; active: boolean; ratingStyle: RatingStyle };

// Simple avatar generator: pick a random emoji
const AVATARS = ["🦊", "🐻", "🐼", "🐸", "🐵", "🐶", "🐱", "🦁", "🐯", "🐨", "🐰", "🦄", "🐙", "🐧", "🐢", "🐦", "🐝", "🐬", "🦋", "🐞"];
function getRandomAvatar() {
  return AVATARS[Math.floor(Math.random() * AVATARS.length)];
}


function UserBar({ name, avatar, score, isAdmin, onAdminLogout, onGiveFeedback, feedbackEnabled }: { name: string; avatar: string; score: number; isAdmin: boolean; onAdminLogout: () => void; onGiveFeedback?: () => void; feedbackEnabled?: boolean }) {
  return (
    <div className="fixed top-4 right-4 z-50 flex items-center gap-3 bg-white/80 shadow rounded-full px-4 py-2 border border-gray-200">
      <span className="text-2xl select-none" aria-label="avatar">{avatar}</span>
      <span className="font-medium text-gray-800">{name}</span>
      <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-semibold">Score: {score}</span>
      {!isAdmin && onGiveFeedback && (
        <Button
          size="sm"
          variant="outline"
          onClick={feedbackEnabled ? onGiveFeedback : undefined}
          disabled={!feedbackEnabled}
          title={feedbackEnabled ? undefined : "Feedback isn't open yet - ask your trainer"}
        >
          Give Feedback
        </Button>
      )}
      {isAdmin && (
        <Button size="sm" variant="outline" onClick={onAdminLogout}>Logout Admin</Button>
      )}
    </div>
  );
}

function NameModal({ open, onSubmit }: { open: boolean; onSubmit: (name: string) => void }) {
  const [input, setInput] = useState("");
  const [checking, setChecking] = useState(false);
  const [available, setAvailable] = useState<boolean | null>(null);
  const [error, setError] = useState("");
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setAvailable(null);
    setError("");
    if (debounceRef.current) clearTimeout(debounceRef.current);
    if (!input.trim()) {
      setAvailable(null);
      setError("");
      return;
    }
    debounceRef.current = setTimeout(() => {
      checkAvailability(input.trim());
    }, 400);
    return () => {
      if (debounceRef.current) clearTimeout(debounceRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  const checkAvailability = async (name: string) => {
    setChecking(true);
    setError("");
    try {
      const res = await fetch("/api/check-username", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: name })
      });
      const data = await res.json();
      setAvailable(data.available);
      if (!data.available) {
        if (data.reserved) {
          setError(`"${name}" is a reserved name — please choose a different username`);
        } else {
          setError("Username is already taken");
        }
      }
    } catch {
      setError("Could not check username availability");
      setAvailable(null);
    } finally {
      setChecking(false);
    }
  };

  const handleContinue = () => {
    if (input.trim() && available) onSubmit(input.trim());
  };

  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center gap-4">
        <h2 className="text-xl font-bold mb-2">Welcome!</h2>
        <p className="text-gray-600 text-sm mb-2">Enter your name to get started:</p>
        <input
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring"
          placeholder="Your name"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={async e => {
            if (e.key === 'Enter' && input.trim() && available) {
              onSubmit(input.trim());
            }
          }}
        />
        {checking && <div className="text-xs text-gray-500">Checking availability...</div>}
        {error && <div className="text-xs text-red-600">{error}</div>}
        <Button className="w-full mt-2" onClick={handleContinue} disabled={checking || available !== true}>
          Continue
        </Button>
      </div>
    </div>
  );
}

function AdminModal({ open, onSubmit, onClose, error }: { open: boolean, onSubmit: (password: string) => void, onClose: () => void, error?: string }) {
  const [input, setInput] = useState("");
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-xs flex flex-col items-center gap-4 relative">
        <button
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close"
          type="button"
        >
          <X className="h-5 w-5" />
        </button>
        <h2 className="text-xl font-bold mb-2">Admin Login</h2>
        <p className="text-gray-600 text-sm mb-2">Enter admin password:</p>
        <input
          className="border rounded px-3 py-2 w-full focus:outline-none focus:ring"
          placeholder="Password"
          type="password"
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && input.trim()) onSubmit(input.trim()); }}
        />
        {error && <div className="text-red-600 text-xs">{error}</div>}
        <div className="flex gap-2 w-full">
          <Button className="w-full mt-2" onClick={() => input.trim() && onSubmit(input.trim())}>Login</Button>
        </div>
      </div>
    </div>
  );
}

// Team is NOT part of this - it's set once by the admin (FeedbackToggle.currentTeam)
// and attached server-side, so every dev's submission is tagged consistently
// instead of each person typing (and misspelling) their own team name.
// answers is keyed by question id (dynamic, admin-managed) rather than a
// fixed set of keys.
type FeedbackValues = { answers: Record<string, { rating: number; followUpText: string }>; comments: string };
const EMPTY_FEEDBACK_VALUES: FeedbackValues = { answers: {}, comments: "" };

// 1-5 under the hood (storage, averages, CSV), but devs pick a word, not a digit.
const RATING_LABELS: Record<number, string> = { 1: "Poor", 2: "Fair", 3: "Neutral", 4: "Good", 5: "Excellent" };

function RatingRow({ label, value, onChange, ratingStyle = "words" }: { label: string; value: number; onChange: (v: number) => void; ratingStyle?: RatingStyle }) {
  return (
    <div className="w-full">
      <div className="text-sm font-medium mb-1">{label}</div>
      <div className="flex gap-2 flex-wrap">
        {[1, 2, 3, 4, 5].map((n) => (
          <button
            key={n}
            type="button"
            onClick={() => onChange(n)}
            className={`px-3 h-9 rounded-full border text-sm font-semibold transition-colors ${value === n ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-600 border-gray-300 hover:border-blue-400"}`}
          >
            {ratingStyle === "numbers" ? n : RATING_LABELS[n]}
          </button>
        ))}
      </div>
    </div>
  );
}

function FeedbackModal({ open, onSubmit, onClose, currentTeam, questions }: { open: boolean; onSubmit: (v: FeedbackValues) => Promise<boolean>; onClose: () => void; currentTeam: string | null; questions: FeedbackQuestion[] }) {
  const [values, setValues] = useState<FeedbackValues>(EMPTY_FEEDBACK_VALUES);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  if (!open) return null;

  const allAnswered = questions.length > 0 && questions.every((q) => {
    const a = values.answers[q.id];
    return a && a.rating > 0 && a.followUpText.trim().length > 0;
  });

  const submit = async () => {
    if (!allAnswered) {
      setError("Please rate every question and answer its follow-up.");
      return;
    }
    setSubmitting(true);
    setError("");
    const ok = await onSubmit(values);
    setSubmitting(false);
    if (ok) setSubmitted(true);
    else setError("Could not submit feedback - ask your trainer to confirm the session team is set, then try again.");
  };

  const setRating = (id: string, rating: number) =>
    setValues((s) => ({ ...s, answers: { ...s.answers, [id]: { rating, followUpText: s.answers[id]?.followUpText ?? "" } } }));
  const setFollowUp = (id: string, followUpText: string) =>
    setValues((s) => ({ ...s, answers: { ...s.answers, [id]: { rating: s.answers[id]?.rating ?? 0, followUpText } } }));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 p-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md flex flex-col gap-4 relative max-h-[90vh] overflow-y-auto">
        <button className="absolute top-3 right-3 text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Close" type="button">
          <X className="h-5 w-5" />
        </button>
        {submitted ? (
          <div className="text-center py-6">
            <div className="text-2xl mb-2">🙏</div>
            <h2 className="text-xl font-bold mb-2">Thanks for the feedback!</h2>
            <p className="text-gray-600 text-sm mb-4">It's been recorded for this session.</p>
            <Button onClick={onClose}>Close</Button>
          </div>
        ) : (
          <>
            <h2 className="text-xl font-bold">Session Feedback</h2>
            {currentTeam && (
              <p className="text-xs text-gray-500 -mt-2">Submitting for team: <span className="font-semibold">{currentTeam}</span></p>
            )}
            {questions.map((q) => (
              <div key={q.id} className="border-b pb-3 last:border-b-0">
                <RatingRow label={q.label} value={values.answers[q.id]?.rating ?? 0} onChange={(v) => setRating(q.id, v)} ratingStyle={q.ratingStyle} />
                <Textarea
                  className="mt-2"
                  placeholder={q.followUpLabel}
                  value={values.answers[q.id]?.followUpText ?? ""}
                  onChange={(e) => setFollowUp(q.id, e.target.value)}
                />
              </div>
            ))}
            <div>
              <div className="text-sm font-medium mb-1">Anything else? (optional)</div>
              <Textarea
                placeholder="Anything that didn't fit above"
                value={values.comments}
                onChange={(e) => setValues((s) => ({ ...s, comments: e.target.value }))}
              />
            </div>
            {error && <div className="text-red-600 text-xs">{error}</div>}
            <Button onClick={submit} disabled={submitting}>{submitting ? "Submitting..." : "Submit Feedback"}</Button>
          </>
        )}
      </div>
    </div>
  );
}

// --- Timer Hook ---
function useChallengeTimer(selectedChallenge: Challenge | null) {
  const [timer, setTimer] = useState<{ startTime: number; duration: number; isRunning: boolean; isPaused: boolean } | null>(null);
  const [timeLeft, setTimeLeft] = useState<number>(0);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!selectedChallenge) return;
    if (!socketRef.current) {
      socketRef.current = io(getSocketUrl(), {
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
      });
    }
    const socket = socketRef.current;
    const handleTimerUpdate = (data: { challengeId: string; startTime: number; duration: number; isRunning: boolean; isPaused: boolean; remaining?: number }) => {
      if (data.challengeId === selectedChallenge.id) {
        setTimer({ startTime: data.startTime, duration: data.duration, isRunning: data.isRunning, isPaused: !!data.isPaused });
        // If paused, set timeLeft to remaining
        if (data.isPaused && typeof data.remaining === 'number') {
          setTimeLeft(Math.max(0, Math.floor(data.remaining / 1000)));
        }
      }
    };
    socket.on('timer:update', handleTimerUpdate);
    return () => {
      socket.off('timer:update', handleTimerUpdate);
    };
  }, [selectedChallenge]);

  useEffect(() => {
    if (!timer) {
      setTimeLeft(0);
      return;
    }
    if (timer.isPaused) {
      // Don't tick when paused
      return;
    }
    if (!timer.isRunning) {
      setTimeLeft(0);
      return;
    }
    const interval = setInterval(() => {
      const now = Date.now();
      const end = timer.startTime + timer.duration;
      setTimeLeft(Math.max(0, Math.floor((end - now) / 1000)));
    }, 250);
    return () => clearInterval(interval);
  }, [timer]);

  return { timer, timeLeft };
}

// Loud two-tone chime via Web Audio API when a timer hits 0 - no audio file
// to ship/host, works offline, and browsers allow it here since by the time
// a timer naturally expires the player has already interacted with the page.
function playTimerEndSound() {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    [880, 660, 440].forEach((freq, i) => {
      const start = now + i * 0.16;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "square";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0.0001, start);
      gain.gain.exponentialRampToValueAtTime(0.7, start + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.0001, start + 0.22);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(start);
      osc.stop(start + 0.24);
    });
    setTimeout(() => ctx.close(), 900);
  } catch {
    // Not critical - autoplay restrictions or no Web Audio support just mean silence.
  }
}

// Pressure-building tick for the last PRESSURE_TICK_START_SECONDS of a timer -
// gets louder and higher-pitched as it approaches 0, so the room actually
// feels the countdown instead of only seeing it.
const PRESSURE_TICK_START_SECONDS = 60;
function playPressureTick(secondsLeft: number) {
  try {
    const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    const ctx = new AudioCtx();
    const now = ctx.currentTime;
    // 0 (at 20s left) -> 1 (at 1s left)
    const urgency = 1 - Math.max(0, Math.min(PRESSURE_TICK_START_SECONDS, secondsLeft)) / PRESSURE_TICK_START_SECONDS;
    const freq = 520 + urgency * 480; // 520Hz -> 1000Hz
    const peakGain = 0.35 + urgency * 0.45; // 0.35 -> 0.8
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = "square";
    osc.frequency.value = freq;
    gain.gain.setValueAtTime(0.0001, now);
    gain.gain.exponentialRampToValueAtTime(peakGain, now + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start(now);
    osc.stop(now + 0.1);
    setTimeout(() => ctx.close(), 300);
  } catch {
    // Not critical - autoplay restrictions or no Web Audio support just mean silence.
  }
}

// --- Timer Display ---
function TimerDisplay({ timeLeft }: { timeLeft: number }) {
  const min = Math.floor(timeLeft / 60);
  const sec = timeLeft % 60;
  return (
    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 rounded font-mono text-lg min-w-[70px] text-center">
      {min}:{sec.toString().padStart(2, '0')}
    </span>
  );
}

// --- AdminPanel with Timer Start ---
export function AdminPanel({ locks, onToggleLock, challenges = [] }: {
  locks: Record<string, boolean>,
  onToggleLock: (id: string) => void,
  challenges?: Challenge[]
}) {
  const [resetting, setResetting] = useState(false);
  const [resetSuccess, setResetSuccess] = useState(false);
  const [view, setView] = useState<"unlocks" | "analytics">("unlocks");
  // Lab content editor - lets an admin change a challenge's title/description/
  // code/hints/explanations/flags/etc. via the UI instead of needing a source
  // edit + redeploy for every wording tweak. Saves through the existing
  // /api/admin/challenges PUT endpoint (which already writes to the runtime
  // data/challenges.json loadChallenges() prefers) - only the UI was missing.
  const [editingLabId, setEditingLabId] = useState<string | null>(null);
  const [labDraft, setLabDraft] = useState<Challenge | null>(null);
  const [labSaving, setLabSaving] = useState(false);
  const [labError, setLabError] = useState<string | null>(null);
  // Local overrides so an edit shows immediately without waiting on the
  // parent's own challenge-list refresh cycle.
  const [challengeOverrides, setChallengeOverrides] = useState<Record<string, Challenge>>({});

  // Live-exploit lab PAGE editor - a separate thing from the challenge
  // editor above: this edits labsPlaygroundConfig.ts's title/blurb/field
  // labels/hint/explainer text (what a dev actually sees at /labs/<key>),
  // not the code-review challenge's code/flags. Saves through
  // /api/admin/playgrounds, keyed by the lab's URL slug (e.g. "crypto-01"),
  // not the challenge id.
  const [playgrounds, setPlaygrounds] = useState<Record<string, PlaygroundConfig>>({});
  const [editingPlaygroundKey, setEditingPlaygroundKey] = useState<string | null>(null);
  const [playgroundDraft, setPlaygroundDraft] = useState<PlaygroundConfig | null>(null);
  const [playgroundSaving, setPlaygroundSaving] = useState(false);
  const [playgroundError, setPlaygroundError] = useState<string | null>(null);

  useEffect(() => {
    fetch('/api/admin/playgrounds')
      .then(r => r.json())
      .then(data => setPlaygrounds(data && typeof data === 'object' ? data : {}))
      .catch(() => {});
  }, []);
  const [analytics, setAnalytics] = useState<{
    sessions: { sessionId: string; teamName: string; archivedAt: string; results: { userName: string; avatar: string; score: number }[] }[];
    live: { id: string; userName: string; avatar: string; score: number }[];
  } | null>(null);
  const [analyticsLoading, setAnalyticsLoading] = useState(false);
  const [deletingLeaderboardId, setDeletingLeaderboardId] = useState<string | null>(null);
  const [deletingFeedbackId, setDeletingFeedbackId] = useState<string | null>(null);
  const [deletingSessionId, setDeletingSessionId] = useState<string | null>(null);
  const [deletingFeedbackSessionId, setDeletingFeedbackSessionId] = useState<string | null>(null);
  const [feedback, setFeedback] = useState<{
    count: number;
    columns: { questionId: string; label: string; followUpLabel: string }[];
    averages: { questionId: string; label: string; average: number | null; count: number }[];
    responses: { id: string; userName: string; teamName: string | null; comments: string | null; createdAt: string; answers: { questionId: string; label: string; rating: number; followUpLabel: string; followUpText: string }[] }[];
  } | null>(null);
  type FeedbackResponseRow = { id: string; userName: string; teamName: string | null; comments: string | null; createdAt: string; answers: { questionId: string; label: string; rating: number; followUpLabel: string; followUpText: string }[] };
  const [feedbackArchive, setFeedbackArchive] = useState<{
    count: number;
    columns: { questionId: string; label: string; followUpLabel: string }[];
    sessions: { sessionId: string; teamName: string; archivedAt: string; responses: FeedbackResponseRow[] }[];
  } | null>(null);
  const [feedbackToggle, setFeedbackToggle] = useState(false);
  const [feedbackToggleLoading, setFeedbackToggleLoading] = useState(false);
  const [currentTeam, setCurrentTeam] = useState<string | null>(null);
  const [teamInput, setTeamInput] = useState("");
  const [teamSaving, setTeamSaving] = useState(false);
  const [editingQuestions, setEditingQuestions] = useState(false);
  const [adminQuestions, setAdminQuestions] = useState<AdminFeedbackQuestion[]>([]);
  const [newQuestionLabel, setNewQuestionLabel] = useState("");
  const [newQuestionFollowUp, setNewQuestionFollowUp] = useState("");
  const [questionsSaving, setQuestionsSaving] = useState(false);
  const [timerDurations, setTimerDurations] = useState<Record<string, number>>({});
  const [timers, setTimers] = useState<Record<string, { startTime: number; duration: number; isRunning: boolean; isPaused: boolean; remaining?: number }>>({});
  const [timeLefts, setTimeLefts] = useState<Record<string, number>>({});
  const socketRef = useRef<Socket | null>(null);

  // Debug logging
  console.log('AdminPanel received challenges:', challenges);
  console.log('AdminPanel challenges length:', challenges?.length);

  useEffect(() => {
    console.log('AdminPanel: Setting up Socket.IO connection to', getSocketUrl());

    if (!socketRef.current) {
      socketRef.current = io(getSocketUrl(), {
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
      });
    }

    const socket = socketRef.current;

    // Connection event handlers
    socket.on('connect', () => {
      console.log('AdminPanel: Socket.IO connected, registering as admin');
      // Register as admin with a unique admin ID
      const adminId = 'admin-' + Date.now();
      socket.emit('register', adminId, true);
    });

    socket.on('disconnect', () => {
      console.log('AdminPanel: Socket.IO disconnected');
    });

    socket.on('connect_error', (error) => {
      console.error('AdminPanel: Socket.IO connection error:', error);
    });

    socket.on('error', (error) => {
      console.error('AdminPanel: Socket.IO error:', error);
    });

    const handleTimerUpdate = (data: { challengeId: string; startTime: number; duration: number; isRunning: boolean; isPaused: boolean; remaining?: number }) => {
      console.log('AdminPanel: Received timer update:', data);
      setTimers(prev => ({
        ...prev,
        [data.challengeId]: {
          startTime: data.startTime,
          duration: data.duration,
          isRunning: data.isRunning,
          isPaused: data.isPaused,
          ...(typeof data.remaining === 'number' ? { remaining: data.remaining } : {})
        }
      }));
    };

    socket.on('timer:update', handleTimerUpdate);

    return () => {
      console.log('AdminPanel: Cleaning up Socket.IO listeners');
      socket.off('connect');
      socket.off('disconnect');
      socket.off('connect_error');
      socket.off('error');
      socket.off('timer:update', handleTimerUpdate);
    };
  }, []);

  // Update ticking timers for admin
  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLefts(prev => {
        const updated: Record<string, number> = { ...prev };
        Object.entries(timers).forEach(([challengeId, timer]) => {
          if (timer.isPaused && typeof (timer as any).remaining === 'number') {
            updated[challengeId] = Math.max(0, Math.floor((timer as any).remaining / 1000));
          } else if (timer.isRunning) {
            const now = Date.now();
            const end = timer.startTime + timer.duration;
            updated[challengeId] = Math.max(0, Math.floor((end - now) / 1000));
          } else {
            updated[challengeId] = 0;
          }
        });
        return updated;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [timers]);

  const handleStartTimer = (challengeId: string) => {
    const durationMinutes = timerDurations[challengeId] || 5; // default 5 min
    const durationMs = durationMinutes * 60 * 1000;
    console.log('AdminPanel: Starting timer for', challengeId, 'duration:', durationMs, 'ms');

    if (!socketRef.current || !socketRef.current.connected) {
      console.error('AdminPanel: Socket not connected, cannot start timer');
      alert('Socket.IO not connected. Please refresh the page.');
      return;
    }

    socketRef.current.emit('admin:startTimer', { challengeId, duration: durationMs });
    console.log('AdminPanel: Timer start command sent');
  };

  const handleDurationChange = (challengeId: string, value: string) => {
    const num = Math.max(1, Math.min(60, parseInt(value) || 0));
    setTimerDurations(prev => ({ ...prev, [challengeId]: num }));
  };

  const getTimeLeft = (challengeId: string) => {
    return timeLefts[challengeId] || 0;
  };

  const fetchAnalytics = async () => {
    setAnalyticsLoading(true);
    const [analyticsRes, feedbackRes, feedbackArchiveRes, toggleRes] = await Promise.all([
      fetch('/api/admin/analytics'),
      fetch('/api/admin/feedback'),
      fetch('/api/admin/feedback-archive'),
      fetch('/api/feedback-enabled'),
    ]);
    if (analyticsRes.ok) setAnalytics(await analyticsRes.json());
    if (feedbackRes.ok) setFeedback(await feedbackRes.json());
    if (feedbackArchiveRes.ok) setFeedbackArchive(await feedbackArchiveRes.json());
    if (toggleRes.ok) {
      const t = await toggleRes.json();
      setFeedbackToggle(t.enabled);
      setCurrentTeam(t.currentTeam ?? null);
      setTeamInput(t.currentTeam ?? "");
    }
    setAnalyticsLoading(false);
  };

  const deleteLeaderboardEntry = async (id: string, userName: string) => {
    if (!window.confirm(`Permanently delete "${userName}" from the live leaderboard? This cannot be undone.`)) return;
    setDeletingLeaderboardId(id);
    const res = await fetch(`/api/admin/leaderboard/${id}`, { method: 'DELETE' });
    setDeletingLeaderboardId(null);
    if (res.ok) fetchAnalytics();
  };

  const deleteFeedbackEntry = async (id: string, userName: string) => {
    if (!window.confirm(`Permanently delete ${userName}'s feedback? This cannot be undone.`)) return;
    setDeletingFeedbackId(id);
    const res = await fetch(`/api/admin/feedback/${id}`, { method: 'DELETE' });
    setDeletingFeedbackId(null);
    if (res.ok) fetchAnalytics();
  };

  const deleteLeaderboardSession = async (sessionId: string, teamName: string) => {
    if (!window.confirm(`Permanently delete the archived "${teamName}" leaderboard session? This cannot be undone.`)) return;
    setDeletingSessionId(sessionId);
    const res = await fetch(`/api/admin/session-archive/${sessionId}`, { method: 'DELETE' });
    setDeletingSessionId(null);
    if (res.ok) fetchAnalytics();
  };

  const deleteFeedbackSession = async (sessionId: string, teamName: string) => {
    if (!window.confirm(`Permanently delete the archived "${teamName}" feedback session? This cannot be undone.`)) return;
    setDeletingFeedbackSessionId(sessionId);
    const res = await fetch(`/api/admin/feedback-archive/${sessionId}`, { method: 'DELETE' });
    setDeletingFeedbackSessionId(null);
    if (res.ok) fetchAnalytics();
  };

  const toggleFeedbackEnabled = async () => {
    setFeedbackToggleLoading(true);
    const res = await fetch('/api/admin/feedback-enabled', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ enabled: !feedbackToggle }),
    });
    if (res.ok) {
      setFeedbackToggle((await res.json()).enabled);
    } else {
      // Previously failed silently (e.g. expired admin session) and the button
      // just snapped back to its old value with no indication anything went
      // wrong - looked like the toggle "undid itself" on the next refresh.
      alert(res.status === 401
        ? "Your admin session expired - log back in and try again. The toggle was NOT changed."
        : "Could not update the feedback toggle - it was NOT changed. Try again.");
    }
    setFeedbackToggleLoading(false);
  };

  const saveTeam = async () => {
    setTeamSaving(true);
    const res = await fetch('/api/admin/feedback-enabled', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ currentTeam: teamInput }),
    });
    if (res.ok) setCurrentTeam((await res.json()).currentTeam ?? null);
    setTeamSaving(false);
  };

  const fetchAdminQuestions = async () => {
    const res = await fetch('/api/admin/feedback-questions');
    if (res.ok) setAdminQuestions((await res.json()).questions);
  };

  // Opening the editor loads the full list (including inactive ones),
  // separate from the reporting data fetched in fetchAnalytics.
  useEffect(() => {
    if (editingQuestions) fetchAdminQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingQuestions]);

  const addQuestion = async () => {
    if (!newQuestionLabel.trim() || !newQuestionFollowUp.trim()) return;
    setQuestionsSaving(true);
    const res = await fetch('/api/admin/feedback-questions', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ label: newQuestionLabel.trim(), followUpLabel: newQuestionFollowUp.trim() }),
    });
    if (res.ok) {
      setNewQuestionLabel("");
      setNewQuestionFollowUp("");
      await fetchAdminQuestions();
    } else {
      alert('Could not add question - ' + ((await res.json().catch(() => ({})))?.error ?? 'unknown error'));
    }
    setQuestionsSaving(false);
  };

  const updateQuestion = async (id: string, data: { label?: string; followUpLabel?: string; active?: boolean; order?: number; ratingStyle?: RatingStyle }) => {
    const res = await fetch(`/api/admin/feedback-questions/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    });
    if (res.ok) await fetchAdminQuestions();
    else alert('Could not update - ' + ((await res.json().catch(() => ({})))?.error ?? 'unknown error'));
  };

  const moveQuestion = async (index: number, dir: -1 | 1) => {
    const target = index + dir;
    if (target < 0 || target >= adminQuestions.length) return;
    const a = adminQuestions[index], b = adminQuestions[target];
    setQuestionsSaving(true);
    await Promise.all([
      fetch(`/api/admin/feedback-questions/${a.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ order: b.order }) }),
      fetch(`/api/admin/feedback-questions/${b.id}`, { method: 'PATCH', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ order: a.order }) }),
    ]);
    await fetchAdminQuestions();
    setQuestionsSaving(false);
  };

  const deleteQuestion = async (id: string) => {
    if (!window.confirm('Delete this question? Only possible if no one has answered it yet.')) return;
    const res = await fetch(`/api/admin/feedback-questions/${id}`, { method: 'DELETE' });
    if (res.ok) await fetchAdminQuestions();
    else alert(((await res.json().catch(() => ({})))?.error) ?? 'Could not delete');
  };

  const closeQuestionEditor = async () => {
    setEditingQuestions(false);
    await fetchAnalytics(); // refresh reporting + the live public question list
  };

  useEffect(() => {
    if (view === 'analytics') fetchAnalytics();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [view]);

  const downloadCsv = (filename: string, header: string[], rows: (string | number)[][]) => {
    const esc = (v: string | number) => {
      const s = String(v);
      return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
    };
    const csv = [header, ...rows].map((r) => r.map(esc).join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  const handleReset = async () => {
    // Sessions run one product team at a time. Archive the current leaderboard
    // under that team's name BEFORE wiping it, so nothing is lost when the
    // next team starts with a clean slate. Pre-filled from the same "session
    // team" setting the feedback form uses - fetched fresh here so this works
    // correctly even if the Analytics tab was never opened this visit.
    const liveTeamRes = await fetch('/api/feedback-enabled');
    const liveTeam = liveTeamRes.ok ? ((await liveTeamRes.json()).currentTeam ?? '') : '';
    const teamName = window.prompt('Team name for this session (archived before reset):', liveTeam);
    if (teamName === null) return; // cancelled
    if (!window.confirm(`Archive the current leaderboard and feedback as "${teamName.trim() || '(unnamed)'}" and then reset everything? This cannot be undone.`)) return;
    setResetting(true);
    setResetSuccess(false);
    if (teamName.trim()) {
      const archiveRes = await fetch('/api/admin/archive-session', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ teamName: teamName.trim() }),
      });
      if (!archiveRes.ok) {
        setResetting(false);
        alert('Could not archive the session - reset cancelled so nothing is lost. Try again.');
        return;
      }
      // Keep the session-team setting (used by feedback) in sync with whatever was just archived
      if (teamName.trim() !== liveTeam) {
        await fetch('/api/admin/feedback-enabled', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ currentTeam: teamName.trim() }),
        });
        setCurrentTeam(teamName.trim());
        setTeamInput(teamName.trim());
      }
    }
    const res = await fetch('/api/admin-reset', { method: 'POST' });
    setResetting(false);
    if (res.ok) {
      setResetSuccess(true);
      if (view === 'analytics') fetchAnalytics();
    }
  };

  const handlePauseTimer = (challengeId: string) => {
    console.log('AdminPanel: Pausing timer for', challengeId);
    if (!socketRef.current || !socketRef.current.connected) {
      console.error('AdminPanel: Socket not connected');
      return;
    }
    socketRef.current.emit('admin:pauseTimer', { challengeId });
  };

  const handleResumeTimer = (challengeId: string) => {
    console.log('AdminPanel: Resuming timer for', challengeId);
    if (!socketRef.current || !socketRef.current.connected) {
      console.error('AdminPanel: Socket not connected');
      return;
    }
    socketRef.current.emit('admin:resumeTimer', { challengeId });
  };

  const handleResetTimer = (challengeId: string) => {
    console.log('AdminPanel: Resetting timer for', challengeId);
    if (!socketRef.current || !socketRef.current.connected) {
      console.error('AdminPanel: Socket not connected');
      return;
    }
    socketRef.current.emit('admin:resetTimer', { challengeId });
    // Clear local timer state for this challenge so Start Timer is shown again
    setTimers(prev => {
      const copy = { ...prev };
      delete copy[challengeId];
      return copy;
    });
    setTimeLefts(prev => {
      const copy = { ...prev };
      delete copy[challengeId];
      return copy;
    });
  };

  // Call this when a challenge is locked
  useEffect(() => {
    Object.entries(locks).forEach(([challengeId, locked]) => {
      if (locked && timers[challengeId]) {
        handleResetTimer(challengeId);
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [locks]);

  const startEditingLab = (challenge: Challenge) => {
    // Deep copy so edits in the form never mutate the list a Cancel should revert to.
    setLabDraft(JSON.parse(JSON.stringify(challenge)));
    setLabError(null);
    setEditingLabId(challenge.id);
  };

  const cancelEditingLab = () => {
    setEditingLabId(null);
    setLabDraft(null);
    setLabError(null);
  };

  const saveLab = async () => {
    if (!labDraft) return;
    if (!labDraft.title.trim() || !labDraft.code.trim() || labDraft.vulnerableLines.length === 0) {
      setLabError('Title, code, and at least one vulnerable line are required.');
      return;
    }
    setLabSaving(true);
    setLabError(null);
    try {
      const res = await fetch('/api/admin/challenges', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(labDraft),
      });
      const data = await res.json();
      if (!res.ok) {
        setLabError(data.error ?? 'Failed to save.');
        return;
      }
      setChallengeOverrides(prev => ({ ...prev, [labDraft.id]: data }));
      cancelEditingLab();
    } catch {
      setLabError('Could not reach the server. Please try again.');
    } finally {
      setLabSaving(false);
    }
  };

  // Keeps explanations keyed to exactly the current vulnerableLines list,
  // so a removed line's stray explanation text doesn't linger invisibly
  // and a newly added line gets an empty box to fill in.
  const setLabVulnerableLines = (raw: string) => {
    if (!labDraft) return;
    const lines = raw
      .split(',')
      .map(s => parseInt(s.trim(), 10))
      .filter(n => !isNaN(n));
    const nextExplanations: { [line: number]: string } = {};
    for (const line of lines) {
      nextExplanations[line] = labDraft.explanations?.[line] ?? '';
    }
    setLabDraft({ ...labDraft, vulnerableLines: lines, explanations: nextExplanations });
  };

  const setLabHint = (index: number, value: string) => {
    if (!labDraft) return;
    const hints = [...(labDraft.hints ?? [])];
    hints[index] = value;
    setLabDraft({ ...labDraft, hints });
  };

  const addLabHint = () => {
    if (!labDraft) return;
    setLabDraft({ ...labDraft, hints: [...(labDraft.hints ?? []), ''] });
  };

  const removeLabHint = (index: number) => {
    if (!labDraft) return;
    setLabDraft({ ...labDraft, hints: (labDraft.hints ?? []).filter((_, i) => i !== index) });
  };

  const setLabFlag = (index: number, value: string) => {
    if (!labDraft) return;
    const flags = [...(labDraft.flags ?? [])];
    flags[index] = value;
    setLabDraft({ ...labDraft, flags });
  };

  const addLabFlag = () => {
    if (!labDraft) return;
    setLabDraft({ ...labDraft, flags: [...(labDraft.flags ?? []), ''] });
  };

  const removeLabFlag = (index: number) => {
    if (!labDraft) return;
    setLabDraft({ ...labDraft, flags: (labDraft.flags ?? []).filter((_, i) => i !== index) });
  };

  const startEditingPlayground = (key: string, config: PlaygroundConfig) => {
    setPlaygroundDraft(JSON.parse(JSON.stringify(config)));
    setPlaygroundError(null);
    setEditingPlaygroundKey(key);
  };

  const cancelEditingPlayground = () => {
    setEditingPlaygroundKey(null);
    setPlaygroundDraft(null);
    setPlaygroundError(null);
  };

  const savePlayground = async () => {
    if (!playgroundDraft || !editingPlaygroundKey) return;
    if (!playgroundDraft.title.trim() || !playgroundDraft.blurb.trim()) {
      setPlaygroundError('Title and blurb are required.');
      return;
    }
    setPlaygroundSaving(true);
    setPlaygroundError(null);
    try {
      const res = await fetch('/api/admin/playgrounds', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ key: editingPlaygroundKey, config: playgroundDraft }),
      });
      const data = await res.json();
      if (!res.ok) {
        setPlaygroundError(data.error ?? 'Failed to save.');
        return;
      }
      setPlaygrounds(prev => ({ ...prev, [editingPlaygroundKey]: data }));
      cancelEditingPlayground();
    } catch {
      setPlaygroundError('Could not reach the server. Please try again.');
    } finally {
      setPlaygroundSaving(false);
    }
  };

  // Only label/placeholder/defaultValue/type are editable on a field - its
  // `name` is what the field is actually submitted as to the lab's real
  // API route (e.g. "id", "cookie", "token"), so changing it would silently
  // break the exploit wiring without ever producing an error.
  const updateLabField = (list: 'fields' | 'headerFields', index: number, patch: Partial<PlaygroundField>) => {
    if (!playgroundDraft) return;
    const next = [...(playgroundDraft[list] ?? [])];
    next[index] = { ...next[index], ...patch };
    setPlaygroundDraft({ ...playgroundDraft, [list]: next });
  };

  return (
    <div className="max-w-4xl mx-auto mt-10 bg-white rounded-lg shadow p-10">
      <h2 className="text-xl font-bold mb-4 flex items-center gap-2"><Unlock className="h-5 w-5 text-green-600" /> Admin Challenge Unlocks</h2>
      <div className="flex gap-2 mb-6 border-b">
        <button
          className={`px-4 py-2 font-medium ${view === 'unlocks' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
          onClick={() => setView('unlocks')}
        >
          Unlocks
        </button>
        <button
          className={`px-4 py-2 font-medium ${view === 'analytics' ? 'border-b-2 border-blue-600 text-blue-700' : 'text-gray-500'}`}
          onClick={() => setView('analytics')}
        >
          Analytics / Export
        </button>
      </div>
      {view === 'unlocks' && (
      <>
      <div className="mb-6">
        <Button variant="destructive" onClick={handleReset} disabled={resetting}>
          {resetting ? 'Resetting...' : 'Reset Everything'}
        </Button>
        {resetSuccess && <span className="ml-4 text-green-700 font-semibold">Database reset!</span>}
        <p className="text-xs text-gray-500 mt-2">Resetting asks for a team name first and archives the current leaderboard - see the Analytics tab to export it any time.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {!challenges || challenges.length === 0 ? (
          <div className="col-span-2 text-center py-8">
            <div className="text-gray-500">Loading challenges...</div>
          </div>
        ) : (
          challenges.map((c) => {
            const challenge = challengeOverrides[c.id] ?? c;
            const isLocked = locks[challenge.id] !== false; // default locked
            const timeLeft = getTimeLeft(challenge.id);
            const timer = timers[challenge.id];
            const isEditingThisLab = editingLabId === challenge.id;
            return (
              <Card key={challenge.id}>
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        {isLocked ? <Lock className="h-4 w-4 text-gray-400" /> : <Unlock className="h-4 w-4 text-green-500" />}
                        {challenge.title}
                      </CardTitle>
                      <CardDescription>{challenge.description}</CardDescription>
                      {challenge.productOrigin && (
                        <CardDescription className="text-xs italic text-blue-700 mt-1">
                          {challenge.productOrigin}
                        </CardDescription>
                      )}
                      {challenge.flag && (
                        <CardDescription className="text-xs font-mono text-gray-500 mt-1">
                          Flag: {challenge.flag}
                        </CardDescription>
                      )}
                    </div>
                    <div className="flex flex-col gap-2 shrink-0">
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => (isEditingThisLab ? cancelEditingLab() : startEditingLab(challenge))}
                      >
                        {isEditingThisLab ? 'Close Editor' : 'Edit Challenge'}
                      </Button>
                      {(() => {
                        const entry = Object.entries(playgrounds).find(([, cfg]) => cfg.linkedChallengeId === challenge.id);
                        if (!entry) return null;
                        const [pgKey, pgConfig] = entry;
                        const isEditingThisPlayground = editingPlaygroundKey === pgKey;
                        return (
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => (isEditingThisPlayground ? cancelEditingPlayground() : startEditingPlayground(pgKey, pgConfig))}
                          >
                            {isEditingThisPlayground ? 'Close Editor' : 'Edit Live-Exploit Page'}
                          </Button>
                        );
                      })()}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {editingPlaygroundKey && playgroundDraft && Object.entries(playgrounds).find(([k, cfg]) => k === editingPlaygroundKey && cfg.linkedChallengeId === challenge.id) && (
                    <div className="mb-4 p-4 bg-blue-50 border rounded-lg space-y-3">
                      <p className="text-xs text-gray-500">Editing the page at <code>/labs/{editingPlaygroundKey}</code> - the live-exploit UI a dev actually uses, not the code-review challenge above.</p>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Page title</label>
                        <input
                          className="border rounded px-2 py-1 w-full text-sm mt-1"
                          value={playgroundDraft.title}
                          onChange={e => setPlaygroundDraft({ ...playgroundDraft, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Blurb (shown under the title)</label>
                        <Textarea
                          className="mt-1 text-sm"
                          rows={2}
                          value={playgroundDraft.blurb}
                          onChange={e => setPlaygroundDraft({ ...playgroundDraft, blurb: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Starting hint (shown in italics near Send request)</label>
                        <Textarea
                          className="mt-1 text-sm"
                          rows={2}
                          value={playgroundDraft.startingHint ?? ''}
                          onChange={e => setPlaygroundDraft({ ...playgroundDraft, startingHint: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Hint behind "Show Hint" button (leave blank for no hint button)</label>
                        <Textarea
                          className="mt-1 text-sm"
                          rows={2}
                          value={playgroundDraft.explainer ?? ''}
                          onChange={e => setPlaygroundDraft({ ...playgroundDraft, explainer: e.target.value })}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Input field(s) - label, placeholder and default value only (the field's wiring to the API is fixed)</label>
                        {(playgroundDraft.fields ?? []).map((f, i) => (
                          <div key={i} className="grid grid-cols-3 gap-2 p-2 bg-white border rounded">
                            <div>
                              <label className="text-[10px] text-gray-400">name: {f.name} (fixed)</label>
                              <input
                                className="border rounded px-2 py-1 w-full text-sm"
                                placeholder="Label"
                                value={f.label}
                                onChange={e => updateLabField('fields', i, { label: e.target.value })}
                              />
                            </div>
                            <input
                              className="border rounded px-2 py-1 w-full text-sm self-end"
                              placeholder="Placeholder text"
                              value={f.placeholder ?? ''}
                              onChange={e => updateLabField('fields', i, { placeholder: e.target.value })}
                            />
                            <input
                              className="border rounded px-2 py-1 w-full text-sm self-end"
                              placeholder="Default value"
                              value={f.defaultValue ?? ''}
                              onChange={e => updateLabField('fields', i, { defaultValue: e.target.value })}
                            />
                          </div>
                        ))}
                      </div>
                      {(playgroundDraft.headerFields ?? []).length > 0 && (
                        <div className="space-y-2">
                          <label className="text-xs font-medium text-gray-600">Header field(s) - label and placeholder only</label>
                          {(playgroundDraft.headerFields ?? []).map((f, i) => (
                            <div key={i} className="grid grid-cols-2 gap-2 p-2 bg-white border rounded">
                              <div>
                                <label className="text-[10px] text-gray-400">name: {f.name} (fixed)</label>
                                <input
                                  className="border rounded px-2 py-1 w-full text-sm"
                                  placeholder="Label"
                                  value={f.label}
                                  onChange={e => updateLabField('headerFields', i, { label: e.target.value })}
                                />
                              </div>
                              <input
                                className="border rounded px-2 py-1 w-full text-sm self-end"
                                placeholder="Placeholder text"
                                value={f.placeholder ?? ''}
                                onChange={e => updateLabField('headerFields', i, { placeholder: e.target.value })}
                              />
                            </div>
                          ))}
                        </div>
                      )}
                      {playgroundDraft.secondaryField && (
                        <div className="space-y-1">
                          <label className="text-xs font-medium text-gray-600">Second input box - label and placeholder only</label>
                          <div className="grid grid-cols-2 gap-2 p-2 bg-white border rounded">
                            <div>
                              <label className="text-[10px] text-gray-400">name: {playgroundDraft.secondaryField.name} (fixed)</label>
                              <input
                                className="border rounded px-2 py-1 w-full text-sm"
                                placeholder="Label"
                                value={playgroundDraft.secondaryField.label}
                                onChange={e => setPlaygroundDraft({ ...playgroundDraft, secondaryField: { ...playgroundDraft.secondaryField!, label: e.target.value } })}
                              />
                            </div>
                            <input
                              className="border rounded px-2 py-1 w-full text-sm self-end"
                              placeholder="Placeholder text"
                              value={playgroundDraft.secondaryField.placeholder ?? ''}
                              onChange={e => setPlaygroundDraft({ ...playgroundDraft, secondaryField: { ...playgroundDraft.secondaryField!, placeholder: e.target.value } })}
                            />
                          </div>
                        </div>
                      )}
                      <p className="text-[11px] text-gray-400">Method, endpoint and field names are fixed here - they're wired to this lab's real API route, and editing them in the UI would break the exploit without warning. Ask for a source change if those genuinely need to change.</p>
                      {playgroundError && <p className="text-sm text-red-600">{playgroundError}</p>}
                      <div className="flex items-center gap-2 pt-2 border-t">
                        <Button onClick={savePlayground} disabled={playgroundSaving}>{playgroundSaving ? 'Saving...' : 'Save Page'}</Button>
                        <Button variant="outline" onClick={cancelEditingPlayground} disabled={playgroundSaving}>Cancel</Button>
                      </div>
                    </div>
                  )}
                  {isEditingThisLab && labDraft && (
                    <div className="mb-4 p-4 bg-gray-50 border rounded-lg space-y-3">
                      <div>
                        <label className="text-xs font-medium text-gray-600">Title</label>
                        <input
                          className="border rounded px-2 py-1 w-full text-sm mt-1"
                          value={labDraft.title}
                          onChange={e => setLabDraft({ ...labDraft, title: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Description (shown to players)</label>
                        <Textarea
                          className="mt-1 text-sm"
                          rows={2}
                          value={labDraft.description}
                          onChange={e => setLabDraft({ ...labDraft, description: e.target.value })}
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-gray-600">Difficulty</label>
                          <select
                            className="border rounded px-2 py-1 w-full text-sm mt-1"
                            value={labDraft.difficulty}
                            onChange={e => setLabDraft({ ...labDraft, difficulty: e.target.value as Challenge['difficulty'] })}
                          >
                            <option value="beginner">beginner</option>
                            <option value="intermediate">intermediate</option>
                            <option value="advanced">advanced</option>
                          </select>
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600">Max selectable lines</label>
                          <input
                            type="number"
                            min={1}
                            className="border rounded px-2 py-1 w-full text-sm mt-1"
                            value={labDraft.maxSelectableLines ?? 1}
                            onChange={e => setLabDraft({ ...labDraft, maxSelectableLines: parseInt(e.target.value, 10) || 1 })}
                          />
                        </div>
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Code shown to players</label>
                        <Textarea
                          className="mt-1 text-sm font-mono"
                          rows={10}
                          value={labDraft.code}
                          onChange={e => setLabDraft({ ...labDraft, code: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="text-xs font-medium text-gray-600">Vulnerable line(s) - comma-separated, e.g. "4" or "2, 15"</label>
                        <input
                          className="border rounded px-2 py-1 w-full text-sm mt-1"
                          value={labDraft.vulnerableLines.join(', ')}
                          onChange={e => setLabVulnerableLines(e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <label className="text-xs font-medium text-gray-600">Explanation per vulnerable line (shown after a correct guess)</label>
                        {labDraft.vulnerableLines.length === 0 ? (
                          <p className="text-xs text-gray-400">Add a vulnerable line above to write its explanation.</p>
                        ) : (
                          labDraft.vulnerableLines.map(line => (
                            <div key={line}>
                              <label className="text-xs text-gray-500">Line {line}</label>
                              <Textarea
                                className="mt-1 text-sm"
                                rows={2}
                                value={labDraft.explanations?.[line] ?? ''}
                                onChange={e => setLabDraft({ ...labDraft, explanations: { ...labDraft.explanations, [line]: e.target.value } })}
                              />
                            </div>
                          ))
                        )}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-gray-600">Hints (hidden until the player clicks Show Hints)</label>
                          <Button size="sm" variant="outline" onClick={addLabHint}>+ Add Hint</Button>
                        </div>
                        {(labDraft.hints ?? []).map((hint, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              className="border rounded px-2 py-1 w-full text-sm"
                              value={hint}
                              onChange={e => setLabHint(i, e.target.value)}
                            />
                            <Button size="sm" variant="destructive" onClick={() => removeLabHint(i)}>Remove</Button>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <label className="text-xs font-medium text-gray-600">
                            Flag{(labDraft.flags?.length ?? 0) > 1 || (labDraft.flags?.length ?? 0) === 0 ? 's' : ''} (one box per independent flag this lab has)
                          </label>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => {
                              // Normalize to the flags[] array as the one source of truth in the
                              // form, mapping the legacy single `flag` field into it if needed.
                              if (!labDraft.flags || labDraft.flags.length === 0) {
                                setLabDraft({ ...labDraft, flags: [labDraft.flag ?? ''], flag: undefined });
                              } else {
                                addLabFlag();
                              }
                            }}
                          >
                            + Add Flag
                          </Button>
                        </div>
                        {(labDraft.flags && labDraft.flags.length > 0 ? labDraft.flags : [labDraft.flag ?? '']).map((f, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <input
                              className="border rounded px-2 py-1 w-full text-sm font-mono"
                              value={f}
                              onChange={e => {
                                if (labDraft.flags && labDraft.flags.length > 0) {
                                  setLabFlag(i, e.target.value);
                                } else {
                                  setLabDraft({ ...labDraft, flag: e.target.value });
                                }
                              }}
                            />
                            {labDraft.flags && labDraft.flags.length > 1 && (
                              <Button size="sm" variant="destructive" onClick={() => removeLabFlag(i)}>Remove</Button>
                            )}
                          </div>
                        ))}
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="text-xs font-medium text-gray-600">Lab URL (live-exploit page)</label>
                          <input
                            className="border rounded px-2 py-1 w-full text-sm mt-1"
                            value={labDraft.labUrl ?? ''}
                            onChange={e => setLabDraft({ ...labDraft, labUrl: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="text-xs font-medium text-gray-600">Product origin (admin-only, never shown to players)</label>
                          <input
                            className="border rounded px-2 py-1 w-full text-sm mt-1"
                            value={labDraft.productOrigin ?? ''}
                            onChange={e => setLabDraft({ ...labDraft, productOrigin: e.target.value })}
                          />
                        </div>
                      </div>
                      {labError && <p className="text-sm text-red-600">{labError}</p>}
                      <div className="flex items-center gap-2 pt-2 border-t">
                        <Button onClick={saveLab} disabled={labSaving}>{labSaving ? 'Saving...' : 'Save Lab'}</Button>
                        <Button variant="outline" onClick={cancelEditingLab} disabled={labSaving}>Cancel</Button>
                      </div>
                    </div>
                  )}
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-wrap items-center gap-2 justify-between">
                      <div className="flex items-center gap-2">
                        <Button
                          variant={!isLocked ? "destructive" : "outline"}
                          className={isLocked ? "border-green-600 text-green-700 hover:bg-green-50 hover:text-green-900" : ""}
                          onClick={() => onToggleLock(challenge.id)}
                        >
                          {isLocked ? "Unlock" : "Lock"}
                        </Button>
                        {!isLocked && (!timer || (!timer.isRunning && !timer.isPaused)) && (
                          <input
                            type="number"
                            min={1}
                            max={60}
                            value={timerDurations[challenge.id] || 5}
                            onChange={e => handleDurationChange(challenge.id, e.target.value)}
                            className="border rounded px-2 py-1 w-20 text-sm"
                            placeholder="Minutes"
                          />
                        )}
                      </div>
                      {!isLocked && (
                        <div className="flex items-center gap-2">
                          {timer && timer.isRunning && !timer.isPaused ? (
                            <>
                              <Button variant="secondary" onClick={() => handlePauseTimer(challenge.id)}>
                                Pause Timer
                              </Button>
                              <Button variant="outline" onClick={() => handleResetTimer(challenge.id)}>
                                Reset Timer
                              </Button>
                            </>
                          ) : timer && timer.isPaused ? (
                            <>
                              <Button variant="default" onClick={() => handleResumeTimer(challenge.id)}>
                                Resume Timer
                              </Button>
                              <Button variant="outline" onClick={() => handleResetTimer(challenge.id)}>
                                Reset Timer
                              </Button>
                            </>
                          ) : (
                            <Button variant="default" onClick={() => handleStartTimer(challenge.id)}>
                              Start Timer
                            </Button>
                          )}
                          {/* Timer display for admin: show if running or paused and time left > 0 */}
                          {(timer && (timer.isRunning || timer.isPaused) && timeLeft > 0) && <TimerDisplay timeLeft={timeLeft} />}
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })
        )}
      </div>
      </>
      )}
      {view === 'analytics' && (
        <div className="space-y-6">
          {analyticsLoading ? (
            <div className="text-gray-500 py-8 text-center">Loading analytics...</div>
          ) : !analytics ? (
            <div className="text-gray-500 py-8 text-center">Could not load analytics.</div>
          ) : (
            <>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold">Current leaderboard (live, not yet archived)</h3>
                    <p className="text-sm text-gray-600">{analytics.live.length} player(s). You can export this any time - it doesn&apos;t require a reset.</p>
                  </div>
                  <Button
                    disabled={analytics.live.length === 0}
                    onClick={() => downloadCsv('live-leaderboard.csv', ['Name', 'Score'], analytics.live.map((u) => [u.userName, u.score]))}
                  >
                    Export CSV
                  </Button>
                </div>
                {analytics.live.length > 0 && (
                  <div className="mt-3 pt-3 border-t border-blue-200 space-y-1">
                    {analytics.live.map((u) => (
                      <div key={u.id} className="flex items-center justify-between bg-white border rounded px-3 py-1.5 text-sm">
                        <span>{u.avatar} {u.userName}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono">{u.score}</span>
                          <Button
                            size="sm"
                            variant="destructive"
                            disabled={deletingLeaderboardId === u.id}
                            onClick={() => deleteLeaderboardEntry(u.id, u.userName)}
                          >
                            {deletingLeaderboardId === u.id ? '...' : 'Delete'}
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <div className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
                <div>
                  <h3 className="font-semibold">All archived leaderboard sessions, combined</h3>
                  <p className="text-sm text-gray-600">{analytics.sessions.length} session(s) archived so far. One row per player per session.</p>
                </div>
                <Button
                  variant="outline"
                  disabled={analytics.sessions.length === 0}
                  onClick={() => {
                    const rows: (string | number)[][] = [];
                    analytics.sessions.forEach((s) =>
                      s.results.forEach((r) => rows.push([s.teamName, new Date(s.archivedAt).toLocaleString(), r.userName, r.score]))
                    );
                    downloadCsv('all-teams-combined.csv', ['Team', 'Session Date', 'Name', 'Score'], rows);
                  }}
                >
                  Export All Teams CSV
                </Button>
              </div>

              <div className="flex items-center justify-between bg-gray-50 border rounded-lg p-4">
                <div>
                  <h3 className="font-semibold">All archived feedback sessions, combined</h3>
                  <p className="text-sm text-gray-600">{feedbackArchive?.sessions.length ?? 0} session(s) archived so far. One row per response per session.</p>
                </div>
                <Button
                  variant="outline"
                  disabled={!feedbackArchive || feedbackArchive.sessions.length === 0}
                  onClick={() => {
                    if (!feedbackArchive) return;
                    const rows: (string | number)[][] = [];
                    feedbackArchive.sessions.forEach((s) =>
                      s.responses.forEach((r) =>
                        rows.push([
                          s.teamName,
                          new Date(s.archivedAt).toLocaleString(),
                          r.userName,
                          ...feedbackArchive.columns.flatMap((c) => {
                            const a = r.answers.find((a) => a.questionId === c.questionId);
                            return [a?.rating ?? '', a?.followUpText ?? ''];
                          }),
                          r.comments ?? '',
                          new Date(r.createdAt).toLocaleString(),
                        ])
                      )
                    );
                    downloadCsv(
                      'all-feedback-sessions-combined.csv',
                      ['Team', 'Archived At', 'Name', ...feedbackArchive.columns.flatMap((c) => [c.label, `${c.label} - why`]), 'Comments', 'Submitted At'],
                      rows
                    );
                  }}
                >
                  Export All Teams CSV
                </Button>
              </div>

              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-3 pb-3 border-b border-green-200">
                  <span className="text-sm font-medium shrink-0">Session Team:</span>
                  <input
                    className="border rounded px-2 py-1 text-sm flex-1 min-w-0"
                    placeholder="e.g. VLCore"
                    value={teamInput}
                    onChange={(e) => setTeamInput(e.target.value)}
                  />
                  <Button size="sm" disabled={teamSaving || teamInput.trim() === (currentTeam ?? '')} onClick={saveTeam}>
                    {teamSaving ? '...' : 'Save'}
                  </Button>
                  <span className="text-xs text-gray-500 shrink-0">
                    {currentTeam ? `Feedback is tagged "${currentTeam}"` : 'Not set - feedback submissions will fail until set'}
                  </span>
                </div>
                <div className="flex items-center justify-between mb-3 gap-3">
                  <div>
                    <h3 className="font-semibold">Dev Feedback - live, not yet archived ({feedback?.count ?? 0} response{feedback?.count === 1 ? '' : 's'})</h3>
                    <p className="text-xs text-gray-500">Archived automatically the next time you click Reset Everything, same as the leaderboard.</p>
                    {feedback && feedback.count > 0 && (
                      <p className="text-sm text-gray-600">
                        {feedback.averages.slice(0, 3).map((a) => `${a.label}: ${a.average}`).join(' · ')}
                        <span className="text-xs text-gray-400"> (full breakdown of all {feedback.columns.length} questions in the CSV)</span>
                      </p>
                    )}
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <Button
                      variant={feedbackToggle ? "destructive" : "default"}
                      disabled={feedbackToggleLoading}
                      onClick={toggleFeedbackEnabled}
                    >
                      {feedbackToggleLoading ? "..." : feedbackToggle ? "Feedback: ON (click to disable)" : "Feedback: OFF (click to enable)"}
                    </Button>
                    <Button variant="outline" onClick={() => editingQuestions ? closeQuestionEditor() : setEditingQuestions(true)}>
                      {editingQuestions ? "Close Editor" : "Edit Questions"}
                    </Button>
                  <Button
                    variant="outline"
                    disabled={!feedback || feedback.count === 0}
                    onClick={() =>
                      feedback &&
                      downloadCsv(
                        'feedback.csv',
                        ['Name', 'Team', ...feedback.columns.flatMap((c) => [c.label, `${c.label} - why`]), 'Comments', 'Submitted At'],
                        feedback.responses.map((r) => [
                          r.userName,
                          r.teamName ?? '',
                          ...feedback.columns.flatMap((c) => {
                            const a = r.answers.find((a) => a.questionId === c.questionId);
                            return [a?.rating ?? '', a?.followUpText ?? ''];
                          }),
                          r.comments ?? '',
                          new Date(r.createdAt).toLocaleString(),
                        ])
                      )
                    }
                  >
                    Export CSV
                  </Button>
                  </div>
                </div>

                {editingQuestions && (
                  <div className="bg-white border rounded-lg p-3 mb-3 space-y-2">
                    <p className="text-xs text-gray-500">
                      Add, rename, reorder, deactivate, or delete questions. Every rating pairs with its own open-text
                      follow-up. A question that already has responses can't be deleted (deactivate it instead) - this keeps
                      past reports meaningful.
                    </p>
                    {adminQuestions.map((q, i) => (
                      <div key={q.id} className={`flex items-center gap-2 ${!q.active ? 'opacity-50' : ''}`}>
                        <div className="flex flex-col">
                          <button type="button" className="text-gray-400 hover:text-gray-700 disabled:opacity-20" disabled={i === 0 || questionsSaving}
                            onClick={() => moveQuestion(i, -1)}>▲</button>
                          <button type="button" className="text-gray-400 hover:text-gray-700 disabled:opacity-20" disabled={i === adminQuestions.length - 1 || questionsSaving}
                            onClick={() => moveQuestion(i, 1)}>▼</button>
                        </div>
                        <div className="flex-1 flex flex-col gap-1">
                          <input
                            className="border rounded px-2 py-1 text-sm"
                            defaultValue={q.label}
                            placeholder="Rating question"
                            onBlur={(e) => e.target.value.trim() && e.target.value !== q.label && updateQuestion(q.id, { label: e.target.value.trim() })}
                          />
                          <input
                            className="border rounded px-2 py-1 text-xs text-gray-600"
                            defaultValue={q.followUpLabel}
                            placeholder="Open-text follow-up"
                            onBlur={(e) => e.target.value.trim() && e.target.value !== q.followUpLabel && updateQuestion(q.id, { followUpLabel: e.target.value.trim() })}
                          />
                        </div>
                        <select
                          className="border rounded px-2 py-1 text-xs"
                          value={q.ratingStyle}
                          onChange={(e) => updateQuestion(q.id, { ratingStyle: e.target.value as RatingStyle })}
                          title="How the 1-5 rating buttons are labeled for this question"
                        >
                          <option value="words">Poor..Excellent</option>
                          <option value="numbers">1..5</option>
                        </select>
                        <Button size="sm" variant="outline" onClick={() => updateQuestion(q.id, { active: !q.active })}>
                          {q.active ? 'Deactivate' : 'Activate'}
                        </Button>
                        <Button size="sm" variant="destructive" onClick={() => deleteQuestion(q.id)}>Delete</Button>
                      </div>
                    ))}
                    <div className="flex items-end gap-2 pt-2">
                      <div className="flex-1 flex flex-col gap-1">
                        <input
                          className="border rounded px-2 py-1 text-sm"
                          placeholder="New rating question..."
                          value={newQuestionLabel}
                          onChange={(e) => setNewQuestionLabel(e.target.value)}
                        />
                        <input
                          className="border rounded px-2 py-1 text-xs text-gray-600"
                          placeholder="Its open-text follow-up..."
                          value={newQuestionFollowUp}
                          onChange={(e) => setNewQuestionFollowUp(e.target.value)}
                          onKeyDown={(e) => { if (e.key === 'Enter') addQuestion(); }}
                        />
                      </div>
                      <Button size="sm" onClick={addQuestion} disabled={questionsSaving || !newQuestionLabel.trim() || !newQuestionFollowUp.trim()}>Add Question</Button>
                    </div>
                  </div>
                )}

                {feedback && feedback.responses.length > 0 && (
                  <div className="space-y-2 max-h-96 overflow-y-auto">
                    {feedback.responses.map((r) => (
                      <div key={r.id} className="bg-white border rounded p-2 text-sm">
                        <div className="flex justify-between items-center font-medium">
                          <span>{r.userName}{r.teamName ? ` · ${r.teamName}` : ''}</span>
                          <div className="flex items-center gap-2">
                            <span className="text-gray-500 font-normal">{new Date(r.createdAt).toLocaleString()}</span>
                            <Button
                              size="sm"
                              variant="destructive"
                              disabled={deletingFeedbackId === r.id}
                              onClick={() => deleteFeedbackEntry(r.id, r.userName)}
                            >
                              {deletingFeedbackId === r.id ? '...' : 'Delete'}
                            </Button>
                          </div>
                        </div>
                        <div className="mt-1 space-y-1">
                          {r.answers.map((a) => (
                            <div key={a.questionId} className="text-xs">
                              <span className="font-medium text-gray-700">{a.label}: {a.rating}</span>
                              {a.followUpText && <span className="text-gray-600"> - &quot;{a.followUpText}&quot;</span>}
                            </div>
                          ))}
                        </div>
                        {r.comments && <div className="text-gray-700 mt-1 italic">&quot;{r.comments}&quot;</div>}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              <h3 className="font-semibold mt-6">Past leaderboard</h3>
              {analytics.sessions.length === 0 ? (
                <p className="text-gray-500 text-sm">No sessions archived yet - archiving happens automatically the next time you click Reset Everything.</p>
              ) : (
                analytics.sessions.map((s) => (
                  <div key={s.sessionId} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold">{s.teamName}</span>
                        <span className="text-xs text-gray-500 ml-2">{new Date(s.archivedAt).toLocaleString()}</span>
                        <span className="text-xs text-gray-500 ml-2">({s.results.length} player(s))</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() => downloadCsv(`${s.teamName.replace(/[^a-z0-9]+/gi, '-')}-${s.sessionId.slice(0, 8)}.csv`, ['Team', 'Name', 'Score'], s.results.map((r) => [s.teamName, r.userName, r.score]))}
                        >
                          Export CSV
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={deletingSessionId === s.sessionId}
                          onClick={() => deleteLeaderboardSession(s.sessionId, s.teamName)}
                        >
                          {deletingSessionId === s.sessionId ? '...' : 'Delete Session'}
                        </Button>
                      </div>
                    </div>
                    <table className="w-full text-sm">
                      <tbody>
                        {s.results.sort((a, b) => b.score - a.score).map((r) => (
                          <tr key={r.userName} className="border-t">
                            <td className="py-1">{r.avatar} {r.userName}</td>
                            <td className="py-1 text-right font-mono">{r.score}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                ))
              )}

              <h3 className="font-semibold mt-6">Past feedback sessions</h3>
              {!feedbackArchive || feedbackArchive.sessions.length === 0 ? (
                <p className="text-gray-500 text-sm">No feedback archived yet - archiving happens automatically the next time you click Reset Everything.</p>
              ) : (
                feedbackArchive.sessions.map((s) => (
                  <div key={s.sessionId} className="border rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <div>
                        <span className="font-semibold">{s.teamName}</span>
                        <span className="text-xs text-gray-500 ml-2">{new Date(s.archivedAt).toLocaleString()}</span>
                        <span className="text-xs text-gray-500 ml-2">({s.responses.length} response(s))</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button
                          size="sm"
                          variant="outline"
                          onClick={() =>
                            downloadCsv(
                              `feedback-${s.teamName.replace(/[^a-z0-9]+/gi, '-')}-${s.sessionId.slice(0, 8)}.csv`,
                              ['Name', 'Team', ...feedbackArchive.columns.flatMap((c) => [c.label, `${c.label} - why`]), 'Comments', 'Submitted At'],
                              s.responses.map((r) => [
                                r.userName,
                                r.teamName ?? '',
                                ...feedbackArchive.columns.flatMap((c) => {
                                  const a = r.answers.find((a) => a.questionId === c.questionId);
                                  return [a?.rating ?? '', a?.followUpText ?? ''];
                                }),
                                r.comments ?? '',
                                new Date(r.createdAt).toLocaleString(),
                              ])
                            )
                          }
                        >
                          Export CSV
                        </Button>
                        <Button
                          size="sm"
                          variant="destructive"
                          disabled={deletingFeedbackSessionId === s.sessionId}
                          onClick={() => deleteFeedbackSession(s.sessionId, s.teamName)}
                        >
                          {deletingFeedbackSessionId === s.sessionId ? '...' : 'Delete Session'}
                        </Button>
                      </div>
                    </div>
                    <div className="space-y-2 max-h-96 overflow-y-auto">
                      {s.responses.map((r) => (
                        <div key={r.id} className="bg-white border rounded p-2 text-sm">
                          <div className="flex justify-between font-medium">
                            <span>{r.userName}</span>
                            <span className="text-gray-500">{new Date(r.createdAt).toLocaleString()}</span>
                          </div>
                          <div className="mt-1 space-y-1">
                            {r.answers.map((a) => (
                              <div key={a.questionId} className="text-xs">
                                <span className="font-medium text-gray-700">{a.label}: {a.rating}</span>
                                {a.followUpText && <span className="text-gray-600"> - &quot;{a.followUpText}&quot;</span>}
                              </div>
                            ))}
                          </div>
                          {r.comments && <div className="text-gray-700 mt-1 italic">&quot;{r.comments}&quot;</div>}
                        </div>
                      ))}
                    </div>
                  </div>
                ))
              )}
            </>
          )}
        </div>
      )}
    </div>
  );
}

function Leaderboard({ currentUser }: { currentUser: { name: string; avatar: string; score: number } }) {
  const [users, setUsers] = useState<{ name: string; avatar: string; score: number }[]>([]);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Fetch leaderboard on mount and every 5 seconds
  useEffect(() => {
    const fetchLeaderboard = () => {
      fetch('/api/leaderboard')
        .then(res => res.json())
        .then(setUsers);
    };
    fetchLeaderboard();
    intervalRef.current = setInterval(fetchLeaderboard, 5000);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
  }, []);

  // If current user is not in the top, show them at the bottom
  const inTop = users.some(u => u.name === currentUser.name);
  const displayUsers = inTop ? users : [...users, currentUser];

  // Medal icons for top 3
  const medalIcons = [
    <span key="gold" aria-label="1st" className="text-2xl mr-2">🥇</span>,
    <span key="silver" aria-label="2nd" className="text-2xl mr-2">🥈</span>,
    <span key="bronze" aria-label="3rd" className="text-2xl mr-2">🥉</span>,
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full max-w-md mx-auto mt-6 md:mt-0 md:ml-8 border border-gray-100">
      <h3 className="text-2xl font-extrabold mb-5 text-center flex items-center justify-center gap-2 tracking-tight">
        <span>🏆</span> Leaderboard
      </h3>
      <ul className="space-y-2">
        {displayUsers.map((user, idx) => {
          const isCurrent = user.name === currentUser.name;
          const isTop5 = idx < 5;
          let positionIcon = null;
          let positionClass = "";
          let badge = null;

          if (idx < 3) {
            positionIcon = medalIcons[idx];
            positionClass = [
              "bg-gradient-to-r from-yellow-100 to-yellow-50 border-yellow-300",
              "bg-gradient-to-r from-gray-200 to-gray-50 border-gray-300",
              "bg-gradient-to-r from-amber-200 to-amber-50 border-amber-300"
            ][idx];
          } else if (isTop5) {
            badge = (
              <span className="ml-2 px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full text-xs font-semibold border border-blue-200">Top 5</span>
            );
            positionClass = "bg-blue-50 border-blue-200";
          }

          return (
            <li
              key={user.name}
              className={`flex items-center justify-between px-4 py-3 rounded-xl border transition-all ${positionClass} ${isCurrent && !isTop5 ? "ring-2 ring-blue-400 bg-blue-50 font-bold" : ""} ${isCurrent ? "shadow-md" : ""}`}
              style={{ boxShadow: isCurrent ? '0 2px 8px 0 rgba(59,130,246,0.08)' : undefined }}
            >
              <div className="flex items-center gap-3">
                {positionIcon}
                <span className="text-xl select-none" aria-label="avatar">{user.avatar}</span>
                <span className={`truncate max-w-[120px] text-base ${isCurrent ? "text-blue-900" : "text-gray-800"}`}>{user.name}</span>
                {badge}
                {isCurrent && !isTop5 && (
                  <span className="ml-2 px-2 py-0.5 bg-blue-200 text-blue-900 rounded-full text-xs font-semibold border border-blue-300">You</span>
                )}
              </div>
              <span className={`text-lg font-bold ${idx === 0 ? "text-yellow-600" : idx === 1 ? "text-gray-500" : idx === 2 ? "text-amber-700" : "text-blue-700"}`}>{user.score}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

// Resizable container for the challenge card
function ResizableCard({ children, defaultWidth = 0 }: { children: React.ReactNode, defaultWidth?: number }) {
  const [width, setWidth] = useState(defaultWidth); // Use defaultWidth as initial value
  const containerRef = useRef<HTMLDivElement>(null);
  const [dragging, setDragging] = useState(false);

  const startDrag = useCallback((e: React.MouseEvent) => {
    setDragging(true);
    document.body.style.cursor = "ew-resize";
  }, []);

  const onDrag = useCallback((e: MouseEvent) => {
    if (!dragging || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const minWidth = 320;
    const maxWidth = 900;
    let newWidth = e.clientX - rect.left;
    newWidth = Math.max(minWidth, Math.min(maxWidth, newWidth));
    setWidth(newWidth);
  }, [dragging]);

  const stopDrag = useCallback(() => {
    setDragging(false);
    document.body.style.cursor = "";
  }, []);

  useEffect(() => {
    if (!dragging) return;
    const move = (e: MouseEvent) => onDrag(e);
    const up = () => stopDrag();
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, [dragging, onDrag, stopDrag]);

  return (
    <div
      ref={containerRef}
      className="relative bg-transparent"
      style={{ width: width ? width : undefined, minWidth: 320, maxWidth: 900 }}
    >
      <div>{children}</div>
      <div
        className="absolute top-0 right-0 h-full w-2 cursor-ew-resize z-20 flex items-center group"
        onMouseDown={startDrag}
        style={{ userSelect: "none" }}
      >
        <div className="w-1 h-16 bg-gray-300 rounded-full opacity-60 group-hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
}

// --- ChallengeTimer component ---
function ChallengeTimer({ selectedChallenge }: { selectedChallenge: Challenge }) {
  const { timeLeft } = useChallengeTimer(selectedChallenge);

  if (timeLeft > 0) {
    return <TimerDisplay timeLeft={timeLeft} />;
  }

  // Show "No Timer" state when no timer is running
  return (
    <span className="inline-block px-3 py-1 bg-gray-100 text-gray-600 rounded font-mono text-lg min-w-[70px] text-center">
      No Timer
    </span>
  );
}

// Add a hook to get all running/paused timers for the challenge list
function useAllChallengeTimers() {
  const [timers, setTimers] = useState<Record<string, { startTime: number; duration: number; isRunning: boolean; isPaused: boolean; remaining?: number }>>({});
  const [timeLefts, setTimeLefts] = useState<Record<string, number>>({});
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (!socketRef.current) {
      socketRef.current = io(getSocketUrl(), {
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        reconnection: true,
        reconnectionDelay: 1000,
        reconnectionAttempts: 5
      });
    }
    const socket = socketRef.current;
    const handleTimerUpdate = (data: { challengeId: string; startTime: number; duration: number; isRunning: boolean; isPaused: boolean; remaining?: number }) => {
      setTimers(prev => ({ ...prev, [data.challengeId]: data }));
    };
    socket.on('timer:update', handleTimerUpdate);
    return () => {
      socket.off('timer:update', handleTimerUpdate);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLefts(prev => {
        const updated: Record<string, number> = { ...prev };
        Object.entries(timers).forEach(([challengeId, timer]) => {
          if (timer.isPaused && typeof (timer as any).remaining === 'number') {
            updated[challengeId] = Math.max(0, Math.floor((timer as any).remaining / 1000));
          } else if (timer.isRunning) {
            const now = Date.now();
            const end = timer.startTime + timer.duration;
            updated[challengeId] = Math.max(0, Math.floor((end - now) / 1000));
          } else {
            updated[challengeId] = 0;
          }
        });
        return updated;
      });
    }, 250);
    return () => clearInterval(interval);
  }, [timers]);

  return { timers, timeLefts };
}

// Utility to generate dynamic lab URL
function getDynamicLabUrl(labPath: string) {
  if (typeof window === 'undefined') return '';

  // If it's already a full URL (starts with http:// or https://), return as is
  if (labPath.startsWith('http://') || labPath.startsWith('https://')) {
    return labPath;
  }

  // Relative path: resolve against the app's own origin. (Previously this appended
  // ":8888", a port nothing listens on, which made every "Open Lab" link dead.)
  return `${window.location.origin}${labPath.startsWith("/") ? "" : "/"}${labPath}`;
}

export default function CodeReviewChallenge() {
  // User state
  const [user, setUser] = useState({ name: "", avatar: "", score: 0 });
  const [showNameModal, setShowNameModal] = useState(false);

  // Admin state
  const [isAdmin, setIsAdmin] = useState(false);
  const [showAdminModal, setShowAdminModal] = useState(false);
  const [adminError, setAdminError] = useState("");

  // Feedback state - available any time, not gated on finishing every lab
  const [showFeedbackModal, setShowFeedbackModal] = useState(false);
  const [feedbackEnabled, setFeedbackEnabled] = useState(false);
  const [currentTeam, setCurrentTeam] = useState<string | null>(null);
  const [feedbackQuestions, setFeedbackQuestions] = useState<FeedbackQuestion[]>([]);
  const handleFeedbackSubmit = async (v: FeedbackValues): Promise<boolean> => {
    const res = await fetch("/api/feedback", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        userName: user.name,
        comments: v.comments,
        answers: Object.entries(v.answers).map(([questionId, a]) => ({ questionId, rating: a.rating, followUpText: a.followUpText })),
      }),
    });
    return res.ok;
  };

  // Challenge lock state (persisted via API)
  const [locks, setLocks] = useState<Record<string, boolean>>({});

  // Challenges state - dynamically fetched
  const [challenges, setChallenges] = useState<Challenge[]>([]);
  const [challengesLoading, setChallengesLoading] = useState(true);

  // Debug challenges state changes
  useEffect(() => {
    console.log('Challenges state changed:', {
      challengesLength: challenges.length,
      challengesLoading,
      challenges: challenges
    });
  }, [challenges, challengesLoading]);

  // Challenge state
  const [selectedChallenge, setSelectedChallenge] = useState<Challenge | null>(null)
  const [selectedLines, setSelectedLines] = useState<number[]>([])
  const [submitted, setSubmitted] = useState(false)
  const [showResults, setShowResults] = useState(false)
  const [showHints, setShowHints] = useState(false)
  const [alreadySolved, setAlreadySolved] = useState(false);
  const [flagAlreadySolved, setFlagAlreadySolved] = useState(false);

  // Track if the last submission was correct
  const [lastSubmissionCorrect, setLastSubmissionCorrect] = useState<boolean | null>(null);
  // Answers are not shipped to the client up front. The server returns them in
  // the submit response once a lab is resolved; we keep them here per challenge.
  const [revealed, setRevealed] = useState<Record<string, { vulnerableLines: number[]; explanations: { [line: number]: string } }>>({});
  // Per-line correct/incorrect feedback for the current submission (selected lines only).
  const [lastFeedback, setLastFeedback] = useState<{ line: number; status: string }[]>([]);

  // Attempts state
  const [attemptsUsed, setAttemptsUsed] = useState(0);
  const [attemptsRemaining, setAttemptsRemaining] = useState(3);

  // Open Lab state
  const [openLabChallenge, setOpenLabChallenge] = useState<string | null>(null);
  const [flagInput, setFlagInput] = useState("");
  const [flagStatus, setFlagStatus] = useState<{ status: 'idle' | 'loading' | 'success' | 'error' | 'already'; message?: string }>({ status: 'idle' });

  // --- Flag submission state for challenge view ---
  // Array-based so a challenge with more than one independent flag (e.g.
  // LAB-CONFIG-01's error-leak + CORS flags) gets one box PER flag instead
  // of forcing both into a single input, which only accepts one value.
  const [flagInputs, setFlagInputs] = useState<string[]>([""]);
  const [flagStatuses, setFlagStatuses] = useState<Array<{ status: 'idle' | 'loading' | 'success' | 'error' | 'already'; message?: string }>>([{ status: 'idle' }]);

  // Reset the flag boxes whenever the selected challenge changes - a
  // different challenge may need a different number of flags, and an old
  // challenge's in-progress input shouldn't carry over.
  useEffect(() => {
    const n = Math.max(1, selectedChallenge?.flagCount ?? 1);
    setFlagInputs(Array(n).fill(""));
    setFlagStatuses(Array(n).fill({ status: 'idle' }));
  }, [selectedChallenge?.id, selectedChallenge?.flagCount]);

  // Move this hook call here so it's always called, before any early returns
  const { timers: allTimers, timeLefts: allTimeLefts } = useAllChallengeTimers();

  // Pressure ticks for the last 20 seconds of every running timer, then a
  // loud chime at 0 - kept at this single top-level spot (rather than inside
  // the timer hooks themselves) so each fires exactly once regardless of
  // whether the list or a single lab is currently shown. The end chime only
  // fires for a timer we've actually seen running (seenPositive), so a timer
  // that's already expired on page load/reconnect stays silent instead of
  // chiming immediately; ticks aren't guarded that way since joining mid-
  // countdown inside the pressure window should still tick.
  const prevTimeLeftsRef = useRef<Record<string, number>>({});
  const seenPositiveRef = useRef<Record<string, boolean>>({});
  useEffect(() => {
    for (const [challengeId, cur] of Object.entries(allTimeLefts)) {
      const prev = prevTimeLeftsRef.current[challengeId] ?? 0;
      if (cur > 0) seenPositiveRef.current[challengeId] = true;
      if (cur !== prev && cur >= 1 && cur <= PRESSURE_TICK_START_SECONDS) {
        playPressureTick(cur);
      }
      if (prev > 0 && cur === 0 && seenPositiveRef.current[challengeId]) {
        playTimerEndSound();
      }
    }
    prevTimeLeftsRef.current = { ...allTimeLefts };
  }, [allTimeLefts]);

  // On mount, load user/admin from localStorage, and fetch locks from API
  useEffect(() => {
    const stored = localStorage.getItem("crc_user");
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        // Fetch actual score from backend
        fetch('/api/leaderboard')
          .then(res => res.json())
          .then(users => {
            const found = users.find((u: any) => u.name === parsed.name);
            setUser({
              name: parsed.name,
              avatar: parsed.avatar,
              score: found ? found.score : 0,
            });
          });
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        localStorage.removeItem("crc_user"); // Clear corrupted data
        setShowNameModal(true);
      }
    } else setShowNameModal(true);
    const admin = localStorage.getItem("crc_admin");
    setIsAdmin(admin === "true");
    // Fetch locks from API
    fetch('/api/challenge-locks')
      .then(res => res.json())
      .then(data => setLocks(data));

    // Whether the "Give Feedback" button is live yet, and which team this
    // session is currently set to (admin-controlled, never typed by a dev)
    fetch('/api/feedback-enabled')
      .then(res => res.json())
      .then(data => {
        setFeedbackEnabled(!!data.enabled);
        setCurrentTeam(data.currentTeam ?? null);
      });

    // The feedback form's wording/order - reflects any admin customization
    fetch('/api/feedback-questions')
      .then(res => res.json())
      .then(data => { if (Array.isArray(data.questions)) setFeedbackQuestions(data.questions); });

    // Fetch challenges from API
    const fetchChallenges = async () => {
      try {
        setChallengesLoading(true);
        console.log('Fetching challenges...');

        // Public endpoint: labs without the answer key.
        const res = await fetch('/api/challenges');
        console.log('Challenges response status:', res.status);
        console.log('Challenges response headers:', Object.fromEntries(res.headers.entries()));
        if (res.ok) {
          const data = await res.json();
          console.log('Challenges data:', data);
          console.log('Challenges data length:', data.length);
          setChallenges(data);
        } else {
          const errorText = await res.text();
          console.error('Failed to fetch challenges:', res.status, errorText);
        }
      } catch (error) {
        console.error('Error fetching challenges:', error);
      } finally {
        setChallengesLoading(false);
        console.log('Challenges loading finished');
      }
    };

    fetchChallenges();
  }, []); // Empty dependency array - only run once on mount

  // Save user and admin state to localStorage
  useEffect(() => {
    if (user.name) localStorage.setItem("crc_user", JSON.stringify(user));
  }, [user]);
  useEffect(() => {
    localStorage.setItem("crc_admin", isAdmin ? "true" : "false");
  }, [isAdmin]);

  const handleNameSubmit = (name: string) => {
    setUser({ name, avatar: getRandomAvatar(), score: 0 });
    setShowNameModal(false);
  };

  // Admin login/logout logic
  const handleAdminLogin = () => {
    setShowAdminModal(true);
    setAdminError("");
  };
  const handleAdminLogout = async () => {
    await fetch("/api/admin-login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ logout: true }) });
    setIsAdmin(false);
  };
  const handleAdminModalSubmit = async (password: string) => {
    // Checked server-side only now - no password is shipped in client code.
    const res = await fetch("/api/admin-login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });
    if (res.ok) {
      setIsAdmin(true);
      setShowAdminModal(false);
      setAdminError("");
    } else {
      setAdminError("Incorrect password");
    }
  };

  // Challenge lock/unlock logic (persist to API)
  const handleToggleLock = async (id: string) => {
    // If currently locked (undefined or true), unlock (set to false). If unlocked (false), lock (set to true).
    const isLocked = locks[id] !== false;
    const newLocked = !isLocked;
    setLocks(prev => ({ ...prev, [id]: newLocked })); // Optimistic update
    await fetch('/api/challenge-locks', {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id, locked: newLocked })
    });
    // Reset timer if locking the challenge
    if (newLocked && isAdmin) {
      const socket = io(getSocketUrl(), {
        transports: ['websocket', 'polling'],
        path: '/socket.io/',
        reconnection: true
      });
      socket.emit('admin:resetTimer', { challengeId: id });
      socket.disconnect();
    }
    // Optionally, re-fetch locks from API for consistency
    // const data = await fetch("/api/challenge-locks").then(res => res.json());
    // setLocks(data);
  };

  const handleSelectChallenge = (challenge: Challenge) => {
    // By default, all challenges are locked unless explicitly unlocked
    const isLocked = locks[challenge.id] !== false;
    if (!isAdmin && isLocked) return;
    setSelectedChallenge(challenge)
    setSelectedLines([])
    setSubmitted(false)
    setShowResults(false)
    setShowHints(false)
    setFlagInput("");
    setFlagChallengeStatus({ status: 'idle' });
  }

  // Check if user has already solved the selected challenge (challenge submission)
  useEffect(() => {
    const checkAlreadySolved = async () => {
      if (selectedChallenge && user.name) {
        const res = await fetch('/api/challenge-status', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user.name,
            challengeId: selectedChallenge.id,
          }),
        });
        const data = await res.json();
        setAlreadySolved(!!data.solved);
      } else {
        setAlreadySolved(false);
      }
    };
    checkAlreadySolved();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedChallenge, user.name]);

  // Check if user has already solved the flag for the selected challenge
  useEffect(() => {
    const checkFlagAlreadySolved = async () => {
      if (selectedChallenge && user.name) {
        const res = await fetch('/api/flag-status', {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: user.name,
            challengeId: selectedChallenge.id,
          }),
        });
        const data = await res.json();
        setFlagAlreadySolved(!!data.solved);
      } else {
        setFlagAlreadySolved(false);
      }
    };
    checkFlagAlreadySolved();
  }, [selectedChallenge, user.name]);

  // Fetch attempts when challenge or user changes
  useEffect(() => {
    const fetchAttempts = async () => {
      if (selectedChallenge && user.name) {
        const res = await fetch('/api/challenge-attempts', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ name: user.name, challengeId: selectedChallenge.id })
        });
        const data = await res.json();
        setAttemptsUsed(data.attemptsUsed);
        setAttemptsRemaining(data.attemptsRemaining);
      } else {
        setAttemptsUsed(0);
        setAttemptsRemaining(3);
      }
    };
    fetchAttempts();
  }, [selectedChallenge, user.name]);

  const handleSubmit = async () => {
    setSubmitted(true);
    setShowResults(true);
    if (selectedChallenge && selectedLines.length > 0) {
      // Send selectedLines array to backend
      const res = await fetch('/api/submit-challenge', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          avatar: user.avatar,
          challengeId: selectedChallenge.id,
          selectedLines: selectedLines,
        }),
      });
      const data = await res.json();
      // Correctness is decided by the server, not the client.
      const allCorrect = !!data.correct;
      setLastSubmissionCorrect(allCorrect);
      setAlreadySolved(allCorrect);
      // Per-line feedback from the server drives the line highlighting.
      setLastFeedback(Array.isArray(data.feedback) ? data.feedback : []);
      // The server reveals the answer key only once the lab is resolved.
      if (Array.isArray(data.vulnerableLines)) {
        setRevealed(prev => ({
          ...prev,
          [selectedChallenge.id]: {
            vulnerableLines: data.vulnerableLines,
            explanations: data.explanations || {},
          },
        }));
      }
      // Update attempts from backend response
      if (typeof data.attemptsUsed === 'number') setAttemptsUsed(data.attemptsUsed);
      if (typeof data.attemptsRemaining === 'number') setAttemptsRemaining(data.attemptsRemaining);
      // Update personal score in the top-right corner from the backend response
      if (typeof data.score === 'number') {
        setUser(u => {
          const updated = { ...u, score: data.score };
          // Keep localStorage in sync so score survives a page refresh
          localStorage.setItem("crc_user", JSON.stringify(updated));
          return updated;
        });
      }
    }
  }

  const handleReset = () => {
    setSelectedLines([])
    setSubmitted(false)
    setShowResults(false)
    setShowHints(false)
  }

  const handleBackToChallenges = () => {
    setSelectedChallenge(null)
    setSelectedLines([])
    setSubmitted(false)
    setShowResults(false)
    setShowHints(false)
    setOpenLabChallenge(null)
    setFlagInput("");
    setFlagChallengeStatus({ status: 'idle' });
  }

  const toggleLine = (lineNumber: number) => {
    if (submitted) return;
    const maxSelectable = selectedChallenge?.maxSelectableLines ?? 1;
    if (!selectedLines.includes(lineNumber) && selectedLines.length >= maxSelectable) {
      // Optionally, show a warning or ignore further selection
      return;
    }
    setSelectedLines((prev) =>
      prev.includes(lineNumber) ? prev.filter((l) => l !== lineNumber) : [...prev, lineNumber]
    );
  }

  const getLineStatus = (lineNumber: number) => {
    if (!showResults || !selectedChallenge) return null;
    // Highlight selected lines using the server's per-line feedback.
    const fb = lastFeedback.find((f) => f.line === lineNumber);
    if (fb) return fb.status === "correct" ? "correct" : "incorrect";
    return null;
  }

  // Helper to refresh solved states for both challenge and flag
  const refreshSolvedStates = useCallback(() => {
    // Check if user has already solved the selected challenge (challenge submission)
    if (selectedChallenge && user.name) {
      fetch('/api/challenge-status', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          challengeId: selectedChallenge.id,
        }),
      })
        .then(res => res.json())
        .then(data => setAlreadySolved(!!data.solved));

      fetch('/api/flag-status', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: user.name,
          challengeId: selectedChallenge.id,
        }),
      })
        .then(res => res.json())
        .then(data => setFlagAlreadySolved(!!data.solved));
    }
  }, [selectedChallenge, user.name]);

  // Show name modal if needed
  if (showNameModal) {
    return <NameModal open={showNameModal} onSubmit={handleNameSubmit} />
  }

  // Show admin modal if needed
  if (showAdminModal) {
    return <AdminModal open={showAdminModal} onSubmit={handleAdminModalSubmit} onClose={() => setShowAdminModal(false)} error={adminError} />
  }

  // Show admin panel if admin
  if (isAdmin && !selectedChallenge) {
    console.log('Rendering admin panel with:', {
      challengesLoading,
      challengesLength: challenges?.length,
      challenges: challenges
    });
    return (
      <>
        <UserBar name={user.name} avatar={user.avatar} score={user.score} isAdmin={isAdmin} onAdminLogout={handleAdminLogout} onGiveFeedback={() => setShowFeedbackModal(true)} feedbackEnabled={feedbackEnabled} />
        {challengesLoading ? (
          <div className="min-h-screen bg-gray-50 p-4 flex items-center justify-center">
            <div className="text-gray-500">Loading admin panel...</div>
          </div>
        ) : (
          <AdminPanel locks={locks} onToggleLock={handleToggleLock} challenges={challenges} />
        )}
      </>
    );
  }

  // Show challenge selection if no challenge is selected
  if (!selectedChallenge) {
    return (
      <>
        <UserBar name={user.name} avatar={user.avatar} score={user.score} isAdmin={isAdmin} onAdminLogout={handleAdminLogout} onGiveFeedback={() => setShowFeedbackModal(true)} feedbackEnabled={feedbackEnabled} />
        <FeedbackModal open={showFeedbackModal} onSubmit={handleFeedbackSubmit} onClose={() => setShowFeedbackModal(false)} currentTeam={currentTeam} questions={feedbackQuestions} />
        <div className="min-h-screen bg-gray-50 p-4">
          <div className="max-w-4xl mx-auto space-y-6">
            <div className="text-center mb-8">
              <h1 className="text-3xl font-bold text-center">Code Review Challenge</h1>
              <p className="text-gray-600 text-center">Choose a challenge to test your skills</p>
              <div className="mt-2 text-sm text-gray-500">
                💡 <strong>Timer Info:</strong> Timers can be started from the admin panel. When active, they appear in the bottom-right corner of challenge cards.
              </div>
              <div className={`mt-4 flex items-center justify-center gap-3 rounded-lg px-4 py-3 text-sm ${feedbackEnabled ? "bg-blue-50 border border-blue-200 text-blue-800" : "bg-gray-50 border border-gray-200 text-gray-500"}`}>
                <span>{feedbackEnabled ? "Finished (or finishing up)? Tell us how the session went." : "Feedback isn't open yet - your trainer will enable it."}</span>
                <Button
                  size="sm"
                  onClick={feedbackEnabled ? () => setShowFeedbackModal(true) : undefined}
                  disabled={!feedbackEnabled}
                >
                  Give Feedback
                </Button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {challengesLoading ? (
                <div className="col-span-2 text-center py-8">
                  <div className="text-gray-500">Loading challenges...</div>
                </div>
              ) : challenges.length === 0 ? (
                <div className="col-span-2 text-center py-8">
                  <div className="text-gray-500 mb-4">No challenges found.</div>
                </div>
              ) : (
                challenges
                  // Hide from the dev-facing list entirely unless an admin has explicitly
                  // unlocked it (DEMO is the tutorial and always stays visible). The admin's
                  // own view (isAdmin) is a separate panel above and is unaffected.
                  .filter((challenge) => challenge.id === "DEMO" || locks[challenge.id] === false)
                  .map((challenge) => {
                  // By default, all challenges are locked unless explicitly unlocked
                  const locked = locks[challenge.id] !== false;
                  const timer = allTimers[challenge.id];
                  const timeLeft = allTimeLefts[challenge.id] || 0;
                  const isOpenLab = openLabChallenge === challenge.id;
                  // Special style for DEMO challenge
                  const demoCardClass = challenge.id === 'DEMO' ? 'bg-yellow-50 border-yellow-400 ring-2 ring-yellow-300' : '';
                  return (
                    <Card key={challenge.id} className={`relative transition-shadow ${demoCardClass} ${locked && !isAdmin ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer hover:shadow-lg'}`} onClick={() => handleSelectChallenge(challenge)}>
                      {/* Timer at bottom right if running or paused */}
                      {(timer && (timer.isRunning || timer.isPaused) && timeLeft > 0) && (
                        <div className="absolute bottom-3 right-3 z-10">
                          <TimerDisplay timeLeft={timeLeft} />
                        </div>
                      )}
                      {/* Show "No Timer" when no timer is running */}
                      {(!timer || (!timer.isRunning && !timer.isPaused) || timeLeft === 0) && (
                        <div className="absolute bottom-3 right-3 z-10">
                          <span className="inline-block px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs font-mono">
                            No Timer
                          </span>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          {challenge.title}
                          {locked && <Lock className="h-4 w-4 text-gray-400 ml-2" />}
                        </CardTitle>
                        <CardDescription className="mt-2">{challenge.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col gap-2 items-start justify-between">
                        {locked && !isAdmin && <span className="ml-2 text-xs text-gray-400">Locked</span>}
                        {!locked && !isOpenLab && (
                          <Button variant="default" onClick={() => { setOpenLabChallenge(challenge.id); setFlagInput(""); setFlagStatus({ status: 'idle' }); }}>
                            Open
                          </Button>
                        )}
                        {!locked && isOpenLab && (
                          <div className="w-full flex flex-col gap-2">
                            {flagStatus.status === 'success' && <div className="text-green-700 text-xs font-semibold">{flagStatus.message}</div>}
                            {flagStatus.status === 'already' && <div className="text-blue-700 text-xs font-semibold">{flagStatus.message}</div>}
                            {flagStatus.status === 'error' && <div className="text-red-600 text-xs font-semibold">{flagStatus.message}</div>}
                          </div>
                        )}
                      </CardContent>
                    </Card>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </>
    )
  }

  // Challenge view
  const codeLines = selectedChallenge.code.split("\n")
  // Answers are only known after the server reveals them (solved / out of attempts).
  const revealedAnswer = revealed[selectedChallenge.id];
  const revealedVuln = revealedAnswer?.vulnerableLines ?? [];
  const revealedExpl = revealedAnswer?.explanations ?? {};

  // In the challenge view, add a check for locked
  const isLocked = locks[selectedChallenge.id] !== false;

  return (
    <>
      <UserBar name={user.name} avatar={user.avatar} score={user.score} isAdmin={isAdmin} onAdminLogout={handleAdminLogout} onGiveFeedback={() => setShowFeedbackModal(true)} feedbackEnabled={feedbackEnabled} />
      <FeedbackModal open={showFeedbackModal} onSubmit={handleFeedbackSubmit} onClose={() => setShowFeedbackModal(false)} currentTeam={currentTeam} questions={feedbackQuestions} />
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-6xl mx-auto space-y-6">
          <div className="flex flex-col md:flex-row md:items-start md:gap-6">
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <Button variant="outline" onClick={handleBackToChallenges}>
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Challenges
                  </Button>
                </div>
                <div className="w-32"></div> {/* Spacer for centering */}
              </div>
              <ResizableCard defaultWidth={800}>
                <Card className="mt-10">
                  <CardHeader>
                    <div className="flex justify-between w-full items-center">
                      <div>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="h-5 w-5 text-orange-500" />
                          {selectedChallenge.title}
                        </CardTitle>
                        <CardDescription className="mt-2 text-sm">{selectedChallenge.description}</CardDescription>
                      </div>
                      <span className="flex bg-blue-100 text-blue-800 text-sm font-semibold px-2 py-1 w-28 rounded-full items-center">Attempts: {attemptsRemaining}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center gap-4 mb-4">
                      {/* Timer display for all users and admin */}
                      <ChallengeTimer selectedChallenge={selectedChallenge} />
                    </div>
                    <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                      <SyntaxHighlighter
                        language="javascript"
                        style={oneDark}
                        customStyle={{ background: 'transparent', fontSize: 14, margin: 0, padding: 0 }}
                        showLineNumbers
                        wrapLines
                        lineProps={(lineNumber: number) => {
                          const status = getLineStatus(lineNumber);
                          const isSelected = selectedLines.includes(lineNumber);
                          // Once submitted, toggleLine() stops responding to clicks (you have
                          // to hit "Try Again" first) - the line used to keep looking clickable
                          // (same pointer cursor, same hover) even though clicks did nothing,
                          // which read as "I clicked the right line and it just won't submit."
                          let className = "flex items-center transition-colors " + (submitted ? "cursor-not-allowed " : "cursor-pointer ");
                          if (isSelected && !submitted) className += "bg-blue-900/50 hover:bg-blue-900/70 ";
                          if (submitted && status === "correct") className += "bg-green-900/50 ";
                          if (submitted && status === "incorrect") className += "bg-red-900/50 ";
                          return {
                            className,
                            onClick: () => toggleLine(lineNumber),
                            style: { cursor: submitted ? 'not-allowed' : 'pointer' },
                          };
                        }}
                        lineNumberStyle={{ minWidth: 32, color: '#888', textAlign: 'right', userSelect: 'none', marginRight: 16 }}
                      >
                        {selectedChallenge.code}
                      </SyntaxHighlighter>
                      {/* Show Hints button left-aligned with code block */}
                      {!submitted && selectedChallenge.hints && (
                        <div className="mt-2">
                          <Button variant="outline" size="sm" onClick={() => setShowHints(!showHints)}>
                            <Lightbulb className="h-4 w-4 mr-2" />
                            {showHints ? "Hide Hints" : "Show Hints"}
                          </Button>
                        </div>
                      )}
                      {/* Rendered right here, immediately beside the code, instead of far
                          below the fold - a dev shouldn't have to scroll past the line
                          selection and flag submission UI just to read a hint they asked for. */}
                      {showHints && selectedChallenge.hints && !submitted && (
                        <div className="mt-3 p-4 bg-blue-50 border-l-4 border-blue-400 rounded">
                          <h4 className="font-medium text-blue-800 mb-2">💡 Hints:</h4>
                          <ul className="text-sm text-blue-700 space-y-1">
                            {selectedChallenge.hints.map((hint, index) => (
                              <li key={index}>• {hint}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {/* Vulnerability explanation, rendered right here beside the code instead
                          of in its own Card far below the fold (past line selection and flag
                          submission) - same reasoning as the Show Hints placement above. */}
                      {showResults && lastSubmissionCorrect && (
                        <div className="mt-3 space-y-2">
                          <h4 className="font-medium text-red-800 mb-1 flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            Vulnerability Explanation
                          </h4>
                          {revealedVuln.map((lineNumber) => (
                            <div key={lineNumber} className="p-3 bg-red-50 border-l-4 border-red-400 rounded">
                              <p className="font-medium text-red-800">Line {lineNumber}: Vulnerability Found</p>
                              <p className="text-sm text-red-700">{revealedExpl[lineNumber]}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex gap-4">
                      </div>

                      <div className="space-x-2">
                        {!submitted || lastSubmissionCorrect === true ? (
                          <div className="flex gap-2">
                            {(() => {
                              const labUrl = selectedChallenge.labUrl || '';
                              const fullUrl = getDynamicLabUrl(labUrl);
                              return (
                                <a
                                  href={fullUrl || '#'}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Button
                                    type="button"
                                    className="bg-blue-100 text-blue-700 hover:bg-blue-200 border-blue-200"
                                    variant="outline"
                                    disabled={!labUrl}
                                    title={fullUrl || 'No URL set'}
                                  >
                                    Go to Lab
                                  </Button>
                                </a>
                              );
                            })()}
                            <Button onClick={handleSubmit} disabled={selectedLines.length === 0 || alreadySolved || attemptsRemaining === 0 || (isLocked && !isAdmin)}>
                              Submit Answer
                            </Button>
                          </div>
                        ) : (
                          <div className="flex items-center gap-3">
                            <Button onClick={handleReset} variant="outline">
                              Try Again
                            </Button>
                            <span className="text-sm text-gray-500">Click this to pick a different line - the code block is locked until you do.</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* --- Flag submission for challenge view --- */}
                    <div className="mt-5">
                      {/* Hide entirely once every flag this challenge needs has been solved */}
                      {!flagAlreadySolved && flagInputs.map((value, i) => {
                        const boxSolved = flagStatuses[i]?.status === 'success' || flagStatuses[i]?.status === 'already';
                        if (boxSolved) {
                          return (
                            <div key={i} className="flex items-center gap-2 bg-green-100 border border-green-300 text-green-800 px-4 py-2 rounded shadow-sm mb-3">
                              <CheckCircle className="h-5 w-5 text-green-500" />
                              <span className="font-semibold">
                                {flagInputs.length > 1 ? `Flag ${i + 1} of ${flagInputs.length} solved` : flagStatuses[i].message}
                              </span>
                            </div>
                          );
                        }
                        const loading = flagStatuses[i]?.status === 'loading';
                        return (
                          <div key={i} className="mb-3">
                            <form
                              onSubmit={async (e) => {
                                e.preventDefault();
                                const flagValue = flagInputs[i]?.trim();
                                if (!flagValue || (isLocked && !isAdmin)) return;
                                setFlagStatuses(s => s.map((st, idx) => (idx === i ? { status: 'loading' } : st)));
                                try {
                                  const res = await fetch('/api/submit-flag', {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    // flagIndex ties this submission to its own box's slot, so a
                                    // multi-flag challenge can't be "completed" by pasting the
                                    // same found flag into every box - see submit-flag/route.ts.
                                    body: JSON.stringify({ challengeId: selectedChallenge.id, flag: flagValue, name: user.name, flagIndex: i }),
                                  });
                                  const data = await res.json();
                                  let next: { status: 'idle' | 'loading' | 'success' | 'error' | 'already'; message?: string };
                                  if (res.status === 423) {
                                    next = { status: 'error', message: 'This challenge is currently locked by the admin. You cannot submit flags.' };
                                  } else if (data.success && data.correct) {
                                    next = { status: data.alreadySolved ? 'already' : 'success', message: data.alreadySolved ? 'Already solved!' : 'Correct flag! +5 points' };
                                    setUser(u => ({ ...u, score: data.score }));
                                    refreshSolvedStates();
                                  } else if (data.duplicateFlag) {
                                    next = { status: 'error', message: data.error ?? 'This flag was already used for another box - find a different one.' };
                                  } else {
                                    next = { status: 'error', message: 'Incorrect flag. Try again.' };
                                  }
                                  setFlagStatuses(s => s.map((st, idx) => (idx === i ? next : st)));
                                } catch {
                                  setFlagStatuses(s => s.map((st, idx) => (idx === i ? { status: 'error', message: 'Could not submit flag. Please try again.' } : st)));
                                }
                              }}
                              className="flex items-center gap-2"
                            >
                              <input
                                type="text"
                                className="border rounded px-3 py-2 w-full focus:outline-none focus:ring"
                                placeholder={flagInputs.length > 1 ? `Flag ${i + 1} of ${flagInputs.length}` : 'Flag here'}
                                value={value}
                                onChange={e => setFlagInputs(s => s.map((v, idx) => (idx === i ? e.target.value : v)))}
                                disabled={loading || (isLocked && !isAdmin)}
                              />
                              <Button
                                type="submit"
                                className="ml-2 h-full bg-green-100 text-green-700 hover:bg-green-200 border-green-200"
                                variant="outline"
                                disabled={loading || !value.trim() || (isLocked && !isAdmin)}
                              >
                                {loading ? 'Submitting...' : 'Submit Flag'}
                              </Button>
                            </form>
                            {flagStatuses[i]?.status === 'error' && (
                              <div className="flex items-center gap-2 bg-red-100 border border-red-300 text-red-800 px-4 py-2 rounded shadow-sm mt-2">
                                <XCircle className="h-5 w-5 text-red-500" />
                                <span className="font-semibold">{flagStatuses[i].message}</span>
                              </div>
                            )}
                          </div>
                        );
                      })}
                      {/* --- Enhanced 2-column solved status view --- */}
                      <div className="my-8">
                        <Card className="shadow-md border max-w-2xl mx-auto">
                          <CardContent className="py-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {/* Challenge Submission Status */}
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-2">
                                  {alreadySolved ? (
                                    <CheckCircle className="h-10 w-10 text-green-500 transition-transform duration-300 scale-110" />
                                  ) : (
                                    <XCircle className="h-10 w-10 text-red-400 transition-transform duration-300 scale-100" />
                                  )}
                                </div>
                                <span className={`text-base font-semibold mb-1 ${alreadySolved ? 'text-green-700' : 'text-red-700'}`}>Challenge Submission</span>
                                <span className={`text-xs font-medium mb-2 ${alreadySolved ? 'text-green-600' : 'text-red-500'}`}>{alreadySolved ? 'Solved' : 'Not Solved'}</span>
                                <span className="text-xs text-gray-500">Select the vulnerable line in the code above.</span>
                              </div>
                              {/* Flag Submission Status */}
                              <div className="flex flex-col items-center justify-center text-center">
                                <div className="mb-2">
                                  {flagAlreadySolved ? (
                                    <CheckCircle className="h-10 w-10 text-green-500 transition-transform duration-300 scale-110" />
                                  ) : (
                                    <XCircle className="h-10 w-10 text-red-400 transition-transform duration-300 scale-100" />
                                  )}
                                </div>
                                <span className={`text-base font-semibold mb-1 ${flagAlreadySolved ? 'text-green-700' : 'text-red-700'}`}>Flag Submission</span>
                                <span className={`text-xs font-medium mb-2 ${flagAlreadySolved ? 'text-green-600' : 'text-red-500'}`}>{flagAlreadySolved ? 'Solved' : 'Not Solved'}</span>
                                <span className="text-xs text-gray-500">
                                  {(selectedChallenge.flagCount ?? 1) > 1
                                    ? `Submit all ${selectedChallenge.flagCount} flags you found in the lab.`
                                    : 'Submit the flag you found in the lab.'}
                                </span>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </div>

                    {/* Hints moved to render right next to the code block (see above) instead of
                        here - this spot is ~200 lines of JSX below the code, past the line
                        selection and flag submission UI, so "Show Hints" used to require
                        scrolling all the way down to actually see anything. */}
                  </CardContent>
                </Card>
              </ResizableCard>
            </div>
            {/* Leaderboard on the right */}
            <div className="w-full mt-24 md:w-[400px] flex-shrink-0 md:self-start">
              <Leaderboard currentUser={user} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
