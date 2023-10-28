import { fetchData } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import PageBodyLayout from "@/components/layout/element/PageBodyLayout";
import getDate from "@/utils/getDate";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  // const movieDetail = await fetchData(`movie/${id}`, { next: 60 });
  // const movieCastCredits = await fetchData(
  //   `movie/${id}/credits?language=en-US`,
  //   {
  //     next: 3600,
  //   }
  // );

  // 'https://api.themoviedb.org/3/trending/person/week?language=en-US'
  const personDetails = await fetchData(`person/${id}?language=en-US`, {
    next: 3600,
  });

  return (
    <main className="pt-24">
      {personDetails && (
        <>
          <HeadlineImage showImage={false} />
          <HeadlineTitle
            title={personDetails.name}
            posterSrc={personDetails.profile_path}
            posterAlt={personDetails.name}
            releaseYear={personDetails.release_date}
            tagLine={personDetails.known_for_department}
          >
            <div className="flex flex-row">
              <div className="md:min-w-[200px]"></div>
              <div className="w-fit max-sm:px-0 px-10 flex flex-col gap-2">
                <div className="pb-4">
                  <span className="pr-5 text-lg">
                    {getDate(personDetails.birthday).fullDate}
                  </span>
                  {personDetails.deathday && (
                    <>
                      <span className="text-2xl">-</span>
                      <span className="pl-5 text-lg">
                        {getDate(personDetails.deathday).fullDate}
                      </span>
                    </>
                  )}
                </div>
                <h2 className="text-xl text-yellow-300">Birth Place</h2>
                <p className=" ">{personDetails.place_of_birth}</p>
              </div>
            </div>
          </HeadlineTitle>
          <PageBodyLayout>
            <h2 className="text-xl text-yellow-300 pb-2">Biography</h2>
            <div className="flex flex-col">
              <p>{personDetails.biography}</p>
            </div>
          </PageBodyLayout>
        </>
      )}
    </main>
  );
}
