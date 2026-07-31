import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";
import { TestimonialCard } from "@/components/cards/testimonial-card";
import { TESTIMONIALS } from "@/data/work";

export function TestimonialsSection() {
  return (
    <SectionWrapper tone="surface">
      <Container>
        <SectionTitle
          kicker="Client Perspective"
          title="Placeholder testimonials — final quotes pending."
          description="Real client quotes will replace this placeholder set once approved. Structure and styling are final."
          align="center"
        />

        <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
          {TESTIMONIALS.map((t) => (
            <RevealItem key={t.name + t.role}>
              <TestimonialCard testimonial={t} />
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </SectionWrapper>
  );
}
