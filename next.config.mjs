import UnoCSS from "@unocss/webpack"
import mdx from '@next/mdx'
import matter from "gray-matter"
import remarkGfm from "remark-gfm"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import slug from "rehype-slug"
import remarkToc from "remark-toc"

const withMDX = mdx({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [remarkGfm, remarkToc],
    rehypePlugins: [slug, rehypeAutolinkHeadings],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
})


/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS() // <--
    )
    return config
  }
}

export default withMDX(nextConfig)
