import prisma from './prisma'
export async function getUsers() {
  const users = await prisma.user.findMany({
    include: {
      posts: {
        select: {
          id: true,
          title: true,
          content: true,
          published: true,
        },
      },
    },
  })
  return users
}
