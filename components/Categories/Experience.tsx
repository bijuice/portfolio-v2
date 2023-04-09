import { CategoryProps } from "@/props/CategoryProps"
import { useEffect, useMemo, useState } from "react"

export default function Experience({}: CategoryProps) {
  return (
    <div className="h-full select-none">
      <div className="h-full  flex items-center   relative pt-[35vh]">
        <Timeline />
      </div>
    </div>
  )
}

type Experience = {
  year: number
  //in months
  duration: number
  title: string
  role: string
  resps: string[]
}

const experiences: Experience[] = [
  {
    year: 2017,
    duration: 48,
    title: "USIU",
    role: "Student",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
  {
    year: 2020,
    duration: 12,
    title: "KamiLimu",
    role: "Student",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
  {
    year: 2020,
    duration: 12,
    title: "Culture Capture",
    role: "Co-founder",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
  {
    year: 2021,
    duration: 8,
    title: "Hisa",
    role: "Developer",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
  {
    year: 2022,
    duration: 14,
    title: "Pesapal",
    role: "Developer",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
  {
    year: 2022,
    duration: 14,
    title: "Pesapal",
    role: "Freelance",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
]

function Timeline() {
  const date = new Date()
  const year = date.getFullYear()

  const a = year - 6
  const b = year + 2

  function renderDots() {
    let dots: React.ReactNode[] = []

    for (let i = a; i < b; i++) {
      dots.push(<Point key={i} year={i} />)
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
}

function Point({ year }: PointProps) {
  const exps = experiences.filter((e) => e.year === year)

  return (
    <div className="w-4 h-4 rounded-full border-2 border-secondary-500  relative dot">
      <div className="w-[2px] h-6 bg-secondary-500 rounded-md absolute bottom-5 left-[45%]"></div>
      <p className="text-secondary-500 absolute -bottom-8 -left-[75%]">
        {year}
      </p>

      <div className="absolute bottom-20 flex flex-col gap-10">
        {exps.map((e) => (
          <ExpCard key={e.title} exp={e} />
        ))}
      </div>
    </div>
  )
}

function ExpCard({ exp }: { exp: Experience }) {
  function monthsToYears() {
    const dur = (exp.duration / 12).toFixed(1)

    return dur
  }

  let timeline = document.getElementById("timeline")

  const durationWidth = (exp.duration / 84) * (timeline?.offsetWidth || 1500)

  return (
    <div className="flex cursor-pointer flex-col  gap-1 py-2 px-2 experience-card  relative">
      <p className="font-extrabold text-lg">{exp.title}</p>
      <p className="text-alternate-400 text-sm">{exp.role}</p>

      <p className="text-xs -bottom-3 absolute font-bold exp-years overflow-hidden year">
        {monthsToYears()} years
      </p>

      <div
        className="bg-secondary-500 h-[1.5px] -bottom-4 absolute timeline "
        style={{
          width: durationWidth,
          animationDelay: "0.2s",
        }}
      ></div>
    </div>
  )
}

function Line() {
  return (
    <div
      className="bg-secondary-500 w-full h-[1px]  timeline relative"
      id="timeline"
    ></div>
  )
}
