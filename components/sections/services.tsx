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
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 24 }}
      transition={{
        duration: 0.55,
        delay: index * 0.08,
        ease: [0.22, 1, 0.36, 1],
      }}
      whileHover={{ y: -6 }}
      className="group rounded-2xl border border-mist-300/70 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(11,18,32,0.35)] transition-colors duration-300 hover:border-brand-orange-400/60"
    >
      <span className="flex size-12 items-center justify-center rounded-xl bg-brand-orange-500 text-white transition-transform duration-300 group-hover:scale-105">
        <Icon className="size-5" />
      </span>

      <h3 className="mt-5 text-base font-bold tracking-tight text-ink">
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

  const visibleServices = showAll
    ? SERVICES
    : SERVICES.slice(0, 4);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-ivory py-20 lg:py-28 scroll-mt-24"
    >
      <Container className="relative">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange-600">
            Our Services
          </p>

          <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            Ready To Tell Your Story?{" "}
            <span className="text-brand-orange-500">
              Trust The Experts
            </span>
          </h2>
        </div>

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
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setShowAll(!showAll)}
              className="flex h-14 w-44 items-center justify-center rounded-xl border-2 border-brand-orange-500 bg-white font-semibold text-brand-orange-500 transition-all duration-300 hover:bg-brand-orange-500 hover:text-white"
            >
              {showAll ? "View Less" : "View More"}
            </motion.button>
          </div>
        )}
      </Container>
    </section>
  );
}