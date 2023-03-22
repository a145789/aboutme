import {
    createContext,
    type FC,
    useState,
    type PropsWithChildren,
    type Dispatch,
    type SetStateAction,
  } from "react"
  
  export const IsUseLeftSliderContext = createContext({
    isUseLeftSlider: false,
    setIsUseLeftSlider: (() => {}) as Dispatch<SetStateAction<boolean>>,
  })
  
  export const IsUseLeftSliderProvider: FC<PropsWithChildren> = ({
    children,
  }) => {
    const [isUseLeftSlider, setIsUseLeftSlider] = useState(false)
  
    return (
      <IsUseLeftSliderContext.Provider
        value={{ isUseLeftSlider, setIsUseLeftSlider }}
      >
        {children}
      </IsUseLeftSliderContext.Provider>
    )
  }
  