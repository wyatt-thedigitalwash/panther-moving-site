import type { Metadata } from "next";
import Link from "next/link";
import { LOCATIONS } from "@/lib/locations";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Service Areas",
  description:
    "Panther Moving serves Tampa, St. Petersburg, Clearwater, and more. Find local movers near you.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Service Areas", href: "/locations" }]} />

      {/* HERO */}
      <section className="relative flex min-h-[40vh] items-center bg-black-primary">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="relative w-full max-w-[1000px] mx-auto px-8 pt-36 pb-16 text-center hero-content">
          <div className="section-label">Service Areas</div>
          <h1 className="section-heading mb-4 text-[clamp(32px,5vw,48px)] text-white">
            Serving All of <span className="text-gold">Tampa Bay</span>
          </h1>
          <p className="mx-auto max-w-[550px] text-base font-light leading-[1.85] text-white/80">
            Panther Moving is based in Tampa and proudly serves the entire Tampa
            Bay area. From Clearwater beaches to Lakeland and everywhere in
            between, our professional crew is ready to help with your next move.
          </p>
        </div>
      </section>

      {/* LOCATIONS GRID */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {LOCATIONS.map((loc, i) => (
            <ScrollReveal key={loc.slug} delay={i * 80}>
              <Link
                href={`/locations/${loc.slug}`}
                className="group block rounded-lg border border-[#eee] bg-white p-6 no-underline transition-all hover:shadow-lg hover:border-gold/30 h-full"
              >
                <h2 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase text-black-primary group-hover:text-gold transition-colors">
                  {loc.name}
                </h2>
                <p className="text-[13px] font-light leading-[1.7] text-grey line-clamp-3">
                  {loc.description}
                </p>
                <span className="mt-3 inline-block font-heading text-[12px] font-semibold tracking-[1.5px] uppercase text-gold">
                  Learn More &rarr;
                </span>
              </Link>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-black-primary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Ready to <span className="text-gold">Move?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              No matter where you are in Tampa Bay, Panther Moving has you
              covered. Get a free quote today.
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
