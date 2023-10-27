import { fetchData } from "@/components/hooks/movie";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieDetail = await fetchData(`movie/${id}`, { next: 60 });
  const movieCastCredits = await fetchData(
    `movie/${id}/credits?language=en-US`,
    {
      next: 3600,
    }
  );

  return <main className="pt-24">People</main>;
}
