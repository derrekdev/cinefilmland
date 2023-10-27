import { fetchData, generateCrewDepartement } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import PeopleCardItem from "@/components/ui/PeopleCardItem/PeopleCardItem";
import convertTime from "@/utils/convertTime";

const imageHeight = 160;
const imageWidht = 110;

const PeopleCrewComponent = ({
  crewList,
  title,
}: {
  crewList: castCrewProps[];
  title: string;
}) => {
  return (
    <>
      {crewList && crewList.length > 0 && (
        <section className="container flex flex-col pt-10 pb-14">
          <h2 className="text-2xl text-yellow-300 pb-6">{title}</h2>
          <div className="grid max-md:grid-cols-4 max-lg:grid-cols-6 grid-cols-10 gap-6">
            {crewList.map(
              (
                crew: Partial<castCrewProps & castActorProps>,
                index: number
              ) => (
                <PeopleCardItem
                  key={index}
                  peopleId={crew.id!}
                  peopleProfilePath={crew.profile_path}
                  peopleName={crew.name!}
                  peopleCharacter={crew.character ? crew.character : ""}
                  peopleJob={crew.job ? crew.job : ""}
                  imgHeight={imageHeight}
                  imgWidth={imageWidht}
                />
              )
            )}
          </div>
        </section>
      )}
    </>
  );
};

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
  const { getHoursMins } = convertTime();
  const movieDetail = await fetchData(`movie/${id}`, { next: 60 });
  const movieCastCredits = await fetchData(
    `movie/${id}/credits?language=en-US`,
    {
      next: 3600,
    }
  );

  const peopleArts = generateCrewDepartement(
    movieCastCredits.crew,
    "Art",
    true
  );
  const peopleCameras = generateCrewDepartement(
    movieCastCredits.crew,
    "Camera",
    true
  );
  const peopleCostumeMakeups = generateCrewDepartement(
    movieCastCredits.crew,
    "Costume & Make-Up",
    true
  );
  const peopleCrews = generateCrewDepartement(
    movieCastCredits.crew,
    "Crew",
    true
  );
  const peopleDirectings = generateCrewDepartement(
    movieCastCredits.crew,
    "Directing",
    true
  );
  const peopleEditings = generateCrewDepartement(
    movieCastCredits.crew,
    "Editing",
    true
  );
  const peopleProductions = generateCrewDepartement(
    movieCastCredits.crew,
    "Production",
    true
  );
  const peopleSounds = generateCrewDepartement(
    movieCastCredits.crew,
    "Sound",
    true
  );
  const peopleVisualEffects = generateCrewDepartement(
    movieCastCredits.crew,
    "Visual Effects",
    true
  );
  const peopleWritings = generateCrewDepartement(
    movieCastCredits.crew,
    "Writing",
    true
  );

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
          <PeopleCrewComponent crewList={movieCastCredits.cast} title="Cast" />
          <PeopleCrewComponent crewList={peopleArts} title="Arts" />
          <PeopleCrewComponent crewList={peopleCameras} title="Camera" />
          <PeopleCrewComponent
            crewList={peopleCostumeMakeups}
            title="Costume & Make-Up"
          />
          <PeopleCrewComponent crewList={peopleCrews} title="Crew" />
          <PeopleCrewComponent crewList={peopleDirectings} title="Directing" />
          <PeopleCrewComponent crewList={peopleEditings} title="Editing" />
          <PeopleCrewComponent
            crewList={peopleProductions}
            title="Production"
          />
          <PeopleCrewComponent crewList={peopleSounds} title="Sound" />
          <PeopleCrewComponent
            crewList={peopleVisualEffects}
            title="Visual Effects"
          />
          <PeopleCrewComponent crewList={peopleWritings} title="Writing" />
        </>
      )}
    </main>
  );
}
