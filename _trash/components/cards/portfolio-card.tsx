"use client";

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import type { PortfolioItem } from "@/types";

export function PortfolioCard({ item, index }: { item: PortfolioItem; index: number }) {
  return (
    <motion.a
      href={`/our-work/${item.slug}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-navy-900">
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-br from-navy-800 via-navy-900 to-navy-950 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-105"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              "radial-gradient(circle at 30% 20%, rgba(198,161,91,0.25), transparent 60%)",
          }}
        />
        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
          <span className="rounded-full border border-white/20 px-3 py-1 text-xs font-medium uppercase tracking-wide text-ivory/80">
            {item.category}
          </span>
          <span className="text-xs font-medium text-ivory/50">{item.year}</span>
        </div>
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-gold-300/80">
                {item.client}
              </p>
              <h3 className="mt-2 font-display text-2xl font-medium text-ivory">
                {item.title}
              </h3>
            </div>
            <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-ivory backdrop-blur-sm transition-all duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </div>
        </div>
      </div>
      <p className="mt-4 text-sm leading-relaxed text-mist-700">{item.summary}</p>
    </motion.a>
  );
}
