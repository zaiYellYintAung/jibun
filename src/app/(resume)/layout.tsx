import type { Metadata } from "next"
import { Inter } from "next/font/google"

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
}

// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className={inter.className}>{children}</div>
}
