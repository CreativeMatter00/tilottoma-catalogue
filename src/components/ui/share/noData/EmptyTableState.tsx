"use client";

import { motion } from "framer-motion";
import {
  type LucideIcon,
  FileSpreadsheet,
  Plus,
  RefreshCw,
  Search,
} from "lucide-react";

interface EmptyTableStateProps {
  title?: string;
  description?: string;
  icon?: LucideIcon;
  actionLabel?: string;
  variant?: "default" | "search" | "filtered" | "loading";
}

export default function EmptyTableState({
  title,
  description,
  icon: Icon,
  variant = "default",
}: EmptyTableStateProps) {
  // Predefined variants with default content
  const variants = {
    default: {
      icon: FileSpreadsheet,
      title: "No Data Available",
      description: "There are no items to display at this time.",
      actionLabel: "Add new item",
      actionIcon: Plus,
    },
    search: {
      icon: Search,
      title: "No results found",
      description:
        "Try adjusting your search or filters to find what you're looking for.",
      actionLabel: "Clear filters",
      actionIcon: RefreshCw,
    },
    filtered: {
      icon: RefreshCw,
      title: "No matching results",
      description:
        "Your current filters returned no results. Try changing or clearing your filters.",
      actionLabel: "Clear filters",
      actionIcon: RefreshCw,
    },
    loading: {
      icon: RefreshCw,
      title: "Loading data",
      description: "Please wait while we fetch your data...",
      actionLabel: "",
      actionIcon: undefined,
    },
  };

  // Use provided props or fall back to variant defaults
  const selectedVariant = variants[variant];
  const FinalIcon = Icon || selectedVariant.icon;
  const finalTitle = title || selectedVariant.title;
  const finalDescription = description || selectedVariant.description;

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
      },
    },
  };

  const iconVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        delay: 0.2,
      },
    },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center w-full py-16 px-4"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="relative mb-6"
        variants={variant === "loading" ? {} : iconVariants}
        animate={variant === "loading" ? "animate" : ""}
      >
        <div className="absolute inset-0 rounded-full opacity-10 bg-blueActual" />
        <div className="relative flex items-center justify-center w-20 h-20 rounded-full bg-silverPrimary">
          <FinalIcon size={32} className=" text-blueActual" />
        </div>

        {/* Decorative elements */}
        <motion.div
          className="absolute w-3 h-3 rounded-full bg-redActual"
          style={{
            top: "-5%",
            right: "10%",
          }}
          animate={{
            y: [0, -8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.div
          className="absolute w-2 h-2 rounded-full bg-navyBlue"
          style={{
            bottom: "0%",
            left: "10%",
          }}
          animate={{
            y: [0, 8, 0],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 2.5,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      <motion.h3
        className="text-xl font-semibold mb-2 text-center text-blueActual"
        variants={itemVariants}
      >
        {finalTitle}
      </motion.h3>

      <motion.p
        className="text-gray-500 text-center max-w-md mb-6"
        variants={itemVariants}
      >
        {finalDescription}
      </motion.p>
    </motion.div>
  );
}
