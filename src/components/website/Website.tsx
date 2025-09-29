"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import FileUploadPreview from "../ui/FileUploadPreview";
import ImageUploadPreview from "../ui/ImageUploadPreview";
import BreadcrumbOfDashboard from "../ui/share/breadCrumbs/BreadcrumbOfDashboard";
import TextInput from "../ui/TextInput";
import { websiteSchema, WebsiteSchemaFormData } from "./websiteSchema";
import ButtonGroup from "../ui/ButtonGroup";

export default function Website() {
  const [logoPreview, setLogoPreview] = useState<string | null>(null);
  const [coverPreview, setCoverPreview] = useState<string | null>(null);
  const [coverType, setCoverType] = useState<"image" | "video" | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    reset,
  } = useForm<WebsiteSchemaFormData>({
    resolver: zodResolver(websiteSchema),
  });

  const handleFileChange = (file: File) => {
    setValue("logo", file);
    trigger("logo");
    setLogoPreview(URL.createObjectURL(file));
  };

  const handleFileVideoChange = (file: File) => {
    setValue("cover", file);
    trigger("cover");
    setCoverPreview(URL.createObjectURL(file));
    setCoverType(file.type.startsWith("video") ? "video" : "image");
  };

  const onSubmit = (data: WebsiteSchemaFormData) => {
    console.log("Form Data:", data);
    alert("Form submitted ✅");
  };
const handleCancel=()=>{
  reset();
  setCoverPreview("");
  setLogoPreview("");
}
  return (
    <div>
      <BreadcrumbOfDashboard />
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        {/* Logo Upload */}
        <div>
          <ImageUploadPreview
            label="Logo"
            name="logo"
            previewUrl={logoPreview}
            onFileSelect={(file) => handleFileChange(file)}
            error={errors.logo?.message as string}
          />
        </div>
        <div>
          <FileUploadPreview
            label="Cover"
            name="cover"
            previewUrl={coverPreview}
            previewType={coverType}
            error={errors.cover?.message as string}
            onFileSelect={(file) => handleFileVideoChange(file)}
          />
        </div>
        <div>
          <TextInput
            label="Title"
            placeholder="Enter Title Here"
            register={register("title")}
            error={errors.title?.message as string}
          />
        </div>

        <ButtonGroup
          leftButton={{
            text: "Cancel",
            onClick: handleCancel,
          }}
          rightButton={{
            text: "Save",
            onClick: handleSubmit(onSubmit),
          }}
        />
      </form>
    </div>
  );
}
