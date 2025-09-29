"use client";

import { UseFormRegisterReturn } from "react-hook-form";

type TextInputProps = {
  label: string;
  placeholder?: string;
  register: UseFormRegisterReturn;
  error?: string;
};

export default function TextInput({
  label,
  placeholder,
  register,
  error,
}: TextInputProps) {
  return (
    <div className="bg-white rounded-lg  px-6 p-3">
      <div>
        <h2 className="text-lg font-medium mb-1 text-natural-800">{label}</h2>
        <input
          type="text"
          placeholder={placeholder}
          {...register}
          className="w-full border p-2.5 rounded-lg border-natural-300 outline-none text-natural-600 text-sm"
        />
      </div>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
}
