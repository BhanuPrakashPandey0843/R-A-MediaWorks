import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";
import { AboutShowcase } from "@/components/sections/about-showcase";
import { ContactCta } from "@/components/sections/contact-cta";

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
