import { cn } from "@/lib/utils";

export function SectionWrapper({
  className,
  children,
  id,
  tone = "light",
  ...props
}: React.HTMLAttributes<HTMLElement> & { tone?: "light" | "dark" | "surface" }) {
  const toneStyles = {
    light: "bg-ivory text-navy-950",
    dark: "bg-navy-950 text-ivory",
    surface: "bg-white text-navy-950",
  } as const;

  return (
    <section
      id={id}
      className={cn("py-24 lg:py-32", toneStyles[tone], className)}
      {...props}
    >
      {children}
    </section>
  );
}
