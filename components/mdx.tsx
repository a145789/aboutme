import { MDXRemote } from "next-mdx-remote"
import type { MDXRemoteSerializeResult } from "next-mdx-remote"
import styles from "../styles/mdx.module.scss"

export default function Mdx({ source }: { source: MDXRemoteSerializeResult }) {
  return (
    <div className={styles.mdx}>
      <MDXRemote {...source} />
    </div>
  )
}
