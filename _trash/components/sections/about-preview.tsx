import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/ui/animated-counter";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { STATS } from "@/data/work";

export function AboutPreview() {
  return (
    <SectionWrapper tone="surface">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[1fr_0.9fr] lg:gap-24">
          <div>
            <SectionTitle
              kicker="About the Studio"
              title="Strategy first. Craft always."
              description="R&A MediaWorks is a boutique studio built around a simple belief: a brand's story is only as strong as the discipline behind it. We pair strategic rigor with editorial-grade craft, so every identity, campaign, and piece of content earns its place."
            />
            <Reveal delay={0.2} className="mt-10">
              <Button href="/about" variant="outline" withArrow>
                More About Us
              </Button>
            </Reveal>
          </div>

          <RevealGroup className="grid grid-cols-2 gap-6 self-end sm:gap-8">
            {STATS.map((stat) => (
              <RevealItem
                key={stat.label}
                className="border-t border-navy-900/10 pt-6"
              >
                <p className="font-display text-4xl font-medium text-navy-950 sm:text-5xl">
                  <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                </p>
                <p className="mt-3 text-sm text-mist-700">{stat.label}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </SectionWrapper>
  );
}
