"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionWrapper } from "@/components/layout/section-wrapper";
import { SectionTitle } from "@/components/ui/section-title";
import { Reveal } from "@/components/animations/reveal";
import { FAQS } from "@/data/faq";

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <SectionWrapper tone="surface">
      <Container>
        <SectionTitle kicker="Good to Know" title="Frequently asked questions" />

        <div className="mt-14 max-w-3xl divide-y divide-navy-900/10 border-t border-navy-900/10">
          {FAQS.map((faq, i) => {
            const open = openIndex === i;
            return (
              <Reveal key={faq.question} delay={i * 0.05}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={open}
                >
                  <span className="font-display text-lg font-medium text-navy-950 sm:text-xl">
                    {faq.question}
                  </span>
                  <motion.span
                    animate={{ rotate: open ? 45 : 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex size-8 shrink-0 items-center justify-center rounded-full bg-navy-900/5 text-navy-900"
                  >
                    <Plus className="size-4" />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="max-w-2xl pb-6 text-sm leading-relaxed text-mist-700">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </SectionWrapper>
  );
}
