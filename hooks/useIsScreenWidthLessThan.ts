import { useState, useEffect } from "react"

export default function useIsScreenWidthLessThan(width: number) {
  const [isLessThanWidth, setIsLessThanWidth] = useState(false)

  useEffect(() => {
    if (typeof window === undefined) {
      return
    }
    const handleResize = () => {
      if (window.innerWidth < width) {
        setIsLessThanWidth(true)
      } else {
        setIsLessThanWidth(false)
      }
    }
    handleResize() // 首次渲染时执行一次

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return isLessThanWidth
}
