"use client";

import { motion } from "motion/react";
import type { ProcessStep } from "@/types";

export function ProcessCard({ step, index }: { step: ProcessStep; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative border-t border-ivory/15 pt-8"
    >
      <span className="font-display text-sm text-gold-400">{step.index}</span>
      <h3 className="mt-4 font-display text-2xl font-medium text-ivory sm:text-3xl">
        {step.title}
      </h3>
      <p className="mt-4 max-w-xs text-sm leading-relaxed text-ivory/60">
        {step.description}
      </p>
    </motion.div>
  );
}
