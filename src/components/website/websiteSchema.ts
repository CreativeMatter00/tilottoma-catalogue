import { z } from "zod";
export const websiteSchema = z.object({
  title: z.string().min(3, "Title must be at least 3 characters"),
  logo: z.instanceof(File, { message: "Logo is required" }).refine(
      (file) => file && file.type.startsWith("image/"),
      "Only image files are allowed"
    ),
  cover: z.instanceof(File, { message: "Cover is required" })  .refine(
    (file) =>
      file && (file.type.startsWith("image/") || file.type.startsWith("video/")),
    "Only image or video files are allowed"
  ),
});

export type WebsiteSchemaFormData = z.infer<typeof websiteSchema>;
