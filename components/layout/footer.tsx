"use client";

import Link from "next/link";
import { motion } from "motion/react";
import {
  Boxes,
  Phone,
  Mail,
  MapPin,
  ArrowUp,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { SITE, SERVICES as SITE_SERVICES } from "@/constants/site";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";

const QUICK_LINKS = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

const FOOTER_SERVICES = SITE_SERVICES.slice(0, 4).map((service) => ({
  label: service.title,
  href: "/services",
}));

// Social links are left out until the client supplies real handles —
// placeholder URLs would just be dead links on a live site.

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.05 },
  },
};

function FooterLinkList({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: EASE }}>
      <h3 className="text-sm font-bold uppercase tracking-wider text-white">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="group inline-flex items-center gap-0 text-sm text-white/60 transition-colors duration-300 hover:text-brand-gold-400"
            >
              <span className="max-w-0 overflow-hidden text-brand-gold-400 transition-all duration-300 ease-out group-hover:mr-1.5 group-hover:max-w-[10px]">
                →
              </span>
              <span className="relative">
                {link.label}
                <span className="absolute inset-x-0 -bottom-0.5 h-px origin-left scale-x-0 bg-brand-gold-400 transition-transform duration-300 ease-out group-hover:scale-x-100" />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-brand-navy-950">
      <div className="rule-gold absolute inset-x-0 top-0 opacity-70" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 10% 0%, rgba(198,161,91,0.1), transparent 40%), radial-gradient(circle at 90% 100%, rgba(255,255,255,0.04), transparent 45%)",
        }}
      />

      <Container className="relative py-16 lg:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] lg:gap-8"
        >
          {/* Brand column */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: EASE }}>
            <Link href="/" className="group flex items-center gap-2.5">
              <span
                style={{ backgroundImage: GOLD_GRADIENT }}
                className="flex size-8 items-center justify-center rounded-md text-brand-navy-950 shadow-[0_4px_14px_-4px_rgba(198,161,91,0.6)] ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-105"
              >
                <Boxes className="size-4" />
              </span>
              <span className="font-display text-lg font-bold tracking-tight text-white">
                R&amp;A MediaWorks
              </span>
            </Link>

            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/55">
              A boutique Communications &amp; Branding Studio helping small
              and mid-size businesses find their voice.
            </p>
          </motion.div>

          <FooterLinkList title="Quick Links" links={QUICK_LINKS} />
          <FooterLinkList title="Services" links={FOOTER_SERVICES} />

          {/* Contact column */}
          <motion.div variants={fadeUp} transition={{ duration: 0.6, ease: EASE }}>
            <h3 className="text-sm font-bold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">
                  <Phone className="size-3.5" />
                </span>
                <a
                  href={`tel:${SITE.phone.replace(/[^+\d]/g, "")}`}
                  className="pt-1.5 text-sm text-white/60 transition-colors duration-300 hover:text-brand-gold-400"
                >
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">
                  <Mail className="size-3.5" />
                </span>
                <a
                  href={`mailto:${SITE.email}`}
                  className="pt-1.5 text-sm text-white/60 transition-colors duration-300 hover:text-brand-gold-400"
                >
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-gold-400">
                  <MapPin className="size-3.5" />
                </span>
                <span className="max-w-[190px] pt-1.5 text-sm text-white/60">
                  {SITE.location}
                </span>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>

          <motion.button
            type="button"
            onClick={() =>
              window.scrollTo({ top: 0, behavior: "smooth" })
            }
            aria-label="Back to top"
            whileHover={{
              y: -3,
              boxShadow: "0 16px 36px -10px rgba(198,161,91,0.7)",
            }}
            whileTap={{ scale: 0.92 }}
            transition={{ type: "spring", stiffness: 400, damping: 15 }}
            style={{ backgroundImage: GOLD_GRADIENT }}
            className="flex size-10 items-center justify-center rounded-full text-brand-navy-950 shadow-[0_8px_20px_-6px_rgba(198,161,91,0.55)] ring-1 ring-white/20 transition-[filter] duration-300 hover:brightness-110"
          >
            <ArrowUp className="size-4" />
          </motion.button>
        </div>
      </Container>
    </footer>
  );
}
