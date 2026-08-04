"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/animations/magnetic";
import servicesHeroImage from "@/assets/services_hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";
const GOLD_TEXT_GRADIENT =
  "linear-gradient(135deg,var(--color-gold-300),var(--color-brand-gold-400) 55%,var(--color-brand-gold-600))";

/**
 * Services page hero — sibling of the Home Hero. Same structure, spacing,
 * animation language, and visual weight; only the copy and image change.
 */
export function ServicesHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services-hero"
      className="relative overflow-hidden bg-brand-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(198,161,91,0.16), transparent 45%), radial-gradient(circle at 5% 90%, rgba(255,255,255,0.05), transparent 40%)",
        }}
      />
      <div
        aria-hidden="true"
        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-40"
        style={{
          maskImage: "linear-gradient(180deg, black, transparent 70%)",
          WebkitMaskImage: "linear-gradient(180deg, black, transparent 70%)",
        }}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-6 flex items-center gap-3"
          >
            <span className="h-px w-8 bg-brand-gold-400" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-400">
              What We Do
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="font-display max-w-xl text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-[3.75rem]"
          >
            From First Impression to{" "}
            <span
              style={{ backgroundImage: GOLD_TEXT_GRADIENT }}
              className="bg-clip-text text-transparent"
            >
              Lasting Impact
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
          >
            Eight disciplines, one point of view. We build the strategy, the
            story, and the execution — so every channel sounds like the same
            brand, on purpose.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
          >
            From first identity sketch to the campaign that keeps people
            coming back, our work is built to compound.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: EASE }}
            className="mt-10"
          >
            <Magnetic>
              <motion.div
                whileHover={{
                  scale: 1.035,
                  boxShadow: "0 20px 45px -14px rgba(198,161,91,0.65)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group inline-block rounded-full"
              >
                <Link
                  href="#services"
                  style={{ backgroundImage: GOLD_GRADIENT }}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-brand-navy-950 shadow-[0_14px_36px_-12px_rgba(198,161,91,0.75)] ring-1 ring-white/25 transition-[filter] duration-300 hover:brightness-110"
                >
                  Explore Services
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </Magnetic>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, clipPath: "inset(0 8% 0 8% round 24px)" }}
          animate={{ opacity: 1, scale: 1, clipPath: "inset(0 0% 0 0% round 24px)" }}
          transition={{ duration: 1, delay: 0.2, ease: EASE }}
          className="relative mx-auto w-full max-w-xl sm:max-w-2xl lg:max-w-none lg:-mr-4 xl:-mr-10"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10  blur-3xl"
          />

          <motion.div
            animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
            transition={
              reduceMotion
                ? undefined
                : { duration: 6, repeat: Infinity, ease: "easeInOut" }
            }
          >
            <Image
              src={servicesHeroImage}
              alt="R&A MediaWorks service capabilities — strategy, content and design"
              preload
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) 80vw, 92vw"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(5,11,22,0.45)]"
            />
          </motion.div>
        </motion.div>
      </Container>

      <div className="rule-gold absolute inset-x-0 bottom-0 opacity-60" />
    </section>
  );
}
