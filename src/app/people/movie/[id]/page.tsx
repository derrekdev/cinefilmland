import { fetchData } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import FullPageBodyLayout from "@/components/layout/element/FullPageBodyLayout";
import VideoCardItem from "@/components/ui/VideoCardItem/VideoCardItem";

export default async function page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const personDetails = await fetchData(`person/${id}?language=en-US`, {
    next: 3600,
  });
  const movieCredits = await fetchData(
    `person/${id}/movie_credits?language=en-US`,
    {
      next: 3600,
    }
  );

  console.log("movieCredits", movieCredits);

  // const personCredits = resultLimit(movieCredits.cast, 6);

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
            // tagLine={personDetails.known_for_department}
          ></HeadlineTitle>
          {!!movieCredits && (
            <FullPageBodyLayout>
              <h2 className="text-2xl text-yellow-300 pb-6">Movies Played</h2>
              <div className="grid max-sm:grid-cols-2 max-lg:grid-cols-3 grid-cols-6 gap-6">
                {movieCredits.cast.length > 0 &&
                  movieCredits.cast.map(
                    (movieCredit: movieProps, index: number) => (
                      <VideoCardItem key={index} data={movieCredit} />
                    )
                  )}
              </div>
            </FullPageBodyLayout>
          )}
        </>
      )}
    </main>
  );
}
