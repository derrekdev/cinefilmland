import { Skeleton } from "../skeleton";

export default function MovieItemLoading() {
  return (
    <div className="p-2 bg-neutral-800 transition-all rounded-[10px] group overflow-hidden">
      <div className="rounded-[10px] overflow-hidden transition-all h-[366px]">
        <Skeleton className="h-[355px] w-[250px] bg-neutral-700" />
      </div>
      <Skeleton className="text-left pt-2 text-[2.5vw] md:text-[1.8vw] lg:text-base font-base text-yellow-300 bg-neutral-700 h-10 " />
    </div>
  );
}
