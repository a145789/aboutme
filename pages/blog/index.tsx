import Link from "next/link"
import Head from "next/head"
import { LEFT_SLIDER_WIDTH } from "@/libs/constants"
import { useContext, useEffect, useMemo, useState } from "react"
import { IsUseLeftSliderContext } from "@/store/isUseLeftSlider"
import clsx from "clsx"
import { getPosts } from "@/libs/node-utils"
import type { Directory } from "@/libs/interface"

export default function Blog({ directories }: { directories: Directory[] }) {
  const [currentLabel, setCurrentLabel] = useState("All")

  const { setIsUseLeftSlider } = useContext(IsUseLeftSliderContext)

  const labels = useMemo(() => {
    return ["All", ...directories.map((directory) => directory.label)]
  }, [directories])

  const selectDirectory = useMemo(() => {
    return [
      { label: "All", posts: directories.flatMap(({ posts }) => posts) },
      ...directories,
    ]
  }, [directories])

  const None = useMemo(
    () => (
      <div className="w-full h-full flex flex-col items-center">
        啥也没有，换个其他啥的看看吧。
      </div>
    ),
    []
  )

  const directory = useMemo(() => {
    const dir = selectDirectory.find(({ label }) => label === currentLabel)
    if (!dir?.posts.length) {
      return None
    } else {
      return (
        <ul>
          {dir.posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog/${post.label}/${post.slug}`} target="_blank">
                <span>{post.slug}</span>
              </Link>
            </li>
          ))}
        </ul>
      )
    }
  }, [selectDirectory, None, currentLabel])

  useEffect(() => {
    setIsUseLeftSlider(true)
    return () => {
      setIsUseLeftSlider(false)
    }
  }, [setIsUseLeftSlider])

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full h-full flex box-border pt-100px justify-between">
        {directory}

        <ul
          className="shrink-0 overflow-y-auto box-border my-20px"
          style={{ width: LEFT_SLIDER_WIDTH }}
        >
          {labels.map((label) => (
            <li
              className={clsx(
                "mx-8px my-12px cursor-pointer break-words",
                label === currentLabel ? "underline" : "text-neutral-500"
              )}
              key={label}
              onClick={() => setCurrentLabel(label)}
            >
              {label}
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export async function getStaticProps() {
  const directories = getPosts()

  return {
    props: {
      directories,
    },
  }
}
