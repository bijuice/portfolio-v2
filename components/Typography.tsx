import { AnimatePresence, motion } from "framer-motion"

type TypographyProps = {
  text: string
}

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.7,
    },
  },
}

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
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
    <motion.div
      className={`mt-[25vh] md:mt-[40vh] overflow-hidden text-5xl  md:text-7xl 2xl:text-8xl text-center arena `}
    >
      <motion.h1 variants={container} initial="hidden" animate="show">
        {children}
      </motion.h1>
    </motion.div>
  )
}

export function PageSubHeading({ text }: TypographyProps) {
  return (
    <div
      className={`overflow-hidden text-xl 2xl:text-4xl text-center font-['Circular'] italic`}
    >
      <motion.h2
        initial={{
          y: 100,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 2.2,
          duration: 0.6,
        }}
      >
        {text}
      </motion.h2>
    </div>
  )
}

export function SectionHeading({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) {
  return (
    <motion.h2
      className={`arena leading-loose bg-clip-text text-transparent bg-gradient-to-r text-7xl 2xl:text-7xl ${styles}`}
      viewport={{ once: true }}
      style={{
        backgroundSize: "300% 100%",
      }}
      animate={{
        backgroundPositionX: ["0%", "100%"],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        repeatType: "reverse",
      }}
    >
      {children}
    </motion.h2>
  )
}

export function TextEmphasis({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-[1.5em] uppercase">{children}</span>
}
