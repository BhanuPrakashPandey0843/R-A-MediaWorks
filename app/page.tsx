import { Hero } from "@/components/sections/hero";
import { AboutPreview } from "@/components/sections/about-preview";
import { ServicesPreview } from "@/components/sections/services-preview";
import { FeaturedWork } from "@/components/sections/featured-work";
import { WhyChooseUs } from "@/components/sections/why-choose-us";
import { ProcessPreview } from "@/components/sections/process-preview";
import { IndustriesMarquee } from "@/components/sections/industries-marquee";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { ContactPreview } from "@/components/sections/contact-preview";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <FeaturedWork />
      <WhyChooseUs />
      <ProcessPreview />
      <IndustriesMarquee />
      <TestimonialsSection />
      <CtaSection />
      <ContactPreview />
    </>
  );
}
