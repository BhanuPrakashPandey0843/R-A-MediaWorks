import type { Metadata } from "next";
import { ServicesHero } from "@/components/sections/services-hero";
import { Services } from "@/components/sections/services";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Services",
  description: `Explore ${SITE.name}'s services — brand strategy, content creation, digital marketing, visual identity, and communications.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <Services />
    </>
  );
}
