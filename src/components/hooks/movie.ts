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
