import UnoCSS from "@unocss/webpack"

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "out",
  pageExtensions: ["ts", "tsx", "mdx"],
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        hostname: "avatars.githubusercontent.com",
      },
    ],
  },
  webpack: (config) => {
    config.cache = false
    config.plugins.push(
      UnoCSS() // <--
    )
    return config
  },
}

export default nextConfig
