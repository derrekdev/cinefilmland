import { fetchData } from "@/components/hooks/movie";
import Initiate from "@/components/layout/Provider/Provider";
import VideoList from "@/components/ui/VideoList/VideoList";
import VideoListLoading from "@/components/ui/VideoListLoading/VideoListLoading";
import HomeHero from "@/features/Home/HomeHero/HomeHero";
import HomePanel from "@/features/Home/HomePanel/HomePanel";
import { resultLimit } from "@/utils/dataLimit";
import { Suspense } from "react";

export default async function Home() {
  const moviePopular = await fetchData("movie/popular?language=en-US&page=1", {
    next: { revalidate: 3600 },
  });
  const movieDiscover = await fetchData(
    "discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc",
    { next: { revalidate: 3600 } }
  );
  const movieUpcoming = await fetchData(
    "movie/upcoming?language=en-US&page=1",
    { next: { revalidate: 3600 } }
  );
  const movieTrending = await fetchData(
    "trending/movie/week?language=en-US&page=1",
    { next: { revalidate: 3600 } }
  );

  const seriesTrending = await fetchData(
    "trending/tv/week?language=en-US&page=1",
    { next: { revalidate: 3600 } }
  );

  const seriesPopular = await fetchData("tv/popular?language=en-US&page=1", {
    next: { revalidate: 3600 },
  });

  const seriesDiscover = await fetchData(
    "discover/tv?include_adult=false&ilanguage=en-US&include_video=false&page=1&sort_by=popularity.desc",
    { next: { revalidate: 3600 } }
  );

  return (
    <main className="">
      <Initiate>
        <HomeHero />
        <HomePanel
          movieChildren={
            <>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Trending"
                  data={resultLimit(movieTrending.results, 5)}
                  btnHref="/movie_trending"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Popular"
                  data={resultLimit(moviePopular.results, 5)}
                  btnHref="/movie_popular"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Upcoming"
                  data={resultLimit(movieUpcoming.results, 5)}
                  btnHref="/movie_upcoming"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Discover"
                  data={resultLimit(movieDiscover.results, 5)}
                  btnHref="/"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
            </>
          }
          seriesChildren={
            <>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Trending"
                  data={resultLimit(seriesTrending.results, 5)}
                  btnHref="/series_trending"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Popular"
                  data={resultLimit(seriesPopular.results, 5)}
                  btnHref="/series_popular"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
              <Suspense
                fallback={<VideoListLoading addClassName="md:grid-cols-5" />}
              >
                <VideoList
                  title="Discovery"
                  data={resultLimit(seriesDiscover.results, 5)}
                  btnHref="/series_discovery"
                  addClassName="md:grid-cols-5"
                />
              </Suspense>
            </>
          }
        />
      </Initiate>
    </main>
  );
}
