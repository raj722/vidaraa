"use client";

import Link from "next/link";

export default function DashboardPage() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">Admin Dashboard</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Teachers</h3>
          <p className="text-3xl font-bold mt-2">37</p>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Quizzes</h3>
          <p className="text-3xl font-bold mt-2">122</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Students</h3>
          <p className="text-3xl font-bold mt-2">912</p>
        </div>
      </div>

      {/* Quick Links */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Quick Access</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Link href="/teachers" className="block bg-indigo-100 p-4 rounded hover:bg-indigo-200 text-center">
             Manage Teachers
          </Link>
          <Link href="/quizzes" className="block bg-green-100 p-4 rounded hover:bg-green-200 text-center">
             AI Quizzes
          </Link>
          <Link href="/stats" className="block bg-yellow-100 p-4 rounded hover:bg-yellow-200 text-center">
             Platform Stats
          </Link>
          <Link href="/profile" className="block bg-gray-100 p-4 rounded hover:bg-gray-200 text-center">
             Admin Profile
          </Link>
        </div>
      </div>
    </div>
  );
}
