import Link from "next/link"
import Head from "next/head"
import { LEFT_SLIDER_WIDTH, MIN_SCREEN_WIDTH } from "@/libs/constants"
import { useContext, useEffect, useMemo, useState } from "react"
import { IsUseLeftSliderContext } from "@/store/isUseLeftSlider"
import clsx from "clsx"
import { getPosts } from "@/libs/node-utils"
import type { Directory } from "@/libs/interface"
import { sortByCreatedAt } from "@/libs/utils"
import { SmileySansFont } from "@/libs/font"
import useIsScreenWidthLessThan from "@/hooks/useIsScreenWidthLessThan"

export default function Blog({ directories }: { directories: Directory[] }) {
  const isLessThanWidth = useIsScreenWidthLessThan(MIN_SCREEN_WIDTH)
  const [currentLabel, setCurrentLabel] = useState("All")

  const { setIsUseLeftSlider } = useContext(IsUseLeftSliderContext)

  const labels = useMemo(() => {
    return ["All", ...directories.map((directory) => directory.label)]
  }, [directories])

  const selectDirectory = useMemo(() => {
    const dir = directories.map((item) => ({
      ...item,
      posts: sortByCreatedAt(item.posts),
    }))
    return [
      {
        label: "All",
        posts: sortByCreatedAt(directories.flatMap(({ posts }) => posts)),
      },
      ...dir,
    ]
  }, [directories])

  const None = useMemo(
    () => (
      <ul className="w-full h-full flex flex-col items-center lt-md:mt-40px">
        <li className="text-center w-full">啥也没有，换个其他啥的看看吧。</li>
        <li className="text-center mt-10px w-full">
          There&apos;s nothing there, let&apos;s see if there&apos;s something
          else.
        </li>
      </ul>
    ),
    []
  )

  const posts = useMemo(() => {
    const dir = selectDirectory.find(({ label }) => label === currentLabel)
    if (!dir?.posts.length) {
      return None
    } else {
      return (
        <div
          className={clsx(
            "flex-1 overflow-y-auto",
            !isLessThanWidth && "scrollbar~"
          )}
        >
          {dir.posts.map((post) => (
            <Link
              href={`/blog/${post.label}/${post.slug}`}
              target="_blank"
              rel="noreferrer noopener"
              key={post.slug}
              className={clsx(
                "mt-20px block hover:shadow",
                SmileySansFont.className
              )}
            >
              <div>
                <p className="text-20px break-all">{post.slug}</p>
                <p className="mt-6px text-sm text-neutral-500 tracking-tighter">
                  {post.createdAt}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )
    }
  }, [selectDirectory, None, currentLabel, isLessThanWidth])

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
      <div className="w-full h-full box-border pt-220px lt-md:pt-20px flex flex-col lt-md:px-10px">
        <div className="font-bold text-3xl font-serif mb-5 lt-md:mb-1">
          Blog
        </div>
        <div className="flex justify-between flex-1 overflow-y-hidden">
          {posts}

          <ul
            className={clsx(
              "shrink-0 overflow-y-auto box-border my-20px lt-md:border-l-2px lt-md:border-solid lt-md:ml-4px",
              !isLessThanWidth && "scrollbar~"
            )}
            style={{ width: isLessThanWidth ? "18%" : LEFT_SLIDER_WIDTH }}
          >
            {labels.map((label) => (
              <li
                className={clsx(
                  "mx-8px my-12px cursor-pointer break-words border-b-1px",
                  label === currentLabel ? "border-solid" : "text-neutral-500"
                )}
                key={label}
                onClick={() => setCurrentLabel(label)}
              >
                {label}
              </li>
            ))}
          </ul>
        </div>
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
