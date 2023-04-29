import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cats = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "BLOG", "POETRY"]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ABOUT")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  return (
    <main className=" h-screen px-16 max-w-[1500px] w-full flex items-center   select-none">
      <div className="flex items-center gap-10 w-">
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
      height: 10000,
      width: 10000,
      maxHeight: "60vh",
      maxWidth: "20vw",
      x: index * 350,
      y: 0,
      left: 50,
      zIndex: 0,
    } as any

    if (resolveCategoryState() === "active") {
      properties.maxHeight = "100vh"
      properties.maxWidth = "100vw"
      properties.x = 0
      properties.left = 0
      properties.zIndex = 1
    }

    if (resolveCategoryState() === "inactive") {
      properties.maxHeight = 0
      properties.maxWidth = 0
    }

    return properties
  }

  return (
    <motion.div
      layout
      key={category}
      className={`p-5 fixed  grow bg-teal-950 text-white text-xl flex flex-col ${
        resolveCategoryState() === "all" && "cursor-pointer"
      } `}
      onClick={() => {
        setCategory(category)
      }}
      animate={{
        height: animProperties().height,
        width: animProperties().width,
        maxHeight: animProperties().maxHeight,
        maxWidth: animProperties().maxWidth,
        x: animProperties().x,
        left: animProperties().left,
        zIndex: animProperties().zIndex,
        transition: {
          duration: 0.5,
        },
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
