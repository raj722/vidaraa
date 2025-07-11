import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { getAuthUser } from '@/lib/getAuthUser'

export async function PUT(req: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getAuthUser()
    const { id } = params
    const body = await req.json()

    const course = await prisma.course.update({
      where: { id },
      data: body,
    })

    return NextResponse.json(course)
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or Error' }, { status: 401 })
  }
}

export async function DELETE(_: Request, { params }: { params: { id: string } }) {
  try {
    const session = await getAuthUser()
    const { id } = params

    await prisma.course.delete({ where: { id } })

    return NextResponse.json({ success: true })
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or Error' }, { status: 401 })
  }
}
