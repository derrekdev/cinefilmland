import { fetchData } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import PeopleCardItem from "@/components/ui/PeopleCardItem/PeopleCardItem";
import convertTime from "@/utils/convertTime";
import resultLimit from "@/utils/resultLimit";
import Link from "next/link";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getHoursMins } = convertTime();
  const movieDetail = await fetchData(`movie/${id}`, { next: 60 });
  const movieCastCredits = await fetchData(
    `movie/${id}/credits?language=en-US`,
    {
      next: 3600,
    }
  );

  const movieCast = resultLimit(movieCastCredits.cast, 6);

  // https://api.themoviedb.org/3/movie/movie_id/credits?language=en-US

  // movieDetail.backdrop_path full image
  // https://image.tmdb.org/t/p/original/628Dep6AxEtDxjZoGP78TsOxYbK.jpg

  // movieDetail.title name
  // movieDetail.overview
  // movieDetail.poster_path
  // movieDetail.tagline
  // movieDetail.status
  // movieDetail.release_date
  // movieDetail.genres[ id, name ]

  return (
    <main className="pt-24">
      {movieDetail && (
        <>
          <HeadlineImage
            imageSrc={movieDetail.backdrop_path}
            imageAlt={movieDetail.title}
          />
          <HeadlineTitle
            title={movieDetail.title}
            posterSrc={movieDetail.poster_path}
            posterAlt={movieDetail.title}
            releaseYear={movieDetail.release_date}
            tagLine={movieDetail.tagline}
          >
            <div className="flex flex-row">
              <div className="md:min-w-[200px]"></div>
              <div className="w-fit max-sm:px-0 px-10 flex flex-col gap-6">
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
          </HeadlineTitle>
          <section className="container flex flex-col pt-10 max-sm:px-6">
            <div className="flex flex-row ">
              <div className="md:min-w-[200px]"></div>
              <div className="w-full px-10 max-sm:px-0 flex flex-col ">
                <h2 className="text-2xl text-yellow-300 pb-6">Cast</h2>
                <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3  grid-cols-6 gap-6">
                  {movieCast &&
                    movieCast.map((cast: castActorProps, index: number) => (
                      <PeopleCardItem
                        key={index}
                        peopleId={cast.id}
                        peopleProfilePath={cast.profile_path}
                        peopleName={cast.name}
                        peopleCharacter={cast.character}
                      />
                    ))}
                </div>
                <div className="flex justify-center pt-10">
                  <Link
                    href={`/movie_cast/${id}`}
                    className="text-center w-60 p-2 bg-yellow-300 text-neutral-900 font-semibold uppercase block rounded-xl hover:bg-yellow-200 transition-all"
                  >
                    View all Cast
                  </Link>
                </div>
              </div>
            </div>
          </section>
        </>
      )}
    </main>
  );
}
