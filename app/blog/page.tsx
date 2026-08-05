import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { BlogHero } from "@/components/sections/blog-hero";
import { BLOG_POSTS, formatPostDate } from "@/constants/blog";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Blog",
  description: `Stories, strategy notes, and communications thinking from ${SITE.name}.`,
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  return (
    <>
      <BlogHero />

      <section id="latest" className="scroll-mt-24 bg-ivory py-20 lg:py-28">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.28em] text-brand-gold-600">
              Latest Articles
            </p>
            <h2 className="text-3xl font-extrabold leading-[1.15] tracking-tight text-ink sm:text-4xl">
              Stories worth telling well
            </h2>
          </div>

          <div className="mx-auto mt-14 grid max-w-3xl gap-6">
            {BLOG_POSTS.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-2xl border border-mist-300/70 bg-white p-7 shadow-[0_16px_40px_-28px_rgba(11,18,32,0.35)] transition-all duration-300 hover:-translate-y-1 hover:border-brand-gold-400/60 hover:shadow-[0_24px_50px_-24px_rgba(198,161,91,0.4)] sm:p-9"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex items-center rounded-full bg-brand-gold-500/10 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-brand-gold-600">
                    {post.category}
                  </span>
                  <p className="text-xs font-semibold uppercase tracking-wider text-mist-500">
                    {formatPostDate(post.date)} · {post.readTime}
                  </p>
                </div>
                <h3 className="mt-3 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist-700 sm:text-base">
                  {post.excerpt}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-gold-600">
                  Read more
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
