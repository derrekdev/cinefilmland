import { fetchData } from "@/components/hooks/movie";
import Videolist from "@/features/VideoList/VideoList";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const movieDiscover = await fetchData(
    `discover/movie?language=en-US&page=${
      searchParams.page ? searchParams.page : 1
    }`,
    { next: 60 }
  );
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  console.log("movieUpcoming", movieDiscover);

  return (
    <section className="pl-80 pt-32">
      <h1 className="text-yellow-300 text-4xl up pb-6">Discover</h1>
      <Videolist
        data={movieDiscover.results}
        pageTotal={movieDiscover.total_pages}
        pageNumber={page}
        pageMax={500}
      />
    </section>
  );
}
