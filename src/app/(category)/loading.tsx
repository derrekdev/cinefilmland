import HomeSectionLayout from "@/components/layout/element/HomeSectionLayout";
import MovieItemLoading from "@/components/ui/MovieItemLoading/MovieItemLoading";
import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main className={`container bg-neutral-900 text-neutral-100`}>
      <section className="flex flex-row w-full">
        <div className="lg:w-10/12 pt-32">
          <Skeleton className="text-yellow-300 text-4xl lg:px-6 pb-6 h-12" />
          <div>
            <div className={`lg:pt-10`}>
              <div className="flex flex-row justify-center gap-2 text-center ">
                <Skeleton className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all h-10 w-[120px]" />
                <div className="grid grid-flow-col justify-center gap-2 text-center max-lg:hidden">
                  {[
                    ...Array(10).map((x, i) => (
                      <Skeleton
                        key={i}
                        className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all h-10"
                      />
                    )),
                  ]}
                </div>
                <Skeleton className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all h-10 w-[120px]" />
              </div>
            </div>
          </div>
        </div>

        <HomeSectionLayout withContainerPadding={true}>
          <Skeleton className="text-yellow-300 text-[5vw] md:text-2xl up pb-6 h-12" />
          <div
            className={`grid grid-flow-row grid-cols-2 xs:grid-cols-3 gap-4 overflow-hidden md:grid-cols-4 lg:grid-cols-5`}
          >
            {[...Array(20).map((x, i) => <MovieItemLoading key={i} />)]}
          </div>
        </HomeSectionLayout>
      </section>
    </main>
  );
}
