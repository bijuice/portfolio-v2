import Link from "next/link"
import { ChevronBottom } from "../Icons/Chevrons"
import { PageHeading, PageSubHeading } from "../Typography"
import { motion } from "framer-motion"
import Image from "next/image"

export default function About() {
  return (
    <div className="category-view   max-h-screen overflow-y-auto">
      <section className="flex flex-col  gap-5 justify-center h-screen relative bg-white text-black">
        <PageHeading text="ABDUL RAHMAN REHMTULLA" />
        <PageSubHeading text="fullstack, mentor, cat dad, poet." />

        <span className="w-full flex flex-col justify-center items-center absolute left-0 bottom-2 ">
          discover more
          <a href="#web-artisan">
            <ChevronBottom size={35} color="black" />
          </a>
        </span>
      </section>

      <motion.div className="bg-white min-h-screen">
        <SectionContainer id="web-artisan">
          <BlackSection direction="left">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500">
              <span className="font-bold text-[1.5em]">2</span> years of web
              <span className="font-bold text-[1.5em]"> ARTISTRY</span>
            </h2>
          </BlackSection>
          <WhiteSection>
            <ImageContainer
              src="url('/images/cc.png')"
              link="https://super-biscuit-1456ce.netlify.app/"
            />
            <ImageContainer
              src="url('/images/alp.png')"
              link="https://africalawpartners.com/"
            />
            <ImageContainer
              src="url('/images/code.png')"
              link="https://github.com/bijuice/portfolio-v2"
            />
          </WhiteSection>
        </SectionContainer>

        <SectionContainer>
          <WhiteSection>here</WhiteSection>
          <BlackSection direction="right">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 to-red-600">
              <span className="font-bold text-[1.5em]">2</span> years of
              changing
              <span className="font-bold text-[1.5em]"> LIVES</span>
            </h2>
          </BlackSection>
        </SectionContainer>
        <SectionContainer>
          <BlackSection direction="left">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-200 to-sky-600">
              A <span className="font-bold text-[1.5em]">LIFETIME</span> of
              herding
              <span className="font-bold text-[1.5em]"> CATS</span>
            </h2>
          </BlackSection>
          <WhiteSection>here</WhiteSection>
        </SectionContainer>
        <SectionContainer>
          <WhiteSection>here</WhiteSection>
          <BlackSection direction="right">
            <h2 className="bg-clip-text text-transparent bg-gradient-to-r from-lime-300 to-indigo-400">
              <span className="font-bold text-[1.5em]">Thousands</span> of words
              on
              <span className="font-bold text-[1.5em]"> Paper</span>
            </h2>
          </BlackSection>
        </SectionContainer>
      </motion.div>
    </div>
  )
}

function SectionContainer({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
  return (
    <div className="flex w-full h-screen" id={id}>
      {children}
    </div>
  )
}

function BlackSection({
  children,
  direction,
}: {
  children: React.ReactNode
  direction: "left" | "right"
}) {
  const styles =
    direction === "left" ? "justify-end text-right" : "justify-start text-left"

  return (
    <div
      className={`grow basis-1/2 bg-black text-[5em] px-24 flex items-center ${styles}`}
    >
      {children}
    </div>
  )
}

function WhiteSection({ children }: { children: React.ReactNode }) {
  return <div className="bg-white basis-1/2 flex flex-col">{children}</div>
}

function ImageContainer({ src, link }: { src: string; link: string }) {
  return (
    <div
      className="basis-1/3 relative"
      style={{
        background: src,
        backgroundSize: "cover",
      }}
    >
      <Link href={link} target="_blank">
        <div className="h-full w-full"></div>
      </Link>
    </div>
  )
}
