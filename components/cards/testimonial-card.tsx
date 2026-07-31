import { Quote } from "lucide-react";
import type { TestimonialItem } from "@/types";

export function TestimonialCard({ testimonial }: { testimonial: TestimonialItem }) {
  return (
    <figure className="flex h-full flex-col justify-between rounded-2xl border border-navy-900/10 bg-white p-10">
      <Quote className="size-8 text-gold-400" aria-hidden="true" />
      <blockquote className="mt-6 flex-1 font-display text-xl font-medium leading-snug text-navy-950">
        “{testimonial.quote}”
      </blockquote>
      <figcaption className="mt-8 border-t border-navy-900/10 pt-6">
        <p className="text-sm font-medium text-navy-950">{testimonial.name}</p>
        <p className="text-sm text-mist-700">{testimonial.role}</p>
      </figcaption>
    </figure>
  );
}
