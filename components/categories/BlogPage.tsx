import blogPosts from "@/data/blogPosts";
import { useState } from "react";

export default function BlogPage() {
  const [content, setContent] = useState("");

  return (
    <div className="category-view   max-h-screen w-screen overflow-x-hidden overflow-y-auto ">
      <section className=" flex flex-col items-center  gap-5  h-screen relative p-24  ">
        <h1 className="text-7xl uppercase avant-garde">Blog</h1>

        <div className="flex flex-col gap-24 py-20">
          {blogPosts.map((post) => (
            <Post post={post} />
          ))}
        </div>
      </section>{" "}
      <p>{content}</p>
    </div>
  );
}

function Post({ post }: { post: BlogPost }) {
  return (
    <div className=" flex flex-col gap-5  w-[60ch] basis-1">
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
  );
}
