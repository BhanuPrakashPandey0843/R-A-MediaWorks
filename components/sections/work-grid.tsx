"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/container";
import { PortfolioCard } from "@/components/cards/portfolio-card";
import { PORTFOLIO_ITEMS } from "@/data/work";
import { cn } from "@/lib/utils";

export function WorkGrid() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PORTFOLIO_ITEMS.map((item) => item.category)))],
    []
  );
  const [active, setActive] = useState("All");

  const filtered =
    active === "All" ? PORTFOLIO_ITEMS : PORTFOLIO_ITEMS.filter((item) => item.category === active);

  return (
    <section className="bg-ivory pb-28">
      <Container>
        <div className="mb-14 flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => setActive(category)}
              className={cn(
                "rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
                active === category
                  ? "border-navy-900 bg-navy-900 text-ivory"
                  : "border-navy-900/15 text-navy-900/70 hover:border-navy-900/40 hover:text-navy-950"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((item, i) => (
            <PortfolioCard key={item.slug} item={item} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
