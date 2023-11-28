// "use client";

import defaultImage from "@/../public/default_poster.jpg";
import Image from "next/image";
import Link from "next/link";

// type videoPropertyProps = "movie" | "series"
type videoPropertyProps = Partial<movieProps> | Partial<seriesProps>;

// const currentNameFunction: React.FC<videoPropertyProps> = (props) => {
//   if (props.videoType === "movie") return props.title;
//   else if (props.videoType === "series") return props.name;
// };

export default function VideoCardItem({ data }: { data: Partial<movieProps> }) {
  // function processData(data: movieProps | seriesProps){
  //   if (data.videoType === "movie")
  // }

  // function isSampleOne(props: Props): props is SamplePropsOne {
  //   return 'name' in props;
  // }

  // const currentName: React.FC<videoPropertyProps> = props => {
  //   isSampleOne(props) ? {return props.title} : return props.name;
  // }

  // console.log("data", data);

  // let currentName = currentNameFunction(data);

  // let currentName = "";

  // data.videoType === "movie"
  //   ? (currentName = data.title)
  //   : (currentName = data.name);

  // let [showDefaultImage, setShowDefaultImage] = useState(false);

  // const name = () => {
  //   if (data.videoType === "movie") return data.title;
  //   else if (data.videoType === "series") return data.name;
  //   // else return "";
  // };
  // let currentName = "";

  // console.log(data.videoType);

  // if (data.videoType === "movie") {
  //   console.log("trigger movie");
  //   currentName = data.title ?? "";
  // } else if (data.videoType === "series") {
  //   console.log("trigger series");
  //   currentName = data.name ?? "";
  // }

  // switch (data.videoType) {
  //   case "movie":
  //     currentName = data.title ?? "";
  //     break;
  //   case "series":
  //     currentName = data.name ?? "";
  //     break;
  // }

  // console.log(data.title, data.name);
  // console.log(currentName);

  return (
    <Link
      href={`/movie/${data.id}`}
      className="p-2 bg-neutral-800 hover:bg-neutral-700 transition-all rounded-[10px] group overflow-hidden"
    >
      <div className="rounded-[10px] overflow-hidden transition-all">
        {/* {showDefaultImage ? (
          <Skeleton className="h-[355px] w-[250px] bg-neutral-700" />
        ) : (
          <></>
        )} */}
        <Image
          src={`${
            data.poster_path
              ? "https://image.tmdb.org/t/p/w300" + data.poster_path
              : defaultImage.src
          }`}
          alt={`${data.title ?? data.name} thumbnail`}
          // alt={`${currentName} thumbnail`}
          height={355}
          width={250}
          className="group-hover:scale-110 transition-all"
          // onLoadStart={() => {
          //   setShowDefaultImage(true);
          //   console.log("trigger");
          // }}
          // onLoadingComplete={() => {
          //   console.log("loading complete image");
          // }}
        />
      </div>
      <h3 className="text-left pt-2 text-[2.5vw] md:text-[1.8vw] lg:text-base font-base text-yellow-300">
        {data.title ?? data.name}
        {/* {currentName} */}
      </h3>
    </Link>
  );
}
