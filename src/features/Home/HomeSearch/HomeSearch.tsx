"use client";

import defaultImage from "@/../public/default_poster.jpg";
import { fetchOptions } from "@/components/hooks/movie";
import HomeSectionLayout from "@/components/layout/element/HomeSectionLayout";
import { Input } from "@/components/ui/input";
import { Skeleton } from "@/components/ui/skeleton";
import resultLimit from "@/utils/resultLimit";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscChromeClose } from "react-icons/vsc";
import { useQuery } from "react-query";

export default function HomeSearch() {
  const [searchText, setSearchText] = useState("");

  const fetchSearchMovie = async ({ queryKey }: { queryKey: any }) => {
    const [_key, { activeParams }] = queryKey;
    const res = await axios(
      `https://api.themoviedb.org/3/search/movie?query=${activeParams}&include_adult=false&language=en-US&page=1`,
      fetchOptions
    );

    return resultLimit(res.data.results, 5);
  };

  const { data, isLoading } = useQuery(
    ["searchMovie", { activeParams: searchText }],
    fetchSearchMovie
  );

  return (
    <HomeSectionLayout>
      <search className="w-full flex flex-row relative">
        <Input
          type="text"
          className="10/12 text-yellow-300 py-2 md:py-8 pl-2 md:pl-8 text-xs lg:text-lg focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl"
          placeholder="Search your movie here..."
          onChange={(e) => setSearchText(e.target.value)}
          value={searchText}
        />
        <button
          className="absolute top-3 md:top-5 pr-4 md:pr-6 right-0 block text-red-700 md:text-2xl"
          onClick={() => setSearchText("")}
        >
          <VscChromeClose />
        </button>
        {searchText !== "" && (
          <div className="absolute w-full mt-[4.2rem] bg-background rounded-lg overflow-hidden z-10">
            {!isLoading &&
              data &&
              data.length > 0 &&
              data.map((movie: any, index: number) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={index}
                  className="flex flex-row p-4 items-center hover:bg-neutral-900 transition-all group"
                >
                  <div className="inline-block xs:max-md:w-14 h-[75px] rounded-md  overflow-hidden mr-2 md:mr-8">
                    <Image
                      src={`${
                        movie.poster_path
                          ? "https://image.tmdb.org/t/p/w200" +
                            movie.poster_path
                          : defaultImage.src
                      }`}
                      alt={`${movie.title} thumbnail`}
                      height={75}
                      width={50}
                      className="w-14 group-hover:scale-125 transition-all"
                      loading="lazy"
                      // onError={(e) => {
                      //   e.currentTarget.onerror = null;
                      //   e.currentTarget.src = String(defaultImage);
                      // }}
                    />
                  </div>
                  <span className="text-yellow-300 xs:max-md:w-4/6 group-hover:text-xl transition-all">
                    {movie.title}
                  </span>
                </Link>
              ))}
            {!isLoading && data && data.length === 0 && searchText !== "" && (
              <div className="flex flex-row p-4 items-center justify-center">
                <span className="text-yellow-300 pl-8">No results found</span>
              </div>
            )}
            {isLoading && searchText !== "" && (
              <>
                <div className="flex flex-row p-4 items-center hover:bg-neutral-900 transition-all group">
                  <div className="inline-block xs:max-md:w-14 h-[75px] overflow-hidden pr-2 md:pr-8">
                    <Skeleton className="h-[75px] w-[50px] transition-all" />
                  </div>
                  <span className="text-yellow-300 xs:max-md:w-4/6 ">
                    <Skeleton className="h-8 w-[250px]" />
                  </span>
                </div>
                <div className="flex flex-row p-4 items-center hover:bg-neutral-900 transition-all group">
                  <div className="inline-block xs:max-md:w-14 h-[75px] overflow-hidden pr-2 md:pr-8">
                    <Skeleton className="h-[75px] w-[50px] transition-all" />
                  </div>
                  <span className="text-yellow-300 xs:max-md:w-4/6 ">
                    <Skeleton className="h-8 w-[250px]" />
                  </span>
                </div>
              </>
            )}
          </div>
        )}
      </search>
    </HomeSectionLayout>
  );
}
