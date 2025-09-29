import { IconType } from "react-icons/lib";

export interface ILink {
  label: string;
  href: string;
  icon?: IconType;
  children?: {
    label: string;
    href: string;
  }[];
}