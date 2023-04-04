import { CategoryProps } from "@/props/CategoryProps"

export default function All({ category }: CategoryProps) {
  const isActive = category === "ALL"

  return (
    <div className="relative h-full flex">
      <div className=" overflow-hidden absolute top-1/3 pt-24 wrap truncate ">
        <h4 className="sub-heading">fullstack, cat dad, poet.</h4>
      </div>
    </div>
  )
}
