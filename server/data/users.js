import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

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
