import { fetchData } from "@/components/hooks/movie";
import Videolist from "@/features/VideoList/VideoList";
import { SearchParamsType } from "@/types/search";
import { handlePageNumber } from "@/utils/handleURL";

export default async function page({
  searchParams,
}: {
  searchParams?: SearchParamsType;
}) {
  const searchType = await searchParams;
  const currentPage = (searchType?.page || 1).toString();
  const movieTrending = await fetchData(
    `trending/movie/week?language=en-US&page=${handlePageNumber(currentPage)}
    }`,
    { next: 60 }
  );
  const page = currentPage ? parseInt(currentPage) : 1;

  return (
    <div className="lg:w-10/12 pt-32">
      <h1 className="text-yellow-300 text-4xl lg:px-6 pb-6">Trending</h1>
      <Videolist
        data={movieTrending.results}
        pageTotal={movieTrending.total_pages}
        pageNumber={page}
        pageMax={500}
      />
    </div>
  );
}
