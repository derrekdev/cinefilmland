import TopNavigationBar from "@/components/layout/TopNavigationBar/TopNavigationBar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cinefilmland",
  description: "Movies, TV Show, etc",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100 dark`}>
        <TopNavigationBar />
        {children}
      </body>
    </html>
  );
}
