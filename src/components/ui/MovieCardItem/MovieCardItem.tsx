"use client";

import Link from "next/link";

export default function MovieCardItem({ movie }: { movie: movieProps }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="p-2 bg-neutral-800 hover:bg-neutral-700 transition-all rounded-[10px]"
    >
      <img
        src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
        alt={`${movie.title} thumbnail`}
        height={250}
        width={250}
        className="rounded-[10px]"
      />
      <h3 className="text-center pt-2 text-xl font-extralight  text-yellow-300">
        {movie.title}
      </h3>
      {/* <p>{movie.overview}</p> */}
    </Link>
  );
}