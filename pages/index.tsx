import React, { useEffect, useRef, useState } from "react"
import { motion, AnimatePresence, useDragControls } from "framer-motion"
import useWindowDimensions from "@/hooks/useWindowDimensions"
import Image from "next/image"
import useElementPosition from "@/hooks/useElementPostion"
import CategoryCard from "@/components/CategoryCard"
import CategoryContainer from "@/components/CategoryContainer"
import Close from "@/components/Icons/Close"
import { CloseButton, NavigationButton } from "@/components/Buttons"
import categories from "@/data/categories"
import { ChevronRight } from "@/components/Icons/Chevrons"
import Link from "next/link"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(true)

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      {showDisclaimer ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-7">
          <h1 className="text-3xl">
            Hello there! This site is still under construction and currently
            looks unfinished.
          </h1>
          <h2 className="text-2xl">
            You can still see my progress if you'd like or visit my old
            portfolio if you wanna know Silicon Sorcery skills.{" "}
          </h2>

          <button
            className="mt-7 bg-teal-800 text-white p-3 w-full max-w-[600px]"
            onClick={() => {
              setShowDisclaimer(false)
            }}
          >
            I don't mind. Show it to me anyways {":)"}
          </button>
          <Link
            href="https://super-biscuit-1456ce.netlify.app/"
            className="p-3 text text-teal-800 font-medium"
            target="_blank"
          >
            Show me the old you
          </Link>
        </div>
      ) : (
        <>
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
        </>
      )}
    </main>
  )
}

type CategoryViewProps = {
  activeCategory: string
  setCategory(category: string): void
}

function CategoryView({ activeCategory, setCategory }: CategoryViewProps) {
  function nextCategory() {
    let currentIndex = categories.findIndex((c) => c.name === activeCategory)

    currentIndex = currentIndex === categories.length - 1 ? -1 : currentIndex

    const nextCategory = categories[currentIndex + 1]

    setCategory(nextCategory.name)
  }

  function prevCategory() {
    let currentIndex = categories.findIndex((c) => c.name === activeCategory)

    currentIndex = currentIndex === 0 ? categories.length - 1 : currentIndex

    const nextCategory = categories[currentIndex - 1]

    setCategory(nextCategory.name)
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed left-0 bg-black/40 h-screen w-screen flex justify-center items-center text-white p-7 z-10 `}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <CloseButton
          onClick={() => {
            setCategory("ALL")
          }}
        />

        <NavigationButton onClick={nextCategory} position="right" />

        <NavigationButton onClick={prevCategory} position="left">
          Previous
        </NavigationButton>

        <div className="w-[90vw] h-[90vh]"></div>
      </motion.div>
    </AnimatePresence>
  )
}
