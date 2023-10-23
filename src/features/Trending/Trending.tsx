"use client";

import { fetchOptions } from "@/components/hooks/movie";
import MovieList from "@/components/ui/MovieList/MovieList";
import axios from "axios";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useQuery } from "react-query";

export default function Trending({
  // data,
  pageTotal,
  pageNumber,
}: {
  // data: movieProps[];
  pageTotal: number;
  pageNumber: number;
}) {
  const [pageNum, setPageNum] = useState(pageNumber);
  // const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  router.replace(`${pathname}?${params}`);
  params.set("page", pageNum.toString());

  console.log("params", params);
  // const { urlSearchParams, setQueryParams } = useQueryParams();

  // const currentPage = searchParams;
  // console.log("props", pageNumber);

  // console.log("searchParams", pageNumber);

  const retrieveTrendingMovies = async () => {
    // setPageNum()
    const response = await axios.get(
      `${process.env.API_URL}trending/movie/week?language=en-US&page=${pageNum}`,
      fetchOptions
    );
    return response.data;
  };

  const { data, isLoading } = useQuery(`getMovies`, retrieveTrendingMovies);

  const pageList = [];

  for (let x = 1; x < pageTotal && x !== 10; x++) {
    pageList.push(x);
  }

  // if (isLoading) {
  //   console.log("test trigger load");
  // }

  // console.log("test", pageNum, data);

  const handlePage = async (page: number) => {
    setPageNum(page);
    // const movieTrending = await fetchData(
    //   "trending/movie/week?language=en-US&page=2",
    //   { next: 60 }
    // );

    // searchParams.set("page", page);
    console.log("test", pageNum, data);
  };
  return (
    <div>
      {!isLoading && data && data.results.length > 0 && (
        <MovieList data={data.results} />
      )}

      {pageNumber && (
        <div className="flex flex-row justify-center gap-2 text-center py-20">
          <button
            className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8"
            onClick={() => {
              handlePage(1);
            }}
          >
            First
          </button>
          {pageList.length > 0 &&
            pageList.map((page, index) => (
              <button
                key={index}
                className="p-2 w-10 bg-neutral-600 rounded-[10px]"
                onClick={() => {
                  handlePage(page);
                }}
              >
                {page}
              </button>
            ))}
          <button
            className="py-2 px-4 bg-neutral-600 rounded-[10px] ml-8"
            onClick={() => {
              handlePage(1);
            }}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
}
