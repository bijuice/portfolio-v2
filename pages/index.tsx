import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import { useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<CATEGORY>("ALL")

  function setCategory(category: CATEGORY) {
    setActiveCategory(category)
  }

  return (
    <main className=" h-screen px-16 max-w-[1500px] w-full flex items-center   select-none">
      <div className="flex items-center gap-10">
        <CategoryCard
          category={"ABOUT"}
          activeCategory={activeCategory}
          setCategory={setCategory}
        />
        <CategoryCard
          category={"EXPERIENCE"}
          activeCategory={activeCategory}
          setCategory={setCategory}
        />
        <CategoryCard
          category={"SKILLS"}
          activeCategory={activeCategory}
          setCategory={setCategory}
        />
      </div>
    </main>
  )
}

type CategoryCardProps = {
  category: CATEGORY
  activeCategory: CATEGORY
  setCategory(category: CATEGORY): void
}

type CategoryState = "all" | "active" | "inactive"

function CategoryCard({
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
      height: "60vh",
      width: "20vw",
      position: "relative",
    }

    if (resolveCategoryState() === "active") {
      properties.height = "100vh"
      properties.width = "10000px"
    } else {
      properties.width = "0vw"
    }

    return properties
  }

  return (
    <motion.div
      layout
      key={category}
      className={` max-h-screen max-w-screen grow bg-teal-950  flex flex-col ${
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
        width: animProperties().height,
        position: animProperties().position as any,
      }}
    >
      <motion.div className="relative" layout>
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
