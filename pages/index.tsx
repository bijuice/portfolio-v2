import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import CategoryContainer from "@/components/CategoryContainer"
import { CloseButton, NavigationButton } from "@/components/Buttons"
import categories from "@/data/categories"
import Link from "next/link"
import About from "@/components/categories/About"
import Experience from "@/components/categories/Experience"

const isProduction = process.env.NODE_ENV === "production"

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<string>("ALL")

  function setCategory(category: string) {
    setActiveCategory(category)
  }

  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(isProduction)

  return (
    <main className=" h-screen px-16 overflow-hidden w-full flex items-center   select-none">
      {showDisclaimer ? (
        <div className="w-full h-full flex flex-col items-center justify-center text-center gap-7 circular">
          <h1 className="text-3xl">
            Hello there! This site is still under construction and currently
            looks unfinished.
          </h1>
          <h2 className="text-2xl">
            You can still see my progress if you{"'"}d like, or visit my old
            portfolio if you wanna know Silicon Sorcery skills.{" "}
          </h2>

          <button
            className="mt-7 bg-teal-800 text-white p-3 w-full max-w-[600px]"
            onClick={() => {
              setShowDisclaimer(false)
            }}
          >
            I don{"'"}t mind. Show it to me anyways {":)"}
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

  function resolveView() {
    switch (activeCategory) {
      case "About":
        return <About />
      case "Experience":
        return <Experience />
      default:
        return <About />
    }
  }

  return (
    <AnimatePresence>
      <motion.div
        className={`fixed left-0 bg-black/40 h-screen w-screen flex justify-center items-center text-white  z-10 `}
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

        <div className="z-20">
          <NavigationButton onClick={nextCategory} position="right" />

          <NavigationButton onClick={prevCategory} position="left">
            Previous
          </NavigationButton>
        </div>

        <div className="w-full  ">{resolveView()}</div>
      </motion.div>
    </AnimatePresence>
  )
}
