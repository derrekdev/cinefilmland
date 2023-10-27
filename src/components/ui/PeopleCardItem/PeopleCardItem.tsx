import defaultImage from "@/../public/default_person.png";
import Link from "next/link";

export default function PeopleCardItem({
  cast,
}: {
  cast: castActorProps;
  // | castCrewProps
}) {
  return (
    <Link
      href={`/people/${cast.id}`}
      className=" transition-all rounded-[10px] group overflow-hidden"
    >
      <div className="rounded-[10px] overflow-hidden transition-all">
        <img
          src={`${
            cast.profile_path
              ? "https://image.tmdb.org/t/p/w300" + cast.profile_path
              : defaultImage.src
          }`}
          alt={`${cast.name} thumbnail`}
          height={355}
          width={250}
          className="group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col gap-0">
        {/* text-[2.5vw] md:text-[1.8vw] lg:text-xl  */}
        <h3 className=" h-8 font-bold pt-2  text-yellow-300 overflow-hidden  text-ellipsis">
          {cast.name}
        </h3>
        {cast.character && (
          <h4 className="h-8 overflow-hidden font-base text-sm text-ellipsis">
            {cast.character}
          </h4>
        )}
        {/* <h4 className="font-base text-sm">{cast.name}</h4> */}
      </div>
    </Link>
  );
}
