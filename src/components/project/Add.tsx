"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { IModal } from "../ui/table.type";
import TextInput from "../ui/TextInput";
import TextArea from "../ui/TextArea";
import ButtonGroup from "../ui/ButtonGroup";
import ImageUploadPreview from "../ui/ImageUploadPreview";
import { useState } from "react";
import { AddProjectFormValues, addProjectSchema } from "./projectSchema";
import SelectCheckbox from "../ui/SelectCheckbox";

const Add: React.FC<IModal> = ({ setOpen, refetch }) => {
  const [photoPreview, setPhotoPreview] = useState<string | null>(null);
  // ? ========= REACT HOOK FORM ===========
  const {
    handleSubmit,
    reset,
    register,
    setValue,
    trigger,
    control,
    watch,
    formState: { errors },
  } = useForm<AddProjectFormValues>({
    resolver: zodResolver(addProjectSchema),
  });
  const handleCancel = () => {
    reset();
    setPhotoPreview("");
  };
  const productData = [
    {
      id: 1,
      name: "Product 1",
    },
    {
      id: 2,
      name: "Product 2",
    },
    {
      id: 3,
      name: "Product 3",
    },
    {
      id: 4,
      name: "Product 4",
    },
  ];

  // const { mutate: createClientUser } = usePostFormData(
  //   "user-ws/api/v1/user/create-user",
  //   () => {
  //     refetch?.();
  //     reset();
  //     setOpen(false);
  //   }
  // );
  const handleFileChange = (file: File) => {
    setValue("photo", file);
    trigger("photo");
    setPhotoPreview(URL.createObjectURL(file));
  };
  const onSubmit: SubmitHandler<AddProjectFormValues> = (data) => {
    console.log(data);
    // createClientUser(data);
  };
  return (
    <div className="pb-6">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="grid grid-cols-1 md:grid-cols-2">
          <TextInput
            label="Project Name"
            placeholder="Enter Project Name Here"
            register={register("name")}
            error={errors?.name?.message as string}
          />
          <SelectCheckbox
            options={[
              { value: "bonusPoints", label: "Bonus Points" },
              { value: "discount", label: "Discount" },
              { value: "cashback", label: "Cashback" },
              { value: "offer", label: "Special Offer" },
            ]}
            isMulti={true} // try false for single select
            onChange={(val) => console.log("Selected:", val)}
          />
          <TextInput
            label="Address"
            placeholder="Enter Address Here"
            register={register("address")}
            error={errors?.address?.message as string}
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
            text: "Save",
            onClick: handleSubmit(onSubmit),
          }}
        />
      </form>
    </div>
  );
};

export default Add;
