"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronDown, Boxes } from "lucide-react";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  {
    label: "Pages",
    href: "/contact",
    children: [{ label: "Contact", href: "/contact" }],
  },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/our-work" },
  { label: "About", href: "/about" },
] as const;

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [pagesOpen, setPagesOpen] = useState(false);
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
    setPagesOpen(false);
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
            {NAV_ITEMS.map((item) => {
              const active = "children" in item
                ? item.children.some((c) => c.href === pathname)
                : pathname === item.href;

              if ("children" in item) {
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setPagesOpen(true)}
                    onMouseLeave={() => setPagesOpen(false)}
                  >
                    <button
                      type="button"
                      onClick={() => setPagesOpen((v) => !v)}
                      aria-expanded={pagesOpen}
                      className={cn(
                        "flex items-center gap-1 text-sm font-medium tracking-wide transition-colors",
                        active ? "text-brand-orange-400" : "text-white/80 hover:text-white"
                      )}
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "size-3.5 transition-transform duration-300",
                          pagesOpen && "rotate-180"
                        )}
                      />
                    </button>

                    <AnimatePresence>
                      {pagesOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 top-full pt-3"
                        >
                          <div className="min-w-40 overflow-hidden rounded-xl bg-white py-2 shadow-[0_20px_40px_-12px_rgba(0,0,0,0.25)]">
                            {item.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className="block px-4 py-2.5 text-sm font-medium text-brand-navy-900 transition-colors hover:bg-brand-orange-500/10 hover:text-brand-orange-500"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

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
              href="/contact"
              className="inline-flex h-11 items-center justify-center rounded-full bg-brand-orange-500 px-6 text-sm font-semibold text-white transition-colors duration-300 hover:bg-brand-orange-600"
            >
              Contact Us
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
              {NAV_ITEMS.flatMap((item) =>
                "children" in item ? item.children : [item]
              ).map((link, i) => (
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
                  href="/contact"
                  className="inline-flex h-12 w-full items-center justify-center rounded-full bg-brand-orange-500 px-6 text-sm font-semibold text-white"
                >
                  Contact Us
                </Link>
              </div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
