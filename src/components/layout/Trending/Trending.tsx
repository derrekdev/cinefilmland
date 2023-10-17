"use client";

import MovieCardItem from "@/components/ui/MovieCardItem/MovieCardItem";
import HomeSectionLayout from "../element/HomeSectionLayout";

export default function Trending({ data }: { data: movieProps[] }) {
  // const [moviePopular, setMoviePopular] = useState(data ? data : []);

  return (
    <HomeSectionLayout>
      <h2 className="text-yellow-300 text-2xl up pb-6">Trending</h2>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-5 grid-rows-5 gap-4">
        {data &&
          data.length > 0 &&
          data.map((trending, index) => (
            <MovieCardItem key={index} movie={trending} />
          ))}
      </div>
    </HomeSectionLayout>
  );
}
