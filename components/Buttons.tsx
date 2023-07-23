import { ChevronLeft, ChevronRight } from "./Icons/Chevrons";
import Close from "./Icons/Close";
import { motion } from "framer-motion";

type ButtonProps = {
  color?: string;
  onClick(): void;
  children?: React.ReactNode;
};

export function CloseButton({ onClick, color }: ButtonProps) {
  return (
    <motion.button
      className="absolute top-4 right-2 p-5 rounded-md "
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
      whileHover={{
        rotate: -180,
        scale: 1.2,
      }}
      style={{
        zIndex: 100,
      }}
    >
      <Close size={30} color={color} />
    </motion.button>
  );
}

type NavButtonProps = {
  position: "left" | "right";
} & ButtonProps;

const chevronVariants = (position: "left" | "right") => {
  return {
    initial: {
      x: 0,
      scale: 1,
    },
    hover: {
      x: position === "left" ? -10 : 10,
      transition: {
        duration: 0.5,
      },
    },
    click: {
      scale: 1.5,
    },
  };
};

export function NavigationButton({
  onClick,
  children,
  position,
  color,
}: NavButtonProps) {
  return (
    <motion.button
      className={`${position}-0 bottom-0 h-full w-[60px]  flex items-center justify-center  absolute z-0`}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    >
      <motion.div variants={chevronVariants(position) as any}>
        {position === "left" ? (
          <ChevronLeft size={30} color={color} />
        ) : (
          <ChevronRight size={30} color={color} />
        )}
      </motion.div>
    </motion.button>
  );
}

export function CategoryButton({
  children,
  onClick,
  styles,
}: {
  children: React.ReactNode;
  onClick: () => void;
  styles: string;
}) {
  return (
    <button
      className={`category-button  uppercase text-5xl font-bold  py-7  ${styles}`}
      onClick={onClick}
    >
      <span className=" px-32">{children}</span>
    </button>
  );
}
