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
  }, [activeCategory]);

  return (
    <nav
      className=" fixed top-0  right-0 w-full  z-20 flex justify-end px-20 py-4  bg-white items-center avant-garde"
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
    </nav>
  );
}
