import Image from "next/image";
import HomeSearch from "../HomeSearch/HomeSearch";

export default function HomeHero() {
  return (
    <section className="text-white body-font h-[100vh] pt-32">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center h-[50vh] pt-24 md:pt-0">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center justify-end text-center z-10  bg-neutral-900 bg-opacity-0 ">
          <h1 className="title-font text-[10vw] xs:text-2xl lg:text-6xl mb-4 font-medium text-yellow-300">
            CineFilmLand
            <br className="hidden lg:inline-block" />
          </h1>
          <p className="mb-8 leading-relaxed">
            Website that provides information about millions of films and
            television programs
          </p>
          {/* <div className="flex justify-center">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              View
            </button>
          </div> */}
        </div>

        {/* <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6"> */}
        {/* <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"> */}
        {/* <Image height={400} width={400} src={"/next.svg"} alt="alt image" /> */}
        {/* </div> */}
      </div>
      <Image
        fill={true}
        src={"/bg-image-cover.jpeg"}
        alt="CineFilmLand Cover Photo"
        className="blur-[5px]"
      />
      <HomeSearch />
    </section>
  );
}
