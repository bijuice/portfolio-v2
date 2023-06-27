import Category from "@/types/Category";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

type CategoryCardProps = {
  height: number;
  width: number;
  isDragging: boolean;
  index: number;
  category: Category;
  activeCategory: Category;
  setCategory(category: Category): void;
  pos: number;
};

type CategoryState = "all" | "active" | "inactive";

type Properties = {
  height: number;
  width: number;
  maxHeight: string | number;
  maxWidth: string | number;
  x: number;
  y: number;
  left: number;
  zIndex: number;
};

const defaultProperties: Properties = {
  height: 10000,
  width: 10000,
  maxHeight: "60vh",
  maxWidth: "40vh",
  x: 0,
  y: 0,
  left: 0,
  zIndex: 0,
};

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
    if (activeCategory.name === "ALL") {
      return "all";
    } else if (activeCategory.name === category.name) {
      return "active";
    }
    return "inactive";
  }

  //generate use state from properties object
  const [properties, setProperties] = useState<Properties>(defaultProperties);

  const animProperties = () => {
    const container = document.getElementById("card-container");
    if (resolveCategoryState() === "active") {
      setProperties({
        ...properties,
        maxHeight: "100vh",
        maxWidth: "100vw",
        zIndex: 1,
        x: container!.getBoundingClientRect().left + index * 40 || 0,
      });
    } else if (resolveCategoryState() === "inactive") {
      setProperties({ ...properties, maxHeight: "100vh", maxWidth: 0 });
    } else {
      setProperties(defaultProperties);
    }
  };

  useEffect(() => {
    animProperties();
  }, [activeCategory]);

  return (
    <div>
      <motion.div
        layout
        key={category.name}
        className={`   relative  grow overflow-hidden flex items-center  circular  ${
          resolveCategoryState() === "all" && "cursor-pointer"
        } `}
        onClick={() => {
          if (!isDragging) {
            setCategory(category);
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
        style={{
          backgroundColor: category.color,
        }}
      ></motion.div>

      {activeCategory.name === "ALL" && (
        <motion.h1 className="text-[2em] py-3">{category.name}</motion.h1>
      )}
    </div>
  );
}
