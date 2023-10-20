"use client";

import MovieCardItem from "@/components/ui/MovieCardItem/MovieCardItem";
import { useState } from "react";
import HomeSectionLayout from "../../components/layout/element/HomeSectionLayout";

type movieDataProps<T> = {
  movieDiscover: T;
  movieUpcoming: T;
  movieTrending: T;
};

export default function Home({ data }: { data: movieDataProps<movieProps[]> }) {
  const [moviePopular, setMoviePopular] = useState(data ? data : []);

  // console.log("data movieDiscover", data.movieDiscover);
  // console.log("data movieUpcoming", data.movieUpcoming);
  console.log("data movieTrending", data.movieTrending);

  return (
    <HomeSectionLayout>
      <h2 className="text-yellow-300 text-2xl up">Trending</h2>
      <div className="grid grid-flow-row grid-cols-3 md:grid-cols-4 grid-rows-4 gap-4">
        {data.movieDiscover &&
          data.movieDiscover.length > 0 &&
          data.movieDiscover.map((discover, index) => (
            <MovieCardItem key={index} movie={discover} />
          ))}
      </div>

      {/* <section className="text-white body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-yellow-300">
              Popular Movies
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center">
              <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                Button
              </button>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                Button
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600">
          </div>
        </div>
      </section> */}
    </HomeSectionLayout>
  );
}
