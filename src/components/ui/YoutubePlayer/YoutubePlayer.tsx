"use client";

import PropTypes from "prop-types";

export default function YoutubePlayer({
  embedId,
  title = "Embedded youtube",
  width = "853",
  height = "480",
}: {
  embedId: string;
  title: string;
  width?: string;
  height?: string;
}) {
  return (
    <div className="overflow-hidden pb-[56.25%] relative h-0">
      {embedId && (
        <iframe
          className="left-0 top-0 h-full w-full absolute"
          width={width}
          height={height}
          src={`https://www.youtube.com/embed/${embedId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={title}
        />
      )}
    </div>
  );
}

YoutubePlayer.propTypes = {
  embedId: PropTypes.string.isRequired,
};
