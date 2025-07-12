'use client'

import { getServerSession } from 'next-auth'
import { authOptions } from '@/lib/auth'
import { redirect } from 'next/navigation'
import { useEffect, useState } from 'react'

type Course = {
  id: string
  title: string
  description: string
  thumbnail: string
  category: string
  instructor?: {
    name: string
    email: string
  }
}

export default function StudentDashboardPage() {
  const [courses, setCourses] = useState<Course[]>([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetch('/api/courses/all')
      .then(res => res.json())
      .then(data => setCourses(data))
      .catch(() => setError('Failed to fetch courses'))
  }, [])

  if (typeof window === 'undefined') {
    return null
  }

  useEffect(() => {
    async function protectRoute() {
      const res = await fetch('/api/auth/session')
      const session = await res.json()
      if (!session?.user) {
        window.location.href = '/sign-in'
      }
    }
    protectRoute()
  }, [])

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Available Courses</h1>

      {error && <p className="text-red-600">{error}</p>}

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {courses.map(course => (
          <div
            key={course.id}
            className="border rounded-xl p-4 shadow hover:shadow-lg transition-all"
          >
            <img
              src={course.thumbnail}
              alt={course.title}
              className="w-full h-40 object-cover rounded mb-4"
            />
            <h2 className="text-xl font-semibold">{course.title}</h2>
            <p className="text-muted-foreground text-sm mb-2">
              Category: {course.category}
            </p>
            <p className="text-sm line-clamp-3">{course.description}</p>
            {course.instructor && (
              <p className="text-xs text-muted-foreground mt-2">
                Instructor: {course.instructor.name}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
