import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
  console.log(mainPathname)

  return (
    <ul className="relative">
      <div className="absolute left-0 h-24px w-30px z-[-1] bg-neutral-100 rounded-md" />
      {items.map(({ name, href }) => (
        <li
          key={name}
          className={clsx(
            "py-4px px-10px m-8px font-sans",
            mainPathname === href ? "font-bold" : "text-neutral-500"
          )}
        >
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}
