import prisma from './prisma'

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

export async function createPost(title, content, email) {
  let result = null
  if (email) {
    result = await prisma.post.create({
      data: {
        title: title,
        content: content,
        author: { connect: { email: email } },
        published: true,
      },
    })
  }
  return result
}
