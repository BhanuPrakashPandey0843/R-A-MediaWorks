import {
  Check,
  Globe,
  LineChart,
  Megaphone,
  Palette,
  Share2,
  ShieldAlert,
  Users,
  Video,
} from "lucide-react";
import { Container } from "@/components/ui/container";
import { Reveal, RevealGroup, RevealItem } from "@/components/animations/reveal";
import { cn } from "@/lib/utils";
import type { ServiceItem } from "@/types";

const ICONS = {
  Palette,
  Share2,
  Globe,
  LineChart,
  Users,
  Megaphone,
  Video,
  ShieldAlert,
} as const;

export function ServiceDetail({ service, index }: { service: ServiceItem; index: number }) {
  const Icon = ICONS[service.icon as keyof typeof ICONS] ?? Globe;
  const reversed = index % 2 === 1;

  return (
    <section
      id={service.slug}
      className={cn(
        "scroll-mt-28 border-t border-navy-900/10 py-20 lg:py-24",
        reversed ? "bg-white" : "bg-ivory"
      )}
    >
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[auto_1fr_1fr] lg:gap-16">
          <Reveal className={cn(reversed && "lg:order-3")}>
            <span className="font-display text-sm text-gold-600">
              {String(index + 1).padStart(2, "0")}
            </span>
          </Reveal>

          <Reveal className={cn(reversed && "lg:order-2")}>
            <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-navy-950 text-gold-300">
              <Icon className="size-6" />
            </div>
            <h2 className="font-display text-3xl font-medium tracking-tight text-navy-950 sm:text-4xl">
              {service.title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-relaxed text-mist-700">
              {service.description}
            </p>
          </Reveal>

          <RevealGroup className={cn("grid gap-3", reversed && "lg:order-1")} stagger={0.08}>
            {service.capabilities.map((capability) => (
              <RevealItem
                key={capability}
                className="flex items-center gap-3 rounded-xl border border-navy-900/10 bg-white/60 px-5 py-4"
              >
                <Check className="size-4 shrink-0 text-gold-600" />
                <span className="text-sm font-medium text-navy-950">{capability}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </Container>
    </section>
  );
}
