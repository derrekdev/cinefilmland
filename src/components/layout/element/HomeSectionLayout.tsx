import React from "react";

export default function HomeSectionLayout({
  children,
  withContainerPadding = false,
}: {
  children: React.ReactNode;
  withContainerPadding?: boolean;
}) {
  return (
    <section
      className={`container flex flex-col py-10 lg:px-5 ${
        withContainerPadding ? "" : "max-lg:px-0"
      } `}
    >
      {children}
    </section>
  );
}
