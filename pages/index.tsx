import All from "@/components/categories/All"
import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import { useState } from "react"

export default function Home() {
  const [category, setCategory] = useState<CATEGORY>("ALL")

  function resolveCategory() {
    switch (category) {
      case "ALL":
        return <All category={category} />
      case "EXPERIENCE":
        return <Experience category={category} />
      default:
        return <All category={category} />
    }
  }

  return (
    <main className=" h-screen relative px-16 max-w-[1500px] w-full flex items-center gap-10 select-none">
      <CategoryCard category={"ALL"} />
      <CategoryCard category={"EXPERIENCE"} />
      <CategoryCard category={"SKILLS"} />
      <CategoryCard category={"PROJECTS"} />
    </main>
  )
}

function CategoryCard({ category }: { category: CATEGORY }) {
  return (
    <div className=" h-2/3 aspect-[3.5/5]  flex flex-col">
      <div className="bg-gray-300 grow "> here</div>
      <div>
        <h1 className="text-2xl font-light flex items-center h-[40px] capitalize">
          {category.toLowerCase()}
        </h1>
      </div>
    </div>
  )
}
