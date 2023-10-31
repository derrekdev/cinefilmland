import { fetchData } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import FullPageBodyLayout from "@/components/layout/element/FullPageBodyLayout";
import YoutubePlayer from "@/components/ui/YoutubePlayer/YoutubePlayer";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const movieDetail = await fetchData(`movie/${id}`, { next: 3600 });
  // const movieCastCredits = await fetchData(
  //   `movie/${id}/credits?language=en-US`,
  //   {
  //     next: 3600,
  //   }
  // );

  const movieVideos = await fetchData(`movie/${id}/videos?language=en-US'/`, {
    next: 3600,
  });

  console.log("movieVideos", movieVideos);

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
          />
          {!!movieVideos && (
            <FullPageBodyLayout>
              <h2 className="text-2xl text-yellow-300 pb-6">Videos</h2>
              <div className="grid max-md:grid-cols-2 grid-cols-3 gap-4">
                {movieVideos.results.length > 0 &&
                  movieVideos.results.map((video: videoprops) => (
                    <YoutubePlayer
                      key={video.key}
                      embedId={video.key}
                      title={video.name}
                      width="400"
                      height="220"
                    />
                  ))}
              </div>
            </FullPageBodyLayout>
          )}
        </>
      )}
    </main>
  );
}
