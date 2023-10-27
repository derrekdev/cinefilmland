export default function convertTime() {
  function getHoursMins(minsTime: number) {
    const hours = Math.floor(minsTime / 60);

    const mins = minsTime % 60;

    return hours + "h " + mins + "m";
  }

  return {
    getHoursMins,
  };
}
