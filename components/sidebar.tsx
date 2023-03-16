import useIsScreenWidthLessThan from "@/hooks/useIsScreenWidthLessThan"
import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useEffect, useRef, useState } from "react"

const items = [
  {
    name: "home",
    href: "/",
  },
  {
    name: "blog",
    href: "/blog",
  },
  {
    name: "todo",
    href: "/todo",
  },
  {
    name: "projects",
    href: "/projects",
  },
  {
    name: "about",
    href: "/about",
  },
]

export default function Sidebar() {
  const mainPathname = `/${(usePathname() || "").split("/")[1] || ""}`
  const link = useRef<HTMLAnchorElement[]>([])
  const [floatStyle, setFloatStyle] = useState({ width: 0, top: 0, left: 0 })

  const isLessThanWidth = useIsScreenWidthLessThan(768)

  useEffect(() => {
    if (isLessThanWidth === null) {
      return
    }
    const index = items.findIndex((item) => item.href === mainPathname)

    const el = index !== -1 ? link.current[index] : link.current[0]
    if (el) {
      const rect = el.getBoundingClientRect()
      if (isLessThanWidth) {
        setFloatStyle({
          width: rect.width,
          top: 0,
          left: rect.left - 10,
        })
      } else {
        setFloatStyle({
          width: rect.width,
          top: 28 * index + 8 * (index + 1),
          left: 0,
        })
      }
    }
  }, [mainPathname, isLessThanWidth])

  return (
    <ul className="relative z-1 lt-md:flex lt-md:justify-center lt-md:mb-24px lt-md:w-full">
      {Boolean(floatStyle.width) && isLessThanWidth !== null && (
        <div
          className="absolute h-16px py-6px px-10px z-[-1] bg-#f3f3f3 dark:bg-#3c3c3c rounded-5px duration-300 transition-all"
          style={floatStyle}
        />
      )}
      {items.map(({ name, href }, index) => (
        <li
          key={name}
          className={clsx(
            "py-6px px-10px my-8px font-sans transition-colors lt-md:mx-4px lt-md:my-0",
            mainPathname === href ? "font-bold" : "text-neutral-500"
          )}
        >
          <Link ref={(e) => (link.current[index] = e!)} href={href}>
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
