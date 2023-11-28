"use client";

import { Button } from "@/components/ui/button";
import React, { useState } from "react";

export default function HomePanel({
  movieChildren,
  seriesChildren,
}: {
  movieChildren?: React.ReactNode;
  seriesChildren?: React.ReactNode;
}) {
  const [videoPanelType, setVideoPanelType] = useState("movie");

  // const handleVideoType = (type: string) => {};
  return (
    <>
      <div className="container flex flex-row justify-end gap-4 py-10 lg:px-5  ">
        <Button
          className="text-center p-2 bg-yellow-300 text-neutral-900 font-bold uppercase block rounded-2xl hover:bg-yellow-200 transition-all"
          disabled={videoPanelType === "movie" ?? false}
          onClick={() => setVideoPanelType("movie")}
        >
          Movie
        </Button>
        <Button
          className="text-center p-2 bg-yellow-300 text-neutral-900 font-bold uppercase block rounded-2xl hover:bg-yellow-200 transition-all"
          disabled={videoPanelType === "series" ?? false}
          // disabled
          onClick={() => setVideoPanelType("series")}
        >
          TV Series
        </Button>
      </div>
      {videoPanelType === "movie" && !!movieChildren && <>{movieChildren}</>}
      {videoPanelType === "series" && !!seriesChildren && <>{seriesChildren}</>}
    </>
  );
}
