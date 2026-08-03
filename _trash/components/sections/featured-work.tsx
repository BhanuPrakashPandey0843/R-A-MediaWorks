import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { Button } from "@/components/ui/button";
import { Reveal } from "@/components/animations/reveal";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { PORTFOLIO_ITEMS } from "@/data/work";

export function FeaturedWork() {
  const featured = PORTFOLIO_ITEMS.slice(0, 3);

  return (
    <SectionWrapper tone="surface">
      <Container>
        <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <SectionTitle
            kicker="Selected Work"
            title="Recent stories, briefly."
            description="A handful of engagements that show the range — from full identity resets to campaigns built for a single, high-stakes launch."
          />
          <Reveal delay={0.2}>
            <Button href="/our-work" variant="outline" withArrow className="shrink-0">
              View All Work
            </Button>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
