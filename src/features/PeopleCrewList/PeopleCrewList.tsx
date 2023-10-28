import PeopleCardItem from "@/components/ui/PeopleCardItem/PeopleCardItem";

export default function PeopleCrewList({
  crewList,
  title,
}: {
  crewList: castCrewProps[];
  title: string;
}) {
  const imageHeight = 160;
  const imageWidht = 110;

  return (
    <>
      {crewList && crewList.length > 0 && (
        <section className="container flex flex-col pt-10 pb-14 max-sm:px-6">
          <h2 className="text-2xl text-yellow-300 pb-6">{title}</h2>
          <div className="grid max-xs:grid-cols-2  max-sm:grid-cols-3 max-md:grid-cols-4 max-lg:grid-cols-6 lg:grid-cols-10 gap-6">
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
                  peopleCharacterFullText={true}
                />
              )
            )}
          </div>
        </section>
      )}
    </>
  );
}
