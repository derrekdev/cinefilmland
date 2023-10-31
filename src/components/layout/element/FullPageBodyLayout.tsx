import React from "react";

export default function FullPageBodyLayout({
  children,
  addClass,
}: {
  children: React.ReactNode;
  addClass?: string;
}) {
  return (
    <section
      className={`container flex flex-col pt-10 max-sm:px-6 ${addClass}`}
    >
      <div className="flex flex-row ">
        {/* px-10 */}
        <div className="w-full  max-sm:px-0 flex flex-col ">{children}</div>
      </div>
    </section>
  );
}
