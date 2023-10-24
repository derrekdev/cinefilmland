"use client";

import Link from "next/link";

export default function MovieCardItem({ movie }: { movie: movieProps }) {
  return (
    <Link
      href={`/movie/${movie.id}`}
      className="p-2 bg-neutral-800 hover:bg-neutral-700 transition-all rounded-[10px] group overflow-hidden"
    >
      <div className="rounded-[10px] overflow-hidden transition-all">
        <img
          src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
          alt={`${movie.title} thumbnail`}
          height={355}
          width={250}
          className="group-hover:scale-110 transition-all"
        />
      </div>
      <h3 className="text-center pt-2 text-xl font-normal text-yellow-300">
        {movie.title}
      </h3>
      {/* <p>{movie.overview}</p> */}
    </Link>
  );
}
