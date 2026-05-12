import type { Metadata } from "next";
import Link from "next/link";
import { getPostsByType } from "@/lib/posts";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Blog & Guides | Panther Moving",
  description:
    "Moving guides, tips, and resources from Panther Moving. Everything you need to plan your Tampa Bay move.",
  alternates: { canonical: "/blog" },
};

export default function BlogPage() {
  const guides = getPostsByType("guide");
  const posts = getPostsByType("post");

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Blog", href: "/blog" }]} />

      {/* HERO */}
      <section className="relative flex min-h-[40vh] items-center bg-black-primary">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="relative w-full max-w-[1000px] mx-auto px-8 pt-36 pb-16 text-center hero-content">
          <div className="section-label">Blog & Guides</div>
          <h1 className="section-heading mb-4 text-[clamp(32px,5vw,48px)] text-white">
            Moving Tips &{" "}
            <span className="text-gold">Resources</span>
          </h1>
          <p className="mx-auto max-w-[550px] text-base font-light leading-[1.85] text-white/80">
            In-depth guides and helpful articles to make your Tampa Bay move as
            smooth as possible.
          </p>
        </div>
      </section>

      {/* GUIDES */}
      {guides.length > 0 && (
        <section className="mx-auto max-w-[1000px] px-6 py-20">
          <ScrollReveal>
            <div className="mb-8">
              <div className="section-label">Guides</div>
              <h2 className="section-heading">
                Moving <span className="text-gold">Guides</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            {guides.map((guide, i) => (
              <ScrollReveal key={guide.slug} delay={i * 100}>
                <Link
                  href={`/blog/${guide.slug}`}
                  className="group block rounded-lg border border-[#eee] bg-white p-8 no-underline transition-all hover:shadow-lg hover:border-gold/30 h-full"
                >
                  <div className="mb-2 inline-block rounded bg-gold/10 px-2.5 py-1 font-heading text-[11px] font-semibold tracking-[1.5px] uppercase text-gold">
                    Guide
                  </div>
                  <h3 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase text-black-primary group-hover:text-gold transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.75] text-grey">
                    {guide.description}
                  </p>
                  <span className="mt-4 inline-block font-heading text-[12px] font-semibold tracking-[1.5px] uppercase text-gold">
                    Read Guide &rarr;
                  </span>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </section>
      )}

      {/* BLOG POSTS */}
      {posts.length > 0 && (
        <section className="bg-off-white px-6 py-20">
          <div className="mx-auto max-w-[1000px]">
            <ScrollReveal>
              <div className="mb-8">
                <div className="section-label">Latest</div>
                <h2 className="section-heading">
                  Blog <span className="text-gold">Posts</span>
                </h2>
              </div>
            </ScrollReveal>
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
              {posts.map((post, i) => (
                <ScrollReveal key={post.slug} delay={i * 100}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="group block rounded-lg border border-[#eee] bg-white p-6 no-underline transition-all hover:shadow-lg hover:border-gold/30 h-full"
                  >
                    <div className="mb-2 text-[12px] font-light text-grey">
                      {new Date(post.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </div>
                    <h3 className="mb-2 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary group-hover:text-gold transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[13px] font-light leading-[1.7] text-grey line-clamp-3">
                      {post.description}
                    </p>
                    <span className="mt-3 inline-block font-heading text-[12px] font-semibold tracking-[1.5px] uppercase text-gold">
                      Read More &rarr;
                    </span>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Empty state when no blog posts yet */}
      {posts.length === 0 && (
        <section className="bg-off-white px-6 py-16">
          <div className="mx-auto max-w-[1000px] text-center">
            <div className="section-label">Coming Soon</div>
            <h2 className="section-heading mb-3">
              Blog <span className="text-gold">Posts</span>
            </h2>
            <p className="text-[15px] font-light text-grey">
              More moving tips and articles are on the way. Check back soon.
            </p>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-black-primary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Ready to <span className="text-gold">Move?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Get a free, no-obligation quote from Tampa&apos;s most trusted
              moving company.
            </p>
            <Link href="/contact" className="btn-gold">
              Get Your Free Quote
            </Link>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
