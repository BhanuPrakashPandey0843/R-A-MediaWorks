import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { SERVICES } from "@/data/services";

export function ServicesPreview() {
  const featured = SERVICES.slice(0, 6);

  return (
    <SectionWrapper tone="light">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            kicker="What We Do"
            title="Full-service, without the noise."
            description="Eight disciplines, one point of view. We move fluidly between them so your brand never sounds like it was written by eight different people."
          />
          <Reveal delay={0.2}>
            <Button href="/services" variant="outline" withArrow className="shrink-0">
              All Services
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
