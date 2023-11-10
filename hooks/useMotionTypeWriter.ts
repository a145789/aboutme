import { useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

export default function useMotionTypeWriter(
  text: string,
  duration: number,
  delay = 0
) {
  const tempWord = useRef("")
  const count = useMotionValue(0)
  const word = useTransform(count, (value) => {
    if (value - 1 < 0) {
      return ""
    }
    const index = Math.round(value)
    if (tempWord.current.length < index) {
      tempWord.current = text.slice(0, index)
    }
    return tempWord.current
  })

  useEffect(() => {
    const animation = animate(count, text.length + 1, {
      delay,
      duration,
    })

    return animation.stop
  }, [count, duration, text])

  return word
}
