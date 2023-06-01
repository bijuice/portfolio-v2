import { CategoryProps } from "@/props/CategoryProps";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";

export default function Experience() {
  return (
    <div className="category-view max-h-screen h-screen select-none relative grid  place-content-center bg-neutral-950 overflow-y-auto">
      <div className="h-screen relative flex items-center w-[85vw] font-bold pt-32">
        <motion.h1
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 1, delay: 2 }}
          className="text-white text-8xl arena absolute mb-20 overflow-hidden "
        >
          Experience
        </motion.h1>
        <Timeline />
      </div>
    </div>
  );
}

type Experience = {
  year: number;
  //in months
  duration: number;
  title: string;
  role: string;
  resps: string[];
};

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
    duration: 40,
    title: "Culture Capture",
    role: "Co-founder",
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
    year: 2021,
    duration: 26,
    title: "KamiLimu",
    role: "Committee Member",
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
    duration: 16,
    title: "Pesapal",
    role: "Developer",
    resps: [
      "Bachelor of science in Applied Computer Technology",
      "Concentration in Forensics and Cyber Security",
    ],
  },
];

function Timeline() {
  const [timelineWidth, setTimelineWidth] = useState(1500);

  useEffect(() => {
    let timeline = document.getElementById("timeline");

    setTimelineWidth(timeline!.offsetWidth);
  }, []);

  const date = new Date();
  const year = date.getFullYear();

  const a = year - 6;
  const b = year + 2;

  function renderDots() {
    let dots: React.ReactNode[] = [];

    for (let i = a; i < b; i++) {
      const exps = experiences.filter((e) => e.year === i);

      const cards = exps.map((e) => {
        return <ExpCard key={e.title} exp={e} timelineWidth={timelineWidth} />;
      });

      dots.push(<Point key={i} year={i} cards={cards} />);
    }

    return dots;
  }

  return (
    <>
      <Line />
      <div className="flex justify-between w-full absolute  py-5  ">
        {renderDots()}
      </div>
    </>
  );
}

type PointProps = {
  year: number;
  cards: ReactNode[];
};

function Point({ year, cards }: PointProps) {
  return (
    <div className="w-4 h-4 rounded-full border-2 border-white  relative dot">
      <div className="w-[2px] h-6 bg-white rounded-md absolute bottom-5 left-[45%]"></div>
      <p className="text-white absolute -bottom-8 -left-[75%]">{year}</p>

      <div className="absolute bottom-14 -left-1 flex flex-col gap-8">
        {cards}
      </div>
    </div>
  );
}

type ExpCardProps = {
  exp: Experience;
  timelineWidth: number;
};

function ExpCard({ exp, timelineWidth }: ExpCardProps) {
  const year = new Date().getFullYear();

  const duration = exp.duration === 0 ? (year - exp.year) * 12 : exp.duration;

  function monthsToYears() {
    const dur = (duration / 12).toFixed(1);

    const year = parseFloat(dur) === 1.0 ? "year" : "years";

    return dur + year;
  }

  const durationWidth = (duration / 84) * timelineWidth;

  const link = `#${exp.title.replace(/[^\w\s ]/gi, "")}-${exp.role.replace(
    /[^\w\s]/gi,
    ""
  )}`;

  return (
    <Link href={link}>
      <div
        className={` flex cursor-pointer flex-col   gap-1 py-2 px-2 experience-card  relative w-[150%] `}
      >
        <div className={`experience-card-title `}>
          <p className="font-extrabold text-lg">{exp.title}</p>
          <p className="text-gray-400 text-sm">{exp.role}</p>
        </div>

        <div
          className="bg-white h-[1.5px] -bottom-2 absolute timeline "
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
  );
}

function Line() {
  return (
    <div
      className="bg-white w-full h-[2.5px]  timeline relative"
      id="timeline"
    ></div>
  );
}
