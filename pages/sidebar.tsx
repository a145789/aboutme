import Link from "next/link"

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
    href: "/todo-list",
  },
  {
    name: "projects",
    href: "projects",
  },
  {
    name: "about",
    href: "/about",
  },
]

export default function Sidebar() {
  return (
    <ul>
      <li />
      {items.map(({ name, href }) => (
        <li key={name}>
          <Link href={href}>{name}</Link>
        </li>
      ))}
    </ul>
  )
}
