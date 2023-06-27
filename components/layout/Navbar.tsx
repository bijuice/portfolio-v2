import Category from "@/types/Category";
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import categories from "@/data/categories";

const navigationVariants = {
  initial: {
    y: 0,
  },
  hover: {
    y: -3,
  },
};

const barVariants = {
  initial: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
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
    setMousePosition(getRelativeCoordinates(e, boxRef.current));
  };

  const [bgColor, setBgColor] = useState(activeCategory.color);

  useEffect(() => {
    setBgColor("");

    setTimeout(() => {
      setBgColor(activeCategory.color);
    }, 400);

    return setBgColor("");
  }, [activeCategory]);

  return (
    <nav
      className=" fixed top-0  right-0 w-full  z-20 flex justify-end px-20 h-16 items-center avant-garde"
      style={{
        color: color,
        backgroundColor: bgColor,
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
          className="  absolute bottom-0  w-20 h-0.5"
          animate={{
            x: mousePosition.x - 45,
          }}
          transition={{
            type: "tween",
            duration: 0.2,
          }}
          variants={barVariants}
          style={{
            backgroundColor: color,
          }}
        >
          {" "}
        </motion.span>
        {categories.map((category) => (
          <motion.button
            variants={navigationVariants}
            initial="initial"
            whileHover="hover"
            onClick={() => setCategory(category)}
          >
            {category.name}
          </motion.button>
        ))}
      </motion.div>
    </nav>
  );
}
