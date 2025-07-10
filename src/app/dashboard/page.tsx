'use client'

import { useSession } from 'next-auth/react'

export default function Dashboard() {
  const { data: session } = useSession()

  if (!session) return <p className="text-center mt-10">Loading...</p>

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <h1 className="text-3xl font-bold mb-2">Welcome, {session.user?.name}!</h1>
      <p className="text-muted-foreground">You are logged in as <strong>{session.user?.role}</strong></p>
    </div>
  )
}
