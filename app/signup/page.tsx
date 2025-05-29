'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirm, setShowConfirm] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/signup_background.jpg')` }}
    >
      <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl w-[90%] max-w-6xl flex overflow-hidden border border-white/40">
        
        {/* Left Image + Logo */}
        <div className="w-1/2 relative bg-white/10 flex flex-col">
          <div className="absolute top-6 left-6 z-10 cursor-pointer" onClick={() => router.push('/')}>
            <img src="/logo.jpg" alt="Logo" className="h-12 w-12 drop-shadow-lg rounded-full" />
          </div>
          <img
            src="/signup_front.jpg"
            alt="Signup Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Signup Form */}
        <div className="w-1/2 px-12 py-10 bg-white/30 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Create an account</h2>
          <p className="text-gray-700 mb-8 text-sm">Join our learning platform today.</p>

          <form className="space-y-4 text-gray-900 font-medium">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-md bg-white/80 text-gray-900 placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-md bg-white/80 text-gray-900 placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full px-4 py-3 rounded-md bg-white/80 text-gray-900 placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />

            {/* Password */}
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Create Password"
                className="w-full px-4 py-3 pr-12 rounded-md bg-white/80 text-gray-900 placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute top-3 right-4 text-gray-600"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            {/* Confirm Password */}
            <div className="relative">
              <input
                type={showConfirm ? 'text' : 'password'}
                placeholder="Confirm Password"
                className="w-full px-4 py-3 pr-12 rounded-md bg-white/80 text-gray-900 placeholder-gray-600 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowConfirm(!showConfirm)}
                className="absolute top-3 right-4 text-gray-600"
              >
                {showConfirm ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white rounded-md bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 transition"
            >
              Sign Up
            </button>

            <button
              type="button"
              onClick={() => router.push('/signin')}
              className="w-full py-3 text-indigo-700 border border-indigo-600 rounded-md bg-gradient-to-r from-indigo-100 to-purple-200 hover:from-indigo-200 hover:to-purple-300 transition"
            >
              Back to Sign In
            </button>
          </form>

          <div className="text-sm text-center text-gray-700 mt-6">
            Already have an account?{' '}
            <a href="/signin" className="text-indigo-600 hover:underline">
              Sign in here
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
