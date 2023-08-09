import { PageHeading, SimplePageHeading, Skill } from "../Typography"
import { Project } from "@/types/Project"
import projects from "@/data/projects"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { useRef, useState } from "react"
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates"

function ShadowHeading({
  coords,
  styles,
  index,
}: {
  coords: {
    x: number
    y: number
  }
  styles: string
  index: number
}) {
  const k = 0.003 * index

  const x = coords.x > 1000 ? 50 + 1000 * k : 50 + coords.x * k
  const y = coords.y < 500 ? 5 + coords.y * k : 5 + 500 * k

  return (
    <motion.div
      className={`hidden md:block absolute ${styles} nth-child`}
      animate={{
        x: x,
        y: y,
      }}
      transition={{
        type: "tween",
        duration: 0.5,
      }}
    >
      Projects
    </motion.div>
  )
}

export default function ProjectsPage() {
  const pageRef = useRef<any>()

  const handleMouseMove = (e: any) => {
    const { x, y } = getRelativeCoordinates(e, pageRef.current)

    setCoords({ x, y })
  }

  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
  })

  return (
    <div
      className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto "
      ref={pageRef}
      onMouseMove={handleMouseMove}
    >
      <section className=" flex flex-col items-center  gap-5  h-screen relative py-20 px-10 md:p-24  mt-16">
        <div className="flex flex-col text-center ">
          <div className="text-7xl uppercase avant-garde min-h-16">
            <SimplePageHeading>Projects</SimplePageHeading>
          </div>

          <h2 className="mt-7 text-xl">A selection of my finest projects.</h2>

          <h3> Made from organic, gluten free Stack Overflow code snippets.</h3>
        </div>

        <div className="w-full flex flex-col  py-20  md:px-20    gap-y-24 items-center  ">
          {projects.map((project) => (
            <ProjectCard key={project.name} proj={project} />
          ))}
        </div>
      </section>{" "}
    </div>
  )
}

function ProjectCard({ proj }: { proj: Project }) {
  return (
    <div className=" flex flex-col gap-5 w-full md:w-[60ch] basis-1">
      <h3 className="text-4xl md:text-5xl avant-garde flex justify-between  pb-2">
        {proj.name}{" "}
      </h3>

      <div className="flex flex-wrap gap-4 uppercase    px-1 items-center">
        {proj.stack.map((skill) => {
          return <Skill key={skill}>{skill}</Skill>
        })}
      </div>

      <div className=" border-y border-black py-6">
        <p className="text-justify pb-4 ">{proj.description}</p>
        <span className="flex gap-5 items-center text-xs ">
          <Link href={proj.gitHub} target="_blank" className="   ">
            <Image
              src="/icons/github.png"
              width={25}
              height={25}
              alt="github"
            />
          </Link>
          {proj.link && (
            <Link href={proj.link} target="_blank" className="   ">
              <Image
                src="/icons/link.png"
                width={20}
                height={20}
                alt="website link"
              />
            </Link>
          )}
        </span>
      </div>
    </div>
  )
}
