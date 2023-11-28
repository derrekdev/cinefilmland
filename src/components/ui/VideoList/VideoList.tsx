"use client";

import Link from "next/link";
import HomeSectionLayout from "../../layout/element/HomeSectionLayout";
import VideoCardItem from "../VideoCardItem/VideoCardItem";
import VideoItemLoading from "../VideoItemLoading/VideoItemLoading";

export default function VideoList({
  data,
  title = "",
  btnHref = "",
  addClassName = "",
}: {
  data: movieProps[] | seriesProps[];
  title?: string;
  btnHref?: string;
  addClassName?: string;
}) {
  return (
    <HomeSectionLayout withContainerPadding={true}>
      {title && (
        <h2 className="text-yellow-300 text-[5vw] md:text-2xl up pb-6">
          {title}
        </h2>
      )}
      <div
        className={`grid grid-flow-row grid-cols-2 xs:grid-cols-3 gap-4 overflow-hidden ${addClassName}`}
      >
        {data &&
          data.length > 0 &&
          data.map((item, index) => <VideoCardItem key={index} data={item} />)}
        {!data && [...Array(6)].map((x, i) => <VideoItemLoading key={i} />)}
      </div>
      {btnHref && (
        <div className="text-center  pt-6 flex justify-center">
          <Link
            href={btnHref}
            className="text-center w-60 p-2 bg-yellow-300 text-neutral-900 font-semibold uppercase block rounded-xl hover:bg-yellow-200 transition-all"
          >
            View More
          </Link>
        </div>
      )}
    </HomeSectionLayout>
  );
}
