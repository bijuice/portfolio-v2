import All from "@/components/categories/All"
import Experience from "@/components/categories/Experience"
import { SliceContainer } from "@/components/Slice"
import CATEGORY from "@/enums/Category"
import { useState } from "react"

export default function Home() {
  const [category, setCategory] = useState<CATEGORY>("ALL")

  function resolveCategory() {
    switch (category) {
      case "ALL":
        return <All category={category} />
      case "EXPERIENCE":
        return <Experience category={category} />
      default:
        return <All category={category} />
    }
  }

  return (
    <main className=" h-screen relative overflow-hidden px-16 max-w-[1500px] w-full  ">
      <div
        onClick={() => {
          setCategory("ALL")
        }}
        className={`name-title   px-2 cursor-pointer  absolute z-20  ${
          category === "ALL" ? null : "active "
        }`}
      >
        <h1 className="heading-intro">Abdul Rahman </h1>
        <h1 className="heading-intro">Rehmtulla</h1>
      </div>

      <section className="pt-24 px-10 h-full">{resolveCategory()}</section>
      <SliceContainer category={category} setCategory={setCategory} />
    </main>
  )
}
