import defaultImage from "@/../public/default_poster.jpg";
import getDate from "@/utils/getDate";
import Image from "next/image";
import React from "react";

// interface defaultHeadlineTitleProps {
//   title: string;
//   // showPoster: boolean;
//   children?: React.ReactNode;
// }

// type conditionalHeadlineTitleProps =
//   | {
//       showPoster?: false;
//     }
//   | {
//       showPoster?: true;
//       posterSrc?: string | null;
//       posterAlt?: string;
//       releaseYear?: string;
//       tagLine?: string;
//     };

// type headlineTitleProps = defaultHeadlineTitleProps &
//   conditionalHeadlineTitleProps;

export default function HeadlineTitle({
  title,
  posterSrc,
  posterAlt,
  releaseYear,
  tagLine,
  showPoster = true,
  children,
}: {
  title: string;
  posterSrc?: string | null;
  posterAlt?: string;
  releaseYear?: string;
  tagLine?: string;
  showPoster?: boolean;
  children?: React.ReactNode;
}) {
  // export default function HeadlineTitle({
  //   title,
  //   posterSrc,
  //   posterAlt,
  //   releaseYear,
  //   tagLine,
  //   showPoster = true,
  //   children,
  // }: headlineTitleProps) {
  return (
    <section
      className={`md:container flex flex-col justify-end max-sm:px-0 ${
        !showPoster ? "sm:px-0" : ""
      } `}
    >
      <div className=" z-20 relative flex flex-row max-sm:flex-col max-sm:items-center mt-[-200px] items-end">
        {!!showPoster && (
          <div className="min-w-[200px] w-[200px]">
            <Image
              src={
                posterSrc
                  ? "https://image.tmdb.org/t/p/w300" + posterSrc
                  : defaultImage
              }
              height={200}
              width={200}
              alt={posterAlt + " poster"}
            />
          </div>
        )}
        <div className="bg-neutral-900 bg-opacity-70 w-full sm:h-[200px] sm:px-10  max-sm:py-6 max-sm:px-6 sm:py-12 flex flex-col justify-between ">
          {/* text-[2.5vw] */}
          <h1 className="max-sm:text-2xl max-sm:text-center md:text-[2.8vw] lg:text-3xl font-normal text-yellow-300">
            {title}
            {releaseYear ? "(" + getDate(releaseYear).year + ")" : ""}
          </h1>
          {tagLine && <span className="max-sm:text-center ">{tagLine}</span>}
        </div>
      </div>
      {children}
    </section>
  );
}
