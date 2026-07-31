import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessPreview } from "@/components/sections/process-preview";
import { TeamSection } from "@/components/sections/team-section";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "About",
  description:
    "R&A MediaWorks is a boutique communications and branding studio built around strategy-first, editorial-grade craft.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        title="A studio built around one belief."
        description="A brand's story is only as strong as the discipline behind it. Everything we do traces back to that idea."
      />
      <AboutPreview />
      <WhyChooseUs />
      <ProcessPreview />
      <TeamSection />
      <CtaSection />
    </>
  );
}
