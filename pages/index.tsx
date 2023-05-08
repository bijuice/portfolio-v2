import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import Image from "next/image"
import useElementPosition from "@/hooks/useElementPostion"
import categories from "@/data/categories"
import CategoryCard from "@/components/CategoryCard"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("About")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const [width, height] = useWindowDimensions()

  const [isDragging, setIsDragging] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  const [x, setX] = useState(0)

  function scrollContainer(d: number) {
    if (activeCategory !== "ALL") return

    let delta: number = 0
    if (d > 0 && x > -width) {
      delta = 100
    }

    if (d < 0 && x < 0) {
      delta = -100
    }

    setX((prev) => prev - delta)
  }

  return (
    <main
      className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none"
      onWheel={(e) => scrollContainer(e.deltaY)}
    >
      <motion.div
        id="card-container"
        className="flex items-center gap-10 "
        drag={activeCategory === "ALL" && "x"}
        onClick={(e) => e.stopPropagation()}
        dragConstraints={{ right: 0, left: width > 400 ? -1000 : -2000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
        animate={{ x }}
      >
        {categories.map((cat, index) => (
          <CategoryCard
            key={cat.name}
            isDragging={isDragging}
            index={index}
            category={cat}
            activeCategory={activeCategory}
            setCategory={setCategory}
            width={width}
            height={height}
            pos={containerRef.current?.getBoundingClientRect().left || 0}
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
          className="absolute top-10 right-10 bg-cyan-950 p-2 rounded-md text-white"
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
