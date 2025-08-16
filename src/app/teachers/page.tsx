"use client";

import { useState } from "react";

interface Teacher {
  id: number;
  name: string;
  subject: string;
  email: string;
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([
    { id: 1, name: "Raj Tamang", subject: "Math", email: "raj@example.com" },
    { id: 2, name: "Anita Sharma", subject: "Science", email: "anita@example.com" },
  ]);

  const [newTeacher, setNewTeacher] = useState({ name: "", subject: "", email: "" });
  const [editId, setEditId] = useState<number | null>(null);
  const [editTeacher, setEditTeacher] = useState({ name: "", subject: "", email: "" });

  const handleAdd = () => {
    if (!newTeacher.name || !newTeacher.subject || !newTeacher.email) return;

    setTeachers([
      ...teachers,
      {
        id: Date.now(),
        ...newTeacher,
      },
    ]);
    setNewTeacher({ name: "", subject: "", email: "" });
  };

  const handleDelete = (id: number) => {
    setTeachers(teachers.filter((t) => t.id !== id));
    if (editId === id) setEditId(null); // Close edit if deleted
  };

  const handleEdit = (teacher: Teacher) => {
    setEditId(teacher.id);
    setEditTeacher({ name: teacher.name, subject: teacher.subject, email: teacher.email });
  };

  const handleSave = (id: number) => {
    setTeachers((prev) =>
      prev.map((t) =>
        t.id === id ? { ...t, ...editTeacher } : t
      )
    );
    setEditId(null);
  };

  const handleCancel = () => {
    setEditId(null);
  };

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Manage Teachers</h2>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Add New Teacher</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border rounded px-3 py-2"
            value={newTeacher.name}
            onChange={(e) => setNewTeacher({ ...newTeacher, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Subject"
            className="border rounded px-3 py-2"
            value={newTeacher.subject}
            onChange={(e) => setNewTeacher({ ...newTeacher, subject: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border rounded px-3 py-2"
            value={newTeacher.email}
            onChange={(e) => setNewTeacher({ ...newTeacher, email: e.target.value })}
          />
        </div>
        <button
          onClick={handleAdd}
          className="mt-4 bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
        >
          Add Teacher
        </button>
      </div>

      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">All Teachers</h3>
        <table className="w-full table-auto text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2">Name</th>
              <th className="p-2">Subject</th>
              <th className="p-2">Email</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {teachers.map((teacher) => (
              <tr key={teacher.id} className="border-t">
                {editId === teacher.id ? (
                  <>
                    <td className="p-2">
                      <input
                        className="border rounded px-2 py-1 w-full"
                        value={editTeacher.name}
                        onChange={(e) =>
                          setEditTeacher({ ...editTeacher, name: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded px-2 py-1 w-full"
                        value={editTeacher.subject}
                        onChange={(e) =>
                          setEditTeacher({ ...editTeacher, subject: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2">
                      <input
                        className="border rounded px-2 py-1 w-full"
                        value={editTeacher.email}
                        onChange={(e) =>
                          setEditTeacher({ ...editTeacher, email: e.target.value })
                        }
                      />
                    </td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleSave(teacher.id)}
                        className="text-green-600 hover:underline"
                      >
                        Save
                      </button>
                      <button
                        onClick={handleCancel}
                        className="text-gray-500 hover:underline"
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td className="p-2">{teacher.name}</td>
                    <td className="p-2">{teacher.subject}</td>
                    <td className="p-2">{teacher.email}</td>
                    <td className="p-2 space-x-2">
                      <button
                        onClick={() => handleEdit(teacher)}
                        className="text-blue-600 hover:underline"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDelete(teacher.id)}
                        className="text-red-600 hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
            {teachers.length === 0 && (
              <tr>
                <td colSpan={4} className="p-2 text-gray-500 text-center">
                  No teachers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
