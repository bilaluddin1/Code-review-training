// Single source of truth for the feedback form's rating questions, matching
// last year's full training survey. Used by both the submit API (validation)
// and the FeedbackModal UI (rendering), so they can't drift apart.
export const FEEDBACK_QUESTIONS = [
  { key: "overall", label: "Overall, how was this session?" },
  { key: "relevantToRole", label: "Relevant to my role" },
  { key: "objectivesClear", label: "Objectives were clear" },
  { key: "realWorld", label: "Real-world applicable" },
  { key: "trainerEngaging", label: "Trainer was engaging" },
  { key: "interactiveQA", label: "Interactive / Q&A" },
  { key: "paceAndStructure", label: "Pace and structure" },
  { key: "materialsClear", label: "Materials were clear" },
  { key: "supplementaryResources", label: "Supplementary resources" },
  { key: "materialQuality", label: "Material quality" },
  { key: "practicalSkills", label: "Practical skills gained" },
  { key: "realExamplesUsed", label: "Real examples were used" },
  { key: "moreConfident", label: "I feel more confident spotting this myself now" },
] as const;

export type FeedbackQuestionKey = (typeof FEEDBACK_QUESTIONS)[number]["key"];

// An admin-customized (or default) {key,label} pair - same shape whether it
// came from the hardcoded defaults above or a saved customization.
export type EffectiveQuestion = { key: FeedbackQuestionKey; label: string };
