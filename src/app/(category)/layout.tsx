import Initiate from "@/components/layout/Initiate/Initiate";
import SideMenu from "@/components/layout/SideMenu/SideMenu";
import TopNavigationBar from "@/components/layout/TopNavigationBar/TopNavigationBar";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <main className={` bg-neutral-900 text-neutral-100`}>
      <Initiate>
        <TopNavigationBar />
        <SideMenu />
        {children}
      </Initiate>
    </main>
    // {/* </html> */}
  );
}
