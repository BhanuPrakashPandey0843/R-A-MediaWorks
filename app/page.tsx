import { AboutShowcase } from "@/components/sections/about-showcase";
import { BlogShowcase } from "@/components/sections/blog-showcase";
import { ContactCta } from "@/components/sections/contact-cta";
import { Hero } from "@/components/sections/hero";
import { Services } from "@/components/sections/services";

export default function Home() {
  return (
    <>
      <Hero />
             <Services />

     
      <AboutShowcase />
      <BlogShowcase />
      <ContactCta />
    </>
  );
}
