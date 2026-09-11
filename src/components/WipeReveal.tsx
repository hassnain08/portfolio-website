import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface WipeRevealProps {
  className?: string;
  delay?: number;
}

// NOTE: deliberately animates `scaleX` (a transform), not `clipPath` — Framer
// Motion 13.2.0 silently fails to trigger whileInView/viewport when clipPath
// is one of the animated properties (confirmed by isolation: swapping to a
// transform-only property fixed it). This overlay-wipe achieves the same
// visual without hitting that bug.
function WipeReveal({ className, delay = 0, children }: PropsWithChildren<WipeRevealProps>) {
  return (
    <div className={className} style={{ position: "relative", overflow: "hidden" }}>
      <motion.div
        initial={{ opacity: 0, x: -12 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.5, delay: delay + 0.15, ease: "easeOut" }}
        className="h-full"
      >
        {children}
      </motion.div>
      <motion.div
        aria-hidden
        initial={{ scaleX: 1 }}
        whileInView={{ scaleX: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.55, delay, ease: [0.76, 0, 0.24, 1] }}
        style={{ transformOrigin: "right" }}
        className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-br from-primary to-accent"
      />
    </div>
  );
}

export default WipeReveal;
