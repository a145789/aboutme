export type Slug = string

export interface PostAttrs {
  createdAt: string
}

/** 目录 */
export interface Directory {
  label: string
  posts: (PostAttrs & { slug: Slug; label: string })[]
}
