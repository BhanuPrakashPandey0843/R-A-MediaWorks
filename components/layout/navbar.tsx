"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONSULTATION_LINK } from "@/constants/site";
import logo from "@/assets/ralogo-removebg-preview.png";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 24);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "border-white/10 bg-brand-navy-900/85 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.45)] backdrop-blur-xl"
          : "border-transparent bg-brand-navy-900/60 backdrop-blur-md"
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="group flex items-center">
            <motion.span
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="flex h-14 items-center rounded-2xl bg-white/95 px-3.5 py-2.5 shadow-[0_10px_30px_-12px_rgba(0,0,0,0.35)] ring-1 ring-black/10 sm:h-16 sm:px-4 sm:py-3 lg:h-16"
            >
              <Image
                src={logo}
                alt="R&A MediaWorks"
                preload
                className="h-full w-auto max-w-[150px] object-contain sm:max-w-[170px]"
              />
            </motion.span>
          </Link>

          <nav className="hidden items-center gap-9 lg:flex">
            {NAV_LINKS.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : item.href.startsWith("/#")
                    ? false
                    : pathname === item.href || pathname.startsWith(`${item.href}/`);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  data-active={active}
                  className={cn(
                    "link-underline pb-1 text-sm font-medium tracking-wide transition-colors",
                    active ? "text-brand-gold-400" : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <motion.div
              whileHover={{
                scale: 1.04,
                boxShadow: "0 14px 32px -12px rgba(198,161,91,0.55)",
              }}
              whileTap={{ scale: 0.96 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="inline-block rounded-full"
            >
              <Link
                href={CONSULTATION_LINK}
                target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
                rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                style={{ backgroundImage: GOLD_GRADIENT }}
                className="inline-flex h-11 items-center justify-center rounded-full px-6 text-sm font-semibold text-brand-navy-950 ring-1 ring-white/25 transition-[filter] duration-300 hover:brightness-110"
              >
                Book a Free Consultation
              </Link>
            </motion.div>
          </div>

          <motion.button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            whileTap={{ scale: 0.9 }}
            className="flex size-11 items-center justify-center rounded-full text-white transition-colors duration-300 hover:text-brand-gold-400 lg:hidden"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.span
                key={open ? "close" : "open"}
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.2, ease: EASE }}
                className="flex"
              >
                {open ? <X className="size-6" /> : <Menu className="size-6" />}
              </motion.span>
            </AnimatePresence>
          </motion.button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            className="overflow-hidden border-t border-white/10 bg-brand-navy-900/95 backdrop-blur-xl lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-10 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4, ease: EASE }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold transition-colors duration-300",
                      pathname === link.href
                        ? "text-brand-gold-400"
                        : "text-white hover:text-brand-gold-300"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6">
                <Link
                  href={CONSULTATION_LINK}
                  target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
                  rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
                  style={{ backgroundImage: GOLD_GRADIENT }}
                  className="inline-flex h-12 w-full items-center justify-center rounded-full px-6 text-sm font-semibold text-brand-navy-950 ring-1 ring-white/25"
                >
                Book a Free Consultation
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
