"use client";

import MovieList from "@/components/ui/MovieList/MovieList";
import { usePathname, useRouter } from "next/navigation";

export default function Videolist({
  data,
  pageTotal,
  pageNumber,
  pageMax = 500,
}: {
  data: movieProps[];
  pageTotal: number;
  pageNumber: number;
  pageMax?: number;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const pageList = [];

  let x = 1;
  let maxPageNumber = 10;

  if (pageTotal > pageMax) pageTotal = pageMax;

  if (pageNumber > 4 && pageNumber < pageTotal - 4) {
    x = pageNumber - 4;
    maxPageNumber = pageNumber + 5;
  } else if (pageNumber >= pageTotal - 4) {
    x = pageTotal - 10;
    maxPageNumber = pageTotal;
  }

  for (x; x <= maxPageNumber; x++) {
    pageList.push(x);
  }

  const handlePage = async (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div>
      {data && data.length > 0 && <MovieList data={data} />}

      {pageNumber && pageTotal > 1 && (
        <div className="flex flex-row justify-center gap-2 text-center py-20">
          <button
            className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all"
            onClick={() => {
              handlePage(1);
            }}
          >
            First
          </button>
          {pageList.length > 0 &&
            pageList.map((page, index) => (
              <button
                key={index}
                className="p-2 w-10 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all"
                onClick={() => {
                  handlePage(page);
                }}
              >
                {page}
              </button>
            ))}
          <button
            className="py-2 px-4 bg-neutral-600 rounded-[10px] ml-8 hover:text-yellow-300 hover:scale-[115%] transition-all"
            onClick={() => {
              handlePage(pageTotal);
            }}
          >
            Last
          </button>
        </div>
      )}
    </div>
  );
}
