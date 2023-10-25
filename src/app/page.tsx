import { fetchData } from "@/components/hooks/movie";
import Initiate from "@/components/layout/Initiate/Initiate";
import MovieList from "@/components/ui/MovieList/MovieList";
import HomeHero from "@/features/Home/HomeHero/HomeHero";
import HomeSearch from "@/features/Home/HomeSearch/HomeSearch";
import resultLimit from "@/utils/resultLimit";

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
    <main className="pt-32">
      <Initiate>
        <HomeHero />

        <HomeSearch />
        <MovieList
          title="Trending"
          data={resultLimit(movieTrending.results, 5)}
          btnHref="/movie_trending"
        />
        <MovieList
          title="Popular"
          data={resultLimit(moviePopular.results, 5)}
          btnHref="/movie_popular"
        />
        <MovieList
          title="Upcoming"
          data={resultLimit(movieUpcoming.results, 5)}
          btnHref="/movie_upcoming"
        />
        <MovieList
          title="Discover"
          data={resultLimit(movieDiscover.results, 5)}
          btnHref="/movie_discover"
        />
      </Initiate>
    </main>
  );
}
