import { PageHeading, PageSubHeading } from "../Typography"
import { motion } from "framer-motion"

export default function About() {
  return (
    <div className="category-view px-7 mx-4  max-h-screen overflow-y-auto">
      <section className="flex flex-col  gap-5 justify-center h-[90vh] ">
        <PageHeading text="Abdul Rahman Rehmtulla" />
        <PageSubHeading text="fullstack, mentor, cat dad, poet." />
      </section>

      <motion.div
        initial={{
          y: 500,
        }}
        animate={{
          y: 0,
        }}
        transition={{
          delay: 2.2,
          type: "spring",
          damping: 20,
        }}
        className="bg-white min-h-[1000px] px-10 py-7 text-slate-600"
      >
        <h3 className="font-bold text-4xl "></h3>
      </motion.div>
    </div>
  )
}
