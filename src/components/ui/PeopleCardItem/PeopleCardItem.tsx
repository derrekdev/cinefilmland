import defaultImage from "@/../public/default_person.png";
import Link from "next/link";

export default function PeopleCardItem({
  peopleId,
  peopleProfilePath,
  peopleName,
  peopleCharacter,
  peopleJob,
  imgHeight = 230,
  imgWidth = 160,
  peopleCharacterFull = false,
}: {
  peopleId: number;
  peopleProfilePath: string | undefined | null;
  peopleName: string;
  peopleCharacter?: string;
  peopleJob?: string;
  imgHeight?: number;
  imgWidth?: number;
  peopleCharacterFull?: boolean;
}) {
  return (
    <Link
      href={`/people/${peopleId}`}
      className=" transition-all flex flex-col items-center rounded-[10px] group overflow-hidden"
    >
      <div
        className={`bg-neutral-800 rounded-[10px] overflow-hidden transition-all flex justify-center align-middle items-end max-md:h-full max-md:w-full `}
        style={{
          height: `${imgHeight}px`,
          width: `${imgWidth}px`,
        }}
      >
        <img
          src={`${
            peopleProfilePath
              ? "https://image.tmdb.org/t/p/w300" + peopleProfilePath
              : defaultImage.src
          }`}
          alt={`${peopleName} thumbnail`}
          height={imgHeight}
          width={imgWidth}
          className=" group-hover:scale-110 transition-all"
        />
      </div>
      <div className="flex flex-col w-full gap-0">
        {/* text-[2.5vw] md:text-[1.8vw] lg:text-xl  */}
        <h3 className=" h-8 font-bold pt-2  text-yellow-300 overflow-hidden  text-ellipsis group-hover:text-yellow-100 transition-all">
          {peopleName}
        </h3>
        {peopleCharacter && (
          <h4
            className={`${
              peopleCharacterFull ? "" : "h-12"
            }  overflow-hidden font-base text-sm text-ellipsis group-hover:text-neutral-500 transition-all`}
          >
            {peopleCharacter}
          </h4>
        )}
        {peopleJob && <h4 className="font-base text-sm ">{peopleJob}</h4>}
      </div>
    </Link>
  );
}
