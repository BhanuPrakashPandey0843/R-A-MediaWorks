import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { WorkGrid } from "@/components/sections/work-grid";
import { CtaSection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Selected branding, campaign, and communications work from R&A MediaWorks.",
};

export default function OurWorkPage() {
  return (
    <>
      <PageHero
        kicker="Our Work"
        title="A portfolio built on range."
        description="From full identity resets to single-launch campaigns — a look at how the strategy behind each engagement shaped the work itself."
      />
      <WorkGrid />
      <CtaSection />
    </>
  );
}
