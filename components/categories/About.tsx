import Link from "next/link"
import { ChevronBottom } from "../Icons/Chevrons"
import {
  PageHeading,
  PageSubHeading,
  SectionHeading,
  TextEmphasis,
} from "../Typography"
import { AnimatePresence, motion } from "framer-motion"
import { useEffect, useState } from "react"

const reviews = [
  {
    name: "Marvin Ouma",
    position: "Coworker/Friend - Pesapal",
    text: "A talented developer and a great friend.",
    stars: 5,
  },
  {
    name: "James Njenga",
    position: "Coworker/Friend - Pesapal",
    text: "Complains about people's code.",
    stars: 2,
  },
  {
    name: "Marvin Mboya",
    position: "Coworker/Friend - Pesapal",
    text: "How did you build that experience timeline?",
    stars: 4,
  },
]

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => {
        if (prev === reviews.length - 1) {
          return 0
        } else {
          return prev + 1
        }
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  function renderStars() {
    let stars = []

    for (let i = 0; i < reviews[currentReview].stars; i++) {
      stars.push(<span className="text-2xl">★</span>)
    }

    return stars
  }

  return (
    <div className=" absolute bottom-24 overflow-hidden max-w-[600px] px-3 flex flex-col gap-1 text-center text-lg">
      <div className="flex gap- justify-center">{renderStars()}</div>
      <p>"{reviews[currentReview].text}"</p>
      <p className="text-gray-500 text-sm">{reviews[currentReview].name}</p>
      <p className="text-gray-400 text-sm">{reviews[currentReview].position}</p>
    </div>
  )
}

export default function About() {
  return (
    <div className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto">
      <section className="flex flex-col items-center  gap-5  h-screen relative bg-white text-black">
        <PageHeading text="ABDUL RAHMAN REHMTULLA" />
        <PageSubHeading text="fullstack, mentor, cat dad, poet." />

        <ReviewSection />

        <span className="w-full flex flex-col justify-center items-center absolute left-0 bottom-2 ">
          <a href="#web-artisan">
            <ChevronBottom size={35} color="black" />
          </a>
        </span>
      </section>

      <motion.div className="bg-white min-h-screen">
        <SectionContainer id="web-artisan">
          <BlackSection direction="left">
            <SectionHeading styles=" from-pink-500 via-red-500 to-yellow-500">
              <TextEmphasis>2</TextEmphasis> years of web{" "}
              <TextEmphasis>ARTISTRY</TextEmphasis>
            </SectionHeading>
          </BlackSection>
          <WhiteSection>
            <ImageContainer
              src="url('/images/cc.png')"
              link="https://super-biscuit-1456ce.netlify.app/"
            />
            <ImageContainer
              src="url('/images/alp.png')"
              link="https://africalawpartners.com/"
            />
            <ImageContainer
              src="url('/images/code.png')"
              link="https://github.com/bijuice/portfolio-v2"
            />
          </WhiteSection>
        </SectionContainer>

        <SectionContainer>
          <WhiteSection>here</WhiteSection>
          <BlackSection direction="right">
            <SectionHeading styles=" from-green-300 via-blue-500 to-purple-600">
              <TextEmphasis>2</TextEmphasis> years of changing
              <TextEmphasis> LIVES</TextEmphasis>
            </SectionHeading>
          </BlackSection>
        </SectionContainer>
        <SectionContainer>
          <BlackSection direction="left">
            <SectionHeading styles="from-red-200 via-red-300 to-yellow-200">
              A <TextEmphasis>LIFETIME</TextEmphasis> of herding{" "}
              <TextEmphasis>CATS</TextEmphasis>
            </SectionHeading>
          </BlackSection>
          <WhiteSection>
            <div className="w-full h-full grid grid-cols-2"></div>
          </WhiteSection>
        </SectionContainer>
        <SectionContainer>
          <WhiteSection>
            <div className="flex flex-col gap-7 w-full h-full p-24 justify-center text-right text-lg 2xl:text-3xl">
              <div>
                <p>" Is it possible to miss someone you've never met?</p>
                <p>I certainly don't.</p>
                <p>But his shadow looms over me.</p>
              </div>
              <div>
                <p>'You have his cheeks.'</p>
                <p>'You're just as funny as he was.'</p>
                <p>'You smile like he did'</p>
                <p>Empty words with no memories for context.</p>
                <p>Is that the legacy he has left me?</p>
                <p>A mirror for others to remember him by?</p>
              </div>
              <div>
                <p>I don't miss him,</p>
                <p>Though I long for him.</p>
                <p>A tangible emptiness.</p>
                <p>Amplified by her absence.</p>
              </div>
              <div>
                <p>I am who I am,</p>
                <p>Because I was raised by a shadow 22 years gone.</p>
              </div>

              <p>- The Bluest Soul</p>
            </div>
          </WhiteSection>
          <BlackSection direction="right">
            <SectionHeading styles="from-green-300 via-yellow-300 to-pink-300">
              <TextEmphasis>thousands</TextEmphasis> of words on{" "}
              <TextEmphasis>Paper</TextEmphasis>
            </SectionHeading>
          </BlackSection>
        </SectionContainer>
      </motion.div>
    </div>
  )
}

function SectionContainer({
  children,
  id,
}: {
  children: React.ReactNode
  id?: string
}) {
  return (
    <div className="flex w-full min-h-screen" id={id}>
      {children}
    </div>
  )
}

function BlackSection({
  children,
  direction,
}: {
  children: React.ReactNode
  direction: "left" | "right"
}) {
  const styles =
    direction === "left" ? "justify-end text-right" : "justify-start text-left"

  return (
    <div className={`grow w-1/2 bg-black  px-24 flex items-center ${styles}`}>
      {children}
    </div>
  )
}

function WhiteSection({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-white w-1/2  text-black flex flex-col">{children}</div>
  )
}

function ImageContainer({ src, link }: { src: string; link: string }) {
  return (
    <motion.div
      className="basis-1/3 relative"
      style={{
        background: src,
        backgroundSize: "cover",
      }}
      initial={{
        backgroundPositionX: "-100%",
      }}
      whileInView={{ backgroundPositionX: "0" }}
      transition={{ duration: 1 }}
    >
      <Link href={link} target="_blank">
        <div className="h-full w-full"></div>
      </Link>
    </motion.div>
  )
}
