import { ChevronLeft, ChevronRight } from "./Icons/Chevrons"
import Close from "./Icons/Close"
import { motion } from "framer-motion"

type ButtonProps = {
  onClick(): void
  children?: React.ReactNode
}

export function CloseButton({ onClick }: ButtonProps) {
  return (
    <motion.button
      className="absolute top-7 right-7 p-5 rounded-md "
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      whileHover={{
        rotate: -180,
        scale: 1.2,
      }}
      style={{
        zIndex: 100,
      }}
    >
      <Close size={30} />
    </motion.button>
  )
}

type NavButtonProps = {
  position: "left" | "right"
} & ButtonProps

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
  }
}

export function NavigationButton({
  onClick,
  children,
  position,
}: NavButtonProps) {
  return (
    <motion.button
      className={`${position}-0 bottom-0 h-full w-[80px] text-red-500 flex items-center justify-center  absolute z-0`}
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="click"
    >
      <motion.div variants={chevronVariants(position) as any}>
        {position === "left" ? (
          <ChevronLeft size={60} />
        ) : (
          <ChevronRight size={60} />
        )}
      </motion.div>
    </motion.button>
  )
}
