import Category from "@/types/Category";
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import categories from "@/data/categories";
import Link from "next/link";
import Image from "next/image";
import { CategoryButton } from "../Buttons";

const navigationVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -3,
  },
};

export default function Navbar({
  color,
  activeCategory,
  setCategory,
}: {
  color: string;
  activeCategory: Category;
  setCategory(category: Category): void;
}) {
  const boxRef = useRef<any>();
  const handleMouseMove = (e: any) => {
    const { x } = getRelativeCoordinates(e, boxRef.current);
    setX(x - 35);
  };

  const [x, setX] = useState(0);

  const [width, setWidth] = useState(0);

  const activeCatId = `nav-${activeCategory.name}`;

  useEffect(() => {
    const activeCatElement = document.getElementById(activeCatId);

    setX(activeCatElement?.offsetLeft || 0);
    setWidth(activeCatElement?.offsetWidth || 0);
  }, [activeCategory, activeCatId]);

  const [showMenu, setShowMenu] = useState(false);

  function changeCategory(category: Category) {
    setCategory(category);
    setShowMenu(false);
  }

  return (
    <nav
      className=" fixed top-0  right-0 w-full  z-20 flex justify-between px-7 md:px-20  h-16  bg-white items-center avant-garde"
      style={{
        color: color,
      }}
      onMouseLeave={() => {
        const activeCatElement = document.getElementById(activeCatId);
        setX(activeCatElement?.offsetLeft || 0);
      }}
    >
      <button onClick={() => setCategory(categories[0])}>
        <Image src="/icons/logo.png" width={60} height={60} alt="logo" />
      </button>
      <div className="hidden sm:flex ">
        <motion.div
          ref={boxRef}
          onMouseMove={handleMouseMove}
          className="py-1 px-4 font-bold flex gap-8 relative "
          initial="initial"
          whileHover="hover"
        >
          <motion.span
            className="  absolute bottom-1 h-0.5"
            animate={{
              x: x - 15,
              width: width,
            }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
            style={{
              backgroundColor: color,
            }}
          >
            {" "}
          </motion.span>
          {categories.map((category) => (
            <motion.button
              key={category.name}
              variants={navigationVariants}
              initial="initial"
              whileHover="hover"
              onClick={() => setCategory(category)}
              id={`nav-${category.name}`}
              className={`pb-2`}
            >
              {category.name}
            </motion.button>
          ))}
        </motion.div>

        <div className="h-fit flex items-center ml-4 pl-4   border-l-2  border-black">
          <Link
            className="  text-black font-bold"
            href="https://github.com/bijuice"
            target="_blank"
          >
            GitHub
          </Link>
        </div>
      </div>

      {/* mobile menu */}
      <button className="sm:hidden" onClick={() => setShowMenu(true)}>
        <Image src="/icons/menu.png" width={30} height={30} alt="menu" />
      </button>

      <div
        className={`mobile-menu ${
          showMenu && "active"
        } fixed w-screen h-screen top-0 left-0 bg-white p-7 grid place-content-center shadow-md`}
      >
        <button
          className="absolute top-7 right-7"
          onClick={() => setShowMenu(false)}
        >
          <Image src="/icons/close.png" width={25} height={25} alt="logo" />
        </button>

        <div className="w-full flex flex-col items-center  ">
          {categories.map((category) => (
            <CategoryButton
              styles=""
              onClick={() => {
                changeCategory(category);
              }}
            >
              {category.name}
            </CategoryButton>
          ))}
        </div>
      </div>
    </nav>
  );
}
