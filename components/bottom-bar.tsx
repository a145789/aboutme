import useDark from "@/hooks/useDark"
import useIsScreenWidthLessThan from "@/hooks/useIsScreenWidthLessThan"
import { LEFT_SLIDER_WIDTH, MIN_SCREEN_WIDTH } from "@/libs/constants"
import { IsUseLeftSliderContext } from "@/store/isUseLeftSlider"
import { useContext } from "react"

export default function BottomBar() {
  const [isDark, setIsDark] = useDark()
  const { isUseLeftSlider } = useContext(IsUseLeftSliderContext)
  const isLessThanWidth = useIsScreenWidthLessThan(MIN_SCREEN_WIDTH)
  return (
    <div
      className="flex justify-center text-22px h-28px pt-12px border-t-2px border-t-solid flex-shrink-0 lt-md:mt-1"
      style={{
        width:
          !isLessThanWidth && isUseLeftSlider
            ? `calc(100% - ${LEFT_SLIDER_WIDTH}px)`
            : "100%",
        marginRight:
          !isLessThanWidth && isUseLeftSlider ? LEFT_SLIDER_WIDTH : 0,
      }}
    >
      <a href="https://github.com/a145789" target="_blank" className="mx-6px">
        <div className="i-uil-github-alt hover:i-mingcute-github-fill transition-all duration-200" />
      </a>

      <div
        className="i-ph-moon-stars-fill dark:i-ic-baseline-light-mode mx-6px cursor-pointer transition-all duration-200"
        onClick={() => setIsDark(!isDark)}
      />
    </div>
  )
}
