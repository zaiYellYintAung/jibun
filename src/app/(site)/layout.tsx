import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/react"
import { SpeedInsights } from "@vercel/speed-insights/next"

import { Footer } from "@/components/navigations/footer/footer"
import { Header } from "@/components/navigations/header/header"

const inter = Inter({ subsets: ["latin"] })

// export const metadata: Metadata = siteMetaData

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <main>
      <Header />
      {children}

      <Footer />
    </main>
  )
}
