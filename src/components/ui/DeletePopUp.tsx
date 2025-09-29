"use client";

import React from "react";
import { HiOutlineTrash } from "react-icons/hi2";
import ButtonGroup from "./ButtonGroup";
type DeletePopUpProps = {
  onConfirm: () => void;
  onCancel: () => void;
};

const DeletePopUp: React.FC<DeletePopUpProps> = ({
  onConfirm,
  onCancel,
}) => {
  return (
    <div className="bg-white rounded-lg w-full">
      <div className="flex w-full justify-center p-6">
        <div className="w-28 h-28 rounded-full bg-primary-red-100 flex justify-center items-center">
          <div className="w-20 h-20 rounded-full bg-primary-red-500 flex justify-center items-center">
            <HiOutlineTrash fontSize={60} className="text-white" />
          </div>
        </div>
      </div>
      <ButtonGroup
        leftButton={{
          text: "Cancel",
          onClick: onCancel,
        }}
        rightButton={{
          text: "Confirm",
          onClick: onConfirm,
        }}
      />
    </div>
  );
};

export default DeletePopUp;
