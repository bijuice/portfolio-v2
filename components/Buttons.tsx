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

export function NavigationButton({
  onClick,
  children,
  position,
}: NavButtonProps) {
  return (
    <motion.button
      className={`${position}-0 bottom-0 h-full w-[100px] text-red-500   absolute z-0`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  )
}
