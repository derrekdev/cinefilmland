import HomeSectionLayout from "@/components/layout/element/HomeSectionLayout";
import MovieItemLoading from "../MovieItemLoading/MovieItemLoading";
import { Skeleton } from "../skeleton";

export default function MovieListLoading({
  addClassName,
}: {
  addClassName: string;
}) {
  return (
    <HomeSectionLayout withContainerPadding={true}>
      <Skeleton className="pb-6 h-10 w-40 mb-6 bg-neutral-700 animate-pulse " />
      <div
        className={`grid grid-flow-row grid-cols-2 xs:grid-cols-3 gap-4 overflow-hidden ${addClassName}`}
      >
        {Array.apply(null, Array(5)).map((x, i) => (
          <MovieItemLoading />
        ))}
      </div>
      <div className="text-center  pt-6 flex justify-center"></div>
    </HomeSectionLayout>
  );
}
