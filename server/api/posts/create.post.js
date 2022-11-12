import { createPost } from '../../data/posts'
export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  console.log(body)
  return createPost(body)
})
