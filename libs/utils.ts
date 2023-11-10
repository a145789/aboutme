import remarkGfm from "remark-gfm"
import { serialize } from "next-mdx-remote/serialize"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypePrettyCode, { type Options } from "rehype-pretty-code"
import slug from "rehype-slug"
import matter from "gray-matter"
import rehypeExternalLinks from "rehype-external-links"
import { PostAttrs, Posts } from "./interface"
import { visit } from "unist-util-visit"
import { SmileySansFont } from "./font"

const options: Partial<Options> = {
  // Use one of Shiki's packaged themes
  theme: {
    dark: "vitesse-dark",
    light: "one-dark-pro",
  },
  // Or your own JSON theme
  // Keep the background or use a custom background color?
  keepBackground: false,

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
    node.properties.className?.push("highlighted")
  },
  onVisitHighlightedChars(node) {
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

export function getMdx(content: string): {
  content: string
  data: PostAttrs
} {
  return matter(content) as any
}

const rehypeHeaderFont = () => {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (
        ["h1", "h2", "h3", "h4", "h5", "h6", "blockquote"].includes(
          node.tagName
        )
      ) {
        node.properties.className = [
          ...(node.properties.className || []),
          SmileySansFont.className,
        ]
      }
    })
  }
}

export async function transformMdx(content: string) {
  const { content: mdxContent, data } = getMdx(content)

  const source = await serialize(mdxContent, {
    scope: data as any,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        rehypeHeaderFont,
        slug,
        [rehypeAutolinkHeadings, { behavior: "wrap" }],
        [rehypePrettyCode as any, options],
        [rehypeExternalLinks, { target: "_blank", rel: "noreferrer noopener" }],
      ],
      format: "mdx",
    },
  })

  return { source, data }
}

export function sortByCreatedAt(posts: Posts[]) {
  return [...posts].sort((a, b) => (a.createdAt > b.createdAt ? -1 : 1))
}
