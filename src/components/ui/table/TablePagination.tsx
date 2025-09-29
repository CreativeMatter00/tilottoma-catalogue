import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { ITable } from "../table.type";

const TablePagination = <TData,>({ table }: ITable<TData>) => {
  const pageIndex = table.getState().pagination.pageIndex;
  const pageSize = table.getState().pagination.pageSize;
  const pageCount = table.getPageCount();
  const total = table.getRowCount(); // total rows in table

  // Calculate range
  const start = pageIndex * pageSize + 1;
  const end = Math.min((pageIndex + 1) * pageSize, total);

  // Compute 3 display slots
  let slots: (string | number)[] = [];
  if (pageCount <= 3) {
    slots = Array.from({ length: pageCount }, (_, i) => i + 1);
  } else if (pageIndex <= 1) {
    slots = [1, 2, "..."];
  } else if (pageIndex >= pageCount - 2) {
    slots = ["...", pageCount - 1, pageCount];
  } else {
    slots = [pageIndex, pageIndex + 1, pageIndex + 2];
  }

  return (
    <div className="w-full flex justify-between items-center text-white">
      {/* Left side: Showing X–Y from Z */}
      <div className="text-sm text-natural-500 font-medium">
        Showing {start}–{end} from {total}
      </div>

      {/* Right side: Pagination controls */}
      <div className="flex gap-2 items-center">
        {/* Prev button */}
        <button
          disabled={!table.getCanPreviousPage()}
          onClick={() => table.previousPage()}
          className="disabled:cursor-not-allowed text-xl rounded-lg p-2 bg-primary-red-100"
        >
          <MdArrowBackIos fontSize={18} className="text-primary-red-500" />
        </button>

        {/* Page slots */}
        {slots.map((slot, idx) =>
          slot === "..." ? (
            <div
              key={idx}
              className="w-12 h-9 text-sm font-semibold rounded-lg flex justify-center items-center bg-primary-red-100 text-primary-red-500"
            >
              ...
            </div>
          ) : (
            <button
              key={idx}
              onClick={() => table.setPageIndex((slot as number) - 1)}
              className={`w-12 h-9 text-sm font-semibold rounded-lg flex justify-center items-center 
                ${
                  pageIndex + 1 === slot
                    ? "bg-primary-red-500 text-white"
                    : "bg-primary-red-100 text-primary-red-500"
                }
              `}
            >
              {slot}
            </button>
          )
        )}

        {/* Next button */}
        <button
          disabled={!table.getCanNextPage()}
          onClick={() => table.nextPage()}
          className="disabled:cursor-not-allowed text-xl rounded-lg p-2 bg-primary-red-100"
        >
          <MdArrowForwardIos fontSize={18} className="text-primary-red-500" />
        </button>
      </div>
    </div>
  );
};

export default TablePagination;
