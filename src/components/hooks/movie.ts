export const fetchOptions = {
  // next: { revalidate: 5 },
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${process.env.API_TOKEN}`,
  },
};

export async function fetchData(url: string, addedOption?: any) {
  const res = await fetch(
    `${process.env.API_URL}${url}`,
    // "https://api.themoviedb.org/3/",
    { ...fetchOptions, ...addedOption }
  )
    .then((response) => response.json())
    // .then((response) => console.log(response))
    .catch((err) => console.error(err));

  return res;
}

// type crewDepartmentProps = {
//   crew: castCrewProps[];
//   department: string;
//   combineDuplicate?: boolean;
// };

interface crewDepartmentProps {
  (
    crew: castCrewProps[],
    department: string,
    combineDuplicate?: boolean
  ): castCrewProps[];
}

export const generateCrewDepartement: crewDepartmentProps = function (
  crew,
  department,
  combineDuplicate = false
) {
  const filteredCrew = crew
    ? crew.filter(
        (crew: castCrewProps) => crew.known_for_department === department
      )
    : [];

  function reduceCrew(previewCrew: any, currentCrew: castCrewProps) {
    const oldCrew = previewCrew.find(
      (crew: castCrewProps) => crew.id === currentCrew.id
    );

    if (oldCrew) {
      oldCrew.job = oldCrew.job + ", " + currentCrew.job;

      const newPreviewCrew = previewCrew.filter(
        (crew: castCrewProps) => crew.id !== currentCrew.id
      );

      return [...newPreviewCrew, oldCrew];
    }

    return [...previewCrew, currentCrew];
  }

  return combineDuplicate ? filteredCrew.reduce(reduceCrew, []) : filteredCrew;
};
// export async function fetchData2(url: string, addedOption?: any) {
//   // const res = await fetch(
//   //   `${process.env.API_URL}${url}`,
//   //   // "https://api.themoviedb.org/3/",
//   //   { ...options, ...addedOption }
//   // )
//   //   .then((response) => response.json())
//   //   // .then((response) => console.log(response))
//   //   .catch((err) => console.error(err));

//   // return res;

//   return useQuery(`${process.env.API_URL}${url}`);
// }
