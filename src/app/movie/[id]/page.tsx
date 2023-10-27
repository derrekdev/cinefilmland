import coverImage from "@/../public/bg-image-cover.jpeg";
import defaultImage from "@/../public/default_poster.jpg";
import { fetchData } from "@/components/hooks/movie";
import PeopleCardItem from "@/components/ui/PeopleCardItem/PeopleCardItem";
import convertTime from "@/utils/convertTime";
import getDate from "@/utils/getDate";
import resultLimit from "@/utils/resultLimit";
import Image from "next/image";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieDetail = await fetchData(`movie/${id}`, { next: 60 });
  const movieCastCredits = await fetchData(
    `movie/${id}/credits?language=en-US`,
    {
      next: 60,
    }
  );

  // https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US

  const { getHoursMins } = convertTime();

  // movieDetail.backdrop_path full image
  // https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg

  // movieDetail.title name
  // movieDetail.overview
  // movieDetail.poster_path
  // movieDetail.tagline
  // movieDetail.status
  // movieDetail.release_date
  // movieDetail.genres[ id, name ]

  console.log("===========================");
  console.log("movieDetail", movieDetail);
  console.log("===========================");
  console.log("movieCast", movieCastCredits.cast);

  console.log("movieCast", movieCastCredits.cast.length);
  const movieCast = resultLimit(movieCastCredits.cast, 6);

  console.log("movieCast", movieCast);

  return (
    <main className="pt-24">
      {movieDetail && (
        <>
          <section className="h-[50vh] max-h-[500px] relative flex flex-col justify-end ">
            <Image
              src={
                movieDetail.poster_path
                  ? "https://image.tmdb.org/t/p/original" +
                    movieDetail.backdrop_path
                  : coverImage
              }
              fill
              // height={500}
              alt={movieDetail.title + " cover"}
              className="h-[50vh] object-cover z-10"
              // style={{
              //   objectFit: "cover",
              // }}
            />
          </section>
          <section className="container flex flex-col ">
            <div className=" z-20 relative flex flex-row mt-[-180px] items-end">
              <div className="min-w-[200px] w-[200px]">
                <Image
                  src={
                    movieDetail.poster_path
                      ? "https://image.tmdb.org/t/p/w300" +
                        movieDetail.poster_path
                      : defaultImage
                  }
                  height={200}
                  width={200}
                  alt={movieDetail.title + " poster"}
                />
              </div>
              <div className="bg-neutral-900 bg-opacity-70 w-full h-[200px] px-10 py-12 flex flex-col justify-between ">
                <h1 className="text-[2.5vw] md:text-[2.8vw] lg:text-3xl font-normal text-yellow-300">
                  {movieDetail.title} ({getDate(movieDetail.release_date).year})
                </h1>
                <span>{movieDetail.tagline}</span>
              </div>
            </div>
            <div className="flex flex-row">
              <div className="min-w-[200px]"></div>
              <div className="w-fit px-10 flex flex-col gap-6">
                <div>
                  <span className="pr-8 text-lg">{movieDetail.status}</span>
                  {movieDetail.genres.map(
                    (genre: genreProps, index: number) => (
                      <span
                        key={genre.id}
                        className={
                          index >= movieDetail.genres.length - 1
                            ? "pr-8"
                            : "pr-2"
                        }
                      >
                        {genre.name}
                        {index < movieDetail.genres.length - 1 ? "," : ""}
                      </span>
                    )
                  )}
                  <span>{getHoursMins(movieDetail.runtime)}</span>
                </div>
                <p className=" ">{movieDetail.overview}</p>
              </div>
            </div>
          </section>
          <section className="container flex flex-col pt-10">
            <div className="flex flex-row">
              <div className="min-w-[200px]"></div>
              <div className=" px-10 ">
                <h2 className="text-2xl text-yellow-300 pb-6">Cast</h2>
                <div className="grid max-md:grid-cols-2 max-lg:grid-cols-3 grid-cols-6 gap-6">
                  {movieCast &&
                    movieCast.map((cast: castActorProps, index: number) => (
                      // <div key={index}>{cast.name}</div>
                      <PeopleCardItem key={index} cast={cast} />
                    ))}
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
