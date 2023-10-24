import { fetchData } from "@/components/hooks/movie";
import Videolist from "@/features/VideoList/VideoList";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const movieTrending = await fetchData(
    `trending/movie/week?language=en-US&page=${
      searchParams.page ? searchParams.page : 1
    }`,
    { next: 60 }
  );
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  console.log("movieTrending", movieTrending);

  return (
    <div className="w-10/12 pt-32">
      <h1 className="text-yellow-300 text-4xl px-10 pb-6">Trending</h1>
      <Videolist
        data={movieTrending.results}
        pageTotal={movieTrending.total_pages}
        pageNumber={page}
        pageMax={500}
      />
    </div>
  );
}
