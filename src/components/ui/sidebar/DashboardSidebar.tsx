"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { dashboardSidebar } from "./SidebarData";
import { Sidebar, SidebarBody, SidebarLink } from "./sidebar";
import Image from "next/image";
import UserInfo from "./UserInfo";

export function DashboardSidebar({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  const pathname = usePathname();

  return (
    <div className={cn("flex flex-col md:flex-row w-full h-screen bg-white")}>
      <Sidebar open={open}>
        <SidebarBody className="justify-between gap-10 border-r border-greyAltPrimary">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden scroll-smooth scrollbar">
            {/* Logo Section */}
            <div>
              <Link
                href="/dashboard"
                className="font-normal flex space-x-2 items-center text-base text-blackSecondary relative z-20"
              >
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-medium text-black whitespace-pre"
                >
                  <Image
                    src="/image/comLogo.png"
                    width={232}
                    height={50}
                    alt="Logo"
                    className="w-64 h-auto"
                  />
                </motion.span>
              </Link>
            </div>

            {/* Navigation Links */}
            <div className="mt-8 flex flex-col gap-2">
              {dashboardSidebar?.map((link, index: number) => {
                const baseHref = link.href.split("?")[0];
                const isActive =
                  pathname === baseHref || pathname.startsWith(`${baseHref}/`);

                return (
                  <SidebarLink
                    key={`${link.href}-${index}`}
                    link={link}
                    className={`p-3  ${
                      isActive
                        ? "text-darkBlue font-medium bg-primary-red-500 rounded-lg"
                        : "text-black"
                    }`}
                  />
                );
              })}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>

      {/* Main Content Area */}
      <div className="flex flex-1 bg-gray-25">
        <div className="w-full h-full overflow-hidden overflow-y-auto">
          <UserInfo/>
          <div className="p-2 md:px-10 md:py-3 flex flex-col gap-2 flex-1">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
