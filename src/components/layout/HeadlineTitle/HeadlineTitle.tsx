import defaultImage from "@/../public/default_poster.jpg";
import getDate from "@/utils/getDate";
import Image from "next/image";
import React from "react";

export default function HeadlineTitle({
  title,
  posterSrc,
  posterAlt,
  releaseYear,
  tagLine,
  children,
}: {
  title: string;
  posterSrc: string | null;
  posterAlt: string;
  releaseYear: string;
  tagLine?: string;
  children?: React.ReactNode;
}) {
  return (
    <section className="container flex flex-col ">
      <div className=" z-20 relative flex flex-row mt-[-200px] items-end">
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
        <div className="bg-neutral-900 bg-opacity-70 w-full h-[200px] px-10 py-12 flex flex-col justify-between ">
          <h1 className="text-[2.5vw] md:text-[2.8vw] lg:text-3xl font-normal text-yellow-300">
            {title} ({getDate(releaseYear).year})
          </h1>
          {tagLine && <span>{tagLine}</span>}
        </div>
      </div>
      {children}
      {/* <div className="flex flex-row">
              <div className="min-w-[200px]"></div>
              <div className="w-fit px-10 flex flex-col gap-6">
                <div>
                  <span className="pr-8 text-lg">{movieDetail.status}</span>
                  {movieDetail.genres.map(
                    (genre: genreProps, index: number) => (
                      <span
                        key={genre.id}
                        className={
                          index >= movieDetail.genres.length - 1
                            ? "pr-8"
                            : "pr-2"
                        }
                      >
                        {genre.name}
                        {index < movieDetail.genres.length - 1 ? "," : ""}
                      </span>
                    )
                  )}
                  <span>{getHoursMins(movieDetail.runtime)}</span>
                </div>
                <p className=" ">{movieDetail.overview}</p>
              </div>
            </div> */}
    </section>
  );
}
