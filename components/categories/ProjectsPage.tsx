import { PageHeading, SimplePageHeading, Skill } from "../Typography";
import { Photo, Project } from "@/types/Project";
import { personalProjects, professionalProjects } from "@/data/projects";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRef, useState } from "react";
import getRelativeCoordinates from "@/utilities/getRelativeCoordinates";
import { ChevronLeft, ChevronRight } from "../Icons/Chevrons";
import ImagePlaceHolder from "../ImagePlaceholder";

function ShadowHeading({
  coords,
  styles,
  index,
}: {
  coords: {
    x: number;
    y: number;
  };
  styles: string;
  index: number;
}) {
  const k = 0.003 * index;

  const x = coords.x > 1000 ? 50 + 1000 * k : 50 + coords.x * k;
  const y = coords.y < 500 ? 5 + coords.y * k : 5 + 500 * k;

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
  );
}

export default function ProjectsPage() {
  const pageRef = useRef<any>();

  const [projectType, setProjectType] = useState<"PERSONAL" | "PROFESSIONAL">(
    "PROFESSIONAL"
  );

  const activeProjects =
    projectType === "PROFESSIONAL" ? professionalProjects : personalProjects;

  return (
    <div
      className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto "
      ref={pageRef}
    >
      <section className=" flex flex-col items-center  gap-5  h-screen relative py-20 px-5 md:p-24  mt-16">
        <div className="flex flex-col text-center ">
          <div className="text-7xl uppercase avant-garde min-h-16">
            <SimplePageHeading>Projects</SimplePageHeading>
          </div>

          <h2 className="mt-7 text-xl">A selection of my finest projects.</h2>

          <h3 className="mt-3">
            {" "}
            Made from organic, gluten free Stack Overflow code snippets.
          </h3>

          <div className="pt-10 flex justify-center  gap-6">
            <FilterButton onClick={() => setProjectType("PROFESSIONAL")}>
              PROFESSIONAL
            </FilterButton>
            <FilterButton onClick={() => setProjectType("PERSONAL")}>
              PERSONAL
            </FilterButton>
          </div>
        </div>

        <div className="w-full flex flex-col  py-20  md:px-20    gap-y-24 items-center  ">
          {activeProjects.map((project) => (
            <ProjectCard key={project.name} proj={project} />
          ))}
        </div>
      </section>{" "}
    </div>
  );
}

function FilterButton({
  children,
  onClick,
}: {
  children: string;
  onClick: () => void;
}) {
  return (
    <button className="uppercase avant-garde text-lg" onClick={onClick}>
      {children}
    </button>
  );
}

function ProjectCard({ proj }: { proj: Project }) {
  const [photos, setPhotos] = useState(proj.photos);

  function setPhoto(photo: Photo) {
    const newPhotos = photos.filter((p) => p.src !== photo.src);

    setPhotos([photo, ...newPhotos]);
  }

  const [activePhoto, setActivePhoto] = useState<Photo>(photos[0]);

  return (
    <div className=" flex flex-col gap-5 w-full max-w-[80ch] basis-1">
      <h3 className="text-3xl md:text-4xl avant-garde flex justify-between  ">
        {proj.name}{" "}
      </h3>
      {photos.length > 0 && (
        <div className="py-4 flex relative gap-2 overflow-hidden">
          <div
            className="relative  w-5/6 aspect-video cursor-pointer border-2 border-black"
            key={activePhoto.src}
          >
            <Image
              src={activePhoto.src}
              fill={true}
              alt={activePhoto.alt}
              className="object-cover"
            />
            <h3>{activePhoto.title}</h3>
            <ImagePlaceHolder />
          </div>
          <div className="w-1/6 flex flex-col gap-3">
            {photos.map((photo, index) => (
              <motion.div
                className={`  cursor-pointer border-black border-2`}
                layout
                key={photo.src}
                layoutId={photo.src}
                initial={{
                  y: 150,
                  x: 0,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  x: 0,
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
                onClick={() => {
                  setPhoto(photo);
                  setActivePhoto(photo);
                }}
              >
                <div className="relative  w-full aspect-video border-black">
                  <Image
                    src={photo.src}
                    fill={true}
                    alt={photo.alt}
                    className="object-cover"
                  />
                  <ImagePlaceHolder />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}

      <div className="flex flex-wrap gap-4 uppercase    px-1 items-center">
        {proj.stack.map((skill) => {
          return <Skill key={skill}>{skill}</Skill>;
        })}
      </div>

      <div className=" border-y border-black py-6 w-full">
        <p className="text-justify pb-4 ">{proj.description}</p>

        <span className="flex gap-5 items-center text-xs ">
          {proj.gitHub && (
            <Link href={proj.gitHub} target="_blank" className="   ">
              <Image
                src="/icons/github.png"
                width={25}
                height={25}
                alt="github"
              />
            </Link>
          )}
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
