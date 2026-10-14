// Default wording used ONLY to seed the FeedbackQuestion table the first
// time it's empty (matches last year's full training survey). After that,
// the database is the single source of truth - admins add/edit/remove/
// reorder questions from the Analytics tab, no code change needed.
export const DEFAULT_FEEDBACK_QUESTIONS: string[] = [
  "Overall, how was this session?",
  "Relevant to my role",
  "Objectives were clear",
  "Real-world applicable",
  "Trainer was engaging",
  "Interactive / Q&A",
  "Pace and structure",
  "Materials were clear",
  "Supplementary resources",
  "Material quality",
  "Practical skills gained",
  "Real examples were used",
  "I feel more confident spotting this myself now",
];
