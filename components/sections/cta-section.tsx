import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Magnetic } from "@/components/animations/magnetic";
import { TextReveal, Reveal } from "@/components/animations/reveal";

export function CtaSection() {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-28 text-ivory lg:py-36">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(198,161,91,0.18), transparent 55%)",
        }}
      />
      <Container className="relative text-center">
        <h2 className="mx-auto max-w-3xl font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-6xl">
          <TextReveal>Let&apos;s make your brand</TextReveal>
          <TextReveal delay={0.1}>
            <span className="italic text-gold-300">unmistakable.</span>
          </TextReveal>
        </h2>
        <Reveal delay={0.3} className="mt-10 flex justify-center">
          <Magnetic>
            <Button href="/contact" variant="secondary" size="lg" withArrow>
              Start a Project
            </Button>
          </Magnetic>
        </Reveal>
      </Container>
    </section>
  );
}
