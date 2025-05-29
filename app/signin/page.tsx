'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Eye, EyeOff } from 'lucide-react'

export default function SigninPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)

  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url('/3.jpg')` }}
    >
      <div className="backdrop-blur-xl bg-white/30 rounded-3xl shadow-2xl w-[90%] max-w-6xl flex overflow-hidden border border-white/40">
        
        {/* Left Image Section with Logo */}
        <div className="w-1/2 relative bg-white/10 flex flex-col">
          <div className="absolute top-6 left-6 z-10 cursor-pointer" onClick={() => router.push('/')}>
            <img src="/logo.jpg" alt="Logo" className="h-12 w-12 drop-shadow-lg rounded-full" />
          </div>
          <img
            src="/4.jpg"
            alt="Signin Visual"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Form Section */}
        <div className="w-1/2 px-12 py-10 bg-white/30 backdrop-blur-md">
          <h2 className="text-3xl font-bold text-gray-800 mb-2">Sign in</h2>
          <p className="text-gray-700 mb-8 text-sm">Welcome back! Please enter your credentials.</p>

          <form className="space-y-5 text-gray-900 font-medium">
            <input
              type="text"
              placeholder="Phone / Email"
              className="w-full px-4 py-3 rounded-md bg-white/80 placeholder-gray-600 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password / OTP"
                className="w-full px-4 py-3 pr-12 rounded-md bg-white/80 placeholder-gray-600 text-gray-900 border border-gray-300 focus:ring-2 focus:ring-indigo-500 focus:outline-none"
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

            <div className="flex items-center justify-between text-sm text-gray-700">
              <label className="inline-flex items-center">
                <input type="checkbox" className="form-checkbox" />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot Password?
              </a>
            </div>

            <button
              type="submit"
              className="w-full py-3 text-white rounded-md bg-gradient-to-r from-indigo-600 to-purple-700 hover:from-indigo-700 hover:to-purple-800 transition"
            >
              Sign In
            </button>

            <button
              type="button"
              onClick={() => router.push('/signup')}
              className="w-full py-3 text-indigo-700 border border-indigo-600 rounded-md bg-gradient-to-r from-indigo-100 to-purple-200 hover:from-indigo-200 hover:to-purple-300 transition"
            >
              Sign Up
            </button>
          </form>

          <div className="text-center text-sm text-gray-700 mt-10">
            Need help?{' '}
            <a href="#" className="text-indigo-600 hover:underline">
              Go To Help Center
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
