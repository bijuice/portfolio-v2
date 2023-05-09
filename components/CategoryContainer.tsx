import useWindowDimensions from "@/hooks/useWindowDimensions"
import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import CategoryCard from "./CategoryCard"
import categories from "@/data/categories"

type CategoryContainerProps = {
  activeCategory: string
  setCategory(category: string): void
}

export default function CategoryContainer({
  activeCategory,
  setCategory,
}: CategoryContainerProps) {
  const [width, height] = useWindowDimensions()

  const [isDragging, setIsDragging] = useState(false)

  const [x, setX] = useState(0)

  const [percentage, setPercentage] = useState(0)

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

    const n = percentage - delta * 0.15

    const newPercentage = n > 100 ? 100 : n < -100 ? -100 : n

    setPercentage(newPercentage)
  }

  return (
    <motion.div
      id="card-container"
      className="flex items-center gap-10 "
      drag={activeCategory === "ALL" && "x"}
      onClick={(e) => e.stopPropagation()}
      dragConstraints={{
        right: 0,
        left: (-height / 4) * 7,
      }}
      onDragStart={() => setIsDragging(true)}
      onDragEnd={() => setIsDragging(false)}
      onDrag={(e, info) => {
        const percentage = (info.offset.x / width) * 100

        setPercentage(percentage)
      }}
      animate={{
        x,
      }}
      transition={{
        type: "tween",
        damping: 50,
      }}
      onWheel={(e) => scrollContainer(e.deltaY)}
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
          pos={percentage}
        />
      ))}
    </motion.div>
  )
}
