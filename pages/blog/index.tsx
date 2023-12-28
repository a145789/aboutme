import Link from "next/link"
import Head from "next/head"
import { RIGHT_SLIDER_WIDTH } from "@/libs/constants"
import { useMemo, useState } from "react"
import clsx from "clsx"
import { getPosts } from "@/libs/node-utils"
import type { Directory } from "@/libs/interface"
import { sortByCreatedAt } from "@/libs/utils"
import { SmileySansFont } from "@/libs/font"
import { AnimatePresence, motion } from "framer-motion"

export default function Blog({ directories }: { directories: Directory[] }) {
  const [currentLabel, setCurrentLabel] = useState("All")

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
      <motion.ul
        layout
        className="w-full h-full box-border pt-20px lt-md:pt-40px"
        style={{ originX: 0.5, originY: 0.25, originZ: 0 }}
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          bounce: 0.25,
          duration: 0.4,
        }}
      >
        <li className="text-center w-full">啥也没有，换个其他啥的看看吧。</li>
        <li className="text-center mt-10px w-full">
          There&apos;s nothing there, let&apos;s see if there&apos;s something
          else.
        </li>
      </motion.ul>
    ),
    []
  )

  const posts = useMemo(() => {
    const dir = selectDirectory.find(({ label }) => label === currentLabel)
    if (!dir?.posts.length) {
      return None
    } else {
      return (
        <div className="flex-1 overflow-y-auto md:scrollbar~">
          <AnimatePresence>
            {dir.posts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/blog/${post.label}/${post.slug}`}
                  target="_blank"
                  rel="noreferrer noopener"
                  className={clsx(
                    "mt-20px block hover:shadow",
                    SmileySansFont.className
                  )}
                >
                  <p className="text-20px break-all">{post.slug}</p>
                  <p className="mt-6px text-sm text-neutral-500 tracking-tighter">
                    {post.createdAt}
                  </p>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      )
    }
  }, [selectDirectory, None, currentLabel])

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="w-full h-full box-border pt-220px lt-md:pt-20px flex flex-col lt-md:px-10px overflow-x-hidden">
        <motion.div
          layout
          className="font-bold text-3xl font-serif mb-5 lt-md:mb-1"
          initial={{ opacity: 0, x: "-40vw", scale: 0.4 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 50,
            duration: 0.4,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          Blog
        </motion.div>
        <div className="flex justify-between flex-1 overflow-y-hidden overflow-x-hidden">
          {posts}
          <motion.ul
            layout
            className={clsx(
              "shrink-0 overflow-y-auto box-border my-20px lt-md:w-18% lt-md:border-l-2px lt-md:border-solid lt-md:ml-4px md:scrollbar~",
              `w-${RIGHT_SLIDER_WIDTH}px`
            )}
            initial={{ opacity: 0, x: "30vw" }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.8,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            {labels.map((label) => (
              <li
                className={clsx(
                  "mx-8px my-12px cursor-pointer break-words text-underline-show transition-all duration-300 leading-6",
                  label === currentLabel
                    ? "text-underline-show-w-96%"
                    : "text-neutral-500 text-underline-show-w-0"
                )}
                key={label}
                onClick={() => setCurrentLabel(label)}
              >
                {label}
              </li>
            ))}
          </motion.ul>
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
