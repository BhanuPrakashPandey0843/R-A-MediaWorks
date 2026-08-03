"use client";

import { motion, type Variants } from "motion/react";
import { cn } from "@/lib/utils";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  /** Stagger children — pass `as="stagger-group"` on the parent, mark items with `Reveal` too. */
  once?: boolean;
}

const easePremium = [0.22, 1, 0.36, 1] as const;

function buildVariants(y: number): Variants {
  return {
    hidden: { opacity: 0, y },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easePremium },
    },
  };
}

/** Fade + rise reveal, triggered once when the element enters the viewport. */
export function Reveal({ children, className, delay = 0, y = 28, once = true }: RevealProps) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={buildVariants(y)}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

/** Stagger container — wrap several children (each in its own motion element) to cascade them in. */
export function RevealGroup({
  children,
  className,
  stagger = 0.12,
  once = true,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
  once?: boolean;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: "-80px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function RevealItem({
  children,
  className,
  y = 24,
}: {
  children: React.ReactNode;
  className?: string;
  y?: number;
}) {
  return (
    <motion.div className={cn(className)} variants={buildVariants(y)}>
      {children}
    </motion.div>
  );
}

/** Line-by-line mask reveal for large headings. Wrap each line in its own <TextReveal>. */
export function TextReveal({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  return (
    <span className={cn("block overflow-hidden", className)}>
      <motion.span
        className="block will-change-transform"
        initial={{ y: "110%" }}
        whileInView={{ y: "0%" }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 1, ease: easePremium, delay }}
      >
        {children}
      </motion.span>
    </span>
  );
}
