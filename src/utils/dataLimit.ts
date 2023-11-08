export function resultLimit(options: any, limit: number) {
  let results = [];
  let count = 0;

  while (count < limit) {
    if (options && options[count] !== undefined) results.push(options[count]);

    count++;
  }

  return results;
}

// export function removeSpecificMovieId(options: any, id: number) {
//   return options.filter((option) => option.);
// }
