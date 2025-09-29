"use client";

import { useRef } from "react";
import Image from "next/image";

type ImageUploadPreviewProps = {
  label?: string;
  name: string;
  accept?: string;
  previewUrl?: string | null;
  error?: string;
  onFileSelect: (file: File) => void;
};

export default function ImageUploadPreview({
  label,
  name,
  accept = "image/*",
  previewUrl,
  error,
  onFileSelect,
}: ImageUploadPreviewProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleFileChange = (file?: File) => {
    if (file) {
      onFileSelect(file);
    }
  };

  return (
    <div>
      <div className="bg-white rounded-lg p-6 px-6">
        { label && <h2 className="text-lg font-medium mb-3.5 text-natural-800">{label}</h2>}
        <div className="grid grid-cols-2 gap-6">
          {/* Upload */}
          <div>
            <p className="text-sm font-medium text-neutral-600">Photo</p>
            <div
              className="border-2 border-dashed h-48 border-natural-200 p-6 flex flex-col gap-4 items-center justify-center rounded-md cursor-pointer bg-natural-50"
              onClick={() => inputRef.current?.click()}
              onDragOver={(e) => e.preventDefault()}
              onDrop={(e) => {
                e.preventDefault();
                const file = e.dataTransfer.files?.[0];
                handleFileChange(file);
              }}
            >
              <input
                id={name}
                name={name}
                type="file"
                accept={accept}
                ref={inputRef}
                className="hidden"
                onChange={(e) => handleFileChange(e.target.files?.[0])}
              />

              <div>
                <Image
                  src="/image/imageIcon.png"
                  width={44}
                  height={44}
                  alt="icon"
                  className="w-11 h-11"
                />
              </div>
              <p className="text-sm text-gray-500 mt-2 text-center">
                Drag and drop image here, or click add image
              </p>
              <div>
                <button
                  type="button"
                  className="text-sm font-medium text-primary-red-500 py-2 px-3 rounded-lg bg-primary-red-100"
                  onClick={(e) => {
                    e.stopPropagation();
                    inputRef.current?.click();
                  }}
                >
                  Add Image
                </button>
              </div>
            </div>
          </div>

          {/* Preview */}
          <div className="flex flex-col">
            <p className="text-sm font-medium text-neutral-600">Preview</p>
            <div className="flex items-center justify-center border-2 border-dashed border-natural-200 rounded-lg h-48 bg-natural-50">
              {previewUrl ? (
                <Image
                  src={previewUrl}
                  alt="Preview"
                  width={200}
                  height={100}
                  className="h-36 w-auto rounded-lg object-contain"
                />
              ) : (
                <span className="text-gray-400">No Preview</span>
              )}
            </div>
          </div>
        </div>
      </div>

      {error && <p className="text-red-500 text-sm mt-1 pl-4">{error}</p>}
    </div>
  );
}
