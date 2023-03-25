import { useState } from "react"

interface SliceData {
  title: string
  color: string
}

const categories: SliceData[] = [
  { title: "experience", color: "#FD8A8A" },
  { title: "skills", color: "#F1F7B5" },
  { title: "blog", color: "#A8D1D1" },
  { title: "poetry", color: "#FDFDBD" },
  { title: "projects", color: "#FDFDBD" },
]

export function SliceContainer() {
  const [activeSlice, setActiveSlice] = useState<string>("All")

  return (
    <section className="flex absolute  bottom-0 left-0 right-0 w-4/5 mx-auto">
      {categories.map((slice) => {
        return (
          <Slice
            key={slice.title}
            data={slice}
            activeSlice={activeSlice}
            setActiveSlice={setActiveSlice}
          />
        )
      })}
    </section>
  )
}

interface ISliceProps {
  data: SliceData
  activeSlice: string
  setActiveSlice: React.Dispatch<React.SetStateAction<string>>
}

export function Slice({ activeSlice, setActiveSlice, data }: ISliceProps) {
  const { title, color } = data

  const isActive = activeSlice === title || activeSlice === "All"

  return (
    <div
      onClick={() => {
        setActiveSlice(title)
      }}
      className={`cursor-pointer border-2 border-primary rounded-lg text-primary font-bold h-36 w-full flex justify-center slice py-2 ${
        isActive ? "active bg-tertiary" : "bg-secondary"
      }`}
    >
      <h6 className="font-bold">{title}</h6>
    </div>
  )
}
