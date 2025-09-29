"use client";

import React from "react";
import Select, {
  components,
  MultiValueProps,
  OptionProps,
  SingleValueProps,
} from "react-select";
import { Check, X } from "lucide-react";

type Option = {
  value: string;
  label: string;
};

type SelectCheckboxProps = {
  options: Option[];
  isMulti?: boolean; // false = single, true = multi
  value: Option | Option[] | null;
  onChange: (val: Option | Option[] | null) => void;
};

const CustomOption = (props: OptionProps<Option>) => {
  const { isSelected, label } = props;
  return (
    <components.Option {...props}>
      <div className="flex items-center gap-2">
        <span
          className={`w-4 h-4 flex items-center justify-center rounded border ${
            isSelected ? "bg-red-500 border-red-500" : "border-gray-400"
          }`}
        >
          {isSelected && <Check size={12} className="text-white" />}
        </span>
        <span
          className={isSelected ? "text-red-600 font-medium" : "text-gray-700"}
        >
          {label}
        </span>
      </div>
    </components.Option>
  );
};

const CustomMultiValue = (props: MultiValueProps<Option>) => (
  <div className="flex items-center gap-1 bg-red-100 text-red-700 px-2 py-1 rounded-md">
    <span>{props.data.label}</span>
    <span
      className="cursor-pointer text-red-500 hover:text-red-700"
      onClick={(e) => {
        e.stopPropagation();
        props.removeProps.onClick?.(e);
      }}
    >
      <X size={14} />
    </span>
  </div>
);

const CustomSingleValue = (props: SingleValueProps<Option>) => (
  <components.SingleValue {...props}>
    <span className="bg-red-100 text-red-700 px-2 py-1 rounded-md">
      {props.data.label}
    </span>
  </components.SingleValue>
);

const SelectCheckbox: React.FC<SelectCheckboxProps> = ({
  options,
  isMulti = false,
  value,
  onChange,
}) => {
  return (
    <Select
      isMulti={isMulti}
      options={options}
      value={value}
      onChange={onChange}
      closeMenuOnSelect={!isMulti}
      hideSelectedOptions={false}
      components={{
        Option: CustomOption,
        MultiValue: isMulti ? CustomMultiValue : undefined,
        SingleValue: !isMulti ? CustomSingleValue : undefined,
      }}
      styles={{
        control: (base) => ({
          ...base,
          borderColor: "#d1d5db", // gray-300
          boxShadow: "none",
          "&:hover": { borderColor: "#ef4444" }, // red-500
        }),
      }}
      placeholder="Select option..."
    />
  );
};

export default SelectCheckbox;
