import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { ServiceDetail } from "@/components/sections/service-detail";
import { CtaSection } from "@/components/sections/cta-section";
import { SERVICES } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Branding, social media, digital marketing, PR, video production, and crisis communication — eight disciplines under one studio.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Services"
        title="Eight disciplines. One point of view."
        description="We move fluidly across strategy, identity, content, and communications — so your brand never sounds like it was written by eight different agencies."
      />
      <div>
        {SERVICES.map((service, i) => (
          <ServiceDetail key={service.slug} service={service} index={i} />
        ))}
      </div>
      <CtaSection />
    </>
  );
}
