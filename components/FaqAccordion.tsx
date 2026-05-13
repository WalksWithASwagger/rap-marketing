"use client";

import { useId, useRef, useState, KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import useReducedMotion from "@/lib/useReducedMotion";

export interface FaqItem {
  q: string;
  a: string;
}

interface Props {
  items: FaqItem[];
}

export default function FaqAccordion({ items }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const reduced = useReducedMotion();
  const idBase = useId();
  const btnRefs = useRef<(HTMLButtonElement | null)[]>([]);

  function toggle(i: number) {
    setOpenIdx((cur) => (cur === i ? null : i));
  }

  function onKey(e: KeyboardEvent<HTMLButtonElement>, i: number) {
    switch (e.key) {
      case "ArrowDown": {
        e.preventDefault();
        const next = (i + 1) % items.length;
        btnRefs.current[next]?.focus();
        break;
      }
      case "ArrowUp": {
        e.preventDefault();
        const prev = (i - 1 + items.length) % items.length;
        btnRefs.current[prev]?.focus();
        break;
      }
      case "Home":
        e.preventDefault();
        btnRefs.current[0]?.focus();
        break;
      case "End":
        e.preventDefault();
        btnRefs.current[items.length - 1]?.focus();
        break;
      case "Escape":
        if (openIdx === i) {
          e.preventDefault();
          setOpenIdx(null);
        }
        break;
    }
  }

  return (
    <ul className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIdx === i;
        const btnId = `${idBase}-faq-btn-${i}`;
        const panelId = `${idBase}-faq-panel-${i}`;
        return (
          <li
            key={i}
            className="bg-forest-800 border border-forest-600 rounded-xl overflow-hidden"
          >
            <h2 className="m-0">
              <button
                ref={(el) => {
                  btnRefs.current[i] = el;
                }}
                id={btnId}
                aria-expanded={isOpen}
                aria-controls={panelId}
                onClick={() => toggle(i)}
                onKeyDown={(e) => onKey(e, i)}
                className="w-full flex items-center justify-between gap-4 px-5 py-5 text-left hover:bg-forest-700/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan"
              >
                <span className="text-cream font-medium leading-snug">
                  {item.q}
                </span>
                <motion.span
                  className="text-gold shrink-0 text-xl"
                  initial={false}
                  animate={
                    reduced
                      ? { rotate: isOpen ? 45 : 0 }
                      : { rotate: isOpen ? 45 : 0 }
                  }
                  transition={{ duration: reduced ? 0 : 0.25, ease: [0.16, 1, 0.3, 1] }}
                  aria-hidden
                >
                  +
                </motion.span>
              </button>
            </h2>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="panel"
                  id={panelId}
                  role="region"
                  aria-labelledby={btnId}
                  initial={reduced ? { height: "auto", opacity: 1 } : { height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={reduced ? { height: 0, opacity: 0 } : { height: 0, opacity: 0 }}
                  transition={{
                    duration: reduced ? 0 : 0.32,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5 pt-1 border-t border-forest-700">
                    <p className="text-muted leading-relaxed">{item.a}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
