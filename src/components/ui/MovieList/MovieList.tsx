"use client";

import MovieCardItem from "@/components/ui/MovieCardItem/MovieCardItem";
import Link from "next/link";
import HomeSectionLayout from "../../layout/element/HomeSectionLayout";

export default function MovieList({
  data,
  title = "",
  btnHref = "",
  addClassName = "",
}: {
  data: movieProps[];
  title?: string;
  btnHref?: string;
  addClassName?: string;
}) {
  return (
    <HomeSectionLayout withContainerPadding={true}>
      {title && (
        <h2 className="text-yellow-300 text-[5vw] md:text-2xl up pb-6">
          {title}
        </h2>
      )}
      <div
        className={`grid grid-flow-row grid-cols-2 xs:grid-cols-3 gap-4 overflow-hidden ${addClassName}`}
      >
        {data &&
          data.length > 0 &&
          data.map((trending, index) => (
            <MovieCardItem key={index} movie={trending} />
          ))}
      </div>
      {btnHref && (
        <div className="text-center  pt-6 flex justify-center">
          <Link
            href={btnHref}
            className="text-center w-60 p-2 bg-yellow-300 text-neutral-900 font-semi bold uppercase block rounded-xl hover:bg-yellow-200 transition-all"
          >
            View More
          </Link>
        </div>
      )}
    </HomeSectionLayout>
  );
}
