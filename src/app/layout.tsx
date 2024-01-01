import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/navigations/header/header";
import { Footer } from "@/components/navigations/footer/footer";
import { siteMetaData } from "@/config/metadata";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = siteMetaData;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
