import { useMotionValue, useTransform, animate } from "framer-motion"
import { useEffect, useRef } from "react"

export default function useTypeWriter(text: string, duration = 5) {
  const tempWord = useRef("")
  const count = useMotionValue(0)
  const word = useTransform(count, (value) => {
    const index = Math.round(value)
    if (tempWord.current.length < index + 1) {
      tempWord.current = text.slice(0, index + 1)
    }
    return tempWord.current
  })

  useEffect(() => {
    const animation = animate(count, text.length, { duration })

    return animation.stop
  }, [count, duration, text])

  return word
}
