import { AnimatePresence, motion } from "framer-motion"

type TypographyProps = {
  text: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.5,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
}

export function PageHeading({ text }: TypographyProps) {
  const children = text.split(" ").map((word) => {
    return (
      <motion.span key={word} variants={item}>
        {" "}
        {word + " "}
      </motion.span>
    )
  })

  return (
    <div
      className={`overflow-hidden text-7xl 2xl:text-8xl max-w-[16ch] font-bold`}
    >
      <motion.h1 variants={container} initial="hidden" animate="show">
        {children}
      </motion.h1>
    </div>
  )
}

export function PageSubHeading({ text }: TypographyProps) {
  return (
    <div className={`overflow-hidden text-4xl `}>
      <motion.h2
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 1.9,
        }}
      >
        {text}
      </motion.h2>
    </div>
  )
}
