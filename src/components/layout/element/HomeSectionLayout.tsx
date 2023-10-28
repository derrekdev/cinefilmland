import React from "react";

export default function HomeSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container flex  flex-col py-10 lg:px-5 max-lg:px-0">
      {children}
    </section>
  );
}
