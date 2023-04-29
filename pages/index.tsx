import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

const cats = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "BLOG", "POETRY"]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const ref = useRef<HTMLSpanElement>(null)

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      <motion.div
        id="card-container"
        className="flex items-center gap-10 "
        drag={activeCategory === "ALL" && "x"}
        onClick={(e) => e.stopPropagation()}
        dragConstraints={{ left: -1000, right: 0 }}
      >
        <span className="hidden" ref={ref}></span>
        {cats.map((cat, index) => (
          <CategoryCard
            key={cat}
            index={index}
            category={cat}
            activeCategory={activeCategory}
            setCategory={setCategory}
          />
        ))}
      </motion.div>
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
      maxWidth: "40vh",
      x: 0,
      y: 0,
      left: 0,
      zIndex: 0,
    } as any

    if (resolveCategoryState() === "active") {
      properties.maxHeight = "100vh"
      properties.maxWidth = "160vw"
      properties.x = 0
      properties.zIndex = 1
      properties.left = `-${index + 1 * 20}vw`
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
      className={` relative  grow bg-teal-950 text-white text-xl  ${
        resolveCategoryState() === "all" && "cursor-pointer"
      } `}
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
      <motion.div
        className={`absolute left-[20vw]  w-[90vw] h-screen  justify-between `}
        layout
      >
        {category}
        <motion.button
          className="text-white "
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
