import type { Metadata } from "next";
import { ContactHero } from "@/components/sections/contact-hero";
import { ContactCta } from "@/components/sections/contact-cta";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${SITE.name} to talk branding, marketing, content creation, and digital growth.`,
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactCta />
    </>
  );
}
