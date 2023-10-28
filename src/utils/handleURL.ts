export const handlePageNumber = (pageNumber: string) => {
  return parseInt(pageNumber) > 0 ? pageNumber : 1;
};
