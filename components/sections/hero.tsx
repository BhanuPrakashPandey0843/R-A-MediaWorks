"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Play } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/animations/magnetic";
import heroImage from "@/assets/home_hero.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-brand-navy-900 pb-20 pt-32 lg:pb-28 lg:pt-40">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 20%, rgba(245,112,29,0.14), transparent 45%), radial-gradient(circle at 5% 90%, rgba(255,255,255,0.05), transparent 40%)",
        }}
      />

      <Container className="relative grid items-center gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-brand-orange-400"
          >
            Digital Agency
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-xl text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-[3.4rem]"
          >
            We Build Digital{" "}
            <span className="text-brand-orange-500">Solutions</span> That
            Scale
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-md text-base leading-relaxed text-white/60 sm:text-lg"
          >
            We help businesses grow with innovative strategies and
            data-driven digital solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-wrap items-center gap-8"
          >
            <Magnetic>
              <Link
                href="/contact"
                className="inline-flex h-14 items-center justify-center rounded-full bg-brand-orange-500 px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-orange-600"
              >
                Get Started
              </Link>
            </Magnetic>

            <Link
              href="/our-work"
              className="group inline-flex items-center gap-3 text-sm font-semibold text-white"
            >
              Learn More
              <span className="flex size-9 items-center justify-center rounded-full border border-white/30 transition-colors duration-300 group-hover:border-brand-orange-500 group-hover:bg-brand-orange-500">
                <Play className="size-3.5 translate-x-0.5 fill-white text-white" />
              </span>
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-lg lg:max-w-none"
        >
          <Image
            src={heroImage}
            alt="Illustration of a digital agency team analyzing data and building digital products"
            priority
            className="h-auto w-full"
          />
        </motion.div>
      </Container>
    </section>
  );
}
