import Link from "next/link"
import Head from "next/head"
import { LEFT_SLIDER_WIDTH } from "@/libs/constants"
import { useContext, useEffect, useState } from "react"
import { IsUseLeftSliderContext } from "@/store/isUseLeftSlider"
import clsx from "clsx"
import { getPostsFilePath, type Directories } from "@/libs/utils"

export default function Blog({ directories }: { directories: Directories }) {
  const [currentLabel, setCurrentLabel] = useState(
    () => directories[0]?.label || "All"
  )

  const { setIsUseLeftSlider } = useContext(IsUseLeftSliderContext)

  useEffect(() => {
    setIsUseLeftSlider(true)
    return () => {
      setIsUseLeftSlider(false)
    }
  }, [setIsUseLeftSlider])

  const None = (
    <div className="flex flex-col items-center justify-center">Not Blog</div>
  )
  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full h-full flex box-border pt-100px justify-between">
        <ul>
          {directories
            .find((item) => item.label === currentLabel)
            ?.posts.map((post) => (
              <li key={post.slug}>
                <Link href={`/blog/${post.slug}`} target="_blank">
                  <span>{post.slug}</span>
                </Link>
              </li>
            )) || None}
        </ul>

        <ul
          className="shrink-0 overflow-y-auto box-border my-20px"
          style={{ width: LEFT_SLIDER_WIDTH }}
        >
          {directories.map(({ label }) => (
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
  const directories = getPostsFilePath()

  directories.unshift({
    label: "All",
    posts: directories.flatMap((item) => item.posts),
  })

  return {
    props: {
      directories,
    },
  }
}
