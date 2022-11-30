import { createPost } from '../../data/posts'
import { getServerSession } from '#auth'
export default defineEventHandler(async (event) => {
  const session = await getServerSession(event)
  const { title, content } = await readBody(event)
  if (!session) {
    throw createError({
      statusCode: 401,
      statusMessage: 'Unauthorized client error',
    })
  }
  let post = createPost(title, content, session.user?.email)
  return post
})
