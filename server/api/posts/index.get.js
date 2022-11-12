import { getPosts } from '../../data/posts'

export default defineEventHandler(async () => {
  return await getPosts()
})
