import { fetchData } from "@/components/hooks/movie";
import Trending from "@/features/Trending/Trending";

export default async function page() {
  const movieTrending = await fetchData(
    "trending/movie/week?language=en-US&page=1",
    { next: 60 }
  );

  console.log("movieTrending", movieTrending);

  return (
    <section className="pl-80 pt-32">
      <h1 className="text-yellow-300 text-4xl up pb-6">Trending</h1>
      {/* <MovieList data={movieTrending.results} /> */}
      <Trending
        data={movieTrending.results}
        pageNumber={movieTrending.total_pages}
      />
    </section>
  );
}
