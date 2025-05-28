'use client'

import { useRouter } from "next/navigation";

export default function SigninPage() {
  const router = useRouter();

  return (
    <div className="grid grid-cols-[60%_40%] min-h-screen bg-gradient-to-r from-indigo-100 to-purple-100">
      {/* Left Section with Signin Image */}
      <div className="relative">
        <img
          src="/signin.jpg"
          alt="Signin Visual"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Right Form Section */}
      <div className="flex flex-col px-16 py-14 bg-gradient-to-br from-indigo-50 via-purple-100 to-indigo-50 bg-opacity-90">
        {/* Logo at top */}
        <div className="text-center mb-16">
          <a href="/" className="inline-flex items-center justify-center">
            <img src="/logo.jpg" alt="Vidara Logo" className="h-12 w-12" />
          </a>
        </div>

        {/* Signin form header */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Sign in</h2>
          <p className="text-gray-600 mt-2 text-sm">
            Welcome back! Please enter your credentials.
          </p>
        </div>

        {/* Signin Form */}
        <form className="space-y-5">
          <input
            type="text"
            placeholder="Phone/ Email"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <input
            type="password"
            placeholder="Password/ OTP"
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            required
          />

          <div className="flex items-center justify-between text-sm">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray-600">Remember me</span>
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
            onClick={() => router.push("/signup")} // 👉 Redirects to /signup
            className="w-full py-3 text-indigo-700 border border-indigo-600 rounded-md bg-gradient-to-r from-indigo-100 to-purple-200 hover:from-indigo-200 hover:to-purple-300 transition"
          >
            Sign Up
          </button>
        </form>

        {/* Help Section */}
        <div className="text-center text-sm text-gray-500 mt-10">
          Need help?{" "}
          <a href="#" className="text-indigo-600 hover:underline">
            Go To Help Center
          </a>
        </div>
      </div>
    </div>
  );
}
