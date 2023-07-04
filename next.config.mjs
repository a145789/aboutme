import UnoCSS from "@unocss/webpack"

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
  },
  assetPrefix: "/aboutme",
  basePath: "/aboutme",
}

export default nextConfig
