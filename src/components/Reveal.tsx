import React, { PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface RevealProps {
  className?: string;
  delay?: number;
}

function Reveal({ className, delay = 0, children }: PropsWithChildren<RevealProps>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default Reveal;
