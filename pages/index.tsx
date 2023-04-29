import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cats = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "BLOG", "POETRY"]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  return (
    <main className=" h-screen px-16 max-w-[1500px] w-full flex items-center   select-none">
      <div className="flex items-center gap-10">
        {cats.map((cat, index) => (
          <CategoryCard
            key={cat}
            index={index}
            category={cat}
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        ))}
      </div>
    </main>
  )
}

type CategoryCardProps = {
  index: number
  category: string
  activeCategory: string
  setCategory(category: string): void
}

type CategoryState = "all" | "active" | "inactive"

function CategoryCard({
  index,
  category,
  activeCategory,
  setCategory,
}: CategoryCardProps) {
  function resolveCategoryState(): CategoryState {
    if (activeCategory === "ALL") {
      return "all"
    } else if (activeCategory === category) {
      return "active"
    }
    return "inactive"
  }

  const animProperties = () => {
    const properties = {
      height: 400,
      width: 300,
      maxHeight: "100vh",
      maxWidth: "100vw",
      x: index * 350,
      y: 0,
      left: 50,
      zIndex: 0,
    } as any

    if (resolveCategoryState() === "active") {
      properties.height = 10000
      properties.width = 10000
      properties.x = 0
      properties.left = 0
      properties.zIndex = 1
    }

    if (resolveCategoryState() === "inactive") {
      properties.height = 0
      properties.width = 0
    }

    return properties
  }

  return (
    <motion.div
      layout
      key={category}
      className={`p-7 fixed  max-h-screen max-w-screen grow bg-teal-950 text-white text-xl flex flex-col ${
        resolveCategoryState() === "all" && "cursor-pointer"
      } `}
      onClick={() => {
        setCategory(category)
      }}
      initial={{
        opacity: 1,
      }}
      animate={{
        opacity: 1,
        height: animProperties().height,
        width: animProperties().width,
        maxHeight: animProperties().maxHeight,
        maxWidth: animProperties().maxWidth,
        x: animProperties().x,
        left: animProperties().left,
        zIndex: animProperties().zIndex,
      }}
    >
      <motion.div className="relative" layout>
        {category}
        <motion.button
          className="text-white absolute right-4 top-4"
          onClick={(e) => {
            e.stopPropagation()
            setCategory("ALL")
          }}
          animate={{
            opacity: resolveCategoryState() === "active" ? 1 : 0,
          }}
        >
          close
        </motion.button>
      </motion.div>
    </motion.div>
  )
}
