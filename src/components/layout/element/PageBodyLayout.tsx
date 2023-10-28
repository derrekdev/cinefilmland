import React from "react";

export default function PageBodyLayout({
  leftElement,
  children,
}: {
  leftElement?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="container flex flex-col pt-10 max-sm:px-6">
      <div className="flex flex-row ">
        <div className="md:min-w-[200px]">{leftElement}</div>
        <div className="w-full px-10 max-sm:px-0 flex flex-col ">
          {children}
        </div>
      </div>
    </section>
  );
}
