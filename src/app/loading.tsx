import { Skeleton } from "@/components/ui/skeleton";

export default function loading() {
  return (
    <main className="container">
      Loading
      <Skeleton className="h-[355px] w-full bg-neutral-700" />
    </main>
  );
}
