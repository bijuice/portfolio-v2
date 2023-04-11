import CATEGORY from "@/types/Category"
import { useState } from "react"

interface SliceData {
  title: CATEGORY
}

const categories: SliceData[] = [
  { title: "EXPERIENCE" },
  { title: "SKILLS" },
  { title: "PROJECTS" },
  { title: "BLOG" },
  { title: "POETRY" },
]

type SliceContainerProps = {
  category: CATEGORY
  setCategory: React.Dispatch<React.SetStateAction<CATEGORY>>
}

export function SliceContainer({ category, setCategory }: SliceContainerProps) {
  return (
    <section className="flex absolute  bottom-0 left-0 right-0 w-4/5 mx-auto">
      {categories.map((slice) => {
        return (
          <Slice
            key={slice.title}
            data={slice}
            activeSlice={category}
            setActiveSlice={setCategory}
          />
        )
      })}
    </section>
  )
}

type SliceProps = {
  data: SliceData
  activeSlice: CATEGORY
  setActiveSlice: React.Dispatch<React.SetStateAction<CATEGORY>>
}

export function Slice({ activeSlice, setActiveSlice, data }: SliceProps) {
  const { title } = data

  const isActive = activeSlice === title || activeSlice === "ALL"

  return (
    <div
      onClick={() => {
        setActiveSlice(title)
      }}
      className={`cursor-pointer border-2 border-primary rounded-lg text-primary font-bold h-36 w-full flex justify-center slice py-2 px-2 ${
        isActive ? "active bg-tertiary" : "bg-secondary-500"
      }`}
    >
      <h6 className="font-bold">{title.toLocaleLowerCase()}</h6>
    </div>
  )
}
