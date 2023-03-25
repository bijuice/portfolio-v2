import { SliceContainer } from "@/components/Slice"
import CATEGORY from "@/enums/Category"
import { useState } from "react"

export default function Home() {
  const [category, setCategory] = useState<CATEGORY>("ALL")

  return (
    <main className="bg-primary h-screen relative overflow-hidden px-16  ">
      <h1
        className={`name-title name-title-translate w-1/2  absolute  ${
          category === "ALL" ? null : "active "
        }`}
      >
        Abdul Rahman Rehmtulla
      </h1>

      <section></section>
      <SliceContainer category={category} setCategory={setCategory} />
    </main>
  )
}
