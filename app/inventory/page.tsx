import type { Metadata } from "next";
import QuoteCTA from "@/components/QuoteCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Get a Moving Quote | Panther Moving",
  description:
    "Request an accurate, no-obligation moving quote from Panther Moving. Tell us about your move and we'll get right back to you.",
  alternates: { canonical: "/inventory" },
};

export default function InventoryPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Get a Quote", href: "/inventory" }]} />

      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="hero-content">
          <div className="section-label">Almost There</div>
          <h1 className="section-heading text-white">
            Get Your <span className="text-gold">Free Quote</span>
          </h1>
          <p className="mt-2.5 text-[15px] font-light text-grey-light">
            Tell us about your move so we can give you the most accurate quote
          </p>
        </div>
      </section>

      {/* Quote CTA */}
      <section className="mx-auto max-w-[560px] px-6 pt-12 pb-20">
        <ScrollReveal>
          <QuoteCTA />
        </ScrollReveal>
      </section>
    </>
  );
}
