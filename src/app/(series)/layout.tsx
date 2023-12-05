import Initiate from "@/components/layout/Provider/Provider";
import SideMenu from "@/components/layout/SideMenu/SideMenu";
import { Inter } from "next/font/google";
import React, { Suspense } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function layout({ children }: { children: React.ReactNode }) {
  return (
    // <html lang="en">
    <Suspense>
      <main className={`container bg-neutral-900 text-neutral-100`}>
        <Initiate>
          {/* <TopNavigationBar /> */}
          <section className="flex flex-row w-full">
            <SideMenu type="series" />
            {children}
          </section>
        </Initiate>
      </main>
    </Suspense>
    // {/* </html> */}
  );
}
