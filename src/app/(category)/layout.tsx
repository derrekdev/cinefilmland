import Initiate from "@/components/layout/Initiate/Initiate";
import SideMenu from "@/components/layout/SideMenu/SideMenu";
import { Inter } from "next/font/google";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <main className={`container bg-neutral-900 text-neutral-100`}>
      <Initiate>
        {/* <TopNavigationBar /> */}
        <section className="flex flex-row w-full">
          <SideMenu />
          {children}
        </section>
      </Initiate>
    </main>
    // {/* </html> */}
  );
}
