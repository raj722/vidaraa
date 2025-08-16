// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="h-16 px-6 flex items-center justify-between bg-white shadow">
      <h1 className="text-lg font-semibold text-gray-700">Admin Panel</h1>
      <Image
        src="/profile.png"
        width={40}
        height={40}
        alt="Profile"
        className="rounded-full cursor-pointer"
      />
    </header>
  );
}
