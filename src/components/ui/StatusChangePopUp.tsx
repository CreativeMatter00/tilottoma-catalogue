"use client";

import React, { useState } from "react";
import { Check } from "lucide-react";
import ButtonGroup from "./ButtonGroup";

type StatusChangePopupProps = {
  onConfirm: (status: "complete" | "pending") => void;
  onCancel: () => void;
  initialStatus?: "complete" | "pending";
};

const StatusChangePopup: React.FC<StatusChangePopupProps> = ({
  onConfirm,
  onCancel,
  initialStatus,
}) => {
  const [selected, setSelected] = useState<"complete" | "pending" | null>(
    initialStatus || null
  );

  return (
    <>
      <div className="bg-white rounded-lg w-full p-6">
        <div className="flex flex-col gap-4">
          <button
            type="button"
            onClick={() => setSelected("complete")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md`}
          >
            <span
              className={`w-5 h-5 flex items-center justify-center rounded border ${
                selected === "complete"
                  ? "bg-primary-red-500 border-primary-red-500"
                  : "border-natural-400"
              }`}
            >
              {selected === "complete" && (
                <Check size={14} className="text-white" />
              )}
            </span>
            <span className="text-success-500 font-medium bg-success-100 border-success-500 py-2 w-32">
              Complete
            </span>
          </button>

          <button
            type="button"
            onClick={() => setSelected("pending")}
            className={`flex items-center gap-2 px-4 py-2 rounded-md`}
          >
            <span
              className={`w-5 h-5 flex items-center justify-center rounded border ${
                selected === "pending"
                  ? "bg-primary-red-500 border-primary-red-500"
                  : "border-natural-400"
              }`}
            >
              {selected === "pending" && (
                <Check size={14} className="text-white" />
              )}
            </span>
            <span className="text-warning-500 font-medium bg-warning-100 border-warning-500 py-2 w-32">
              Pending
            </span>
          </button>
        </div>
      </div>
      <ButtonGroup
        leftButton={{
          text: "Cancel",
          onClick: onCancel,
        }}
        rightButton={{
          text: "Confirm",
          onClick: () => selected && onConfirm(selected),
        }}
      />
    </>
  );
};

export default StatusChangePopup;
