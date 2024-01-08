import { MaxWidthWrapper } from "@/components/ui/wrapper";
import { ReactNode } from "react";

export const metadata = { title: "Blogs" };

export default async function BlogsLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div>
      <MaxWidthWrapper>{children}</MaxWidthWrapper>
    </div>
  );
}
