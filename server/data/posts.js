import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export async function getPosts() {
  const posts = await prisma.post.findMany({
    where: { published: true },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return posts
}

export async function getPost(id) {
  const post = await prisma.post.findUnique({
    where: {
      id: String(id),
    },
    include: {
      author: {
        select: { name: true },
      },
    },
  })
  return post
}

export async function createPost({ title, content }) {
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      authorId: '1',
    },
  })
  return result
}
