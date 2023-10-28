const getDate = (dateString: string) => {
  const currentDate = new Date(dateString);

  const date = currentDate.getDate();
  const monthString = currentDate.toLocaleDateString("default", {
    month: "long",
  });
  const year = currentDate.getFullYear();

  return {
    year,
    month: currentDate.getMonth(),
    monthString,
    date,
    fullDate: `${monthString} ${date}, ${year}`,
  };
};

export default getDate;
