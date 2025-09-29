import FilterTable from "./FilterTable";
import { GrDocumentCsv } from "react-icons/gr";
import { GrDocumentPdf } from "react-icons/gr";
import TablePagination from "./TablePagination";
import { ITableTool } from "../table.type";

const TableTool = <TData,>({ table, isLoading, filtering, setFiltering }: ITableTool<TData>) => {
  return (
    <div className="flex justify-between items-center bg-violetPrimary bg-opacity-50 rounded-t-lg mt-5 px-14 py-1.5">
      <div className="flex items-center gap-5">
        {!isLoading && <TablePagination table={table}/>}
        <FilterTable filtering={filtering} setFiltering={setFiltering} />
      </div>
      <div className="flex items-center gap-2.5">
        <GrDocumentPdf size={24} className="text-redPrimary" />
        <GrDocumentCsv size={24} className="text-blueTernary" />
      </div>
    </div>
  );
};

export default TableTool;