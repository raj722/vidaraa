"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
  Legend,
} from "recharts";

const quizGrowth = [
  { month: "Jan", quizzes: 5 },
  { month: "Feb", quizzes: 8 },
  { month: "Mar", quizzes: 12 },
  { month: "Apr", quizzes: 18 },
  { month: "May", quizzes: 25 },
  { month: "Jun", quizzes: 35 },
];

const teacherStats = [
  { month: "Jan", teachers: 1 },
  { month: "Feb", teachers: 2 },
  { month: "Mar", teachers: 3 },
  { month: "Apr", teachers: 4 },
  { month: "May", teachers: 5 },
  { month: "Jun", teachers: 6 },
];

export default function StatsPage() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">Platform Statistics</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-indigo-600 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Quizzes</h3>
          <p className="text-3xl font-bold mt-2">122</p>
        </div>
        <div className="bg-teal-500 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Teachers</h3>
          <p className="text-3xl font-bold mt-2">37</p>
        </div>
        <div className="bg-orange-500 text-white p-6 rounded shadow text-center">
          <h3 className="text-lg font-medium">Total Students</h3>
          <p className="text-3xl font-bold mt-2">912</p>
        </div>
      </div>

      {/* Line Chart: Quiz Growth */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Quiz Growth Over Time</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={quizGrowth}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="quizzes" stroke="#6366f1" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Bar Chart: Teachers */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Teachers Added Per Month</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={teacherStats}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="teachers" fill="#06b6d4" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
