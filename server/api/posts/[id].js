import { getPost } from '~~/server/data/posts'
export default defineEventHandler(async (event) => {
  const id = event.context.params?.id
  const post = await getPost(id)
  if (!post) {
    const notFoundError = createError({
      statusCode: 404,
      statusMessage: 'Post not found ',
    })
    sendError(event, notFoundError)
  }
  return post
})
