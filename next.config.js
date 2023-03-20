const UnoCSS = require("@unocss/webpack").default

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx"],
  reactStrictMode: true,
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS() // <--
    )
    return config
  },
  async rewrites() {
    return [
      {
        source: "/todo-md/:path*",
        destination: "/todo-md/index.mdx",
      },
    ]
  },
}

module.exports = nextConfig
