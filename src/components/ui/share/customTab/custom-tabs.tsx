"use client"

import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

const CustomTabs = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Root>
>(({ className, ...props }, ref) => <TabsPrimitive.Root ref={ref} className={cn("w-full", className)} {...props} />)
CustomTabs.displayName = TabsPrimitive.Root.displayName

const CustomTabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    className={cn("flex w-full items-center justify-between rounded-t-xl bg-[#002868] p-1", className)}
    {...props}
  />
))
CustomTabsList.displayName = TabsPrimitive.List.displayName

const CustomTabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger> & {
    icon?: React.ReactNode
  }
>(({ className, icon, children, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    className={cn(
      "relative flex flex-1 items-center justify-center space-x-2 whitespace-nowrap rounded-t-lg px-3 py-3 text-base font-medium transition-all",
      "data-[state=inactive]:bg-[#032e73] data-[state=inactive]:text-[#F1F1F1] data-[state=inactive]:hover:bg-[#0A3161]",
      "data-[state=active]:bg-[#F1F1F1] data-[state=active]:text-[#002868] data-[state=active]:shadow-inner",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#bf0a30] focus-visible:ring-offset-2",
      "disabled:pointer-events-none disabled:opacity-50",
      className,
    )}
    {...props}
  >
    {icon && <span className="mr-2">{icon}</span>}
    <span>{children}</span>
    {(props as { "data-state"?: string })["data-state"] === "active" && (
      <motion.div
        className="absolute bottom-0 left-0 h-1 w-full bg-[#bf0a30]"
        layoutId="tab-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      />
    )}
  </TabsPrimitive.Trigger>
))
CustomTabsTrigger.displayName = TabsPrimitive.Trigger.displayName

const CustomTabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    className={cn(
      "pt-10",
      // "rounded-b-xl border-x-2 border-b-2 border-[#F1F1F1] bg-[#f3f4f8] p-6 shadow-md",
      "ring-offset-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0A3161] focus-visible:ring-offset-2",
      className,
    )}
    {...props}
  />
))
CustomTabsContent.displayName = TabsPrimitive.Content.displayName

export { CustomTabs, CustomTabsList, CustomTabsTrigger, CustomTabsContent }
