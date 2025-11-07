import { createMarkdownExit } from 'markdown-exit'
// @ts-expect-error no type
import meta from 'markdown-it-meta'

const moduleRaws = import.meta.glob('./**/*.md', {
  query: '?raw',
  import: 'default',
})

export enum Category {
  Blog = 'blog',
  Record = 'record',
}

const moduleRawPath = Object.keys(moduleRaws).reduce(
  (prev, cur) => {
    const [category, path] = cur.replace('./', '').replace('.md', '').split('/')
    if (!path) {
      return prev
    }
    prev[path] = { originPath: cur, path, category: category as Category }
    return prev
  },
  {} as Record<string, { originPath: string; path: string; category: Category }>,
)
function getPath(path: string) {
  return moduleRawPath[path]
}

const urls = Object.keys(moduleRawPath).map((url) => url.replace('./', '').replace('.md', ''))

export type MarkdownContent = {
  path: string
  raw: string
  title: string
  date: string
  year: number
  category: Category
  render?: string
}

const mdMap = new Map<string, MarkdownContent>()

async function loadContent(url: string) {
  const { originPath, category } = getPath(url)!
  const raw = (await moduleRaws[originPath]!()) as string
  const md = createMarkdownExit()
  md.use(meta)

  md.render(raw)
  const date = (md as any).meta.date
  return {
    path: originPath,
    title: url,
    raw,
    date: date!,
    year: new Date(date!).getFullYear(),
    category,
  }
}

async function getAllContent() {
  if (mdMap.size !== urls.length) {
    await Promise.all(
      urls
        .filter((url) => !mdMap.has(url))
        .map(async (url) => {
          const content = await loadContent(url)
          mdMap.set(url, content)
        }),
    )
  }

  return [...mdMap.values()]
}

async function getContent(url: string) {
  url = url.replace('/', '')
  url = decodeURIComponent(url)

  if (!getPath(url)) {
    return
  }

  if (!mdMap.has(url)) {
    const content = await loadContent(url)
    mdMap.set(content.title, content)
  }

  return mdMap.get(url)!
}

export { getContent, getAllContent }
