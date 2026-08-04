"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import phoneFrame from "@/assets/MiddlePhone.png";

const EASE = [0.22, 1, 0.36, 1] as const;

const APPROACH = ["Minimal.", "Precise.", "Story-led."];

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
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
            About Us
          </p>
          <h2 className="max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl lg:text-[2.75rem]">
            Every brand is a story.{" "}
            <span className="text-brand-gold-600">
              Most just haven&apos;t found their editor.
            </span>
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-mist-700">
            R&amp;A MediaWorks brings newsroom discipline to brand
            storytelling — the same instinct for structure, clarity, and
            consequence that shapes a strong headline, applied to how your
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
                  className="text-xl font-extrabold tracking-tight text-ink sm:text-2xl"
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

        {/* Right: phone mockup with looping showcase video */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
          className="relative mx-auto w-full max-w-[220px] lg:max-w-[240px]"
        >
          {/* Soft gold glow behind the phone frame for premium depth */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-6 -z-10 rounded-full bg-brand-gold-500/15 blur-2xl"
          />

          <div className="relative aspect-[352/709] w-full">
            {/*
              Video sits in the transparent "screen" cutout of MiddlePhone.png.
              Drop your clip at: public/videos/team-showcase.mp4
              (create the /videos folder inside /public if it doesn't exist yet)
            */}
            <video
              className="absolute left-[5.4%] top-[5.78%] h-[92.38%] w-[90.06%] rounded-[10%] object-cover"
              src="/videos/team-showcase.mp4"
              autoPlay
              muted
              loop
              playsInline
            />

            {/* Phone frame overlay — sits above the video, transparent screen area */}
            <Image
              src={phoneFrame}
              alt="Mobile phone frame previewing R&A MediaWorks storytelling"
              fill
              sizes="240px"
              className="pointer-events-none z-10 object-contain"
            />
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
