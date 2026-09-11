import React from "react";
import { motion } from "framer-motion";
import { cn } from "lib/utils";

interface ExpandingTabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  className?: string;
}

function ExpandingTabs({ tabs, active, onChange, className }: ExpandingTabsProps) {
  return (
    <div
      className={cn(
        "inline-flex flex-wrap items-center gap-1 rounded-full border border-border bg-card p-1",
        className
      )}
    >
      {tabs.map((tab) => {
        const isActive = tab === active;
        return (
          <button
            key={tab}
            onClick={() => onChange(tab)}
            className={cn(
              "relative rounded-full px-4 py-1.5 text-sm font-medium transition-colors",
              isActive ? "text-primary-foreground" : "text-foreground/70 hover:text-foreground"
            )}
          >
            {isActive && (
              <motion.span
                layoutId="expanding-tabs-pill"
                className="absolute inset-0 rounded-full bg-primary"
                transition={{ type: "spring", stiffness: 400, damping: 30 }}
              />
            )}
            <span className="relative z-10">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}

export default ExpandingTabs;
