"use client";

import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, useState, ReactNode } from "react";
import useReducedMotion from "@/lib/useReducedMotion";

interface Props {
  count: number;
  children: ReactNode;
  eyebrow?: string;
  heading?: string;
}

export default function HorizontalScroller({
  count,
  children,
  eyebrow,
  heading,
}: Props) {
  const reduced = useReducedMotion();
  const [mobile, setMobile] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // Map progress to x: cards fill the width, scroll covers from card 1 → card N
  // We translate by (count - 1) * card-step. Each card is ~60vw with gap;
  // simpler: translate by -((count - 1) / count) * 100% with extra padding.
  const xRaw = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", `-${(count - 1) * 70}%`]
  );
  const x = useSpring(xRaw, { stiffness: 80, damping: 22, mass: 0.6 });

  const stackMode = mobile || reduced;

  if (stackMode) {
    return (
      <section className="relative bg-forest-950 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {(eyebrow || heading) && (
            <header className="mb-12 max-w-2xl">
              {eyebrow && (
                <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-4">
                  {eyebrow}
                </p>
              )}
              {heading && (
                <h2
                  className="font-serif text-cream font-semibold leading-[1.05]"
                  style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
                >
                  {heading}
                </h2>
              )}
            </header>
          )}
          <div className="flex flex-col gap-8">{children}</div>
        </div>
      </section>
    );
  }

  return (
    <section ref={ref} className="relative bg-forest-950" style={{ height: `${count * 100}vh` }}>
      <div className="sticky top-0 h-screen overflow-hidden flex flex-col justify-center">
        {(eyebrow || heading) && (
          <header className="max-w-6xl mx-auto w-full px-6 sm:px-10 mb-10">
            {eyebrow && (
              <p className="text-cyan text-xs font-semibold uppercase tracking-[0.28em] mb-4">
                {eyebrow}
              </p>
            )}
            {heading && (
              <h2
                className="font-serif text-cream font-semibold leading-[1.05] max-w-3xl"
                style={{ fontSize: "clamp(2rem, 3.5vw + 0.5rem, 3.75rem)" }}
              >
                {heading}
              </h2>
            )}
          </header>
        )}
        <motion.div
          style={{ x }}
          className="flex items-stretch gap-8 pl-6 sm:pl-10 will-change-transform"
        >
          {children}
        </motion.div>
      </div>
    </section>
  );
}
