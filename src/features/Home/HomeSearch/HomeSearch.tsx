"use client";

import { fetchOptions } from "@/components/hooks/movie";
import HomeSectionLayout from "@/components/layout/element/HomeSectionLayout";
import { Input } from "@/components/ui/input";
import resultLimit from "@/utils/resultLimit";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
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
      <div className="w-full flex flex-row relative">
        <Input
          type="text"
          className="10/12 text-yellow-300 py-8 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 rounded-xl"
          placeholder="Search your movie here..."
          onChange={(e) => setSearchText(e.target.value)}
        />
        {data && searchText !== "" && (
          <div className="absolute w-full mt-[4.2rem] bg-background rounded-md p-4">
            {!isLoading &&
              data.length > 0 &&
              data.map((movie: any, index: number) => (
                <Link
                  href={`/movie/${movie.id}`}
                  key={index}
                  className="flex flex-row py-4 items-center hover:bg-neutral-900 transition-all group"
                >
                  <div className="w-[50px] h-[75px] overflow-hidden">
                    <Image
                      src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                      alt={`${movie.title} thumbnail`}
                      height={75}
                      width={50}
                      className="group-hover:scale-125 transition-all"
                    />
                  </div>
                  <span className="text-yellow-300 pl-8">{movie.title}</span>
                </Link>
              ))}
            {!isLoading && data.length === 0 && searchText !== "" && (
              <div className="flex flex-row py-4 items-center">
                <span className="text-yellow-300 pl-8">No results found</span>
              </div>
            )}
            {isLoading && searchText !== "" && (
              <div className="flex flex-row py-4 items-center">
                <span className="text-yellow-300 pl-8">Loading</span>
              </div>
            )}
          </div>
        )}
      </div>
    </HomeSectionLayout>
  );
}
