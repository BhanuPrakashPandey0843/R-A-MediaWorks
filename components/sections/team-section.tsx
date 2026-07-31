import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { RevealGroup, RevealItem } from "@/components/animations/reveal";

const TEAM = [
  { initials: "AR", name: "Placeholder Name", role: "Founder & Creative Director" },
  { initials: "MK", name: "Placeholder Name", role: "Head of Strategy" },
  { initials: "JL", name: "Placeholder Name", role: "Head of Content" },
  { initials: "SP", name: "Placeholder Name", role: "Director, Client Partnerships" },
];

export function TeamSection() {
  return (
    <SectionWrapper tone="surface">
      <Container>
        <SectionTitle
          kicker="The People"
          title="A small studio, on purpose."
          description="We stay intentionally boutique so senior people stay on your account from strategy through delivery. Final team bios and photography pending."
        />

        <RevealGroup className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TEAM.map((member) => (
            <RevealItem
              key={member.name}
              className="rounded-2xl border border-navy-900/10 bg-white p-8"
            >
              <div className="flex size-16 items-center justify-center rounded-full bg-navy-950 font-display text-lg text-gold-300">
                {member.initials}
              </div>
              <h3 className="mt-6 font-display text-lg font-medium text-navy-950">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-mist-700">{member.role}</p>
            </RevealItem>
          ))}
        </RevealGroup>
      </Container>
    </SectionWrapper>
  );
}
