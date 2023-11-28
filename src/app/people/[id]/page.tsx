import { fetchData } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import FullPageBodyLayout from "@/components/layout/element/FullPageBodyLayout";
import PageBodyLayout from "@/components/layout/element/PageBodyLayout";
import VideoCardItem from "@/components/ui/VideoCardItem/VideoCardItem";
import { resultLimit } from "@/utils/dataLimit";
import getDate from "@/utils/getDate";
import Link from "next/link";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const personDetails = await fetchData(`person/${id}?language=en-US`, {
    next: 3600,
  });

  const movieCredits = await fetchData(
    `person/${id}/movie_credits?language=en-US`,
    {
      next: 3600,
    }
  );

  const personCredits = resultLimit(movieCredits.cast, 6);

  return (
    <main className="pt-24">
      {personDetails && (
        <>
          <HeadlineImage showImage={false} />
          <HeadlineTitle
            title={
              personDetails.name
                ? personDetails.name
                : `The person doesn't exist`
            }
            posterSrc={personDetails.profile_path}
            posterAlt={personDetails.name}
            releaseYear={personDetails.release_date}
            tagLine={personDetails.known_for_department}
          >
            <div className="flex flex-row">
              <div className="md:min-w-[200px]"></div>
              <div className="w-fit max-sm:px-0 px-10 flex flex-col gap-2">
                <div className="pb-4">
                  {personDetails.birthday && (
                    <span className="pr-5 text-lg">
                      {getDate(personDetails.birthday).fullDate}
                    </span>
                  )}
                  {personDetails.deathday && (
                    <>
                      <span className="text-2xl">-</span>
                      <span className="pl-5 text-lg">
                        {getDate(personDetails.deathday).fullDate}
                      </span>
                    </>
                  )}
                </div>
                {personDetails.place_of_birth && (
                  <>
                    <h2 className="text-xl text-yellow-300">Birth Place</h2>
                    <p className=" ">{personDetails.place_of_birth}</p>
                  </>
                )}
              </div>
            </div>
          </HeadlineTitle>
          {personDetails.biography && (
            <PageBodyLayout>
              <h2 className="text-xl text-yellow-300 pb-2">Biography</h2>
              <div className="flex flex-col">
                <p>{personDetails.biography}</p>
              </div>
            </PageBodyLayout>
          )}

          {!!personCredits && (
            <FullPageBodyLayout>
              <h2 className="text-2xl text-yellow-300 pb-6">Movies Played</h2>
              <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-6 gap-6">
                {personCredits.length > 0 &&
                  personCredits.map((personCredit, index) => (
                    <VideoCardItem key={index} data={personCredit} />
                  ))}
              </div>
              {movieCredits.cast.length > 6 && (
                <div className="flex justify-center pt-10">
                  <Link
                    href={`/people/movie/${id}`}
                    className="text-center w-60 p-2 bg-yellow-300 text-neutral-900 font-semi bold uppercase block rounded-xl hover:bg-yellow-200 transition-all"
                  >
                    View More
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
