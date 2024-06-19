import { poems, articles } from "@/data/blogPosts"
import { useState } from "react"
import { SimplePageHeading } from "../Typography"
import { FilterButton } from "../Buttons"

export default function BlogPage() {
  const [content, setContent] = useState("")

  const [projectType, setProjectType] = useState<"POETRY" | "ARTICLES">(
    "POETRY"
  )

  return (
    <div className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto ">
      <section className=" flex flex-col items-center  gap-5  h-screen relative p-10 md:p-24  ">
        <div className="grid place-content-center min-h-[30vh]">
          <SimplePageHeading>Blog</SimplePageHeading>
        </div>

        <div className="pt-10 flex justify-center  ">
          <FilterButton
            onClick={() => setProjectType("POETRY")}
            active={projectType == "POETRY"}
          >
            POETRY
          </FilterButton>
          <FilterButton
            onClick={() => setProjectType("ARTICLES")}
            active={projectType == "ARTICLES"}
          >
            ARTICLES
          </FilterButton>
        </div>

        <div className="flex flex-col gap-24 py-20">
          {projectType == "ARTICLES" ? (
            <Articles posts={articles} />
          ) : (
            <Poems posts={poems} />
          )}
        </div>
      </section>{" "}
      <p>{content}</p>
    </div>
  )
}

function Poems({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex flex-col gap-24 py-20">
      {posts.map((post) => (
        <Post key={post.title} post={post} />
      ))}
    </div>
  )
}

function Articles({ posts }: { posts: BlogPost[] }) {
  return (
    <div className="flex flex-col gap-24 py-20">
      <p>No articles yet...</p>
    </div>
  )
}

function Post({ post }: { post: BlogPost }) {
  return (
    <div className=" flex flex-col gap-5 w-full md:w-[60ch] basis-1">
      <h3 className="text-4xl md:text-5xl avant-garde flex justify-between  pb-2">
        {post.title}{" "}
      </h3>

      <h4 className="uppercase ">{post.type}</h4>

      <div
        className="post-container border-y border-black py-6  "
        dangerouslySetInnerHTML={{
          __html: post.content,
        }}
      ></div>
    </div>
  )
}
