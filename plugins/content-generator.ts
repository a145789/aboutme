import { promises as fsp } from 'node:fs'
import fs from 'node:fs'
import path from 'node:path'
import { createHash } from 'node:crypto'
import type { Plugin, ViteDevServer } from 'vite'
import { createMarkdownExit } from 'markdown-exit'
import meta from 'markdown-it-meta'
import { codeToHtml } from 'shiki'
import { fromAsyncCodeToHtml } from '@shikijs/markdown-it/async'

type Category = 'blog' | 'record'

type MarkdownContent = {
  path: string
  raw: string
  title: string
  date: string
  year: number
  category: Category
  render: string
}

type CacheEntry = {
  hash: string
  content: MarkdownContent
}

const CACHE_VERSION = 'link-target-blank-1'

function sha256(input: string) {
  return createHash('sha256').update(input).digest('hex')
}

async function ensureDir(dir: string) {
  await fsp.mkdir(dir, { recursive: true })
}

function walkMarkdown(dir: string): string[] {
  const out: string[] = []
  const stack = [dir]
  while (stack.length) {
    const cur = stack.pop()!
    const entries = fs.readdirSync(cur, { withFileTypes: true })
    for (const e of entries) {
      const p = path.join(cur, e.name)
      if (e.isDirectory()) stack.push(p)
      else if (e.isFile() && p.endsWith('.md')) out.push(p)
    }
  }
  return out
}

async function convertOne(
  file: string,
  theme: any,
  cache: Map<string, CacheEntry>,
): Promise<MarkdownContent> {
  const raw = await fsp.readFile(file, 'utf-8')
  const hash = sha256(raw + CACHE_VERSION)
  const cached = cache.get(file)
  if (cached && cached.hash === hash) return cached.content

  const md = createMarkdownExit()
  md.use(
    fromAsyncCodeToHtml(codeToHtml, {
      themes: {
        light: theme,
      },
    }),
  )
  md.use(meta)
  const defaultRender =
    (md as any).renderer.rules.link_open ||
    function (tokens: any, idx: number, options: any, env: any, self: any) {
      return self.renderToken(tokens, idx, options)
    }
  ;(md as any).renderer.rules.link_open = function (
    tokens: any,
    idx: number,
    options: any,
    env: any,
    self: any,
  ) {
    const tIdx = tokens[idx].attrIndex('target')
    if (tIdx < 0) tokens[idx].attrPush(['target', '_blank'])
    else tokens[idx].attrs[tIdx][1] = '_blank'
    const rIdx = tokens[idx].attrIndex('rel')
    if (rIdx < 0) tokens[idx].attrPush(['rel', 'noopener noreferrer'])
    else tokens[idx].attrs[rIdx][1] = 'noopener noreferrer'
    return defaultRender(tokens, idx, options, env, self)
  }
  ;(md as any).core.ruler.after('inline', 'add-target-blank', function (state: any) {
    const tokens = state.tokens
    for (let i = 0; i < tokens.length; i++) {
      const token = tokens[i]
      if (token.type !== 'inline' || !token.children) continue
      for (let j = 0; j < token.children.length; j++) {
        const t = token.children[j]
        if (t.type === 'link_open') {
          const ti = t.attrIndex('target')
          if (ti < 0) t.attrPush(['target', '_blank'])
          else t.attrs[ti][1] = '_blank'
          const ri = t.attrIndex('rel')
          if (ri < 0) t.attrPush(['rel', 'noopener noreferrer'])
          else t.attrs[ri][1] = 'noopener noreferrer'
        }
      }
    }
  })
  let render = await md.renderAsync(raw)
  render = render.replace(/<a\s+([^>]*?)>/g, (full: string, attrs: string) => {
    let s = attrs
    if (!/\btarget\s*=/.test(s)) s += ' target="_blank"'
    if (!/\brel\s*=/.test(s)) s += ' rel="noopener noreferrer"'
    return `<a ${s}>`
  })
  const date: string = (md as any).meta?.date ?? ''

  const rel = path.relative(path.resolve(process.cwd(), 'src/content'), file)
  const [category, nameWithExt] = rel.split(path.sep)
  const title = nameWithExt.replace(/\.md$/i, '')
  const content: MarkdownContent = {
    path: file,
    raw,
    title,
    date,
    year: date ? new Date(date).getFullYear() : new Date().getFullYear(),
    category: (category as Category) ?? 'blog',
    render,
  }
  cache.set(file, { hash, content })
  return content
}

async function buildAll(root: string, server?: ViteDevServer) {
  const contentDir = path.resolve(root, 'src/content')
  const generatedDir = path.resolve(root, 'src/.generated')
  const generatedFile = path.join(generatedDir, 'content.json')
  const themePath = path.resolve(root, 'src/assets/code-block-theme.json')
  const theme = JSON.parse(await fsp.readFile(themePath, 'utf-8'))

  const cacheStorePath = path.join(generatedDir, '.md-cache.json')
  const cacheStore: Record<string, CacheEntry> = fs.existsSync(cacheStorePath)
    ? JSON.parse(fs.readFileSync(cacheStorePath, 'utf-8'))
    : {}
  const cache = new Map<string, CacheEntry>(Object.entries(cacheStore))

  const files = walkMarkdown(contentDir)
  const items: MarkdownContent[] = []
  for (const f of files) {
    const item = await convertOne(f, theme, cache)
    items.push(item)
  }

  const moduleRawPath = items.reduce(
    (acc, cur) => {
      acc[cur.title] = { path: cur.title, category: cur.category }
      return acc
    },
    {} as Record<string, { path: string; category: Category }>,
  )

  await ensureDir(generatedDir)
  await fsp.writeFile(generatedFile, JSON.stringify({ items, moduleRawPath }, null, 2), 'utf-8')

  const serializedCache = Object.fromEntries(cache.entries())
  await fsp.writeFile(cacheStorePath, JSON.stringify(serializedCache, null, 2), 'utf-8')

  if (server) {
    server.ws.send({ type: 'full-reload' })
  }
}

export default function contentGenerator(): Plugin {
  let root = process.cwd()
  return {
    name: 'content-generator',
    apply: 'serve',
    async configResolved(resolved) {
      root = resolved.root
    },
    async configureServer(server) {
      await buildAll(root, server)
      const contentDir = path.resolve(root, 'src/content')
      server.watcher.add(contentDir)
      server.watcher.on('add', async (file) => {
        if (file.endsWith('.md')) await buildAll(root, server)
      })
      server.watcher.on('change', async (file) => {
        if (file.endsWith('.md')) await buildAll(root, server)
      })
      server.watcher.on('unlink', async (file) => {
        if (file.endsWith('.md')) await buildAll(root, server)
      })
    },
  } as Plugin
}

export function contentGeneratorBuild(): Plugin {
  let root = process.cwd()
  return {
    name: 'content-generator-build',
    apply: 'build',
    enforce: 'pre',
    async configResolved(resolved) {
      root = resolved.root
    },
    async buildStart() {
      await buildAll(root)
    },
  }
}
