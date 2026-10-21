"use client";

import { motion } from "motion/react";

// Row of tab buttons with a crimson highlight that slides to the active tab.
export default function TabButtons<T extends string>({
  tabs,
  active,
  onChange,
  id,
}: {
  tabs: readonly T[];
  active: T;
  onChange: (tab: T) => void;
  /** Unique per page section, so each row animates its own highlight. */
  id: string;
}) {
  return (
    <div className="mb-12 flex flex-wrap justify-center gap-2" role="tablist">
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={active === tab}
          onClick={() => onChange(tab)}
          className={`relative px-5 py-2 text-sm uppercase tracking-[0.2em] transition-colors ${
            active === tab ? "text-white" : "text-charcoal hover:text-crimson"
          }`}
        >
          {active === tab && <motion.span layoutId={id} className="absolute inset-0 bg-crimson" />}
          <span className="relative">{tab}</span>
        </button>
      ))}
    </div>
  );
}
