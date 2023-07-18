import useIsScreenWidthLessThan from "@/hooks/useIsScreenWidthLessThan"
import { MIN_SCREEN_WIDTH } from "@/libs/constants"
import clsx from "clsx"
import { motion } from "framer-motion"
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
    name: "about",
    href: "/about",
  },
]

export default function Sidebar() {
  const mainPathname = `/${(usePathname() || "").split("/")[1] || ""}`
  const link = useRef<HTMLAnchorElement[]>([])
  const [floatStyle, setFloatStyle] = useState({ width: 0, top: 0, left: 0 })

  const isLessThanWidth = useIsScreenWidthLessThan(MIN_SCREEN_WIDTH)

  useEffect(() => {
    if (isLessThanWidth === null) {
      return
    }
    const index = items.findIndex((item) => item.href === mainPathname)

    if (index !== -1) {
      const el = link.current[index]
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
      } else {
        setFloatStyle({ width: 0, top: 0, left: 0 })
      }
    }
  }, [mainPathname, isLessThanWidth])

  return (
    <ul className="relative z-1 lt-md:flex lt-md:justify-center lt-md:mt-12px lt-md:pb-12px lt-md:shadow-md lt-md:w-full flex-shrink-0">
      {Boolean(floatStyle.width) && isLessThanWidth !== null && (
        <motion.div
          layout
          className="absolute h-16px py-6px px-10px z-[-1] bg-#f3f3f3 dark:bg-#3c3c3c rounded-5px"
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
          <Link
            ref={(e) => (link.current[index] = e!)}
            href={href}
            rel="noreferrer"
          >
            {name}
          </Link>
        </li>
      ))}
    </ul>
  )
}
