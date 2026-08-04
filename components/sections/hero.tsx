"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/animations/magnetic";
import { CONSULTATION_LINK } from "@/constants/site";
import heroImage from "@/assets/home_hero.png";

const EASE = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
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

      <Container className="relative grid items-center gap-16 lg:grid-cols-[1fr_1.08fr] lg:gap-14">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: EASE }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-400"
          >
            Global Experience Local Soul
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE }}
            className="max-w-xl text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            R&amp;A <span className="text-brand-gold-400">MediaWorks</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE }}
            className="mt-5 max-w-md text-base leading-relaxed text-white/70 sm:text-lg"
          >
            We are a boutique Communications &amp; Branding Studio, with home
            in Southwestern Ontario.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
          >
            The difference between being seen and being scrolled past is a
            story told well. We help small and mid-size businesses find
            their voice and build a presence that earns attention, and keeps
            it.
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
                  boxShadow: "0 18px 40px -12px rgba(198,161,91,0.55)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="inline-block rounded-full"
              >
                <Link
                  href={CONSULTATION_LINK}
                  target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
                  rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="inline-flex h-14 items-center justify-center rounded-full bg-brand-gold-500 px-8 text-sm font-semibold text-brand-navy-950 shadow-[0_10px_30px_-12px_rgba(198,161,91,0.7)] transition-colors duration-300 hover:bg-brand-gold-400"
                >
                  Book a Consultation
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
          {/* Soft gold glow anchoring the hero image for extra visual weight */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-10 -z-10 rounded-full "
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
              src={heroImage}
              alt="R&A MediaWorks — Communications & Branding Studio"
              preload
              sizes="(min-width: 1024px) 48vw, (min-width: 640px) 80vw, 92vw"
              className="h-auto w-full drop-shadow-[0_30px_60px_rgba(5,11,22,0.45)]"
            />
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
