"use client";

import Pagination from "@/components/ui/Pagination/Pagination";
import VideoList from "@/components/ui/VideoList/VideoList";
import { usePathname, useRouter } from "next/navigation";

// type dataProps = movieProps[] | seriesProps[];
type dataProps = movieProps[];

export default function Videolist({
  data,
  pageTotal,
  pageNumber,
  pageMax = 500,
}: {
  data: dataProps;
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
        <VideoList data={data} addClassName="md:grid-cols-4 lg:grid-cols-5" />
      )}

      <Pagination
        pageTotal={pageTotal}
        pageNumber={pageNumber}
        pageMax={pageMax}
        handleClick={handlePage}
        addClass="lg:pb-10"
      />
    </div>
  );
}
