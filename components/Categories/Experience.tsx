import { CategoryProps } from "@/props/CategoryProps"

export default function Experience({}: CategoryProps) {
  return (
    <div className="h-full">
      <h1>Experience</h1>

      <div className="h-full flex items-center pb-40">
        <Timeline />
      </div>
    </div>
  )
}

function Timeline() {
  return <div className="bg-secondary w-full h-1 rounded-md"></div>
}
