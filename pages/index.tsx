import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CategoryContainer from "@/components/CategoryContainer";
import { CloseButton, NavigationButton } from "@/components/Buttons";
import categories from "@/data/categories";
import Link from "next/link";
import AboutPage from "@/components/categories/AboutPage";
import ExperiencePage from "@/components/categories/ExperiencePage";
import SkillsPage from "@/components/categories/SkillsPage";
import ProjectsPage from "@/components/categories/ProjectsPage";
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates";
import Category from "@/types/Category";
import Navbar from "@/components/layout/Navbar";
import BlogPage from "@/components/categories/BlogPage";

const isProduction = process.env.NODE_ENV === "production";

export default function Home() {
  const [activeCategory, setActiveCategory] = useState<Category>(categories[0]);

  function setCategory(category: Category) {
    setActiveCategory(category);
  }

  const [showDisclaimer, setShowDisclaimer] = useState<boolean>(isProduction);

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
              setShowDisclaimer(false);
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
        <CategoryView
          activeCategory={activeCategory}
          setCategory={setCategory}
        />
      )}
    </main>
  );
}

type CategoryViewProps = {
  activeCategory: Category;
  setCategory(category: Category): void;
};

function CategoryView({ activeCategory, setCategory }: CategoryViewProps) {
  function nextCategory() {
    let currentIndex = categories.findIndex(
      (c) => c.name === activeCategory.name
    );

    currentIndex = currentIndex === categories.length - 1 ? -1 : currentIndex;

    const nextCategory = categories[currentIndex + 1];

    setCategory(nextCategory);
  }

  function prevCategory() {
    let currentIndex = categories.findIndex(
      (c) => c.name === activeCategory.name
    );

    currentIndex = currentIndex === 0 ? categories.length : currentIndex;

    const nextCategory = categories[currentIndex - 1];

    setCategory(nextCategory);
  }

  function resolveView() {
    switch (activeCategory.name) {
      case "About":
        return <AboutPage setCategory={setCategory} />;
      case "Experience":
        return <ExperiencePage />;
      case "Skills":
        return <SkillsPage />;
      case "Projects":
        return <ProjectsPage />;
      case "Blog":
        return <BlogPage />;
      default:
        return <AboutPage setCategory={setCategory} />;
    }
  }

  return (
    <AnimatePresence>
      <Navbar
        color={"black"}
        activeCategory={activeCategory}
        setCategory={setCategory}
      />
      <motion.div
        className={`fixed left-0  h-screen w-screen flex justify-center items-center text-black  z-10 `}
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
      >
        <div className="z-20 hidden md:block">
          <NavigationButton
            onClick={nextCategory}
            position="right"
            color={"black"}
          />

          <NavigationButton
            onClick={prevCategory}
            position="left"
            color={"black"}
          />
        </div>

        <div className="w-full  ">{resolveView()}</div>
      </motion.div>
    </AnimatePresence>
  );
}
