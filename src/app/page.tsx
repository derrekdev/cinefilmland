import { fetchData } from "@/components/hooks/movie";
import HomeHero from "@/components/layout/HomeHero/HomeHero";
import HomeSearch from "@/components/layout/HomeSearch/HomeSearch";
import Trending from "@/components/layout/Trending/Trending";

export default async function Home() {
  const moviePopular = await fetchData("movie/popular?language=en-US&page=1");
  const movieDiscover = await fetchData(
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc"
  );
  const movieUpcoming = await fetchData("movie/upcoming?language=en-US&page=1");
  const movieTrending = await fetchData("trending/movie/week?language=en-US");

  // https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc

  console.log("data test", movieDiscover);

  const dataList = {
    moviePopular,
    movieDiscover: movieDiscover.results,
    movieUpcoming: movieUpcoming.results,
    movieTrending: movieTrending.results,
  };

  return (
    <main className="pt-32">
      <HomeHero />
      {/* <section className="container flex min-h-screen flex-col items-center justify-between p-10 "> */}
      {/* <HomeBlock data={dataList} /> */}
      <HomeSearch />
      <Trending data={movieTrending.results} />
      {/* </section> */}
    </main>
  );
}
