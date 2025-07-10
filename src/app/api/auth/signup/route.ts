import { prisma } from '@/lib/prisma'
import { hash } from 'bcryptjs'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const body = await req.json()
  const { name, email, password, role } = body

  const existingUser = await prisma.user.findUnique({ where: { email } })
  if (existingUser) {
    return NextResponse.json({ message: 'Email already registered' }, { status: 400 })
  }

  const hashedPassword = await hash(password, 10)

  await prisma.user.create({
    data: {
      name,
      email,
      password: hashedPassword,
      role
    }
  })

  return NextResponse.json({ message: 'User created' }, { status: 201 })
}
