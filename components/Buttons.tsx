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
  text: string;
} & ButtonProps;

const chevronVariants = (position: "left" | "right") => {
  return {
    initial: {
      x: 0,
      scale: 1,
    },
    hover: {
      x: position === "left" ? -5 : 5,
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
  text,
}: NavButtonProps) {
  const positionStyles =
    position === "left" ? "mr-14 rotate-90" : "-rotate-90 ml-14";

  return (
    <motion.button
      className={`${position}-0 bottom-0 h-full w-20  flex items-center  justify-center absolute z-0`}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="click"
      variants={chevronVariants(position) as any}
    >
      <div
        className={`text-sm font-bold  px-5 pb-7 pt-2  uppercase border-[2.5px]   ${positionStyles}`}
        style={{
          color,
          borderColor: color,
        }}
      >
        {text}
      </div>
    </motion.button>
  );
}
