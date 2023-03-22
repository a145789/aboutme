import { debounce } from "@/libs/utils"
import { useState, useEffect } from "react"

export default function useIsScreenWidthLessThan(width: number) {
  const [isLessThanWidth, setIsLessThanWidth] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window === undefined) {
      return
    }
    const handleResize = debounce(() => {
      setIsLessThanWidth(window.innerWidth < width)
    }, 100)
    handleResize() // 首次渲染时执行一次

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [width])

  return isLessThanWidth
}
