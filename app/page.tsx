import { AboutShowcase } from "@/components/sections/about-showcase";
import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutShowcase />
      <ContactCta />
    </>
  );
}
