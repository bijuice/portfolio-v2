import Close from "./Icons/Close"
import { motion } from "framer-motion"

type ButtonProps = {
  onClick(): void
  children?: React.ReactNode
}

export function CloseButton({ onClick }: ButtonProps) {
  return (
    <motion.button
      className="absolute top-7 right-7 p-2 rounded-md "
      onClick={(e) => {
        e.stopPropagation()
        onClick()
      }}
      whileHover={{
        rotate: -180,
        scale: 1.2,
      }}
    >
      <Close size={30} />
    </motion.button>
  )
}
