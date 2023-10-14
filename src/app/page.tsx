import { fetchData } from "@/components/hooks/movie";
import HomeBlock from "@/components/layout/Home/Home";
import HomeHero from "@/components/layout/HomeHero/HomeHero";

export default async function Home() {
  const moviePopular = await fetchData("movie/popular?language=en-US&page=1");

  console.log("data test", moviePopular);

  const dataList = {
    moviePopular,
  };

  return (
    <main className="pt-32">
      <HomeHero />
      <section className="container flex min-h-screen flex-col items-center justify-between p-10 ">
        <HomeBlock data={dataList} />
      </section>
    </main>
  );
}
