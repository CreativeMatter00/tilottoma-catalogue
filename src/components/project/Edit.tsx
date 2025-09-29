"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IModal } from "../ui/table.type";
import { EditProjectFormValues, editProjectSchema } from "./projectSchema";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import ButtonGroup from "../ui/ButtonGroup";
import ImageUploadPreview from "../ui/ImageUploadPreview";
import { useEffect, useState } from "react";
import { IRowData } from "./projectType";


export default function Edit({ data, refetch, setOpen }: IModal) {
  const editData = data as IRowData;
    const [photoPreview, setPhotoPreview] = useState<string | null>(null);

  const {
    handleSubmit,
    reset,
    register,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<EditProjectFormValues>({
    resolver: zodResolver(editProjectSchema),
    defaultValues: {},
  });

  useEffect(() => {
    if (editData) {
      reset(editData);
      if (editData.photo && typeof editData.photo === "string") {
        setPhotoPreview(editData.photo);
      }
    }
  }, [editData, reset]);

  const handleCancel = () => {
    reset(editData);
    setPhotoPreview(editData.photo as string);
  };

  const handleFileChange = (file: File) => {
    setValue("photo", file);
    trigger("photo");
    setPhotoPreview(URL.createObjectURL(file));
  };

  const onSubmit: SubmitHandler<EditProjectFormValues> = (formData) => {
    console.log("Updated Data:", formData);
    // call update API here
    // updateProject(formData, { onSuccess: () => { refetch?.(); setOpen(false); } });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <TextInput
            label="Project Name"
            placeholder="Enter Project Name Here"
            register={register("name")}
            error={errors?.name?.message as string}
          />
          <TextInput
            label="Address"
            placeholder="Enter Address Here"
            register={register("address")}
            error={errors?.address?.message as string}
          />
          <TextInput
            label="Room"
            placeholder="Enter Room Here"
            register={register("room")}
            error={errors?.room?.message as string}
          />
        </div>
        <TextArea
          label="Description"
          placeholder="Enter project details..."
          register={register("description")}
          error={errors.description?.message}
        />
        <ImageUploadPreview
          name="photo"
          previewUrl={photoPreview}
          onFileSelect={(file) => handleFileChange(file)}
          error={errors.photo?.message as string}
        />
        <ButtonGroup
          leftButton={{
            text: "Cancel",
            onClick: handleCancel,
          }}
          rightButton={{
            text: "Update",
            onClick: handleSubmit(onSubmit),
          }}
        />
      </form>
    </div>
  );
};

