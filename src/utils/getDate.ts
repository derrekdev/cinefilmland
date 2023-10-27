const getDate = (date: string) => {
  const currentDate = new Date(date);

  return {
    year: currentDate.getFullYear(),
  };
};

export default getDate;
