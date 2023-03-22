import matter from "gray-matter"
import remarkGfm from "remark-gfm"
import { serialize } from "next-mdx-remote/serialize"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"
import slug from "rehype-slug"
import remarkToc from "remark-toc"
import { readdirSync, statSync } from "fs"
import { postsDirectory } from "./constants"
import { resolve } from "path"

const options: Partial<Options> = {
  // Use one of Shiki's packaged themes
  theme: {
    dark: "vitesse-dark",
    light: "vitesse-light",
  },
  // Or your own JSON theme
  // Keep the background or use a custom background color?
  keepBackground: true,

  // Callback hooks to add custom logic to nodes when visiting
  // them.
  onVisitLine(node) {
    // Prevent lines from collapsing in `display: grid` mode, and
    // allow empty lines to be copy/pasted
    if (node.children.length === 0) {
      node.children = [{ type: "text", value: " " }]
    }
  },
  onVisitHighlightedLine(node) {
    // Each line node by default has `class="line"`.
    node.properties.className.push("highlighted")
  },
  onVisitHighlightedWord(node) {
    // Each word node has no className by default.
    node.properties.className = ["word"]
  },
}

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

export async function transformMdx(content: string) {
  const { content: mdxContent, data } = matter(content)

  const source = await serialize(mdxContent, {
    scope: data,
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkToc],
      rehypePlugins: [
        slug,
        rehypeAutolinkHeadings,
        [rehypePrettyCode, options],
      ],
      format: "mdx",
    },
  })

  return { source, data }
}

export function isDir(filePath: string) {
  return statSync(filePath).isDirectory()
}

export function isMdx(filePath: string) {
  return filePath.endsWith(".mdx")
}

export type Directories = {
  label: string
  posts: {
    slug: string
  }[]
}[]

export function getPostsFilePath() {
  const files = readdirSync(postsDirectory)
  const directories: Directories = []

  for (const file of files) {
    const filePath = resolve(postsDirectory, file)
    if (isDir(filePath)) {
      const posts = readdirSync(filePath)
        .filter(isMdx)
        .map((filename) => {
          const slug = filename.replace(".mdx", "")

          return {
            slug,
          }
        })
      directories.push({
        label: file,
        posts,
      })
    }
  }

  return directories
}
