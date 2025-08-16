import "./globals.css";
import { Inter } from "next/font/google";
import Sidebar from "@/components/Sidebar"; // adjust if path differs
import { AuthProvider } from "./context/AuthContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "EduNepal Admin Dashboard",
  description: "AI-driven E-learning Admin Panel",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <div className="flex">
            <Sidebar />
            <main className="ml-64 flex-1 p-6 bg-gray-50 min-h-screen">{children}</main>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
