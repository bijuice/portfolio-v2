import { motion } from "framer-motion"

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
      className={`font-bold mt-[25vh] md:mt-[40vh] overflow-hidden text-6xl md:text-7xl 2xl:text-8xl text-center avant-garde leading-normal`}
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
      className={`px-4 overflow-hidden text-xl 2xl:text-4xl text-center  italic `}
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
    <h2
      className={`avant-garde  bg-clip-text text-4xl md:text-6xl 2xl:text-8xl xl:leading-loose 2xl:leading-[1.5] leading-relaxed  text-black uppercase`}
    >
      {children}
    </h2>
  )
}

export function TextEmphasis({ children }: { children: React.ReactNode }) {
  const animationDuration = 0.6

  return (
    <motion.span
      className="font-bold  uppercase px-4 mx-1 py-2"
      style={{
        background: `linear-gradient(to left, white, white 50%, black 50%, black)`,
        backgroundSize: "200.3% 100%",
      }}
      initial={{
        backgroundPosition: "100% 0%",
      }}
      whileInView={{
        backgroundPosition: "0% 0%",
      }}
      transition={{
        duration: animationDuration,
      }}
      viewport={{
        amount: "all",
      }}
    >
      <motion.span
        className="break-words"
        style={{
          background: `linear-gradient(to left, black, black 50%, white 50%, white)`,
          backgroundSize: "200.3% 100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
        initial={{
          backgroundPosition: "100% 0%",
        }}
        whileInView={{
          backgroundPosition: "0% 0%",
        }}
        transition={{
          duration: animationDuration,
        }}
        viewport={{
          amount: "all",
        }}
      >
        {children}
      </motion.span>
    </motion.span>
  )
}

export function Skill({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-sm  avant-garde">{children}</span>
}

export function SimplePageHeading({
  children,
  styles,
}: {
  children: React.ReactNode
  styles?: string
}) {
  return (
    <h1
      className={`${styles} text-5xl sm:text-6xl md:text-8xl uppercase avant-garde `}
    >
      {children}
    </h1>
  )
}
