"use client";

import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BUDGETS = ["Under $10k", "$10k – $25k", "$25k – $75k", "$75k+"];

const inputClasses =
  "w-full rounded-xl border border-navy-900/15 bg-white px-4 py-3 text-sm text-navy-950 placeholder:text-mist-500 transition-colors focus:border-gold-500 focus:outline-none focus:ring-2 focus:ring-gold-500/30";

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [budget, setBudget] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    // No backend is wired up yet — this simulates a submit so the form's
    // interaction and validation states can be reviewed end to end.
    await new Promise((resolve) => setTimeout(resolve, 900));

    setSubmitting(false);
    toast.success("Message received.", {
      description: "We'll follow up within one business day.",
    });
    e.currentTarget.reset();
    setBudget(null);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
            Full Name
          </label>
          <input id="name" name="name" type="text" required className={inputClasses} placeholder="Jane Doe" />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className={inputClasses}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="company" className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
            Company
          </label>
          <input id="company" name="company" type="text" className={inputClasses} placeholder="Company name" />
        </div>
        <div>
          <label htmlFor="phone" className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
            Phone <span className="normal-case text-mist-500">(optional)</span>
          </label>
          <input id="phone" name="phone" type="tel" className={inputClasses} placeholder="+1 (555) 000-0000" />
        </div>
      </div>

      <div>
        <p className="mb-3 text-xs font-medium uppercase tracking-wide text-mist-700">
          Estimated Budget
        </p>
        <div className="flex flex-wrap gap-3">
          {BUDGETS.map((option) => (
            <button
              key={option}
              type="button"
              onClick={() => setBudget(option)}
              className={cn(
                "rounded-full border px-4 py-2 text-sm font-medium transition-colors",
                budget === option
                  ? "border-navy-900 bg-navy-900 text-ivory"
                  : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/40"
              )}
            >
              {option}
            </button>
          ))}
        </div>
        <input type="hidden" name="budget" value={budget ?? ""} />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wide text-mist-700">
          Tell us about the project
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className={cn(inputClasses, "resize-none")}
          placeholder="What are you trying to achieve, and by when?"
        />
      </div>

      <Button type="submit" size="lg" withArrow disabled={submitting} className="w-full sm:w-auto">
        {submitting ? "Sending…" : "Send Message"}
      </Button>
    </form>
  );
}
