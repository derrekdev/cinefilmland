import { fetchData } from "@/components/hooks/movie";
import Videolist from "@/features/VideoList/VideoList";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const movieUpcoming = await fetchData(
    `movie/upcoming?language=en-US&page=${
      searchParams.page ? searchParams.page : 1
    }`,
    { next: 60 }
  );
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <div className="w-10/12 pt-32">
      <h1 className="text-yellow-300 text-4xl px-10  pb-6">Upcoming</h1>
      <Videolist
        data={movieUpcoming.results}
        pageTotal={movieUpcoming.total_pages}
        pageNumber={page}
        pageMax={500}
      />
    </div>
  );
}
