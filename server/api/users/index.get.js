import { getUsers } from '../../data/users'

export default defineEventHandler(async () => {
  return await getUsers()
})
