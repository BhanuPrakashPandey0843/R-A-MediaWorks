import Link from "next/link";
import { ArrowUpRight, AtSign, Globe2, Send } from "lucide-react";
import { Container } from "@/components/ui/container";
import { NAV_LINKS, SITE } from "@/constants/site";

const SERVICE_LINKS = [
  { label: "Branding", href: "/services#branding" },
  { label: "Social Media", href: "/services#social-media" },
  { label: "Website & Content", href: "/services#website-and-content" },
  { label: "PR & Media Outreach", href: "/services#pr-and-media-outreach" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-navy-950 text-ivory">
      <Container className="pb-10 pt-24 lg:pt-32">
        <div className="grid gap-16 border-b border-white/10 pb-16 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="/" className="font-display text-2xl font-semibold tracking-tight">
              R&amp;A <span className="text-gold-400">MediaWorks</span>
            </Link>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/60">
              {SITE.description}
            </p>
            <Link
              href="/contact"
              className="link-underline mt-8 inline-flex items-center gap-2 pb-1 text-sm font-medium text-gold-300"
            >
              Start a conversation
              <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ivory/40">
              Studio
            </p>
            <ul className="space-y-4">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ivory/40">
              Services
            </p>
            <ul className="space-y-4">
              {SERVICE_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ivory/70 transition-colors hover:text-gold-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-6 text-xs font-medium uppercase tracking-[0.2em] text-ivory/40">
              Contact
            </p>
            <ul className="space-y-4 text-sm text-ivory/70">
              <li>
                <a href={`mailto:${SITE.email}`} className="hover:text-gold-300">
                  {SITE.email}
                </a>
              </li>
              <li>
                <a href={`tel:${SITE.phone.replace(/[^\d+]/g, "")}`} className="hover:text-gold-300">
                  {SITE.phone}
                </a>
              </li>
              <li className="text-ivory/50">{SITE.location}</li>
            </ul>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={SITE.social.instagram}
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <AtSign className="size-4" />
              </a>
              <a
                href={SITE.social.linkedin}
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Globe2 className="size-4" />
              </a>
              <a
                href={SITE.social.twitter}
                aria-label="Twitter"
                className="flex size-9 items-center justify-center rounded-full border border-white/15 transition-colors hover:border-gold-400 hover:text-gold-300"
              >
                <Send className="size-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-xs text-ivory/40 sm:flex-row">
          <p>© {year} R&amp;A MediaWorks. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gold-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gold-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-64 w-[120%] -translate-x-1/2 rounded-[100%] bg-gold-500/10 blur-3xl"
      />
    </footer>
  );
}
