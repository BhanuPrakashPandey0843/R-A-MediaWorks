import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { INDUSTRIES } from "@/data/work";

export function IndustriesMarquee() {
  const loop = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <SectionWrapper tone="light" className="py-16 lg:py-20">
      <Container>
        <p className="mb-10 text-center text-xs font-medium uppercase tracking-[0.25em] text-mist-500">
          Industries We Serve
        </p>
      </Container>

      <div className="relative overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="marquee-track flex w-max items-center gap-16 whitespace-nowrap">
          {loop.map((industry, i) => (
            <span
              key={`${industry}-${i}`}
              className="font-display text-2xl font-medium text-navy-950/25 sm:text-3xl"
            >
              {industry}
            </span>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
