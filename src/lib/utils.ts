import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function truncateDescription(desc: string, maxWords: number): string {
  if (!desc) return ""; // Handle null or undefined description

  const words = desc.split(" "); // Split description into words
  if (words.length <= maxWords) {
    return desc; // Return full description if it has fewer or equal words
  }

  // Truncate to maxWords and append "..."
  return words.slice(0, maxWords).join(" ") + "...";
}
