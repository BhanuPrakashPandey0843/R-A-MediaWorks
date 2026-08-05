import type { Metadata } from "next";
import { AboutHero } from "@/components/sections/about-hero";
import { AboutShowcase } from "@/components/sections/about-showcase";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${SITE.name} — a boutique Communications & Branding Studio bringing newsroom discipline to brand storytelling.`,
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutShowcase />
    </>
  );
}
