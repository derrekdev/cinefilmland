"use client";

import MovieList from "@/components/ui/MovieList/MovieList";

export default function Trending({
  data,
  pageNumber,
}: {
  data: movieProps[];
  pageNumber: number;
}) {
  // const movieTrending = await fetchData(
  //   "trending/movie/week?language=en-US&page=1",
  //   { next: 60 }
  // );

  const pageList = [];

  for (let x = 1; x < pageNumber && x !== 10; x++) {
    pageList.push(x);
  }
  return (
    <div>
      <MovieList data={data} />

      {pageNumber && (
        <div className="flex flex-row justify-center gap-2 text-center pb-32">
          <button className="p-2 bg-neutral-600 rounded-[10px]">First</button>
          {pageList.length > 0 &&
            pageList.map((page) => (
              <button className="p-2 w-10 bg-neutral-600 rounded-[10px]">
                {page}
              </button>
            ))}
          <button className="p-2 bg-neutral-600 rounded-[10px]">Last</button>
        </div>
      )}
    </div>
  );
}
