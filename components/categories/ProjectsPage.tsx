import { PageHeading, Skill } from "../Typography";
import { Project } from "@/types/Project";
import projects from "@/data/projects";
import Link from "next/link";
import Image from "next/image";

export default function ProjectsPage() {
  return (
    <div className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto ">
      <section className=" flex flex-col items-center  gap-5  h-screen relative p-24  ">
        <h1 className="text-7xl uppercase avant-garde">Projects</h1>

        <h2 className="mt-7 text-xl">A selection of my finest projects.</h2>

        <h3> Made from organic, gluten free Stack Overflow code snippets.</h3>

        <div className="w-full flex flex-col  pt-10 pb-16 px-10 md:px-20    gap-y-24 items-center  ">
          {projects.map((project) => (
            <ProjectCard key={project.name} proj={project} />
          ))}
        </div>
      </section>{" "}
    </div>
  );
}

function ProjectCard({ proj }: { proj: Project }) {
  return (
    <div className=" flex flex-col gap-5  w-[60ch] basis-1">
      <h3 className="text-4xl md:text-5xl avant-garde flex justify-between  pb-2">
        {proj.name}{" "}
      </h3>

      <div className="flex flex-wrap gap-4 uppercase    px-1 items-center">
        {proj.stack.map((skill) => {
          return <Skill key={skill}>{skill}</Skill>;
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
  );
}
