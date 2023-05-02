import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import Image from "next/image"
import useElementPosition from "@/hooks/useElementPostion"

type Category = {
  name: string
  src: string
}

const categories: Category[] = [
  {
    name: "About",
    src: "/images/about.jpg",
  },
  {
    name: "Experience",
    src: "https://images.pexels.com/photos/96381/pexels-photo-96381.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    name: "Skills",
    src: "/images/test.jpg",
  },
  {
    name: "Projects",
    src: "/images/projects.png",
  },
  {
    name: "Blog",
    src: "/images/blog.png",
  },
  {
    name: "Poetry",
    src: "/images/about.jpg",
  },
]

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const ref = useRef<HTMLSpanElement>(null)

  const [width, height] = useWindowDimensions()

  const [isDragging, setIsDragging] = useState(false)

  const containerRef = useRef<HTMLDivElement>(null)

  console.log(containerRef.current?.getBoundingClientRect().left)

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      <motion.div
        ref={containerRef}
        className="flex items-center gap-10 "
        drag={activeCategory === "ALL" && "x"}
        onClick={(e) => e.stopPropagation()}
        dragConstraints={{ right: 0, left: width > 400 ? -1000 : -2000 }}
        onDragStart={() => setIsDragging(true)}
        onDragEnd={() => setIsDragging(false)}
      >
        <span className="hidden" ref={ref}></span>
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

type CategoryCardProps = {
  height: number
  width: number
  isDragging: boolean
  index: number
  category: Category
  activeCategory: string
  setCategory(category: string): void
  pos: number
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
  pos,
}: CategoryCardProps) {
  function resolveCategoryState(): CategoryState {
    if (activeCategory === "ALL") {
      return "all"
    } else if (activeCategory === category.name) {
      return "active"
    }
    return "inactive"
  }
  const cardRef = useRef<HTMLDivElement>(null)

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
      properties.maxWidth = "100vw"
      properties.zIndex = 1
    }

    if (resolveCategoryState() === "inactive") {
      properties.maxHeight = 0
      properties.maxWidth = 0
    }

    return properties
  }

  return (
    <div>
      <motion.div
        layout
        key={category.name}
        className={` text-white relative  grow overflow-hidden flex items-center bg-teal-950   ${
          resolveCategoryState() === "all" && "cursor-pointer"
        } `}
        onClick={() => {
          if (!isDragging) {
            setCategory(category.name)
          }
        }}
        animate={{
          height: animProperties().height,
          width: animProperties().width,
          maxHeight: animProperties().maxHeight,
          maxWidth: animProperties().maxWidth,
          zIndex: animProperties().zIndex,
        }}
        transition={{
          duration: 1,
          type: "spring",
        }}
      >
        <div
          className=" w-[100vw] h-screen absolute left-0"
          style={{
            backgroundImage: `url(${category.src})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>
      </motion.div>

      {activeCategory === "ALL" && (
        <motion.h1 className="text-[2em] py-3">{category.name}</motion.h1>
      )}
    </div>
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
