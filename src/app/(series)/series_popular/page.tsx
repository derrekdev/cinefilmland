import { fetchData } from "@/components/hooks/movie";
import Videolist from "@/features/VideoList/VideoList";
import { handlePageNumber } from "@/utils/handleURL";

export default async function page({
  searchParams,
}: {
  searchParams: {
    [key: string]: string;
  };
}) {
  const seriesPopular = await fetchData(
    `tv/popular?language=en-US&page=${handlePageNumber(searchParams.page)}
    }`,
    { next: 60 }
  );
  const page = searchParams.page ? parseInt(searchParams.page) : 1;

  return (
    <div className="lg:w-10/12 pt-32">
      <h1 className="text-yellow-300 text-4xl lg:px-6 pb-6">Popular</h1>
      <Videolist
        data={seriesPopular.results}
        pageTotal={seriesPopular.total_pages}
        pageNumber={page}
        pageMax={500}
      />
    </div>
  );
}
