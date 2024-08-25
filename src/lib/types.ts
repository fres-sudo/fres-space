export type BlogPost = {
  id: number,
  title: string,
  description: string,
  imageUrl: string | undefined,
  date: Date,
  tags: PostCategory[]
}

export type PostCategory = {
  text: string,
  color: string
}
