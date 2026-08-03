import { cn } from "@/lib/utils";
import { TextReveal, Reveal } from "@/components/animations/reveal";

export function SectionTitle({
  kicker,
  title,
  description,
  align = "left",
  tone = "light",
  className,
}: {
  kicker?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className
      )}
    >
      {kicker && (
        <Reveal y={12}>
          <p
            className={cn(
              "mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.25em]",
              align === "center" && "justify-center",
              tone === "dark" ? "text-gold-300" : "text-gold-600"
            )}
          >
            <span className="h-px w-8 bg-current" />
            {kicker}
          </p>
        </Reveal>
      )}
      <h2 className="font-display text-4xl font-medium leading-[1.1] tracking-tight sm:text-5xl">
        <TextReveal>{title}</TextReveal>
      </h2>
      {description && (
        <Reveal delay={0.15}>
          <p
            className={cn(
              "mt-6 text-base leading-relaxed sm:text-lg",
              tone === "dark" ? "text-ivory/65" : "text-mist-700"
            )}
          >
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
