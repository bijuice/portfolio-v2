import Experience from "@/components/categories/Experience"
import CATEGORY from "@/types/Category"
import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import useDeviceSize from "@/hooks/useWindowDimensions"
import Image from "next/image"

const cats = ["ABOUT", "EXPERIENCE", "SKILLS", "PROJECTS", "BLOG", "POETRY"]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const ref = useRef<HTMLSpanElement>(null)

  const [width, height] = useDeviceSize()

  const [isDragging, setIsDragging] = useState(false)

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      <motion.div
        id="card-container"
        className="flex items-center gap-10 "
        drag={activeCategory === "ALL" && "x"}
        onClick={(e) => e.stopPropagation()}
        dragConstraints={{ right: 0, left: width > 400 ? -1000 : -2000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <span className="hidden" ref={ref}></span>
        {cats.map((cat, index) => (
          <CategoryCard
            key={cat}
            isDragging={isDragging}
            index={index}
            category={cat}
            activeCategory={activeCategory}
            setCategory={setCategory}
            width={width}
            height={height}
          />
        ))}
      </motion.div>

      {activeCategory !== "ALL" && (
        <CategoryView
          activeCategory={activeCategory}
          setCategory={setCategory}
        />
      )}
    </main>
  )
}

type CategoryCardProps = {
  height: number
  width: number
  isDragging: boolean
  index: number
  category: string
  activeCategory: string
  setCategory(category: string): void
}

type CategoryState = "all" | "active" | "inactive"

function CategoryCard({
  isDragging,
  index,
  category,
  activeCategory,
  setCategory,
  width,
  height,
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

    const isPortrait = height > width
    if (resolveCategoryState() === "active") {
      properties.maxHeight = "100vh"
      properties.maxWidth = isPortrait ? "600vw" : "160vw"
      properties.x = 0
      properties.zIndex = 1
      properties.left = `-20vw`
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
      className={` relative  grow bg-teal-950 text-white text-xl grid place-content-center  ${
        resolveCategoryState() === "all" && "cursor-pointer"
      } `}
      onClick={() => {
        if (!isDragging) {
          setCategory(category)
        }
      }}
      animate={{
        height: animProperties().height,
        width: animProperties().width,
        maxHeight: animProperties().maxHeight,
        maxWidth: animProperties().maxWidth,
        x: animProperties().x,
        left: animProperties().left,
        zIndex: animProperties().zIndex,
      }}
      transition={{
        duration: 1,
        type: "spring",
      }}
    >
      {activeCategory === "ALL" && <motion.h1>{category}</motion.h1>}
    </motion.div>
  )
}

type CategoryViewProps = {
  activeCategory: string
  setCategory(category: string): void
}

function CategoryView({ activeCategory, setCategory }: CategoryViewProps) {
  return (
    <AnimatePresence>
      <motion.div
        className={`fixed left-0  h-screen w-screen flex justify-between text-white p-7 z-10 `}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 0.3,
        }}
      >
        <button
          className="absolute top-10 right-10"
          onClick={(e) => {
            e.stopPropagation()
            setCategory("ALL")
          }}
        >
          close
        </button>
      </motion.div>
    </AnimatePresence>
  )
}
