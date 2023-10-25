export default function resultLimit(options: any, limit: number) {
  let results = [];
  let count = 0;

  while (count < limit) {
    if (options[count] !== undefined) results.push(options[count]);

    count++;
  }

  return results;
}
