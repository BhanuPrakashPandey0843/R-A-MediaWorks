"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import mobInsideImage from "@/assets/mobinside.jpg";

const EASE = [0.22, 1, 0.36, 1] as const;


const APPROACH = ["Story-led.", "Audience-first.", "Connection-driven.", "Made-to-fit." ];

export function AboutShowcase() {
  return (
    <section id="about" className="relative overflow-hidden bg-ivory py-20 lg:py-28 scroll-mt-24">
      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Left: copy */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <div className="mb-5 flex items-center gap-3">
            <span className="h-px w-8 bg-brand-gold-500" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
              About Us
            </p>
          </div>
          <h2 className="font-display max-w-lg text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Every brand is a story.{" "}
            <span className="text-brand-gold-600">
              Most just haven&apos;t found their storyteller.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist-700">
            R&amp;A MediaWorks brings newsroom discipline to brand
            storytelling  applied to how your
            business speaks.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            className="mt-10 border-t border-mist-300/70 pt-8"
          >
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-mist-600">
              Our approach
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {APPROACH.map((word) => (
                <span
                  key={word}
                  className="font-display text-xl font-bold tracking-tight text-ink sm:text-2xl"
                >
                  {word}
                </span>
              ))}
            </div>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-mist-700">
              Nothing said that doesn&apos;t need saying.
            </p>
          </motion.div>
        </motion.div>

        {/* Right: polished product showcase mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-[260px] sm:max-w-[280px] lg:max-w-[300px]"
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-6 -z-10 h-40 rounded-full bg-brand-gold-500/20 blur-3xl"
          />

          <div className="relative mx-auto aspect-[9/16] w-full rounded-[2.3rem] border border-white/70 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 p-3 shadow-[0_30px_80px_-24px_rgba(0,0,0,0.6)]">
            <div className="absolute left-1/2 top-3 h-6 w-24 -translate-x-1/2 rounded-full bg-slate-950/80" />
            <div className="absolute bottom-3 left-1/2 h-8 w-24 -translate-x-1/2 rounded-full bg-slate-950/60 blur-xl" />

            <div className="relative h-full overflow-hidden rounded-[1.8rem] border border-white/10 bg-brand-navy-950">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(198,161,91,0.28),_transparent_60%)]" />
              <Image
                src={mobInsideImage}
                alt="Inside mobile screen preview"
                fill
                className="object-cover"
                sizes="300px"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-slate-950/10 via-transparent to-slate-950/30" />

              <div className="absolute inset-x-4 top-4 flex items-center justify-between rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-brand-gold-500" />
                  <span className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/85">
                    Story-led
                  </span>
                </div>
                <span className="text-[10px] font-medium uppercase tracking-[0.24em] text-white/70">
                  R&A
                </span>
              </div>

              <div className="absolute inset-x-4 bottom-4 rounded-[1.4rem] border border-white/20 bg-white/90 p-4 shadow-lg backdrop-blur">
                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-gold-600">
                  Brand storytelling
                </p>
                <h3 className="mt-2 font-display text-lg font-semibold leading-tight text-ink">
                  Designed to feel premium,
                  <br />
                  clear, and memorable.
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-mist-700">
                  From strategy to visuals, every detail is crafted with purpose.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
