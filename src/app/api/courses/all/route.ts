import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  const courses = await prisma.course.findMany({
    include: {
      instructor: {
        select: { name: true, email: true }
      }
    },
    orderBy: {
      createdAt: 'desc'
    }
  })

  return NextResponse.json(courses)
}
