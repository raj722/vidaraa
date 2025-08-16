"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const quizData = [
  { topic: "Math", quizzes: 5 },
  { topic: "Science", quizzes: 3 },
  { topic: "English", quizzes: 4 },
  { topic: "Computer", quizzes: 2 },
];

const teacherData = [
  { subject: "Math", value: 4 },
  { subject: "Science", value: 2 },
  { subject: "English", value: 3 },
  { subject: "Computer", value: 1 },
];

const COLORS = ["#6366f1", "#06b6d4", "#10b981", "#f59e0b"];

export default function MindMapPage() {
  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">Mind Map Visualizations</h2>

      {/* Bar Chart */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Quizzes per Topic</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={quizData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="topic" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="quizzes" fill="#6366f1" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Pie Chart */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Teachers by Subject</h3>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={teacherData}
              dataKey="value"
              nameKey="subject"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {teacherData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
