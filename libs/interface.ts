export interface PostAttrs {
  createdAt: string
}

export interface Posts extends PostAttrs {
  slug: string
  label: string
}

/** 目录 */
export interface Directory {
  label: string
  posts: Posts[]
}
