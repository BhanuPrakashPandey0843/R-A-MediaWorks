import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { ProcessCard } from "@/components/cards/process-card";
import { PROCESS_STEPS } from "@/data/work";

export function ProcessPreview() {
  return (
    <SectionWrapper tone="dark" className="pt-0">
      <Container>
        <SectionTitle
          kicker="How We Work"
          title="A process built to be trusted."
          description="No black boxes. Every engagement follows the same four stages, so you always know what's happening and why."
          tone="dark"
        />

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {PROCESS_STEPS.map((step, i) => (
            <ProcessCard key={step.index} step={step} index={i} />
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
