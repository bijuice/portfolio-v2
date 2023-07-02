import Category from "@/types/Category";
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import categories from "@/data/categories";
import Link from "next/link";
import Image from "next/image";

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
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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

  return (
    <nav
      className=" fixed top-0  right-0 w-full  z-20 flex justify-end px-20  h-16  bg-white items-center avant-garde"
      style={{
        color: color,
      }}
      onMouseLeave={() => {
        const activeCatElement = document.getElementById(activeCatId);
        setX(activeCatElement?.offsetLeft || 0);
      }}
    >
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
          className="  border-black  py-2"
          href="https://github.com/bijuice"
          target="_blank"
        >
          <Image src="/icons/github.png" width={23} height={23} alt="github" />
        </Link>
      </div>
    </nav>
  );
}
