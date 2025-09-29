"use client";
import { useGet } from "@/hooks/useGet";
import { useState } from "react";
import { testData } from "../dashboard/test";
import DeletePopUp from "../ui/DeletePopUp";
import BreadcrumbOfDashboard from "../ui/share/breadCrumbs/BreadcrumbOfDashboard";
import CustomAddModal from "../ui/share/customModal/CustomAddModal";
import CustomModal from "../ui/share/customModal/CustomModal";
import Loader from "../ui/share/loader/Loader";
import NoData from "../ui/share/noData/NoData";
import FilterTable from "../ui/table/FilterTable";
import Table from "../ui/table/Table";
import TablePagination from "../ui/table/TablePagination";
import Add from "./Add";
import Edit from "./Edit";
import { useProjectTable } from "./useProjectTable";
export default function Project<T extends Record<string, unknown>>() {
  const [selectedData, setSelectedData] = useState<T | null>(null);
  const [addModalOpen, setAddModalOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [editModalOpen, setEditModalOpen] = useState<boolean>(false);
  const { data, isLoading, error } = useGet(
    `https://api.mykitchen-bd.com/api/v1/brand`,
    ["allClientCompany"]
  );
  console.log("GG", data);

  const allCompany: T[] = (testData ?? []) as unknown as T[];
  if (error) {
    console.error("Error to fetch client companies : \n", error);
  }
  // ======================= HANDLE VIEW FUNCTION ===================
  const handleDelete = (rowData: T) => {
    setDeleteModalOpen(true);
    setSelectedData(rowData);
  };
  // ======================= HANDLE EDIT FUNCTION ===================
  const handleEdit = (rowData: T) => {
    setEditModalOpen(true);
    setSelectedData(rowData);
  };

  const { table, filtering, setFiltering } = useProjectTable(
    allCompany || [],
    handleDelete,
    handleEdit
  );
  return (
    <div>
      <div className="flex justify-between">
        <BreadcrumbOfDashboard />
        <CustomAddModal
          open={addModalOpen}
          setOpen={setAddModalOpen}
          buttonName="Add New Project"
          modalTitle="Add New Project"
        >
          <Add setOpen={setAddModalOpen} />
        </CustomAddModal>
      </div>

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

      {/* Delete PopUp */}
      <CustomModal
        open={deleteModalOpen}
        onOpenChange={setDeleteModalOpen}
        dialogWidth="w-[50vw] "
        title="Are you sure you want to delete this item?"
        headerRequired
      >
        {" "}
        {/* <StatusChangePopup onCancel={() => {}} onConfirm={() => {}} /> */}
        <DeletePopUp onCancel={() => {}} onConfirm={() => {}} />
      </CustomModal>
      <CustomModal
        open={editModalOpen}
        onOpenChange={setEditModalOpen}
        title="Edit Project"
        headerRequired
      >
        <Edit setOpen={setEditModalOpen} data={selectedData} />
      </CustomModal>
    </div>
  );
}
