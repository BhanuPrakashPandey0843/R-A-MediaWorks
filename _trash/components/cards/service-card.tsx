"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Globe,
  LineChart,
  Megaphone,
  Palette,
  Share2,
  ShieldAlert,
  Users,
  Video,
} from "lucide-react";
import type { ServiceItem } from "@/types";

const ICONS = {
  Palette,
  Share2,
  Globe,
  LineChart,
  Users,
  Megaphone,
  Video,
  ShieldAlert,
} as const;

export function ServiceCard({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Globe;

  return (
    <motion.a
      href={`/services#${service.slug}`}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay: (index % 4) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -6 }}
      className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-navy-900/10 bg-white p-8 shadow-[0_1px_2px_rgba(11,18,32,0.04)] transition-colors duration-500 hover:border-gold-400/60"
    >
      <div>
        <div className="mb-8 flex size-12 items-center justify-center rounded-full bg-navy-950 text-gold-300 transition-colors duration-500 group-hover:bg-gold-500 group-hover:text-navy-950">
          <Icon className="size-5" />
        </div>
        <h3 className="font-display text-xl font-medium text-navy-950">{service.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-mist-700">
          {service.shortDescription}
        </p>
      </div>

      <div className="mt-8 flex items-center gap-2 text-sm font-medium text-navy-900">
        Learn more
        <ArrowUpRight className="size-4 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-gold-600" />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-10 size-32 rounded-full bg-gold-400/0 blur-2xl transition-colors duration-500 group-hover:bg-gold-400/20"
      />
    </motion.a>
  );
}
