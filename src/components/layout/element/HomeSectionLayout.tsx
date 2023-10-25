import React from "react";

export default function HomeSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container flex  flex-col py-10 px-5 ">
      {children}
    </section>
  );
}
