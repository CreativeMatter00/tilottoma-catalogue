import { ReactNode } from "react";
import { IconType } from "react-icons/lib";

export interface TimeValue  {
  hour: string;
  minute: string;
  meridiem: "AM" | "PM";
};

export interface IMainHeading {
  headerName?: string;
  secondaryButtonName?: string;
  subHeader?: string;
  buttonName: string;
  ButtonIcon?: IconType;
  open: boolean;
  setOpen: (open: boolean) => void;
  modalTitle?: string;
  children?: ReactNode;
  dialogContentClassNames?: string;
}

export interface IHeading {
  headerName?: string;
  subHeader?: string;
  buttonName: string;
  ButtonIcon?: IconType;
  setOpen: (open: boolean) => void;
}

export interface ITooltipDiv {
  name: string;
  labelId?: string;
}

export interface ICustomModal {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title?: string;
  children: React.ReactNode;
  dialogWidth?: string;
  dialogHeight?: string;
  classes?: string;
  headerRequired?: boolean;
}
