"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Heading from "../heading/Heading";
import { MdKeyboardArrowRight } from "react-icons/md";
const BreadcrumbOfDashboard = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").slice(0, 3).filter(Boolean); 
  const capitalizeFirst = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);
  return (
    <nav className="mb-6">
      <Heading headerName={`${pathSegments?.[0]}`} />
      <div className="flex items-center">
        <Link
          href="/dashboard"
          className="text-primary-red-500 font-medium text-sm"
        >
         Dashboard
        </Link>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isLast = index === pathSegments.length - 1;

          return (
            <React.Fragment key={index + 1}>
              <span
                className={`${
                  index === pathSegments.length - 2
                    ? "text-primary-red-500 "
                    : "text-natural-500"
                } mx-1`}
              >
                <MdKeyboardArrowRight size={18} className="-mt-0.5" />
              </span>
              {isLast ? (
                <span className="text-natural-500 font-medium text-sm">
                  {capitalizeFirst(decodeURIComponent(segment))}
                </span>
              ) : (
                <Link
                  href={href}
                  className="text-primary-red-500 font-medium text-sm"
                >
                  {capitalizeFirst(decodeURIComponent(segment))}
                </Link>
              )}
            </React.Fragment>
          );
        })}
      </div>
    </nav>
  );
};

export default BreadcrumbOfDashboard;
