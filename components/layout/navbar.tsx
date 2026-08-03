"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Boxes } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { NAV_LINKS, CONSULTATION_LINK } from "@/constants/site";

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
        "fixed inset-x-0 top-0 z-50 bg-brand-navy-900 transition-shadow duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open ? "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.35)]" : ""
      )}
    >
      <Container>
        <div className="flex h-16 items-center justify-between lg:h-20">
          <Link href="/" className="flex items-center gap-2.5">
            <span className="flex size-8 items-center justify-center rounded-md bg-brand-orange-500 text-white">
              <Boxes className="size-4" />
            </span>
            <span className="text-lg font-bold tracking-tight text-white lg:text-xl">
              R&amp;A MediaWorks
            </span>
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
                  className={cn(
                    "text-sm font-medium tracking-wide transition-colors",
                    active ? "text-brand-orange-400" : "text-white/80 hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Link
              href={CONSULTATION_LINK}
              target={CONSULTATION_LINK.startsWith("http") ? "_blank" : undefined}
              rel={CONSULTATION_LINK.startsWith("http") ? "noopener noreferrer" : undefined}
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-orange-500 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-orange-600"
            >
              Book a Consultation
            </Link>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full text-white lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </Container>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden bg-brand-navy-900 lg:hidden"
          >
            <Container className="flex flex-col gap-1 pb-10 pt-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.4 }}
                >
                  <Link
                    href={link.href}
                    className={cn(
                      "flex items-center justify-between border-b border-white/10 py-4 text-lg font-semibold",
                      pathname === link.href ? "text-brand-orange-400" : "text-white"
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
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-orange-500 px-6 text-sm font-semibold text-white"
                >
                  Book a Consultation
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
