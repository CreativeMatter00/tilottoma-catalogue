"use client";
import Loader from "@/components/ui/share/loader/Loader";
import FilterTable from "@/components/ui/table/FilterTable";
import Table from "@/components/ui/table/Table";
import TablePagination from "@/components/ui/table/TablePagination";
import Heading from "@/components/ui/share/heading/Heading";
import NoData from "@/components/ui/share/noData/NoData";
import { useDashboardTable } from "./useDashboardTable";
import { useGet } from "@/hooks/useGet";
import { testData } from "./test";

export default function Dashboard<T extends Record<string, unknown>>() {
  //? =============== DATA FETCHING ============
  const { data, isLoading, error } = useGet(
    `https://api.mykitchen-bd.com/api/v1/brand`,
    ["allClientCompany"]
  );
  console.log("GG", data);

  const allCompany = testData ?? [];
  if (error) {
    console.error("Error to fetch client companies : \n", error);
  }
  // console.log(allCompany);

  const { table, filtering, setFiltering } = useDashboardTable(
    allCompany || []
  );

  return (
    <div className="w-auto">
      <div className="flex flex-col gap-10 w-full">
        {/* ============ HEADING & ADD BUTTON ================ */}
        <Heading headerName="Dashboard" />
        {/* ======================== TABLE =================== */}
        <div className="w-full">
          {isLoading ? (
            <Loader />
          ) : (
            <div>
              {allCompany?.length > 0 ? (

                  <div className="flex flex-col gap-4">
                    <div className="w-full bg-white rounded-lg border border-natural-200 p-3">
                      <FilterTable
                        filtering={filtering}
                        setFiltering={setFiltering}
                      ></FilterTable>
                    </div>
                    <div>
                    <div className="overflow-x-auto scrollbar border rounded-lg">
                      <Table table={table} isLoading={isLoading} />
                    </div>
                  <div className="flex justify-end w-full bg-white shadow-lg rounded-b-lg p-2 ">
                    <TablePagination table={table} />
                  </div>
                    </div>
                  </div>
  
              ) : (
                <NoData />
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
