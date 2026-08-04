"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, Phone, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { Magnetic } from "@/components/animations/magnetic";
import { SITE, CONSULTATION_LINK } from "@/constants/site";

const EASE = [0.22, 1, 0.36, 1] as const;

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

      <Container className="relative grid items-center gap-14 lg:grid-cols-2 lg:gap-12">
        {/* Left: heading + contact details + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: EASE }}
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-400">
            Get In Touch
          </p>
          <h2 className="max-w-lg text-3xl font-extrabold leading-[1.15] tracking-tight text-white sm:text-4xl lg:text-[2.75rem]">
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
                boxShadow: "0 18px 40px -12px rgba(198,161,91,0.55)",
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="inline-block rounded-full"
            >
              <a
                href={CONSULTATION_LINK}
                target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
                rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                className="inline-flex h-14 items-center justify-center rounded-full bg-brand-gold-500 px-8 text-sm font-semibold text-brand-navy-950 shadow-[0_10px_30px_-12px_rgba(198,161,91,0.7)] transition-colors duration-300 hover:bg-brand-gold-400"
              >
                Book a Consultation
              </a>
            </motion.div>
          </Magnetic>
        </motion.div>

        {/* Right: message form card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15, ease: EASE }}
          whileHover={{ y: -4 }}
          className="rounded-2xl bg-white p-7 shadow-[0_30px_60px_-25px_rgba(5,11,22,0.55)] transition-shadow duration-500 hover:shadow-[0_36px_70px_-24px_rgba(198,161,91,0.35)] sm:p-9"
        >
          <h3 className="text-lg font-bold tracking-tight text-ink">
            Send Us A Message
          </h3>

          <form onSubmit={handleSubmit} className="mt-6 space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label htmlFor="cta-name" className="sr-only">
                  Your Name
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full rounded-lg border border-mist-300 bg-mist-100/60 px-4 py-3 text-sm text-ink placeholder:text-mist-500 outline-none transition-all duration-200 focus:border-brand-gold-500 focus:bg-white focus:ring-2 focus:ring-brand-gold-500/15"
                />
              </div>
              <div>
                <label htmlFor="cta-email" className="sr-only">
                  Your Email
                </label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full rounded-lg border border-mist-300 bg-mist-100/60 px-4 py-3 text-sm text-ink placeholder:text-mist-500 outline-none transition-all duration-200 focus:border-brand-gold-500 focus:bg-white focus:ring-2 focus:ring-brand-gold-500/15"
                />
              </div>
            </div>

            <div>
              <label htmlFor="cta-message" className="sr-only">
                Your Message
              </label>
              <textarea
                id="cta-message"
                name="message"
                required
                rows={4}
                placeholder="Your Message"
                className="w-full resize-none rounded-lg border border-mist-300 bg-mist-100/60 px-4 py-3 text-sm text-ink placeholder:text-mist-500 outline-none transition-all duration-200 focus:border-brand-gold-500 focus:bg-white focus:ring-2 focus:ring-brand-gold-500/15"
              />
            </div>

            <motion.button
              whileHover={status === "idle" ? { scale: 1.02 } : undefined}
              whileTap={status === "idle" ? { scale: 0.97 } : undefined}
              transition={{ duration: 0.25, ease: EASE }}
              type="submit"
              disabled={status !== "idle"}
              className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-brand-gold-500 px-6 text-sm font-semibold text-brand-navy-950 transition-colors duration-300 hover:bg-brand-gold-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
            >
              {status === "sent" ? (
                "Message Sent"
              ) : (
                <>
                  <Send className="size-4" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </>
              )}
            </motion.button>
          </form>
        </motion.div>
      </Container>
    </section>
  );
}
