import { fetchData, generateCrewDepartement } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import FullPageBodyLayout from "@/components/layout/element/FullPageBodyLayout";
import PageBodyLayout from "@/components/layout/element/PageBodyLayout";
import PeopleCardItem from "@/components/ui/PeopleCardItem/PeopleCardItem";
import VideoCardItem from "@/components/ui/VideoCardItem/VideoCardItem";
import YoutubePlayer from "@/components/ui/YoutubePlayer/YoutubePlayer";
import { generateMoney } from "@/utils/convertNumber";
import convertTime from "@/utils/convertTime";
import { resultLimit } from "@/utils/dataLimit";
import Link from "next/link";
import { LiaImdb } from "react-icons/lia";
import { PiLinkSimpleBold } from "react-icons/pi";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getHoursMins } = convertTime();
  const movieDetail = await fetchData(`movie/${id}`, { next: 3600 });
  const movieCastCredits = await fetchData(
    `movie/${id}/credits?language=en-US`,
    {
      next: 3600,
    }
  );
  const movieVideosData = await fetchData(
    `movie/${id}/videos?language=en-US'/`,
    {
      next: 3600,
    }
  );
  const collectionId = movieDetail.belongs_to_collection.id ?? 0;

  const movieCollectionData = await fetchData(
    `collection/${collectionId}?language=en-US`,
    {
      next: 3600,
    }
  );

  const movieCast = movieCastCredits.cast
    ? resultLimit(movieCastCredits.cast, 6)
    : [];
  const movieVideos = movieVideosData.results
    ? resultLimit(movieVideosData.results, 6)
    : [];
  const movieCollections = movieCollectionData.parts
    ? resultLimit(movieCollectionData.parts, 6)
    : [];

  const movieDirect = generateCrewDepartement(
    movieCastCredits.crew,
    "Director",
    true,
    true
  );
  const movieWriter = generateCrewDepartement(
    movieCastCredits.crew,
    "Writer",
    true,
    true
  );

  return (
    <main className="pt-24">
      {!!movieDetail && (
        <>
          <HeadlineImage
            imageSrc={movieDetail.backdrop_path}
            imageAlt={movieDetail.title}
          />
          <HeadlineTitle
            title={
              movieDetail.title ? movieDetail.title : `This movie doesn't exist`
            }
            posterSrc={movieDetail.poster_path}
            posterAlt={movieDetail.title}
            releaseYear={movieDetail.release_date}
            tagLine={movieDetail.tagline}
          >
            <div className="flex max-md:flex-col flex-row">
              <div className="max-md:w-full md:min-w-[200px]">
                <div className="flex max-md:flex-row flex-col max-md:pt-8 md:pt-14 max-md:gap-10 gap-4">
                  <a
                    href={movieDetail.homepage}
                    target="_blank"
                    className="flex flex-row items-center hover:text-neutral-500 underline underline-offset-4"
                  >
                    <PiLinkSimpleBold />
                    <span className="pl-2">Offical Website</span>
                  </a>
                  <a
                    href={`https://www.imdb.com/title/${movieDetail.imdb_id}`}
                    target="_blank"
                    className="flex flex-row items-center hover:text-neutral-500 underline underline-offset-4"
                  >
                    <LiaImdb />
                    <span className="pl-2">IMDB site</span>
                  </a>
                </div>
              </div>
              <div className="w-fit max-sm:px-0 max-md:pt-8 md:pl-10 flex flex-col gap-6">
                <div>
                  {movieDetail.status && (
                    <span className="pr-8 text-lg">{movieDetail.status}</span>
                  )}
                  {movieDetail.genres &&
                    movieDetail.genres.map(
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
                  {movieDetail.runtime && (
                    <span>{getHoursMins(movieDetail.runtime)}</span>
                  )}
                </div>
                {movieDetail.overview && (
                  <p className=" ">{movieDetail.overview}</p>
                )}
              </div>
            </div>
          </HeadlineTitle>
          {!!movieCast && movieCast.length > 0 && (
            <PageBodyLayout
              leftElement={
                <div className="flex max-md:flex-row flex-col gap-8 md:pt-2  max-md:justify-between">
                  <div className="flex max-md:flex-col flex-row">
                    <h2 className="text-yellow-300 pr-5">Budget:</h2>
                    <span>{generateMoney(movieDetail.budget)}</span>
                  </div>
                  {!!movieDirect && movieDirect.length > 0 && (
                    <div className="flex flex-col">
                      <h2 className="text-yellow-300 pr-5">Directed by:</h2>
                      {movieDirect.map((direct, index) => (
                        <span key={index}>{direct.name}</span>
                      ))}
                    </div>
                  )}
                  {!!movieWriter && movieWriter.length > 0 && (
                    <div className="flex flex-col">
                      <h2 className="text-yellow-300 pr-5">Written by:</h2>
                      {movieWriter.map((writer, index) => (
                        <span key={index}>{writer.name}</span>
                      ))}
                    </div>
                  )}
                </div>
              }
            >
              <h2 className="text-2xl text-yellow-300 pb-6">Cast</h2>
              <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-6 gap-6">
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
            </PageBodyLayout>
          )}
          {!!movieCollections && movieCollections.length > 0 && (
            <FullPageBodyLayout>
              <h2 className="text-2xl text-yellow-300 pb-6">
                Movie Collection
              </h2>
              <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-6 gap-6">
                {movieCollections.map((collection, index) => (
                  <VideoCardItem key={index} movie={collection} />
                ))}
              </div>
            </FullPageBodyLayout>
          )}
          {!!movieVideos && (
            <FullPageBodyLayout>
              <h2 className="text-2xl text-yellow-300 pb-6">Videos</h2>
              <div className="grid max-md:grid-cols-2 grid-cols-3 gap-4">
                {movieVideos.length > 0 &&
                  movieVideos.map((video) => (
                    <YoutubePlayer
                      key={video.key}
                      embedId={video.key}
                      title={video.name}
                      width="400"
                      height="220"
                    />
                  ))}
              </div>
              {movieVideosData.results.length > 6 && (
                <div className="flex justify-center pt-10">
                  <Link
                    href={`/movie_video/${id}`}
                    className="text-center w-60 p-2 bg-yellow-300 text-neutral-900 font-semibold uppercase block rounded-xl hover:bg-yellow-200 transition-all"
                  >
                    View all Videos
                  </Link>
                </div>
              )}
            </FullPageBodyLayout>
          )}
        </>
      )}
    </main>
  );
}
