import useDark from "@/hooks/useDark"
import { InteractionContext } from "@/store/InteractionContext"
import { memo, useContext } from "react"
import { motion } from "framer-motion"

function BottomBar() {
  const [isDark, setIsDark] = useDark()
  const { bottomBarStyle } = useContext(InteractionContext)

  return (
    <motion.div
      layout
      className="w-full flex justify-center text-22px h-28px pt-12px border-t-2px border-t-solid flex-shrink-0 lt-md:mt-1 lt-md:mb-12px"
      transition={{
        duration: 0.8,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      style={bottomBarStyle}
    >
      <a
        href="https://github.com/a145789"
        target="_blank"
        rel="noreferrer noopener"
        className="mx-6px"
      >
        <div className="i-uil-github-alt hover:i-mingcute-github-fill transition-all duration-200" />
      </a>

      <div
        className="i-ph-moon-stars-fill dark:i-ic-baseline-light-mode mx-6px cursor-pointer transition-all duration-200"
        onClick={() => setIsDark(!isDark)}
      />
    </motion.div>
  )
}

export default memo(BottomBar)
