"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BLOG_POSTS, formatPostDate } from "@/constants/blog";

const EASE = [0.22, 1, 0.36, 1] as const;
const GOLD_GRADIENT =
  "linear-gradient(135deg,var(--color-brand-gold-400),var(--color-brand-gold-600))";
const GOLD_TEXT_GRADIENT =
  "linear-gradient(135deg,var(--color-gold-300),var(--color-brand-gold-400) 55%,var(--color-brand-gold-600))";

export function BlogShowcase() {
  const [featured, ...rest] = BLOG_POSTS;
  const listPosts = rest.slice(0, 4);

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-20 lg:py-28 scroll-mt-24"
    >
      {/* Faint numeral watermark, echoes the editorial/newsroom motif */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-10 -top-16 select-none text-[220px] font-black leading-none text-navy-900/[0.03] lg:text-[320px]"
      >
        05
      </div>

      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="mb-4 flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-brand-gold-500" />
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
              From The Blog
            </p>
            <span className="h-px w-8 bg-brand-gold-500" />
          </div>
          <h2 className="font-display text-3xl font-bold leading-[1.15] tracking-tight text-ink sm:text-4xl">
            Ideas That Build{" "}
            <span className="text-brand-gold-600">Better Brands</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-mist-700 sm:text-base">
           Editorial driven strategy and disciplined thinking on what
communications actually is, and why it matters for brands at any stage.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 lg:grid-cols-12 lg:gap-8">
          {/* Featured post — large editorial card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: EASE }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-brand-navy-900 p-8 shadow-[0_30px_60px_-30px_rgba(5,11,22,0.5)] transition-shadow duration-500 hover:shadow-[0_36px_70px_-24px_rgba(198,161,91,0.35)] sm:p-10 lg:col-span-7 lg:min-h-[420px]"
            >
              {/* Ambient glow + dot texture, same language as the dark sections */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 85% 15%, rgba(198,161,91,0.18), transparent 45%)",
                }}
              />
              <div
                aria-hidden="true"
                className="bg-dot-grid pointer-events-none absolute inset-0 opacity-30"
                style={{
                  maskImage:
                    "radial-gradient(circle at 80% 10%, black, transparent 60%)",
                  WebkitMaskImage:
                    "radial-gradient(circle at 80% 10%, black, transparent 60%)",
                }}
              />

              <div className="relative">
                <div className="flex items-center gap-3">
                  <span
                    style={{ backgroundImage: GOLD_GRADIENT }}
                    className="inline-flex items-center rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wider text-brand-navy-950"
                  >
                    {featured.category}
                  </span>
                  <span className="text-xs font-medium text-white/50">
                    {formatPostDate(featured.date)} · {featured.readTime}
                  </span>
                </div>

                <h3 className="font-display mt-6 max-w-lg text-2xl font-bold leading-[1.2] tracking-tight text-white transition-colors duration-300 sm:text-3xl lg:text-[2.15rem]">
                  <span
                    style={{ backgroundImage: GOLD_TEXT_GRADIENT }}
                    className="bg-clip-text text-transparent"
                  >
                    {featured.title.split(" ").slice(0, 1).join(" ")}
                  </span>{" "}
                  {featured.title.split(" ").slice(1).join(" ")}
                </h3>

                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/65 sm:text-base">
                  {featured.excerpt}
                </p>

                <div className="mt-8">
                  <Link
                    href={`/blog/${featured.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/20"
                  >
                    Read full article
                    <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}

          {/* Remaining posts — numbered editorial index list */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="flex flex-col justify-between rounded-2xl border border-mist-300/70 bg-ivory/60 p-2 lg:col-span-5"
          >
            {listPosts.map((post, i) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className={`group flex items-start gap-4 rounded-xl p-5 transition-colors duration-300 hover:bg-white ${
                  i !== listPosts.length - 1
                    ? "border-b border-mist-300/70"
                    : ""
                }`}
              >
                <span className="font-display shrink-0 pt-0.5 text-sm font-bold text-brand-gold-500">
                  0{i + 2}
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-[11px] font-bold uppercase tracking-wider text-mist-500">
                    {post.category}
                  </p>
                  <h4 className="font-display mt-1.5 text-base font-bold leading-snug tracking-tight text-ink sm:text-[1.05rem]">
                    {post.title}
                  </h4>
                  <p className="mt-1 text-xs text-mist-500">
                    {formatPostDate(post.date)} · {post.readTime}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 size-4 shrink-0 text-mist-400 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand-gold-600" />
              </Link>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
