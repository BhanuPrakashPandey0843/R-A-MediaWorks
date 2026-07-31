"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAV_LINKS, SITE } from "@/constants/site";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

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
        "fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]",
        scrolled || open
          ? "bg-ivory/85 backdrop-blur-md shadow-[0_1px_0_0_rgba(11,18,32,0.06)]"
          : "bg-transparent"
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between lg:h-24">
          <Link
            href="/"
            className="font-display text-xl font-semibold tracking-tight text-navy-950 lg:text-2xl"
          >
            R&amp;A <span className="text-gold-600">MediaWorks</span>
          </Link>

          <nav className="hidden items-center gap-10 lg:flex">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  data-active={active}
                  className="link-underline pb-1 text-sm font-medium tracking-wide text-navy-900/80 transition-colors hover:text-navy-950"
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:block">
            <Button href="/contact" size="sm" withArrow>
              Start a Project
            </Button>
          </div>

          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
            className="flex size-11 items-center justify-center rounded-full text-navy-950 lg:hidden"
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
            className="overflow-hidden bg-ivory lg:hidden"
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
                    className="flex items-center justify-between border-b border-navy-900/10 py-4 font-display text-2xl text-navy-950"
                  >
                    {link.label}
                    <ArrowUpRight className="size-5 text-gold-600" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-6">
                <Button href="/contact" className="w-full" withArrow>
                  Start a Project
                </Button>
                <p className="mt-6 text-sm text-mist-700">{SITE.email}</p>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
