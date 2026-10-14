// Default wording used ONLY to seed the FeedbackQuestion table the first
// time it's empty. After that, the database is the single source of truth -
// admins add/edit/remove/reorder questions from the Analytics tab, no code
// change needed.
//
// Each question pairs a 1-5 rating with its OWN required open-text
// follow-up, instead of one generic comment box at the end. That's a
// deliberate design choice (dev feedback, Oct 2026): a pile of pure rating
// questions produces mostly "Excellent/Good" with no way to explain a low
// score. Pairing every rating with its own "why" question, right next to
// it, is what actually surfaces usable, critical feedback - and cutting
// down to a handful of real dimensions (instead of ~13 overlapping ones)
// means people don't skim through near-duplicate questions to get there.
export const DEFAULT_FEEDBACK_QUESTIONS: { label: string; followUpLabel: string; ratingStyle: "words" | "numbers" }[] = [
  {
    label: "Overall, how was this session?",
    followUpLabel: "What worked well, and what should we change next time?",
    ratingStyle: "words",
  },
  {
    label: "Was this relevant to your role, and will it help you build more securely?",
    followUpLabel: "What was relevant, what wasn't, and what should we add?",
    ratingStyle: "words",
  },
  {
    label: "Did you find the session engaging (delivery, interactivity, Q&A)?",
    followUpLabel: "Any parts you liked, or suggestions for how we run it?",
    ratingStyle: "words",
  },
  {
    label: "Were the materials and real-world examples clear and useful?",
    followUpLabel: "What worked, what didn't, what should we add or cut?",
    ratingStyle: "words",
  },
  {
    label: "Do you feel more confident spotting and fixing this yourself now?",
    followUpLabel: "What's one thing you still feel unsure about?",
    ratingStyle: "words",
  },
  {
    // NPS-style - a number (1-5) reads naturally here; "Poor..Excellent" doesn't.
    label: "Would you recommend this training to a peer?",
    followUpLabel: "What's the main reason for your answer?",
    ratingStyle: "numbers",
  },
];
