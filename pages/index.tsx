import { SliceContainer } from "@/components/Slice"
import CATEGORY from "@/enums/Category"
import { useState } from "react"

export default function Home() {
  const [category, setCategory] = useState<CATEGORY>("ALL")

  return (
    <main className=" h-screen relative overflow-hidden px-16 max-w-[1500px] w-full  ">
      <div
        onClick={() => {
          setCategory("ALL")
        }}
        className={`name-title   px-2 cursor-pointer  absolute  ${
          category === "ALL" ? null : "active "
        }`}
      >
        <h1>Abdul Rahman </h1>
        <h1>Rehmtulla</h1>
      </div>

      <section></section>
      <SliceContainer category={category} setCategory={setCategory} />
    </main>
  )
}
