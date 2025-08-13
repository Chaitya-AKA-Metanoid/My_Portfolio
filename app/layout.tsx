import type React from "react"
import type { Metadata } from "next"
import { Orbitron, Fredoka } from "next/font/google"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-orbitron",
})

const fredoka = Fredoka({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-fredoka",
})

export const metadata: Metadata = {
  title: "Chaitya Shah - Best guy in the room",
  description: "Retro-inspired portfolio of a full-stack developer serving up fresh code daily",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <style>{`
html {
  font-family: ${fredoka.style.fontFamily};
  --font-fredoka: ${fredoka.variable};
  --font-orbitron: ${orbitron.variable};
}
        `}</style>
      </head>
      <body className={`${orbitron.variable} ${fredoka.variable} antialiased`}>{children}</body>
    </html>
  )
}
