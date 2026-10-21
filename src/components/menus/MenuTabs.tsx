"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { sampleMenus } from "@/lib/content";
import TabButtons from "../TabButtons";

type Cuisine = keyof typeof sampleMenus;
const cuisines = Object.keys(sampleMenus) as Cuisine[];

export default function MenuTabs() {
  const [active, setActive] = useState<Cuisine>(cuisines[0]);

  return (
    <>
      <TabButtons tabs={cuisines} active={active} onChange={setActive} id="menu-tab" />
      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -16 }}
          transition={{ duration: 0.35 }}
          className="mx-auto grid max-w-4xl gap-x-16 gap-y-10 border border-gold/40 bg-white p-8 sm:grid-cols-2 sm:p-12"
        >
          {sampleMenus[active].map(({ course, items }) => (
            <div key={course}>
              <h3 className="border-b border-gold/40 pb-2 text-2xl text-crimson">{course}</h3>
              <ul className="mt-4 space-y-2 text-charcoal/80">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
