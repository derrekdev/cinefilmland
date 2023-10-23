import { fetchData } from "@/components/hooks/movie";
import Trending from "@/features/Trending/Trending";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const movieTrending = await fetchData(
    "trending/movie/week?language=en-US&page=1",
    { next: 60 }
  );
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <section className="pl-80 pt-32">
      <h1 className="text-yellow-300 text-4xl up pb-6">Trending</h1>
      {/* <MovieList data={movieTrending.results} /> */}
      <Trending
        // data={movieTrending.results}
        pageTotal={movieTrending.total_pages}
        pageNumber={page}
      />
    </section>
  );
}
