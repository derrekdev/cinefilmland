import SideMenu from "@/components/layout/SideMenu/SideMenu";
import TopNavigationBar from "@/components/layout/TopNavigationBar/TopNavigationBar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-neutral-900 text-neutral-100`}>
        <TopNavigationBar />
        <SideMenu />
        {children}
      </body>
    </html>
  );
}
