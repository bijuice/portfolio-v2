import { CategoryProps } from "@/props/CategoryProps";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { delay, motion } from "framer-motion";
import Link from "next/link";
import SectionContainer from "../containers/SectionContainer";
import { ChevronTop } from "../Icons/Chevrons";
import DiscoverMore from "../navigation/DiscoverMore";
import experiences from "@/data/experiences";
import { Experience } from "@/types/Experience";
import formatLink from "@/utilities/formatters";

export default function ExperiencePage() {
  return (
    <div className="category-view max-h-screen h-screen select-none relative  bg-neutral-900 overflow-y-auto overflow-x-hidden">
      <section
        id="top"
        className="h-screen relative flex items-center mx-auto w-[85vw] font-bold pt-32"
      >
        <motion.h1
          animate={{ opacity: [1, 0] }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-white  pr-4 text-8xl avant-garde absolute mb-20 overflow-hidden uppercase "
        >
          Experience
        </motion.h1>
        <Timeline />

        <DiscoverMore id="pesapal-developer" />
      </section>

      <SectionContainer styles="bg-neutral-900  pt-10 pb-16 px-10 md:px-20 text-black  flex-col gap-x-16 items-center  ">
        {experiences.map((exp) => {
          return <ExperienceSection key={formatLink(exp)} exp={exp} />;
        })}
      </SectionContainer>

      <Link href="#top" className="fixed bottom-5 right-20 cursor-pointer ">
        <ChevronTop size={35} color="white" />
      </Link>
    </div>
  );
}

function ExperienceSection({ exp }: { exp: Experience }) {
  return (
    <div
      id={formatLink(exp)}
      className="flex flex-col gap-7 py-14 w-[60ch] basis-1 text-neutral-100 "
    >
      <h1 className="text-4xl md:text-5xl avant-garde ">{exp.title}</h1>
      <h2 className="text-xl md:text-2xl text-neutral-300  ">
        {exp.role} {"("}
        {exp.startYear}
        {exp.startYear !== exp.endYear && (
          <span> - {exp.endYear || "Present"}</span>
        )}
        {")"}
      </h2>
      <div className="flex flex-wrap gap-4 uppercase border-b pb-6  border-neutral-50 px-1">
        {exp.skills.map((skill) => {
          return (
            <span key={skill} className="text-sm  avant-garde ">
              {skill}
            </span>
          );
        })}
      </div>

      <div
        className=" max-w-[60ch] text-white"
        dangerouslySetInnerHTML={{
          __html: exp.description,
        }}
      ></div>
    </div>
  );
}

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
      const exps = experiences.filter((e) => e.startYear === i);

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

  const duration =
    exp.duration === 0 ? (year - exp.startYear) * 12 : exp.duration;

  function monthsToYears() {
    const dur = (duration / 12).toFixed(1);

    const year = parseFloat(dur) === 1.0 ? "year" : "years";

    return dur + year;
  }

  const durationWidth = (duration / 84) * timelineWidth;

  return (
    <Link href={"#" + formatLink(exp)}>
      <div
        className={` flex cursor-pointer flex-col   gap-1 py-2 px-2 experience-card  relative w-[150%] text-white `}
      >
        <div className={`experience-card-title `}>
          <p className="avant-garde text-lg tracking-wider ">{exp.title}</p>
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
      className="bg-white w-full h-[2px]  timeline relative"
      id="timeline"
    ></div>
  );
}
