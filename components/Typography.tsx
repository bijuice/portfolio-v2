import { AnimatePresence, motion } from "framer-motion";

type TypographyProps = {
  text: string;
};

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.7,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.7,
    },
  },
};

export function PageHeading({ text }: TypographyProps) {
  const children = text.split(" ").map((word) => {
    return (
      <motion.span key={word} variants={item}>
        {" "}
        {word + " "}
      </motion.span>
    );
  });

  return (
    <motion.div
      className={`mt-[25vh] md:mt-[40vh] overflow-hidden text-5xl  md:text-7xl 2xl:text-8xl text-center avant-garde `}
    >
      <motion.h1 variants={container} initial="hidden" animate="show">
        {children}
      </motion.h1>
    </motion.div>
  );
}

export function PageSubHeading({ text }: TypographyProps) {
  return (
    <div
      className={`px-4 overflow-hidden text-xl 2xl:text-4xl text-center font-['Circular'] italic text-gray-500`}
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
  );
}

export function SectionHeading({
  children,
  styles,
}: {
  children: React.ReactNode;
  styles?: string;
}) {
  return (
    <h2
      className={`avant-garde  bg-clip-text  text-6xl 2xl:text-8xl leading-relaxed  text-black uppercase`}
    >
      {children}
    </h2>
  );
}

export function TextEmphasis({ children }: { children: React.ReactNode }) {
  return <span className="font-bold text-[1.5em] uppercase ">{children}</span>;
}
