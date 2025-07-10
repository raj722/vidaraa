import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import CustomSessionProvider from "@/components/session-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "E-Learning Platform",
  description: "Learn, grow, and teach with powerful tools.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="antialiased font-sans bg-background text-foreground">
        <CustomSessionProvider>{children}</CustomSessionProvider>
      </body>
    </html>
  )
}
