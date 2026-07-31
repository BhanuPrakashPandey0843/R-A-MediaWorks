import { Container } from "@/components/ui/container";
import { Reveal, TextReveal } from "@/components/animations/reveal";

export function PageHero({
  kicker,
  title,
  description,
}: {
  kicker: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ivory pb-20 pt-40 lg:pb-28 lg:pt-48">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 85% 10%, rgba(198,161,91,0.14), transparent 45%)",
        }}
      />
      <Container className="relative">
        <Reveal y={12}>
          <p className="mb-6 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.3em] text-gold-600">
            <span className="h-px w-10 bg-current" />
            {kicker}
          </p>
        </Reveal>
        <h1 className="max-w-4xl font-display text-5xl font-medium leading-[1.05] tracking-tight text-navy-950 sm:text-6xl lg:text-7xl">
          <TextReveal>{title}</TextReveal>
        </h1>
        {description && (
          <Reveal delay={0.2} className="mt-8 max-w-xl">
            <p className="text-base leading-relaxed text-mist-700 sm:text-lg">
              {description}
            </p>
          </Reveal>
        )}
      </Container>
    </section>
  );
}
