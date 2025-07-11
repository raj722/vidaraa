import { getServerSession } from 'next-auth'
import { authOptions } from './auth'

export async function getAuthUser(requiredRole: string = "INSTRUCTOR") {
  const session = await getServerSession(authOptions)

  if (!session || session.user?.role !== requiredRole) {
    throw new Error("Unauthorized")
  }

  return session
}