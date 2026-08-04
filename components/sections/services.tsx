"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Share2,
  Globe,
  Palette,
  BarChart3,
  MessageSquare,
  Megaphone,
  Clapperboard,
  ShieldAlert,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SERVICES } from "@/constants/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";

const ICONS = [
  Share2,
  Globe,
  Palette,
  BarChart3,
  MessageSquare,
  Megaphone,
  Clapperboard,
  ShieldAlert,
] as const;

function ServiceCard({
  title,
  description,
  Icon,
  index,
}: {
  title: string;
  description: string;
  Icon: React.ComponentType<{ className?: string }>;
  index: number;
}) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{
        duration: 0.55,
        delay: (index % 4) * 0.08,
        ease: EASE,
      }}
      whileHover={{
        y: -8,
        boxShadow: "0 28px 55px -22px rgba(198,161,91,0.45)",
      }}
      className="group relative overflow-hidden rounded-2xl border border-mist-300/70 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(11,18,32,0.35)] transition-colors duration-300 hover:border-brand-gold-400/60"
    >
      {/* Gold accent bar — reveals on hover for a refined finishing touch */}
      <span
        aria-hidden="true"
        style={{ backgroundImage: GOLD_GRADIENT }}
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 ease-out group-hover:scale-x-100"
      />

      <motion.span
        whileHover={{ scale: 1.08, rotate: -4 }}
        transition={{ duration: 0.3, ease: EASE }}
        style={{ backgroundImage: GOLD_GRADIENT }}
        className="flex size-12 items-center justify-center rounded-xl text-brand-navy-950 shadow-[0_10px_24px_-10px_rgba(198,161,91,0.6)]"
      >
        <Icon className="size-5" />
      </motion.span>

      <h3 className="font-display mt-5 text-lg font-bold tracking-tight text-ink">
        {title}
      </h3>

      <p className="mt-2.5 text-sm leading-relaxed text-mist-700">
        {description}
      </p>
    </motion.div>
  );
}

export function Services() {
  const [showAll, setShowAll] = useState(false);

  const visibleServices = showAll ? SERVICES : SERVICES.slice(0, 4);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ivory py-20 lg:py-28 scroll-mt-24"
    >
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-gold-500" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
              Our Services
            </p>
            <span className="h-px w-8 bg-brand-gold-500" />
          </div>

          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            Ready To Tell Your Story?{" "}
            <span className="text-brand-gold-600">Trust The Experts</span>
          </h2>
        </motion.div>

        <motion.div
          layout
          className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4"
        >
          <AnimatePresence>
            {visibleServices.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                Icon={ICONS[index]}
                index={index}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {SERVICES.length > 4 && (
          <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 16px 36px -16px rgba(198,161,91,0.5)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3, ease: EASE }}
              onClick={() => setShowAll(!showAll)}
              className="flex h-14 w-44 items-center justify-center rounded-xl border-2 border-brand-gold-500 bg-white font-semibold text-brand-gold-600 transition-colors duration-300 hover:bg-brand-gold-500 hover:text-brand-navy-950"
            >
              {showAll ? "View Less" : "View More"}
            </motion.button>
          </div>
        )}
      </Container>
    </section>
  );
}
