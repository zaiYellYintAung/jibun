import { ReactNode } from "react"

export const metadata = { title: "Blogs" }

export default async function BlogsLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <div>
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  )
}
