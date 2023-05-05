import Category from "@/types/Category"
import { useEffect, useMemo, useRef, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

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

type Properties = {
  height: number
  width: number
  maxHeight: string | number
  maxWidth: string | number
  x: number
  y: number
  left: number
  zIndex: number
}

const defaultProperties: Properties = {
  height: 10000,
  width: 10000,
  maxHeight: "60vh",
  maxWidth: "40vh",
  x: 0,
  y: 0,
  left: 0,
  zIndex: 0,
}

export default function CategoryCard({
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

  //generate use state from properties object
  const [properties, setProperties] = useState<Properties>(defaultProperties)

  const animProperties = () => {
    const container = document.getElementById("card-container")
    if (resolveCategoryState() === "active") {
      setProperties({
        ...properties,
        maxHeight: "100vh",
        maxWidth: "100vw",
        zIndex: 1,
        x: container!.getBoundingClientRect().left + index * 40 || 0,
      })
    } else if (resolveCategoryState() === "inactive") {
      setProperties({ ...properties, maxHeight: 0, maxWidth: 0 })
    } else {
      setProperties(defaultProperties)
    }
  }

  useEffect(() => {
    animProperties()
  }, [activeCategory])

  const rand = useMemo(() => {
    return {
      rand1: Math.floor(Math.random() * 100),
      rand2: Math.floor(Math.random() * 100),
      rand3: Math.floor(Math.random() * 100),
    }
  }, [])

  const { rand1, rand2, rand3 } = rand

  const { gradients } = category

  const gradient = `radial-gradient(circle, ${gradients[0]} 0%, ${gradients[1]} 50%, ${gradients[2]} 100%)`

  return (
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
        height: properties.height,
        width: properties.width,
        maxHeight: properties.maxHeight,
        maxWidth: properties.maxWidth,
        zIndex: properties.zIndex,
        x: -properties.x,
      }}
      transition={{
        type: "spring",
        damping: 20,
      }}
    >
      <motion.div
        className=" w-[100vw] h-screen absolute "
        style={{
          background: gradient,
          backgroundSize: "200% 200%",
        }}
        animate={{
          backgroundPositionX: [
            "0%",
            `${rand1}%`,
            `${rand2}%`,
            `${rand3}%`,
            `${rand2}%`,
            `${rand1}%`,
            "0%",
          ],
        }}
        transition={{
          duration: resolveCategoryState() === "all" ? 30 : 30,
          ease: "easeInOut",
          repeat: Infinity,
        }}
      ></motion.div>
    </motion.div>
  )
}
