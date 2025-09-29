import { z } from "zod";

// ================= Add Project Schema =================
export const addProjectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be at least 3 characters.")
    .nonempty("Project name is required."),
  address: z
    .string()
    .min(3, "Project address must be at least 3 characters.")
    .nonempty("Project address is required."),
  product: z.string().nonempty("Product is required."),
  room: z.string().nonempty("Room is required."),
  description: z.string().optional(),
  photo: z
    .instanceof(File, { message: "Photo is required" })
    .refine(
      (file) => file.type.startsWith("image/"),
      "Only image files are allowed"
    ),
});

export type AddProjectFormValues = z.infer<typeof addProjectSchema>;

// ================= Edit Project Schema =================
export const editProjectSchema = z.object({
  name: z
    .string()
    .min(3, "Project name must be at least 3 characters.")
    .nonempty("Project name is required."),
  address: z
    .string()
    .min(3, "Project address must be at least 3 characters.")
    .nonempty("Project address is required."),
  product: z.string().nonempty("Product is required."),
  room: z.string().nonempty("Room is required."),
  description: z.string().optional(),
  photo: z
    .union([
      z
        .instanceof(File)
        .refine(
          (file) => file.type.startsWith("image/"),
          "Only image files are allowed"
        ),
      z.string().url("Photo must be a valid URL"),
    ])
    .optional(), // optional for edit, keep existing if no new file provided
});

export type EditProjectFormValues = z.infer<typeof editProjectSchema>;
