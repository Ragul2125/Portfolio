import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CanvasComponent from "./CanvasComponent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Ragul - Fullstack Developer Portfolio",
  description: "Professional portfolio showcasing fullstack development projects and skills",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
        <CanvasComponent />
      </body>
    </html>
  )
}
