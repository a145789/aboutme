import contentDataRaw from '@/.generated/content.json'
const contentData = contentDataRaw as {
  items: Array<{
    path: string
    raw: string
    title: string
    date: string
    year: number
    category: Category
    render: string
  }>
  moduleRawPath: Record<string, { path: string; category: Category }>
}

export enum Category {
  Blog = 'blog',
  Record = 'record',
}

const moduleRawPath = (contentData.moduleRawPath ?? {}) as Record<
  string,
  { path: string; category: Category }
>
function getPath(path: string) {
  return moduleRawPath[path]
}

const urls = Object.keys(moduleRawPath)

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
  const item = (contentData.items ?? []).find((it: any) => it.title === url)
  if (!item) throw new Error(`Content not found: ${url}`)
  const content: MarkdownContent = {
    path: item.path,
    title: item.title,
    raw: item.raw ?? '',
    date: item.date,
    year: item.year,
    category: item.category as Category,
    render: item.render,
  }
  return content
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

export { moduleRawPath, getContent, getAllContent }
