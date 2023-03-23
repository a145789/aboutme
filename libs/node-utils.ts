import { readdirSync, readFileSync, statSync } from "fs"
import { postsDirectory } from "./constants"
import { resolve } from "path"
import type { Directory } from "./interface"
import { getMdx } from "./utils"

export function isDir(filePath: string) {
  return statSync(filePath).isDirectory()
}

export function getFileContent(filename: string) {
  return readFileSync(filename).toString()
}

export function isMdx(filePath: string) {
  return filePath.endsWith(".mdx")
}

export function getPosts() {
  const files = readdirSync(postsDirectory)
  const directories: Directory[] = []

  for (const file of files) {
    const filePath = resolve(postsDirectory, file)
    if (isDir(filePath)) {
      const posts = readdirSync(filePath)
        .filter(isMdx)
        .map((filename) => {
          const slug = filename.replace(".mdx", "")
          const fileContents = getFileContent(resolve(filePath, filename))
          const { data } = getMdx(fileContents)

          return {
            ...data,
            slug,
            label: file,
          }
        })
      directories.push({
        label: file,
        posts,
      })
    }
  }

  return directories
}
