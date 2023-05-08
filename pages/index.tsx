import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import Image from "next/image"
import useElementPosition from "@/hooks/useElementPostion"
import CategoryCard from "@/components/CategoryCard"
import CategoryContainer from "@/components/CategoryContainer"
import Close from "@/components/Icons/Close"
import { CloseButton } from "@/components/Buttons"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("About")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      <CategoryContainer
        activeCategory={activeCategory}
        setCategory={setCategory}
      />
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
        <CloseButton
          onClick={() => {
            setCategory("ALL")
          }}
        />
      </motion.div>
    </AnimatePresence>
  )
}
