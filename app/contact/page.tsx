import { Mail, MapPin, Phone, Clock } from "lucide-react";
import type { Metadata } from "next";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { PageHero } from "@/components/sections/page-hero";
import { ContactForm } from "@/components/sections/contact-form";
import { FaqSection } from "@/components/sections/faq-section";
import { Reveal } from "@/components/animations/reveal";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Start a conversation with R&A MediaWorks about your next project.",
};

const INFO = [
  { icon: Mail, label: "Email", value: SITE.email },
  { icon: Phone, label: "Phone", value: SITE.phone },
  { icon: MapPin, label: "Studio", value: SITE.location },
  { icon: Clock, label: "Response Time", value: "Within 1 business day" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Let's talk about the work."
        description="Tell us a little about what you're building and where it's headed. A strategist will follow up personally — no automated sales sequence."
      />

      <SectionWrapper tone="surface" className="pt-0">
        <Container>
          <div className="grid gap-16 lg:grid-cols-[1fr_0.7fr] lg:gap-24">
            <Reveal>
              <div className="rounded-3xl border border-navy-900/10 bg-ivory p-8 sm:p-12">
                <ContactForm />
              </div>
            </Reveal>

            <div className="space-y-6">
              {INFO.map((item, i) => {
                const Icon = item.icon;
                return (
                  <Reveal key={item.label} delay={i * 0.06}>
                    <div className="flex items-start gap-4 rounded-2xl border border-navy-900/10 bg-white p-6">
                      <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-navy-950 text-gold-300">
                        <Icon className="size-4" />
                      </span>
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.2em] text-mist-500">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base font-medium text-navy-950">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </Container>
      </SectionWrapper>

      <FaqSection />
    </>
  );
}
