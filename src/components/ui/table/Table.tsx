"use client";
import {
  flexRender,
  HeaderGroup,
  Header,
  Row,
  Cell,
} from "@tanstack/react-table";
import { ITable } from "../table.type";
const Table = <TData,>({
  table,
  highlightInactiveRows = {
    enabled: false,
    inactiveField: "isActive",
    inactiveValue: 0,
  },
}: ITable<TData>) => {
  return (
    <div className="@container overflow-auto scrollbar">
      <table className="min-w-full">
        <thead>
          {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header: Header<TData, unknown>) => (
                <th
                  key={header.id}
                  className="py-4 px-7 bg-gray-100 first:rounded-tl-lg last:rounded-tr-lg first:flex first:items-center last:flex last:justify-center text-nowrap"
                >
                  <div onClick={header.column.getToggleSortingHandler()}>
                    <div className="flex items-center justify-start gap-2 select-none">
                      <div className="text-base text-natural-700 font-normal">
                        {flexRender(
                          header.column.columnDef.header,
                          header.getContext()
                        )}
                      </div>
                    </div>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>

        <tbody>
          {table.getRowModel().rows.map((row: Row<TData>, index: number) => {
            // Check if we should apply special styling
            let isInactive = false;
            if (highlightInactiveRows.enabled) {
              const rowData = row.original as Record<string, unknown>;
              const field = highlightInactiveRows.inactiveField || "isActive";
              const value = highlightInactiveRows.inactiveValue ?? 0;
              isInactive = rowData[field] === value;
            }

            return (
              <tr
                key={index}
                className={`${
                  isInactive
                    ? "bg-red-100 hover:bg-red-200"
                    : "hover:bg-stone-100"
                }
                    border-b 
                     border-slate-300 cursor-grab text-nowrap`}
              >
                {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
                  <td
                    key={cell.id}
                    className={`px-7 py-3 text-base last:text-center ${
                      isInactive ? "text-red-800" : "text-natural-500"
                    }`}
                  >
                    {(() => {
                      const value = cell.getValue();
                      return value === null || value === ""
                        ? "-"
                        : flexRender(
                            cell.column.columnDef.cell,
                            cell.getContext()
                          );
                    })()}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;

// "use client";

// import {
//   flexRender,
//   HeaderGroup,
//   Header,
//   Row,
//   Cell,
// } from "@tanstack/react-table";
// import { ITable } from "@/interfaces/table";

// const Table = <TData,>({ table }: ITable<TData>) => {
//   console.log(table.getRowModel().flatRows)
//   return (
//     <>
//       <div className="w-full min-w-max">
//         <table className="w-full">
//           <thead>
//             {table.getHeaderGroups().map((headerGroup: HeaderGroup<TData>) => (
//               <tr key={headerGroup.id}>
//                 {headerGroup.headers.map((header: Header<TData, unknown>) => (
//                   <th
//                     key={header.id}
//                     className="py-4 px-7 bg-blueActual first:rounded-tl-lg last:rounded-tr-lg first:flex first:items-center last:flex last:justify-center"
//                   >
//                     <div onClick={header.column.getToggleSortingHandler()}>
//                       <div className="flex items-center justify-start gap-2 select-none">
//                         <div className="text-base text-white font-normal">
//                           {flexRender(
//                             header.column.columnDef.header,
//                             header.getContext()
//                           )}
//                         </div>
//                       </div>
//                     </div>
//                   </th>
//                 ))}
//               </tr>
//             ))}
//           </thead>

//           <tbody>
//             {table.getRowModel().rows.map((row: Row<TData>, index: number) => (
//               <tr
//                 key={index}
//                 className={
//                   "hover:bg-stone-100 border-b border-slate-300 cursor-grab"
//                   // "hover:bg-stone-100 border-b border-slate-300 cursor-grab"
//                 }
//               >
//                 {row.getVisibleCells().map((cell: Cell<TData, unknown>) => (
//                   <td
//                     key={cell.id}
//                     className="px-7 py-3 text-slate-700 text-base last:text-center"
//                   >
//                     {flexRender(cell.column.columnDef.cell, cell.getContext())}
//                   </td>
//                 ))}
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </>
//   );
// };

// export default Table;
