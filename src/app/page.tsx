import { fetchData } from "@/components/hooks/movie";
import Initiate from "@/components/layout/Provider/Provider";
import MovieList from "@/components/ui/MovieList/MovieList";
import HomeHero from "@/features/Home/HomeHero/HomeHero";
import { resultLimit } from "@/utils/dataLimit";
import { Suspense } from "react";

export default async function Home() {
  const moviePopular = await fetchData("movie/popular?language=en-US&page=1");
  const movieDiscover = await fetchData(
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  const movieUpcoming = await fetchData("movie/upcoming?language=en-US&page=1");
  const movieTrending = await fetchData(
    "trending/movie/week?language=en-US&page=1",
    { next: 3600 }
  );

  return (
    <main className="">
      <Initiate>
        <HomeHero />

        <Suspense fallback={<p>Loading.......</p>}>
          <MovieList
            title="Trending"
            data={resultLimit(movieTrending.results, 5)}
            btnHref="/movie_trending"
            addClassName="md:grid-cols-5"
          />
        </Suspense>
        <MovieList
          title="Popular"
          data={resultLimit(moviePopular.results, 5)}
          btnHref="/movie_popular"
          addClassName="md:grid-cols-5"
        />
        <MovieList
          title="Upcoming"
          data={resultLimit(movieUpcoming.results, 5)}
          btnHref="/movie_upcoming"
          addClassName="md:grid-cols-5"
        />
        <MovieList
          title="Discover"
          data={resultLimit(movieDiscover.results, 5)}
          btnHref="/movie_discover"
          addClassName="md:grid-cols-5"
        />
      </Initiate>
    </main>
  );
}
