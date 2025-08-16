"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Dashboard", href: "/" },
  { name: "Teachers", href: "/teachers" },
  { name: "Quizzes", href: "/quizzes" },
  { name: "Mind Map", href: "/mindmap" },
  { name: "Statistics", href: "/stats" },
  { name: "Profile", href: "/profile" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen fixed left-0 top-0 bg-gradient-to-b from-indigo-500 to-purple-500 text-white shadow-lg">
      {/* Logo / Brand */}
      <div className="p-6 text-2xl font-bold tracking-wide border-b border-white/10">
        <span className="text-white">Vidara</span>
      </div>

      {/* Navigation */}
      <nav className="flex flex-col gap-2 p-4">
        {links.map(({ name, href }) => (
          <Link key={href} href={href}>
            <span
              className={`block px-4 py-2 rounded-md cursor-pointer transition-all duration-150 ${
                pathname === href
                  ? "bg-white text-indigo-600 font-semibold"
                  : "hover:bg-white/10"
              }`}
            >
              {name}
            </span>
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="absolute bottom-4 w-full px-4">
        <button className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md transition-all duration-150">
          Logout
        </button>
      </div>
    </aside>
  );
}
    