import { useState, useEffect } from "react"

function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  let timerId: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId!)
    timerId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  } as T
}

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
