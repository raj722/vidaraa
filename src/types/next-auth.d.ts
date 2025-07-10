import NextAuth from 'next-auth'

declare module 'next-auth' {
  interface Session {
    user: {
      name?: string | null
      email?: string | null
      image?: string | null
      role?: 'STUDENT' | 'INSTRUCTOR'
    }
  }

  interface User {
    role: 'STUDENT' | 'INSTRUCTOR'
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    role?: 'STUDENT' | 'INSTRUCTOR'
  }
}
