import Link from "next/link";
import { ChevronBottom } from "../Icons/Chevrons";
import {
  PageHeading,
  PageSubHeading,
  SectionHeading,
  TextEmphasis,
} from "../Typography";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import SectionContainer from "../containers/SectionContainer";
import DiscoverMore from "../navigation/DiscoverMore";
import Category from "@/types/Category";
import categories from "@/data/categories";
import { CategoryButton } from "../Buttons";

const reviews = [
  {
    name: "Marvin Ouma",
    position: "Coworker/Friend - Pesapal",
    text: "A talented developer and a great friend.",
    stars: 5,
  },

  {
    name: "Marvin Mboya",
    position: "Coworker/Friend - Pesapal",
    text: "How did you build that experience timeline?",
    stars: 4,
  },
  {
    name: "Amisi Kiare",
    position: "Team Lead - Pesapal",
    text: "A 7X developer.",
    stars: 4,
  },
];

type AboutPageProps = { setCategory: (category: Category) => void };

export default function AboutPage({ setCategory }: AboutPageProps) {
  return (
    <div className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto">
      <section className="flex flex-col items-center  gap-5  h-screen relative  text-black">
        <PageHeading text="ABDUL RAHMAN REHMTULLA" />
        <PageSubHeading text="fullstack, cat dad, mentor, poet" />

        {/* <ReviewSection /> */}

        <DiscoverMore id="web-artisan" color="black" />
      </section>

      <motion.div className=" min-h-screen">
        <SectionContainer id="web-artisan">
          <BlackSection direction="left">
            <SectionHeading styles=" from-pink-500 via-red-500 to-yellow-500">
              <TextEmphasis>TWO</TextEmphasis> years of web{" "}
              <TextEmphasis>ARTISTRY</TextEmphasis>
            </SectionHeading>
          </BlackSection>
          <WhiteSection>
            <div className="flex flex-col h-full">
              <ImageContainer
                src="url('/images/cc.png')"
                link="https://super-biscuit-1456ce.netlify.app/"
                title="Bijuiceflix"
                description="React + Typescript + TailwindCSS + Firebase"
              />
              <ImageContainer
                src="url('/images/alp.png')"
                link="https://africalawpartners.com/"
                title="ALP Website"
                description="NextJS + TailwindCSS + Contentful"
              />
              <ImageContainer
                src="url('/images/code.png')"
                link="https://github.com/bijuice/pull-request-documenter"
                title="Pull Request Documenter"
                description="OpenAI API + JavaScript + Octokit"
              />
            </div>
          </WhiteSection>
        </SectionContainer>

        <SectionContainer>
          <WhiteSection>
            <div className="flex h-full">
              {" "}
              <div className="flex flex-col">
                <ImageContainer
                  src="url('/images/committee-meetup.jpg')"
                  link="https://www.kamilimu.org/team"
                  title="KamiLimu Committee Hangout"
                />
                <ImageContainer
                  src="url('/images/cohort7-innovation.jpg')"
                  link="https://www.kamilimu.org/cohort-7"
                  title="KamiLimu Cohort 7 Innovation Semifinals"
                />
              </div>
              <ImageContainer
                src="url('/images/cohort6-graduation.jpg')"
                link="https://www.kamilimu.org/cohort-6"
                title="KamiLimu Cohort 6 Graduation"
              />
            </div>
          </WhiteSection>
          <BlackSection direction="right">
            <SectionHeading styles=" from-green-300 via-blue-500 to-purple-600">
              <TextEmphasis>TWO</TextEmphasis> years of changing
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
            <div className="flex h-full">
              <ImageContainer
                src="url('/images/boy-tie.jpg')"
                title="Boy"
                description="Coworker/Friend"
              />
              <div className="flex flex-col w-1/2">
                <ImageContainer
                  src="url('/images/me-cats.jpg')"
                  title="Lucy & Boy"
                />
                <ImageContainer
                  src="url('/images/bebbins.jpg')"
                  title="Bebbins & Chims"
                />
              </div>
            </div>
          </WhiteSection>
        </SectionContainer>
        <SectionContainer>
          <WhiteSection>
            <div className="flex flex-col gap-7 w-full h-full p-24 justify-center text-right text-lg 2xl:text-3xl ">
              <h4 className="text-4xl">Legacy</h4>
              <div>
                <p>
                  {'"'} Is it possible to miss someone you{"'"}ve never met?
                </p>
                <p>I certainly don{"'"}t.</p>
                <p>But his shadow looms over me.</p>
              </div>
              <div>
                <p>
                  {"'"}You have his cheeks.{"'"}
                </p>
                <p>
                  {"'"}You{"'"}re just as funny as he was.{"'"}
                </p>
                <p>
                  {"'"}You smile like he did{"'"}
                </p>
                <p>Empty words with no memories for context.</p>
                <p>Is that the legacy he has left me?</p>
                <p>A mirror for others to remember him by?</p>
              </div>
              <div>
                <p>I don{"'"}t miss him,</p>
                <p>Though I long for him.</p>
                <p>A tangible emptiness.</p>
                <p>Amplified by her absence.</p>
              </div>
              <div>
                <p>I am who I am,</p>
                <p>Because I was raised by a shadow 22 years gone. {'"'}</p>
              </div>

              <p className="italic">- The Bluest Soul</p>
            </div>
          </WhiteSection>
          <BlackSection direction="right">
            <SectionHeading styles="from-green-300 via-yellow-300 to-pink-300">
              <TextEmphasis>thousands</TextEmphasis> of words on{" "}
              <TextEmphasis>Paper</TextEmphasis>
            </SectionHeading>
          </BlackSection>
        </SectionContainer>

        <SectionContainer>
          <div className="flex flex-col w-full h-screen justify-center items-center  px-24 pb-24">
            <h3 className="text-3xl  w-fit bg-white text-black circular circular uppercase text-center  mb-10 pb-4 border-b-2 border-black px-16">
              Discover More
            </h3>

            <div className="w-full flex flex-col items-center  ">
              <CategoryButton
                styles=" "
                onClick={() => {
                  setCategory(categories[1]);
                }}
              >
                experience
              </CategoryButton>

              <CategoryButton
                styles=""
                onClick={() => {
                  setCategory(categories[2]);
                }}
              >
                projects
              </CategoryButton>
              <CategoryButton
                styles=""
                onClick={() => {
                  setCategory(categories[3]);
                }}
              >
                blog
              </CategoryButton>
            </div>
          </div>
        </SectionContainer>
      </motion.div>
    </div>
  );
}

function ReviewSection() {
  const [currentReview, setCurrentReview] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentReview((prev) => {
        if (prev === reviews.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  function renderStars() {
    let stars = [];

    for (let i = 0; i < reviews[currentReview].stars; i++) {
      stars.push(<span className="text-2xl">★</span>);
    }

    return stars;
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        delay: 3.2,
        duration: 0.6,
      }}
      className=" absolute bottom-24 overflow-hidden max-w-[600px] px-3 flex flex-col gap-1 text-center text-lg"
    >
      <div className="flex gap- justify-center">{renderStars()}</div>
      <p>
        {'"'}
        {reviews[currentReview].text}
        {'"'}
      </p>
      <p className="text-gray-500 text-sm">{reviews[currentReview].name}</p>
      <p className="text-gray-400 text-sm">{reviews[currentReview].position}</p>
    </motion.div>
  );
}

function BlackSection({
  children,
  direction,
}: {
  children: React.ReactNode;
  direction: "left" | "right";
}) {
  const styles =
    direction === "left" ? "justify-end text-right" : "justify-start text-left";

  return (
    <div
      className={`grow w-full lg:w-1/2 bg-white  px-24 flex items-center ${styles}`}
    >
      {children}
    </div>
  );
}

function WhiteSection({ children }: { children: React.ReactNode }) {
  return <div className=" lg:w-1/2 bg-white text-black ">{children}</div>;
}

function ImageContainer({
  src,
  link,
  title,
  description,
}: {
  src: string;
  link?: string;
  title: string;
  description?: string;
}) {
  return (
    <div
      className="grow relative m-2 border-black"
      style={{
        background: src,
        backgroundSize: "cover",
      }}
    >
      <Link href={link || ""} target="_blank">
        <motion.div
          className="w-full h-full grid place-content-center bg-white text-black text-center border-2 border-black p-10"
          initial={{
            opacity: 0,
          }}
          whileHover={{
            opacity: 1,
          }}
        >
          <p className=" text-2xl ">{title}</p>
          <p className="italic  mt-3">{description}</p>
        </motion.div>
      </Link>
    </div>
  );
}
