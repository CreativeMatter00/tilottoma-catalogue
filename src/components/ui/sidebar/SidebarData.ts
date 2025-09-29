import { FileBarChart2, ListTree, TowerControlIcon } from "lucide-react";
import { AiOutlineStock } from "react-icons/ai";
import { BiMoney } from "react-icons/bi";
import { RxDashboard } from "react-icons/rx";
import { MdPayments } from "react-icons/md";
import { PiMonitor } from "react-icons/pi";
import { IoSettingsOutline } from "react-icons/io5";
import { LiaLifeRing } from "react-icons/lia";
import { BsBox } from "react-icons/bs";
import { PiBagSimple } from "react-icons/pi";
export const dashboardSidebar = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: RxDashboard,
  },
  {
    label: "Website",
    href: "/website",
    icon: PiMonitor,
  },
  {
    label: "Set-up",
    href: "/set-up",
    icon: IoSettingsOutline,
  },
  {
    label: "Project",
    href: "/project",
    icon: LiaLifeRing,
  },
  {
    label: "Product",
    href: "/product",
    icon: BsBox,
  },
  {
    label: "Corporate Sales",
    href: "/corporate-sales",
    icon: PiBagSimple,
  },
];
