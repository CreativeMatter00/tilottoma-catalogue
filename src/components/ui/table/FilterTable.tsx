import { RiSearchLine } from "react-icons/ri";
import React from "react";
import { ITableFilter } from "../table.type";
const FilterTable = <TData,>({
  filtering,
  setFiltering,
}: ITableFilter<TData>) => {
  return (
    <div className="flex items-center justify-end gap-4">
      <div className="flex items-center gap-2 border border-natural-300 rounded-md p-2.5">
        <RiSearchLine className="w-5 h-5 text-natural-500" />
        <input
          type="text"
          placeholder="Search..."
          name="search"
          value={filtering || ""}
          onChange={(e) => setFiltering(e.target.value)}
          className="bg-transparent pl-2 pr-6 text-natural-500 text-sm placeholder:text-base placeholder:text-natural-500 outline-none w-80 rounded-md"
        />
      </div>
    </div>
  );
};

export default FilterTable;
