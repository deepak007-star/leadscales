import type { Metadata } from "next";
import { PageHero } from "@/components/sections/page-hero";
import { CTASection } from "@/components/sections/cta-section";
import { BlogCard } from "@/components/shared/blog-card";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { blogPosts } from "@/data/blog-posts";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Marketing tips, industry insights, and proven strategies for home service businesses. Learn from the experts at LeadScale.",
};

export default function BlogPage() {
  const featured = blogPosts[0];
  const rest = blogPosts.slice(1);

  return (
    <>
      <PageHero
        title="Insights & Resources"
        subtitle="Marketing tips, industry insights, and proven strategies to help your home service business grow."
        breadcrumbs={[{ label: "Blog", href: "/blog" }]}
      />

      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Featured post */}
          <ScrollReveal>
            <div className="mb-12 rounded-2xl border border-slate-200 bg-white overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="aspect-[16/10] lg:aspect-auto bg-gradient-to-br from-indigo-100 to-sky-100 flex items-center justify-center min-h-[300px]">
                  <span className="font-heading text-3xl font-bold text-indigo-300/50">
                    Featured
                  </span>
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="inline-flex self-start items-center rounded-full bg-indigo-100 text-indigo-700 px-3 py-1 text-xs font-semibold mb-4">
                    {featured.category}
                  </span>
                  <h2 className="font-heading text-2xl lg:text-3xl font-bold text-slate-900">
                    {featured.title}
                  </h2>
                  <p className="mt-3 text-slate-600 leading-relaxed">
                    {featured.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-sm text-slate-500">
                    <span>{featured.author}</span>
                    <span className="h-1 w-1 rounded-full bg-slate-300" />
                    <span>{featured.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((post) => (
              <ScrollReveal key={post.slug}>
                <BlogCard post={post} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Want Results, Not Just Tips?"
        subtitle="Let our team put these strategies to work for your business."
        buttonText="Get Your Free Strategy Call"
      />
    </>
  );
}
