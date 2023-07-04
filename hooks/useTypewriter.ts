// 写一个适用于 react 的打字机效果 hook
import { useState, useEffect, useRef } from "react"

export default function useTypewriter(text: string, delay: number) {
  const [value, setValue] = useState(() => text.slice(0, 1))
  const index = useRef(1)
  useEffect(() => {
    const timer = setTimeout(() => {
      if (index.current === text.length) {
        clearTimeout(timer)
        return
      }

      setValue(value + text[index.current])
      index.current++
    }, delay)
    return () => clearTimeout(timer)
  }, [text, delay, value])
  return value
}
