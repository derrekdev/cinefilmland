import { fetchData, generateCrewDepartement } from "@/components/hooks/movie";
import HeadlineImage from "@/components/layout/HeadlineImage/HeadlineImage";
import HeadlineTitle from "@/components/layout/HeadlineTitle/HeadlineTitle";
import PeopleCrewList from "@/features/PeopleCrewList/PeopleCrewList";

export default async function page({
  params: { id },
}: {
  params: { id: string };
}) {
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
          <PeopleCrewList crewList={movieCastCredits.cast} title="Cast" />
          <PeopleCrewList crewList={peopleArts} title="Arts" />
          <PeopleCrewList crewList={peopleCameras} title="Camera" />
          <PeopleCrewList
            crewList={peopleCostumeMakeups}
            title="Costume & Make-Up"
          />
          <PeopleCrewList crewList={peopleCrews} title="Crew" />
          <PeopleCrewList crewList={peopleDirectings} title="Directing" />
          <PeopleCrewList crewList={peopleEditings} title="Editing" />
          <PeopleCrewList crewList={peopleProductions} title="Production" />
          <PeopleCrewList crewList={peopleSounds} title="Sound" />
          <PeopleCrewList
            crewList={peopleVisualEffects}
            title="Visual Effects"
          />
          <PeopleCrewList crewList={peopleWritings} title="Writing" />
        </>
      )}
    </main>
  );
}
