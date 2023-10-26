import { fetchData } from "@/components/hooks/movie";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieDetail = await fetchData(`movie/${id}`, { next: 60 });

  // https://api.themoviedb.org/3/movie/{movie_id}
  console.log("movieDetail", movieDetail);

  // movieDetail.backdrop_path full image
  // https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg

  // movieDetail.title name
  // movieDetail.overview
  // movieDetail.poster_path
  // movieDetail.tagline
  // movieDetail.status
  // movieDetail.release_date
  // movieDetail.genres[ id, name ]
  return <div>test</div>;
}
