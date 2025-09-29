"use client"

import type { ReactNode } from "react"
import { CustomTabs, CustomTabsList, CustomTabsTrigger, CustomTabsContent } from "./custom-tabs"
import { motion, AnimatePresence } from "framer-motion"

export interface TabItem {
  value: string
  label: string
  icon?: ReactNode
  content: ReactNode
}

interface TabContainerProps {
  tabs: TabItem[]
  defaultValue?: string
  className?: string
}

export function TabContainer({ tabs, defaultValue, className }: TabContainerProps) {
  return (
    <div className="w-full">
      <CustomTabs defaultValue={defaultValue || tabs[0]?.value} className={className}>
        <CustomTabsList>
          {tabs.map((tab) => (
            <CustomTabsTrigger key={tab.value} value={tab.value} icon={tab.icon}>
              {tab.label}
            </CustomTabsTrigger>
          ))}
        </CustomTabsList>
        <AnimatePresence mode="wait">
          {tabs.map((tab) => (
            <CustomTabsContent key={tab.value} value={tab.value}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {tab.content}
              </motion.div>
            </CustomTabsContent>
          ))}
        </AnimatePresence>
      </CustomTabs>
    </div>
  )
}
