import { useEffect, useState } from "react"

const useElementPosition = (elementId: string) => {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)

  useEffect(() => {
    const element = document!.getElementById(elementId)

    setX(element!.getBoundingClientRect().right)
    setY(element!.getBoundingClientRect().left)
  }, [])

  return [x, y]
}

export default useElementPosition
