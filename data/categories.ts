import Category from "@/types/Category"

const categories: Category[] = [
  {
    name: "About",
    src: "/images/about.jpg",
    gradients: [
      "rgba(34,193,195,1)",
      "rgba(253,45,227,1)",
      "rgba(253,45,45,1)",
    ],
  },
  {
    name: "Experience",
    src: "/images/experience.jpg",
    gradients: ["rgba(255,244,12,1)", "rgba(255,124,0,1)", "rgba(253,45,45,1)"],
  },
  {
    name: "Skills",
    src: "/images/skills.jpg",
    gradients: ["rgba(0,31,166,1)", "rgba(59,65,176,1)", "rgba(104,1,148,1)"],
  },
  {
    name: "Projects",
    src: "/images/projects.jpg",
    gradients: ["rgba(89,255,4,1)", "rgba(175,249,52,1)", "rgba(255,238,75,1)"],
  },

  {
    name: "Poetry",
    src: "/images/poetry.jpg",
    gradients: [
      "rgba(131,58,180,1)",
      "rgba(253,29,29,1)",
      "rgba(252,176,69,1)",
    ],
  },
]

export default categories
