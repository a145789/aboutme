import { useState, useEffect } from "react"

const DARK_STORAGE_KEYS = "dark-mode" as const

function getDarkStorage() {
  if (typeof window === "undefined") {
    return null
  } else {
    return window.localStorage.getItem(DARK_STORAGE_KEYS) as
      | "dark"
      | "light"
      | null
  }
}

const useDark = () => {
  const [isDark, setIsDark] = useState(() => {
    const localStorageValue = getDarkStorage()
    return localStorageValue === "dark"
  })

  useEffect(() => {
    const value = isDark ? "dark" : "light"
    switch (value) {
      case "light":
        document.querySelector("html")!.classList.remove("dark")
        break

      case "dark":
        document.querySelector("html")!.classList.add("dark")
      default:
        break
    }
    localStorage.setItem(DARK_STORAGE_KEYS, value)
  }, [isDark])

  return [isDark, setIsDark] as const
}

export default useDark
