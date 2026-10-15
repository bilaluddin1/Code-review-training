export interface Challenge {
  id: string
  title: string
  description: string
  code: string
  vulnerableLines: number[]
  difficulty: "beginner" | "intermediate" | "advanced"
  hints?: string[]
  explanations: { [lineNumber: number]: string }
  flag?: string
  // For a lab with more than one independently-exploitable bug (e.g. an
  // error leak AND a separate CORS misconfiguration) - each string is its
  // own flag, submitted and tracked separately, instead of forcing one
  // combined flag that only proves ONE half was actually found.
  flags?: string[]
  labUrl?: string
  maxSelectableLines?: number // maximum number of lines user can select for this challenge
  productOrigin?: string // admin-only context: which product(s) this pattern was modeled on. Never rendered to players.
}

export type Difficulty = "beginner" | "intermediate" | "advanced"
