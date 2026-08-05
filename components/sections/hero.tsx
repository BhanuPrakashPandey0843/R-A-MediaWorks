"use client";

import Link from "next/link";
import { ArrowRight, Star, Sparkles, Zap } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/animations/magnetic";
import { CONSULTATION_LINK } from "@/constants/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";
const GOLD_TEXT_GRADIENT =
  "linear-gradient(135deg,var(--color-gold-300),var(--color-brand-gold-400) 55%,var(--color-brand-gold-600))";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);
  const gridOpacity = useTransform(scrollYProgress, [0, 0.5], [0.15, 0]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ivory py-20 lg:py-32"
    >
      {/* ---- ANIMATED GRID BACKGROUND ---- */}
      <motion.div
        style={{ opacity: gridOpacity }}
        className="pointer-events-none absolute inset-0"
      >
        {/* Main grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(173,131,48,0.15) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(173,131,48,0.15) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
            maskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 50% at 50% 50%, black 40%, transparent 70%)',
          }}
        />

        {/* Secondary grid - smaller cells */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(173,131,48,0.08) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(173,131,48,0.08) 1px, transparent 1px)
            `,
            backgroundSize: '20px 20px',
            maskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, black 30%, transparent 60%)',
            WebkitMaskImage: 'radial-gradient(ellipse 60% 40% at 50% 50%, black 30%, transparent 60%)',
          }}
        />

        {/* Animated diagonal lines */}
        <div 
          className="absolute inset-0 animate-diagonal-scroll"
          style={{
            backgroundImage: `
              repeating-linear-gradient(
                45deg,
                transparent,
                transparent 40px,
                rgba(173,131,48,0.06) 40px,
                rgba(173,131,48,0.06) 41px
              )
            `,
            backgroundSize: '80px 80px',
            maskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 50%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 50% at 50% 50%, black 20%, transparent 50%)',
          }}
        />

        {/* Floating dots on grid intersections */}
        {[...Array(30)].map((_, i) => {
          const col = i % 6;
          const row = Math.floor(i / 6);
          return (
            <motion.div
              key={i}
              className="absolute h-1.5 w-1.5 rounded-full bg-brand-gold-400/30"
              style={{
                left: `${15 + col * 15}%`,
                top: `${10 + row * 15}%`,
              }}
              animate={{
                opacity: [0, 0.8, 0],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: 3 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Glowing orbs */}
        <motion.div
          className="absolute h-[500px] w-[500px] rounded-full bg-brand-gold-400/5 blur-[120px]"
          style={{ left: '20%', top: '10%' }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute h-[400px] w-[400px] rounded-full bg-brand-navy-900/5 blur-[100px]"
          style={{ right: '15%', bottom: '20%' }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute h-[300px] w-[300px] rounded-full bg-brand-gold-400/5 blur-[80px]"
          style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
      </motion.div>

      {/* ---- CENTERED CONTENT ---- */}
      <Container className="relative z-10">
        <motion.div
          style={{ y, opacity, scale }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Tagline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-12 origin-right bg-gradient-to-r from-transparent to-brand-gold-400"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className="h-4 w-4 text-brand-gold-400" />
            </motion.div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-400 sm:text-sm">
              Global Experience • Local Soul
            </p>
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
            >
              <Star className="h-4 w-4 text-brand-gold-400" />
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="h-px w-12 origin-left bg-gradient-to-l from-transparent to-brand-gold-400"
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: EASE }}
            className="font-display mb-8 text-5xl font-bold leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl lg:text-[5.5rem]"
          >
            R&A{" "}
            <span
              style={{
                backgroundImage: GOLD_TEXT_GRADIENT,
                backgroundSize: "200% 200%",
              }}
              className="animate-gradient-flow bg-clip-text text-transparent"
            >
              Media
              <br className="sm:hidden" />Works
            </span>
          </motion.h1>

          {/* Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: EASE }}
            className="mx-auto max-w-2xl space-y-4"
          >
            <p className="text-base leading-relaxed text-mist-700 sm:text-lg md:text-xl">
              We are a boutique Communications &amp; Branding Studio, with home in
              Southwestern Ontario.
            </p>
            <p className="text-base leading-relaxed text-mist-600 sm:text-lg">
              The difference between being seen and being scrolled past is a story
              told well. We help small and mid-size businesses find their voice and
              build a presence that earns attention, and keeps it.
            </p>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
          >
            <Magnetic>
              <motion.div
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 25px 50px -12px rgba(198,161,91,0.5)",
                }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.35, ease: EASE }}
                className="group relative inline-block w-full sm:w-auto"
              >
                <div className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-brand-gold-400 to-brand-gold-600 opacity-0 blur transition-opacity duration-300 group-hover:opacity-75" />
                <Link
                  href={CONSULTATION_LINK}
                  target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
                  rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ backgroundImage: GOLD_GRADIENT }}
                  className="relative inline-flex h-14 w-full items-center justify-center gap-2 rounded-full px-8 text-sm font-semibold text-brand-navy-950 shadow-lg ring-1 ring-white/25 transition-all duration-300 hover:brightness-110 sm:w-auto"
                >
                  Book a Consultation
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </motion.div>
                </Link>
              </motion.div>
            </Magnetic>

            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="#work"
                className="group inline-flex h-14 items-center justify-center gap-2 rounded-full border-2 border-brand-navy-900/10 px-8 text-sm font-semibold text-brand-navy-900 transition-all duration-300 hover:border-brand-gold-400 hover:text-brand-gold-400"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16"
          >
            <p className="mb-6 text-xs font-medium uppercase tracking-wider text-mist-400">
              Trusted by innovative brands
            </p>
            <div className="flex items-center justify-center gap-8 sm:gap-12">
              {[
                { label: "Projects", value: "150+" },
                { label: "Clients", value: "50+" },
                { label: "Years", value: "12+" },
                { label: "Awards", value: "8+" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="font-display text-2xl font-bold text-brand-navy-950 sm:text-3xl">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs text-mist-500">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-xs text-mist-400">Scroll to explore</span>
          <div className="h-8 w-5 rounded-full border-2 border-mist-300 p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="h-1.5 w-1.5 rounded-full bg-brand-gold-400"
            />
          </div>
        </motion.div>
      </motion.div>

      {/* Custom CSS animations */}
      <style jsx>{`
        @keyframes diagonal-scroll {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(80px, 80px);
          }
        }

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animate-diagonal-scroll {
          animation: diagonal-scroll 20s linear infinite;
        }

        .animate-gradient-flow {
          animation: gradient-flow 6s ease infinite;
        }

        /* Mobile grid adjustments */
        @media (max-width: 640px) {
          .animate-diagonal-scroll {
            animation-duration: 30s;
          }
        }
      `}</style>
    </section>
  );
}