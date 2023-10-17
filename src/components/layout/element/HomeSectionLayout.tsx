import React from "react";

export default function HomeSectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="container flex  flex-col p-10 ">{children}</section>
  );
}
