"use client";

import { useState } from "react";

import { motion } from "motion/react";

import { Send, Mail, Phone, MapPin } from "lucide-react";

import { Container } from "@/components/ui/container";

import { Magnetic } from "@/components/animations/magnetic";

import { SITE, CONSULTATION_LINK } from "@/constants/site";

import Image from "next/image";
import potatoImage from "@/assets/potato.jpg";



const EASE = [0.22, 1, 0.36, 1] as const;

const GOLD_GRADIENT =

  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";



export function ContactCta() {

  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");



  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {

    e.preventDefault();

    setStatus("sending");

    // TODO: wire up to real submission endpoint.

    setTimeout(() => setStatus("sent"), 900);

  }



  return (

    <section id="contact" className="relative overflow-hidden bg-brand-navy-900 py-20 lg:py-28 scroll-mt-24">

      <div

        aria-hidden="true"

        className="pointer-events-none absolute inset-0"

        style={{

          background:

            "radial-gradient(circle at 90% 10%, rgba(198,161,91,0.16), transparent 45%), radial-gradient(circle at 0% 100%, rgba(255,255,255,0.05), transparent 40%)",

        }}

      />

      <div

        aria-hidden="true"

        className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30"

        style={{

          maskImage: "radial-gradient(circle at 30% 20%, black, transparent 65%)",

          WebkitMaskImage:

            "radial-gradient(circle at 30% 20%, black, transparent 65%)",

        }}

      />

      <div className="rule-gold absolute inset-x-0 top-0 opacity-60" />



      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-12">

        {/* Left: heading + contact details + CTA */}

        <motion.div

          initial={{ opacity: 0, y: 20 }}

          whileInView={{ opacity: 1, y: 0 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{ duration: 0.7, ease: EASE }}

        >

          <div className="mb-5 flex items-center gap-3">

            <span className="h-px w-8 bg-brand-gold-400" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-400">

              Get In Touch

            </p>

          </div>

          <h2 className="font-display max-w-lg text-3xl font-bold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">

            Let&apos;s Write Your{" "}

            <span className="text-brand-gold-400">Next Chapter</span>

          </h2>



          <ul className="mt-8 space-y-4">

            <li className="flex items-center gap-3">

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">

                <Mail className="size-4" />

              </span>

              <a

                href={`mailto:${SITE.email}`}

                className="text-sm text-white/70 transition-colors duration-300 hover:text-brand-gold-400 sm:text-base"

              >

                {SITE.email}

              </a>

            </li>

            <li className="flex items-center gap-3">

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">

                <Phone className="size-4" />

              </span>

              <a

                href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}

                className="text-sm text-white/70 transition-colors duration-300 hover:text-brand-gold-400 sm:text-base"

              >

                {SITE.phone}

              </a>

            </li>

            <li className="flex items-center gap-3">

              <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">

                <MapPin className="size-4" />

              </span>

              <span className="text-sm text-white/70 sm:text-base">

                {SITE.location}

              </span>

            </li>

          </ul>



          <Magnetic className="mt-9">

            <motion.div

              whileHover={{

                scale: 1.035,

                boxShadow: "0 20px 45px -14px rgba(198,161,91,0.65)",

              }}

              whileTap={{ scale: 0.97 }}

              transition={{ duration: 0.35, ease: EASE }}

              className="inline-block rounded-full"

            >

              <a

                href={CONSULTATION_LINK}

                target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}

                rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}

                style={{ backgroundImage: GOLD_GRADIENT }}

                className="inline-flex h-14 items-center justify-center rounded-full px-8 text-sm font-semibold text-brand-navy-950 shadow-[0_14px_36px_-12px_rgba(198,161,91,0.75)] ring-1 ring-white/25 transition-[filter] duration-300 hover:brightness-110"

              >

                Book a Consultation

              </a>

            </motion.div>

          </Magnetic>

        </motion.div>



        {/* Right: Image */}

        <motion.div

          initial={{ opacity: 0, y: 24, scale: 0.98 }}

          whileInView={{ opacity: 1, y: 0, scale: 1 }}

          viewport={{ once: true, amount: 0.3 }}

          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}

          className="relative overflow-hidden rounded-2xl shadow-[0_30px_60px_-25px_rgba(5,11,22,0.55)]"

        >

          <div className="relative aspect-[4/3] w-full">

            <Image

              src={potatoImage}

              alt="Contact us"

              fill

              className="object-cover"

              sizes="(max-width: 1024px) 100vw, 50vw"

            />

          </div>

          {/* Gold accent line at top */}

          <span

            aria-hidden="true"

            style={{ backgroundImage: GOLD_GRADIENT }}

            className="absolute inset-x-0 top-0 h-[3px]"

          />

        </motion.div>

      </Container>

    </section>

  );

}