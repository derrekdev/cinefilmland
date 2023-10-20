import { fetchData } from "@/components/hooks/movie";
import MovieList from "@/components/ui/MovieList/MovieList";
import HomeHero from "@/features/Home/HomeHero/HomeHero";
import HomeSearch from "@/features/Home/HomeSearch/HomeSearch";

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

  // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

  console.log("data test", movieDiscover);

  function resultLimit(options: any, limit: number) {
    let results = [];
    let count = 0;

    while (count < limit) {
      results.push(options[count]);
      count++;
    }

    console.log("count", count);
    return results;
  }

  const dataList = {
    moviePopular,
    movieDiscover: movieDiscover.results,
    movieUpcoming: movieUpcoming.results,
    // movieTrending: movieTrending.results,
    movieTrending: resultLimit(movieTrending.results, 5),
  };

  return (
    <main className="pt-32">
      <HomeHero />
      <HomeSearch />
      <MovieList
        title="Trending"
        data={resultLimit(movieTrending.results, 5)}
        btnHref="/"
      />
      <MovieList title="Popular" data={resultLimit(moviePopular.results, 5)} />
      <MovieList
        title="Upcoming"
        data={resultLimit(movieUpcoming.results, 5)}
      />
      <MovieList
        title="Discover"
        data={resultLimit(movieDiscover.results, 5)}
      />
    </main>
  );
}
