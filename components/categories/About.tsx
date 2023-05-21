import { Heading, SubHeading } from "../Typography"

export default function About() {
  return (
    <section className="flex flex-col gap-5 justify-center items-between px-20 h-full w-full">
      <Heading text="Abdul Rahman Rehmtulla" />
      <SubHeading text="fullstack, cat dad, poet." />
    </section>
  )
}
