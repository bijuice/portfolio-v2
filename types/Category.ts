const Category = {
  ALL: "ALL",
  ABOUT: "ABOUT",
  EXPERIENCE: "EXPERIENCE",
  SKILLS: "SKILLS",
  BLOG: "BLOG",
  POETRY: "POETRY",
  PROJECTS: "PROJECTS",
} as const

type CATEGORY = keyof typeof Category

export default CATEGORY
