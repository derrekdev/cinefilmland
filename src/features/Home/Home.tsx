"use client";

import VideoCardItem from "@/components/ui/VideoCardItem/VideoCardItem";
import { useState } from "react";
import HomeSectionLayout from "../../components/layout/element/HomeSectionLayout";

type movieDataProps<T> = {
  movieDiscover: T;
  movieUpcoming: T;
  movieTrending: T;
};

export default function Home({ data }: { data: movieDataProps<movieProps[]> }) {
  const [moviePopular, setMoviePopular] = useState(data ? data : []);

  return (
    <HomeSectionLayout>
      <h2 className="text-yellow-300 text-2xl up">Trending</h2>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 grid-rows-4 gap-4">
        {data.movieDiscover &&
          data.movieDiscover.length > 0 &&
          data.movieDiscover.map((discover, index) => (
            <VideoCardItem key={index} data={discover} />
          ))}
      </div>
    </HomeSectionLayout>
  );
}
