import { CategoryProps } from "@/props/CategoryProps"
import Image from "next/image"

export default function All({ category }: CategoryProps) {
  const isActive = category === "ALL"

  return (
    <div className="relative h-full flex">
      <div className=" overflow-hidden absolute top-1/3 pt-24 wrap truncate ">
        <h4 className="heading-intro">fullstack, cat dad, poet.</h4>
      </div>

      <div className="basis-1/2"></div>

      <div className=" basis-1/2 grid grid-cols-2 overflow-y-scroll mb-20 no-scrollbar"></div>
    </div>
  )
}

function ImageContainer() {
  return (
    <div className="relative rounded-md w-full aspect-video overflow-hidden image-container cursor-pointer sub-heading ">
      <Image
        src="/images/winners.jpg"
        fill={true}
        alt="Abdul and Rawling winning  red bull basement global community award"
        className="object-cover "
      />
    </div>
  )
}
