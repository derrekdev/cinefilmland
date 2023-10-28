export default function Pagination({
  pageTotal,
  pageNumber,
  pageMax = 500,
  handleClick,
  addClass,
}: {
  pageTotal: number;
  pageNumber: number;
  pageMax?: number;
  handleClick: (page: number) => void;
  addClass?: string;
}) {
  const pageList = [];
  const maxPageNumberDisplay = 10;

  let startPage = 1;
  let maxPageNumber = maxPageNumberDisplay;

  if (pageTotal > pageMax) pageTotal = pageMax;

  if (pageNumber > 4 && pageNumber < pageTotal - 4) {
    startPage = pageNumber - 4;
    maxPageNumber = pageNumber + 5;
  } else if (pageNumber >= pageTotal - 4) {
    startPage = pageTotal - 10;
    maxPageNumber = pageTotal;
  }

  for (startPage; startPage <= maxPageNumber; startPage++) {
    pageList.push(startPage);
  }
  return (
    <div className={`${addClass}`}>
      {pageNumber && pageTotal > 1 && (
        <div className="flex flex-row justify-center gap-2 text-center ">
          {!pageList.includes(1) && (
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] mr-8 hover:scale-[115%] hover:text-yellow-300 transition-all"
              onClick={() => {
                handleClick(1);
              }}
            >
              First
            </button>
          )}
          <div className="grid grid-flow-col justify-center gap-2 text-center max-lg:hidden">
            {pageList.length > 0 &&
              pageList.map((page, index) => (
                <button
                  key={index}
                  className={`p-2 w-10 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all ${
                    page === pageNumber
                      ? "text-yellow-300 scale-[115%] font-bold"
                      : ""
                  }`}
                  onClick={() => {
                    handleClick(page);
                  }}
                >
                  {page}
                </button>
              ))}
          </div>
          <div className="grid grid-flow-col gap-2 lg:hidden">
            {pageNumber > 1 && (
              <button
                className="py-2 px-4 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all"
                onClick={() => {
                  handleClick(pageNumber - 1);
                }}
              >
                Prev
              </button>
            )}
            {pageNumber < pageMax && (
              <button
                className="py-2 px-4 bg-neutral-600 rounded-[10px] hover:text-yellow-300 hover:scale-[115%] transition-all"
                onClick={() => {
                  handleClick(pageNumber + 1);
                }}
              >
                Next
              </button>
            )}
          </div>
          {!pageList.includes(pageMax) && (
            <button
              className="py-2 px-4 bg-neutral-600 rounded-[10px] ml-8 hover:text-yellow-300 hover:scale-[115%] transition-all"
              onClick={() => {
                handleClick(pageTotal);
              }}
            >
              Last
            </button>
          )}
        </div>
      )}
    </div>
  );
}
