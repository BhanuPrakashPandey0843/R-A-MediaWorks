import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { RevealGroup, RevealItem, Reveal } from "@/components/animations/reveal";
import { SITE } from "@/constants/site";

const CARDS = [
  { icon: Mail, label: "Email", value: SITE.email, href: `mailto:${SITE.email}` },
  { icon: Phone, label: "Phone", value: SITE.phone, href: `tel:${SITE.phone.replace(/[^\d+]/g, "")}` },
  { icon: MapPin, label: "Studio", value: SITE.location, href: undefined },
];

export function ContactPreview() {
  return (
    <SectionWrapper tone="light">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            kicker="Get In Touch"
            title="Tell us where you want to go."
            description="Every engagement starts with a short conversation, not a sales pitch. Reach out and we'll follow up within one business day."
          />
          <Reveal delay={0.2}>
            <Button href="/contact" withArrow className="shrink-0">
              Go to Contact Page
            </Button>
          </Reveal>
        </div>

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-3">
          {CARDS.map((card) => {
            const Icon = card.icon;
            const body = (
              <>
                <Icon className="size-5 text-gold-600" />
                <p className="mt-6 text-xs font-medium uppercase tracking-[0.2em] text-mist-500">
                  {card.label}
                </p>
                <p className="mt-2 text-base font-medium text-navy-950">{card.value}</p>
              </>
            );
            return (
              <RevealItem key={card.label}>
                {card.href ? (
                  <a
                    href={card.href}
                    className="block rounded-2xl border border-navy-900/10 bg-white p-8 transition-colors duration-500 hover:border-gold-400/60"
                  >
                    {body}
                  </a>
                ) : (
                  <div className="rounded-2xl border border-navy-900/10 bg-white p-8">
                    {body}
                  </div>
                )}
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </SectionWrapper>
  );
}
