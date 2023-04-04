import { CategoryProps } from "@/props/CategoryProps"

export default function Experience({}: CategoryProps) {
  const date = new Date()
  const year = date.getFullYear()

  const a = year - 6
  const b = year + 2

  function renderDots() {
    let dots: React.ReactNode[] = []

    for (let i = a; i < b; i++) {
      const isEven = i % 2 === 0

      dots.push(
        <div className="w-4 h-4 rounded-full border-[1px] border-secondary  relative dot">
          <div className="w-[1.5px] h-5 bg-secondary rounded-md absolute -top-8 left-[45%]"></div>
          <p className="text-secondary absolute top-5 -left-2">{i}</p>
        </div>
      )
    }

    return dots
  }

  return (
    <div className="h-full select-none">
      <div className="h-full  flex items-center   relative pt-44">
        <Timeline />
        <div className="flex justify-between w-full absolute  py-5  ">
          {renderDots()}
        </div>
      </div>
    </div>
  )
}

function Timeline() {
  return <div className="bg-secondary w-full h-[1px]  timeline relative"></div>
}
