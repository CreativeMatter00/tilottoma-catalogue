"use client";

import TooltipDiv from "@/components/ui/share/TooltipDiv";
import { truncateDescription } from "@/lib/utils";
import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Building2 } from "lucide-react";
import { HiOutlineBuildingStorefront } from "react-icons/hi2";
import { PiPhoneListBold } from "react-icons/pi";

export const useDashboardTable = <T extends Record<string, unknown>>(
  data: T[]
) => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [filtering, setFiltering] = useState("");
  const [columnVisibility, setColumnVisibility] = useState({});

  //? ==================== COLUMN DEFINE ==================
  const COLUMNS = [
    {
      header: "Parent Company",
      accessorKey: "parentComName",
      enableColumnFilter: true,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize text-sm flex items-center gap-2">
            <HiOutlineBuildingStorefront className="h-4 w-4 text-blueActual" />
            {String(row?.original?.parentComName)}
          </div>
        );
      },
    },
    {
      header: "Client Name",
      accessorKey: "companyName",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="capitalize text-sm flex items-center gap-2">
            <Building2 className="h-4 w-4 text-blueActual" />
            {String(row.original.companyName)}
          </div>
        );
      },
    },
    {
      header: "Street-City",
      accessorKey: "address",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="text-sm flex items-center gap-2">
            <HiOutlineLocationMarker className="h-4 w-4 text-blueActual" />
            {truncateDescription(String(row.original.address), 3)}
          </div>
        );
      },
    },
    {
      header: "Contact No.",
      accessorKey: "mobPhoneNo1",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div className="text-sm flex items-center gap-2">
            <PiPhoneListBold className="h-4 w-4 text-blueActual" />
            {String(row.original.mobPhoneNo1)}
          </div>
        );
      },
    },
    {
      header: "Status",
      accessorKey: "isActive",
      enableColumnFilter: false,
      enableSorting: false,
      cell: ({ row }: { row: { original: T } }) => {
        return (
          <div
            className={`${
              row?.original?.isActive
                ? "bg-blue-100 text-blueActual"
                : "bg-red-100 text-redActual"
            } w-full text-center text-sm rounded-full py-0.5`}
          >
            {row.original.isActive ? "Active" : "Inactive"}
          </div>
        );
      },
    }
  ];

  const table = useReactTable<T>({
    data,
    columns: COLUMNS,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: { sorting, globalFilter: filtering, columnVisibility },
    onSortingChange: setSorting,
    onGlobalFilterChange: setFiltering,
    onColumnVisibilityChange: setColumnVisibility,
  });

  return { table, filtering, setFiltering };
};
