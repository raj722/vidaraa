import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/getAuthUser'

export async function POST(req: Request) {
  try {
    const session = await getAuthUser()
    const body = await req.json()
    const { title, description, thumbnail, category } = body

    const course = await prisma.course.create({
      data: {
        title,
        description,
        thumbnail,
        category,
        instructor: { connect: { email: session.user.email! } },
      },
    })

    return NextResponse.json(course, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or Error' }, { status: 401 })
  }
}

export async function GET() {
  try {
    const session = await getAuthUser()

    const courses = await prisma.course.findMany({
      where: { instructor: { email: session.user.email! } },
      orderBy: { createdAt: 'desc' },
    })

    return NextResponse.json(courses)
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or Error' }, { status: 401 })
  }
}
