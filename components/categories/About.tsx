import { Heading, SubHeading } from "../Typography"

export default function About() {
  return (
    <div className="flex  items-between px-20 h-full w-full">
      <section className="flex flex-col gap-5 justify-center h-full basis-1/2">
        <Heading text="Abdul Rahman Rehmtulla" />
        <SubHeading text="fullstack, mentor, cat dad, poet." />
      </section>

      <section className="flex flex-col justify-center basis-1/2 overflow-hidden gap-10">
        <ul className="grid gap-4 text-lg">
          <li>Two Years As a Web Artisan</li>
          <li>Two Years As a Tech Mentor.</li>
          <li>Ten Years of Putting My Musings on Paper.</li>
          <li>A Lifetime of Cat Parenthood.</li>
        </ul>

        <div className="flex gap-3 self-center">
          {abouts.map((about) => {
            return (
              <span
                key={about.title}
                className="rounded-full h-2 w-2 bg-white"
              ></span>
            )
          })}
        </div>
      </section>
    </div>
  )
}

type About = {
  title: string
  description: string
  src: string
}

const abouts: About[] = [
  {
    title: "Two Years As a Web Artisan",
    description:
      "I've been working as a fullstack developer for two years now. I've worked on a variety of projects, from small business websites to large scale web applications.",
    src: "/images/undraw_web_developer_p3e5.svg",
  },
  {
    title: "Two Years As a Tech Mentor",
    description:
      "I've been working as a fullstack developer for two years now. I've worked on a variety of projects, from small business websites to large scale web applications.",
    src: "/images/undraw_web_developer_p3e5.svg",
  },
  {
    title: "Ten Years of Putting My Musings on Paper",
    description:
      "I've been working as a fullstack developer for two years now. I've worked on a variety of projects, from small business websites to large scale web applications.",
    src: "/images/undraw_web_developer_p3e5.svg",
  },
  {
    title: "A lifetime of cat parenthood",
    description:
      "I've been working as a fullstack developer for two years now. I've worked on a variety of projects, from small business websites to large scale web applications.",
    src: "/images/undraw_web_developer_p3e5.svg",
  },
]

type AboutCardProps = {
  about: About
}

function AboutCard({ about }: AboutCardProps) {
  return <div className="backdrop-blur-xl"></div>
}
