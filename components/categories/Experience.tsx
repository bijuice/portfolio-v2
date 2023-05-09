import { CategoryProps } from "@/props/CategoryProps"
import { ReactNode, useEffect, useMemo, useState } from "react"

export default function Experience({}: CategoryProps) {
  return (
    <div className="h-full select-none relative">
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
    year: 2018,
    duration: 24,
    title: "iPhones Kenya",
    role: "Founder",
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
    duration: 3,
    title: "Africa Law Partners",
    role: "Freelance",
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
]

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
  const [activeExp, setActiveExp] = useState<Experience | null>(null)

  function renderDots() {
    let dots: React.ReactNode[] = []

    for (let i = a; i < b; i++) {
      const exps = experiences.filter((e) => e.year === i)

      const cards = exps.map((e) => {
        return (
          <ExpCard
            key={e.title}
            exp={e}
            timelineWidth={timelineWidth}
            activeExp={activeExp}
            setActiveExp={setActiveExp}
          />
        )
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
    <div className="w-4 h-4 rounded-full border-2 border-secondary-500  relative dot">
      <div className="w-[2px] h-6 bg-secondary-500 rounded-md absolute bottom-5 left-[45%]"></div>
      <p className="text-secondary-500 absolute -bottom-8 -left-[75%]">
        {year}
      </p>

      <div className="absolute bottom-14 -left-1 flex flex-col gap-8">
        {cards}
      </div>
    </div>
  )
}

type ExpCardProps = {
  exp: Experience
  timelineWidth: number
  activeExp: Experience | null
  setActiveExp: React.Dispatch<React.SetStateAction<Experience | null>>
}

function ExpCard({
  activeExp,
  setActiveExp,
  exp,
  timelineWidth,
}: ExpCardProps) {
  function monthsToYears() {
    const dur = (exp.duration / 12).toFixed(1)

    const year = parseFloat(dur) === 1.0 ? "year" : "years"

    return dur + year
  }

  const durationWidth = (exp.duration / 84) * timelineWidth

  const cardState = () => {
    if (activeExp === null) {
      return "initial"
    }
    if (exp.title === activeExp?.title) {
      return "active"
    }

    return "incative"
  }

  return (
    <div
      className={`flex cursor-pointer flex-col   gap-1 py-2 px-2 experience-card  relative w-[150%] ${cardState()}`}
      onClick={() => {
        setActiveExp(exp)
      }}
    >
      <div className={`experience-card-title ${cardState()}`}>
        <p className="font-extrabold text-lg">{exp.title}</p>
        <p className="text-alternate-400 text-sm">{exp.role}</p>
      </div>

      <div
        className="bg-secondary-500 h-[1.5px] -bottom-2 absolute timeline "
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
