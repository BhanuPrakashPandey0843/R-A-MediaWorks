"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";
import { TextReveal } from "@/components/animations/reveal";

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-ivory pt-28 lg:pt-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 82% 18%, rgba(198,161,91,0.16), transparent 45%), radial-gradient(circle at 10% 85%, rgba(10,20,40,0.06), transparent 45%)",
        }}
      />

      <Container className="relative">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-600"
        >
          <span className="h-px w-10 bg-current" />
          Boutique Communications &amp; Branding Studio
        </motion.p>

        <h1 className="max-w-5xl font-display text-[13vw] font-medium leading-[0.98] tracking-tight text-navy-950 sm:text-[8.5vw] lg:text-[6.4vw]">
          <TextReveal>Brands people</TextReveal>
          <TextReveal delay={0.1}>
            <span className="italic text-gold-600">remember</span>, on purpose.
          </TextReveal>
        </h1>

        <div className="mt-10 flex flex-col items-start gap-10 lg:mt-14 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-md text-base leading-relaxed text-mist-700 sm:text-lg"
          >
            We build brand identities, communications strategy, and media
            storytelling for organizations that take how they&apos;re seen
            seriously.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-4"
          >
            <Magnetic>
              <Button href="/contact" size="lg" withArrow>
                Start a Project
              </Button>
            </Magnetic>
            <Button href="/our-work" variant="outline" size="lg">
              View Our Work
            </Button>
          </motion.div>
        </div>
      </Container>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-mist-500"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.3em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown className="size-4" />
        </motion.span>
      </motion.div>
    </section>
  );
}
