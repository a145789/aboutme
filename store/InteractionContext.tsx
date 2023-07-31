import { MIN_SCREEN_WIDTH, RIGHT_SLIDER_WIDTH } from "@/libs/constants"
import { debounce } from "@/libs/utils"
import { usePathname } from "next/navigation"
import {
  createContext,
  type FC,
  useState,
  type PropsWithChildren,
  useEffect,
  type CSSProperties,
} from "react"

export const InteractionContext = createContext({
  bottomBarStyle: {} as CSSProperties,
  isLessThanWidth: false as boolean | null,
})

export const InteractionProvider: FC<PropsWithChildren> = ({ children }) => {
  const [bottomBarStyle, setBottomBarStyle] = useState<CSSProperties>({})
  const path = usePathname()

  const [isLessThanWidth, setIsLessThanWidth] = useState<boolean | null>(null)

  useEffect(() => {
    if (typeof window === undefined) {
      return
    }
    const handleResize = () => {
      setIsLessThanWidth(window.innerWidth < MIN_SCREEN_WIDTH)
    }
    handleResize() // 首次渲染时执行一次

    const debounceHandleResize = debounce(handleResize, 150)

    window.addEventListener("resize", debounceHandleResize)

    return () => {
      window.removeEventListener("resize", debounceHandleResize)
    }
  }, [])

  useEffect(() => {
    if (path === "/blog") {
      setBottomBarStyle(
        isLessThanWidth
          ? {}
          : {
              width: `calc(100% - ${RIGHT_SLIDER_WIDTH}px)`,
              marginRight: RIGHT_SLIDER_WIDTH,
            }
      )
    } else {
      setBottomBarStyle({})
    }
  }, [path, isLessThanWidth])

  return (
    <InteractionContext.Provider value={{ bottomBarStyle, isLessThanWidth }}>
      {children}
    </InteractionContext.Provider>
  )
}
