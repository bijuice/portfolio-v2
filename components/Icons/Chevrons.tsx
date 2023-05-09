import IconProps from "@/props/IconProps"

export function ChevronRight({ width, height, size, color }: IconProps) {
  const h = height || size || 50
  const w = width || size || 50
  const c = color || "#FFF"

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 20L17 12L9 4"
        stroke={c}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}

export function ChevronLeft({ width, height, size, color }: IconProps) {
  const h = height || size || 50
  const w = width || size || 50
  const c = color || "#FFF"

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(-1 1)"
    >
      <path
        d="M9 20L17 12L9 4"
        stroke={c}
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  )
}
