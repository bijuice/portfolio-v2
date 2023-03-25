import { useState } from "react"

interface SliceCategory {
  title: string
}

const categories: SliceCategory[] = [
  { title: "experience" },
  { title: "skills" },
  { title: "blog" },
  { title: "poetry" },
]

export function SliceContainer() {
  const [activeSlice, setActiveSlice] = useState<string>("All")

  return (
    <section className="flex absolute  bottom-0 left-0 right-0 w-2/3 mx-auto">
      {categories.map((slice) => {
        return (
          <Slice
            key={slice.title}
            title={slice.title}
            activeSlice={activeSlice}
            setActiveSlice={setActiveSlice}
          />
        )
      })}
    </section>
  )
}

interface ISliceProps {
  title: string
  activeSlice: string
  setActiveSlice: React.Dispatch<React.SetStateAction<string>>
}

export function Slice({ activeSlice, setActiveSlice, title }: ISliceProps) {
  const isActive = activeSlice === title || activeSlice === "All"

  return (
    <div
      onClick={() => {
        setActiveSlice(title)
      }}
      className={`cursor-pointer  bg-secondary text-primary font-bold h-36 w-full flex justify-center slice ${
        isActive ? "active" : null
      }`}
    >
      <h6 className="font-bold">{title}</h6>
    </div>
  )
}
