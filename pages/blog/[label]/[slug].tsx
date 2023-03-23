import { GetStaticPaths, GetStaticProps } from "next"
import { useRouter } from "next/router"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import { getFileContent, getPosts } from "@/libs/node-utils"
import { postsDirectory } from "@/libs/constants"
import { resolve } from "path"
import { transformMdx } from "@/libs/utils"

interface BlogPostProps {
  data: any
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
  const { label, slug } = params!

  const filename = resolve(postsDirectory, `${label}/${slug}.mdx`)
  const fileContents = getFileContent(filename)
  const { source, data } = await transformMdx(fileContents)

  return {
    props: {
      data,
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
    <div>
      <h1>{data.title}</h1>
      <MDXRemote {...source} />
    </div>
  )
}
