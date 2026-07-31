import { Compass, Gem, Handshake, Zap } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";

const REASONS = [
  {
    icon: Compass,
    title: "Strategy before style",
    description:
      "Every visual decision traces back to a positioning document you've agreed to, not a moodboard we liked.",
  },
  {
    icon: Gem,
    title: "Editorial-grade craft",
    description:
      "We hold internal work to the same bar as anything we'd submit for recognition — no exceptions for placeholders.",
  },
  {
    icon: Handshake,
    title: "Senior hands, not handoffs",
    description:
      "The strategists who scope your project are the ones producing and reviewing the work through delivery.",
  },
  {
    icon: Zap,
    title: "Built for the long game",
    description:
      "Brand systems and content engines designed to hold up for years, not just to look good in a launch deck.",
  },
];

export function WhyChooseUs() {
  return (
    <SectionWrapper tone="dark">
      <Container>
        <SectionTitle
          kicker="Why R&A"
          title="The difference is discipline."
          description="Anyone can make something look expensive for a week. We build brand and communications systems that hold their shape under real-world pressure."
          tone="dark"
        />

        <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
          {REASONS.map((reason) => {
            const Icon = reason.icon;
            return (
              <RevealItem
                key={reason.title}
                className="flex flex-col bg-navy-950 p-8 transition-colors duration-500 hover:bg-navy-900"
              >
                <Icon className="size-6 text-gold-400" />
                <h3 className="mt-6 font-display text-lg font-medium text-ivory">
                  {reason.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory/60">
                  {reason.description}
                </p>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </Container>
    </SectionWrapper>
  );
}
