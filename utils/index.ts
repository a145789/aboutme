import matter from "gray-matter"
import remarkGfm from "remark-gfm"
import { serialize } from "next-mdx-remote/serialize"

export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number
): T {
  let timerId: ReturnType<typeof setTimeout> | null = null
  return function (this: any, ...args: Parameters<T>) {
    clearTimeout(timerId!)
    timerId = setTimeout(() => {
      callback.apply(this, args)
    }, delay)
  } as T
}

export const BASE_URL = process.env.NODE_ENV === "production" ? "" : ""

// export async function getStaticProps(path: string) {
//   const content = await getStaticFile(path)
//   const { content: mdxContent, data } = matter(content)

//   const mdxSource = await serialize(mdxContent, {
//     scope: data,
//     mdxOptions: {
//       remarkPlugins: [remarkGfm],
//       rehypePlugins: [],
//     },
//   })

//   return { mdxSource, data }
// }
