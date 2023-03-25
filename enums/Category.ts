const Category = {
  ALL: "ALL",
  EXPERIENCE: "EXPERIENCE",
  SKILLS: "SKILLS",
  BLOG: "BLOG",
  POETRY: "POETRY",
  PROJECTS: "PROJECTS",
} as const

type CATEGORY = keyof typeof Category

export default CATEGORY
