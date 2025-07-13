import { getAuthUser } from '@/lib/getAuthUser'
import { prisma } from '@/lib/prisma'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  try {
    const session = await getAuthUser()
    const body = await req.json()
    const { courseId } = body

    if (session.user.role !== 'STUDENT') {
      return NextResponse.json({ error: 'Only students can enroll' }, { status: 403 })
    }

    const exists = await prisma.enrollment.findUnique({
      where: {
        studentId_courseId: {
          studentId: session.user.id,
          courseId,
        }
      }
    })

    if (exists) {
      return NextResponse.json({ error: 'Already enrolled' }, { status: 409 })
    }

    const enrollment = await prisma.enrollment.create({
      data: {
        studentId: session.user.id,
        courseId,
      }
    })

    return NextResponse.json(enrollment, { status: 201 })
  } catch (err) {
    return NextResponse.json({ error: 'Unauthorized or error' }, { status: 401 })
  }
}
