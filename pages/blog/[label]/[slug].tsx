import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import { getFileContent, getPosts } from "@/libs/node-utils"
import { postsDirectory } from "@/libs/constants"
import { resolve } from "path"
import { transformMdx } from "@/libs/utils"
import type { Posts } from "@/libs/interface"
import dynamic from "next/dynamic"
import Head from "next/head"

const Mdx = dynamic(() => import("@/components/mdx"))

interface BlogPostProps {
  data: Posts
  source: MDXRemoteSerializeResult
}

export const getStaticPaths: GetStaticPaths = async () => {
  const directories = getPosts()

  return {
    paths: directories.flatMap(({ label, posts }) =>
      posts.map(({ slug }) => ({
        params: {
          label,
          slug,
        },
      }))
    ),
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<BlogPostProps> = async ({
  params,
}) => {
  const { label, slug } = params as { label: string; slug: string }

  const filename = resolve(postsDirectory, `${label}/${slug}.mdx`)
  const fileContents = getFileContent(filename)
  const { source, data } = await transformMdx(fileContents)

  return {
    props: {
      data: { ...data, label, slug },
      source,
    },
  }
}

export default function BlogPost({ source, data }: BlogPostProps) {
  const router = useRouter()

  if (router.isFallback) {
    return <div>Loading...</div>
  }

  return (
    <>
      <Head>
        <title>{data.slug}</title>
      </Head>
      <div className="md:h-full overflow-y-auto md:scrollbar~">
        <div className="mt-40px mb-20px lt-md:mt-16px lt-md:mx-10px">
          <h1 className="font-bold text-3xl font-serif">{data.slug}</h1>
          <div className="my-10px">
            <span className="font-mono text-sm bg-neutral-100 dark:bg-neutral-800 rounded-md px-2 py-1 tracking-tighter">
              {data.createdAt}
            </span>
          </div>
          <Mdx source={source} />
        </div>
      </div>
    </>
  )
}
