"use client";

import { useState } from "react";

interface Admin {
  name: string;
  email: string;
  role: "admin" | "editor" | "viewer";
}

export default function ProfilePage() {
  // Simulated logged-in admin
  const [admin] = useState<Admin>({
    name: "Raj Tamang",
    email: "raj.admin@example.com",
    role: "admin", // Try changing to 'editor' or 'viewer'
  });

  const [settings, setSettings] = useState({
    darkMode: true,
    notifications: false,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings({ ...settings, [key]: !settings[key] });
  };

  return (
    <div className="space-y-10">
      <h2 className="text-2xl font-semibold">Admin Profile</h2>

      {/* Admin Details */}
      <div className="bg-white p-6 rounded shadow">
        <h3 className="text-lg font-semibold mb-4">Profile Info</h3>
        <div className="space-y-2 text-gray-700">
          <p><strong>Name:</strong> {admin.name}</p>
          <p><strong>Email:</strong> {admin.email}</p>
          <p><strong>Role:</strong> {admin.role}</p>
        </div>
      </div>

      {/* Settings - visible only if role === 'admin' */}
      {admin.role === "admin" ? (
        <div className="bg-white p-6 rounded shadow">
          <h3 className="text-lg font-semibold mb-4">Settings</h3>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-center justify-between">
              <span>Enable Dark Mode</span>
              <button
                onClick={() => handleToggle("darkMode")}
                className={`px-4 py-1 rounded-full ${
                  settings.darkMode ? "bg-indigo-600 text-white" : "bg-gray-300"
                }`}
              >
                {settings.darkMode ? "On" : "Off"}
              </button>
            </div>
            <div className="flex items-center justify-between">
              <span>Enable Notifications</span>
              <button
                onClick={() => handleToggle("notifications")}
                className={`px-4 py-1 rounded-full ${
                  settings.notifications ? "bg-indigo-600 text-white" : "bg-gray-300"
                }`}
              >
                {settings.notifications ? "On" : "Off"}
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bg-yellow-100 border border-yellow-400 text-yellow-800 p-4 rounded shadow">
          ⚠️ You do not have access to view settings.
        </div>
      )}
    </div>
  );
}
