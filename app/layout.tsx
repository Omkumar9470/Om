import type React from "react"
import "./globals.css"
import{Analytics} from "@vercel/analytics/next"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Om's Portfolio",
  description: "Welcome to my portfolio",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
