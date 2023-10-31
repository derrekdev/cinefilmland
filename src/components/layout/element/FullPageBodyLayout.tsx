import React from "react";

export default function FullPageBodyLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container flex flex-col pt-10 max-sm:px-6 ">
      <div className="flex flex-row ">
        {/* px-10 */}
        <div className="w-full  max-sm:px-0 flex flex-col ">{children}</div>
      </div>
    </section>
  );
}
