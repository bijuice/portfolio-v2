import { CategoryProps } from "@/props/CategoryProps"
import { ReactNode, useEffect, useMemo, useState } from "react"
import { delay, motion } from "framer-motion"
import Link from "next/link"
import SectionContainer from "../containers/SectionContainer"
import { ChevronTop } from "../Icons/Chevrons"
import DiscoverMore from "../navigation/DiscoverMore"
import experiences from "@/data/experiences"
import { Experience } from "@/types/Experience"
import formatLink from "@/utilities/formatters"
import { SimplePageHeading, Skill } from "../Typography"

export default function ExperiencePage() {
  return (
    <div className="category-view max-h-screen h-screen select-none relative   overflow-y-auto overflow-x-hidden">
      <section
        id="top"
        className="h-screen relative hidden lg:flex items-center mx-auto w-[85vw] font-bold pt-32"
      >
        <motion.h1
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-black  pr-4 text-8xl avant-garde absolute mb-20 overflow-hidden uppercase "
        >
          Experience
        </motion.h1>
        <Timeline />

        <DiscoverMore id="pesapal-developer" />
      </section>

      <section className=" flex justify-center items-center min-h-[30vh] mt-24">
        <SimplePageHeading>Experience</SimplePageHeading>
      </section>

      <SectionContainer styles="  pt-10 pb-16 px-10 md:px-20 text-black grid gap-x-16 justify-items-center  ">
        {experiences.map((exp) => {
          return <ExperienceSection key={formatLink(exp)} exp={exp} />
        })}
      </SectionContainer>

      <Link href="#top" className="fixed bottom-5 right-20 cursor-pointer ">
        <ChevronTop size={35} color="white" />
      </Link>
    </div>
  )
}

function ExperienceSection({ exp }: { exp: Experience }) {
  return (
    <div
      id={formatLink(exp)}
      className="flex flex-col gap-7 py-14 md:w-[60ch] basis-1 text-black "
    >
      <h1 className="text-4xl md:text-5xl avant-garde ">{exp.title}</h1>
      <h2 className="text-xl md:text-2xl text-neutral-700  ">
        {exp.role} {"("}
        {exp.startYear}
        {exp.startYear !== exp.endYear && (
          <span> - {exp.endYear || "Present"}</span>
        )}
        {")"}
      </h2>
      <div className="flex flex-wrap gap-4 uppercase   text-black  px-1">
        {exp.skills.map((skill) => {
          return <Skill key={skill}>{skill}</Skill>
        })}
      </div>

      <div
        className=" max-w-[60ch]  border-y border-black py-6"
        dangerouslySetInnerHTML={{
          __html: exp.description,
        }}
      ></div>
    </div>
  )
}

function Timeline() {
  const [timelineWidth, setTimelineWidth] = useState(1500)

  useEffect(() => {
    let timeline = document.getElementById("timeline")

    setTimelineWidth(timeline!.offsetWidth)
  }, [])

  const date = new Date()
  const year = date.getFullYear()

  const a = year - 6
  const b = year + 2

  function renderDots() {
    let dots: React.ReactNode[] = []

    for (let i = a; i < b; i++) {
      const exps = experiences.filter((e) => e.startYear === i)

      const cards = exps.map((e) => {
        return <ExpCard key={e.title} exp={e} timelineWidth={timelineWidth} />
      })

      dots.push(<Point key={i} year={i} cards={cards} />)
    }

    return dots
  }

  return (
    <>
      <Line />
      <div className="flex justify-between w-full absolute  py-5  ">
        {renderDots()}
      </div>
    </>
  )
}

type PointProps = {
  year: number
  cards: ReactNode[]
}

function Point({ year, cards }: PointProps) {
  return (
    <div className="w-4 h-4 rounded-full border-2 border-black  relative dot">
      <div className="w-[2px] h-6 bg-black rounded-md absolute bottom-5 left-[45%]"></div>
      <p className="text-black absolute -bottom-8 -left-[75%]">{year}</p>

      <div className="absolute bottom-14 -left-1 flex flex-col gap-8">
        {cards}
      </div>
    </div>
  )
}

type ExpCardProps = {
  exp: Experience
  timelineWidth: number
}

function ExpCard({ exp, timelineWidth }: ExpCardProps) {
  const year = new Date().getFullYear()

  const duration =
    exp.duration === 0 ? (year - exp.startYear) * 12 : exp.duration

  function monthsToYears() {
    const dur = (duration / 12).toFixed(1)

    const year = parseFloat(dur) === 1.0 ? "year" : "years"

    return dur + year
  }

  const durationWidth = (duration / 84) * timelineWidth

  return (
    <Link href={"#" + formatLink(exp)}>
      <div
        className={` flex cursor-pointer flex-col   gap-1 py-2 px-2 experience-card  relative w-[150%] text-black `}
      >
        <div className={`experience-card-title `}>
          <p className="avant-garde text-lg tracking-wider ">{exp.title}</p>
          <p className="text-neutral-500 text-sm">{exp.role}</p>
        </div>

        <div
          className="bg-black h-[1.5px] -bottom-2 absolute timeline "
          style={{
            width: durationWidth,
            animationDelay: "0.2s",
          }}
        >
          <div className="overflow-hidden absolute -right-14 -top-[6px]">
            <p className="text-xs font-bold exp-years  year  ">
              {monthsToYears()}
            </p>
          </div>
        </div>
      </div>
    </Link>
  )
}

function Line() {
  return (
    <div
      className="bg-black w-full h-[2px]  timeline relative"
      id="timeline"
    ></div>
  )
}
