import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import CanvasComponent from "./CanvasComponent"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "John Doe - Fullstack Developer Portfolio",
  description: "Professional portfolio showcasing fullstack development projects and skills",
  generator: "v0.dev"
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
