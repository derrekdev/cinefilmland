"use client";

import MovieList from "@/components/ui/MovieList/MovieList";
import Pagination from "@/components/ui/Pagination/Pagination";
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
  const maxPageNumberDisplay = 10;

  let startPage = 1;
  let maxPageNumber = maxPageNumberDisplay;

  if (pageTotal > pageMax) pageTotal = pageMax;

  if (pageNumber > 4 && pageNumber < pageTotal - 4) {
    startPage = pageNumber - 4;
    maxPageNumber = pageNumber + 5;
  } else if (pageNumber >= pageTotal - 4) {
    startPage = pageTotal - 10;
    maxPageNumber = pageTotal;
  }

  for (startPage; startPage <= maxPageNumber; startPage++) {
    pageList.push(startPage);
  }

  const handlePage = async (page: number) => {
    router.push(`${pathname}?page=${page}`);
  };

  return (
    <div>
      <Pagination
        pageTotal={pageTotal}
        pageNumber={pageNumber}
        pageMax={pageMax}
        handleClick={handlePage}
        addClass="lg:pt-10"
      />

      {data && data.length > 0 && (
        <MovieList data={data} addClassName="md:grid-cols-4 lg:grid-cols-5" />
      )}

      <Pagination
        pageTotal={pageTotal}
        pageNumber={pageNumber}
        pageMax={pageMax}
        handleClick={handlePage}
        addClass="lg:pb-10"
      />

      {/* {pageNumber && pageTotal > 1 && (
        <div className="flex flex-row justify-center gap-2 text-center lg:py-20">
          {!pageList.includes(1) && (
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all"
              onClick={() => {
                handlePage(1);
              }}
            >
              First
            </button>
          )}
          <div className="grid grid-flow-col justify-center gap-2 text-center max-lg:hidden">
            {pageList.length > 0 &&
              pageList.map((page, index) => (
                <button
                  key={index}
                  className={`p-2 w-10 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all ${
                    page === pageNumber ? "text-yellow-300 scale-[115%]" : ""
                  }`}
                  onClick={() => {
                    handlePage(page);
                  }}
                >
                  {page}
                </button>
              ))}
          </div>
          <div className="grid grid-flow-col gap-2 lg:hidden">
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all"
              onClick={() => {
                handlePage(pageNumber - 1);
              }}
            >
              Prev
            </button>
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all"
              onClick={() => {
                handlePage(pageNumber + 1);
              }}
            >
              Next
            </button>
          </div>

          {!pageList.includes(pageMax) && (
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] ml-8 hover:text-yellow-300 hover:scale-[115%] transition-all"
              onClick={() => {
                handlePage(pageTotal);
              }}
            >
              Last
            </button>
          )}
        </div>
      )} */}
    </div>
  );
}
