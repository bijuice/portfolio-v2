import { CategoryProps } from "@/props/CategoryProps"

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
  type:
    | "Education"
    | "Volunteer"
    | "Full Time Employment"
    | "Freelance"
    | "Award"
}

const experiences: Experience[] = [
  {
    year: 2017,
    duration: 48,
    title: "United States International University - Africa",
    role: "Student",
    type: "Education",
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
    type: "Education",
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
    type: "Freelance",
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

function Point({ year }: { year: number }) {
  return (
    <div className="w-4 h-4 rounded-full border-2 border-secondary  relative dot">
      <div className="w-[2px] h-6 bg-secondary rounded-md absolute bottom-5 left-[45%]"></div>
      <p className="text-secondary absolute -bottom-8 -left-[75%]">{year}</p>
    </div>
  )
}

function Line() {
  return <div className="bg-secondary w-full h-[1px]  timeline relative"></div>
}
