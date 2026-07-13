import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { getSlugForCity } from "@/lib/locations";
import {
  ShieldIcon,
  ClockIcon,
  HandIcon,
  HomeIcon,
  ApartmentIcon,
  BuildingIcon,
  BoxIcon,
  TruckIcon,
  SofaIcon,
  QuoteIcon,
  StarIcon,
  CheckIcon,
  PhoneIcon,
} from "@/components/Icons";
import { TESTIMONIALS } from "@/lib/testimonials";
import TestimonialGrid from "@/components/TestimonialGrid";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Panther Moving | Tampa's Trusted Local Movers",
  description:
    "Professional, affordable moving services across Tampa Bay. Residential, apartment, commercial moves, packing & more. Licensed & insured. Get a free quote today.",
  alternates: { canonical: "/" },
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "MovingCompany",
    "@id": "https://panthermoving.com",
    name: SITE.name,
    description:
      "Professional, affordable moving services across Tampa Bay. Licensed & insured local movers.",
    url: "https://panthermoving.com",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2107 W Platt St",
      addressLocality: "Tampa",
      addressRegion: "FL",
      postalCode: "33606",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 27.9383,
      longitude: -82.4803,
    },
    areaServed: SITE.serviceAreas.map((city) => ({
      "@type": "City",
      name: city,
    })),
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "07:00",
      closes: "20:00",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "5",
      reviewCount: "99",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Moving Services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Residential Moves" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Apartment Moves" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial Moves" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Packing & Unpacking" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Loading & Unloading" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Furniture Assembly" } },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function HomePage() {
  return (
    <>
      <LocalBusinessSchema />

      {/* HERO */}
      <section className="relative flex min-h-[90vh] items-center overflow-hidden bg-black-primary">
        <Image
          src="/assets/panther-moving-boxing.webp"
          alt="Panther Moving team packing boxes for a move"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

        <div className="relative w-full max-w-[1100px] mx-auto px-8 pt-36 pb-24">
          <div className="max-w-[600px] hero-content">
            <div className="section-label">Tampa&apos;s Trusted Moving Company</div>
            <h1 className="section-heading mb-5 text-[clamp(44px,7vw,72px)] text-white">
              Stress-Free Moves.
              <br />
              <span className="text-gold">Guaranteed.</span>
            </h1>
            <p className="mb-8 max-w-[500px] text-lg font-medium leading-[1.8] text-white/85">
              From apartments to full homes, Panther Moving makes your Tampa
              move fast, easy, and affordable &mdash; with a local team you can
              count on.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 867-4661">
                <span className="btn-outline">
                  <PhoneIcon /> {SITE.phone}
                </span>
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Licensed & Insured", "Local Tampa Team", "No Hidden Fees"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <CheckIcon />
                    <span className="text-[13px] font-semibold text-white/80">
                      {text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gold px-6 py-4">
        <div className="mx-auto flex max-w-[1000px] flex-wrap justify-center gap-10">
          {[
            { n: "5-Star Rated", v: "Google Reviews" },
            { n: "Same-Day", v: "Quotes Available" },
            { n: "100%", v: "Satisfaction Guarantee" },
          ].map((stat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="text-center">
                <div className="font-heading text-lg font-bold text-black-primary">
                  {stat.n}
                </div>
                <div className="text-[11px] font-medium text-black-primary/70">
                  {stat.v}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* WHY PANTHER */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">Why Panther Moving</div>
            <h2 className="section-heading">
              Moving Done <span className="text-gold">Right</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: <ShieldIcon />,
              t: "Licensed & Insured",
              d: "Your belongings are fully protected. We carry comprehensive insurance so you can relax knowing everything is covered.",
            },
            {
              icon: <ClockIcon />,
              t: "On Time, Every Time",
              d: "We show up when we say we will. No waiting around, no delays. Your time matters and we respect it.",
            },
            {
              icon: <HandIcon />,
              t: "Careful With Your Stuff",
              d: "We treat your belongings like they're our own. Professional packing, padding, and handling from start to finish.",
            },
          ].map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rounded-lg border border-[#eee] bg-white p-8 transition-all hover:shadow-lg h-full">
                <div className="mb-3.5">{feature.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase">
                  {feature.t}
                </h3>
                <p className="text-sm font-light leading-[1.75] text-grey">
                  {feature.d}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-label">Our Services</div>
              <h2 className="section-heading">
                What We <span className="text-gold">Move</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <HomeIcon />,
                t: "Residential Moves",
                d: "Houses, condos, townhomes — any size. We handle packing, loading, transport, and setup.",
              },
              {
                icon: <ApartmentIcon />,
                t: "Apartment Moves",
                d: "Narrow hallways, stairs, elevators — no problem. We handle apartment moves quickly and with care.",
              },
              {
                icon: <BuildingIcon />,
                t: "Commercial Moves",
                d: "Minimize downtime with efficient office and retail relocation services.",
              },
              {
                icon: <BoxIcon />,
                t: "Packing & Unpacking",
                d: "We carefully pack your items and unpack them at your new destination.",
              },
              {
                icon: <TruckIcon />,
                t: "Loading & Unloading",
                d: "Already have a truck? We'll do all the heavy lifting for you.",
              },
              {
                icon: <SofaIcon />,
                t: "Furniture Assembly",
                d: "We disassemble, move, and reassemble your furniture with the right tools.",
              },
            ].map((service, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <Link
                  href="/services"
                  className="block rounded-lg border border-[#eee] bg-white p-6 no-underline transition-all hover:shadow-lg h-full"
                >
                  <div className="mb-3">{service.icon}</div>
                  <h3 className="mb-1.5 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                    {service.t}
                  </h3>
                  <p className="text-[13px] font-light leading-[1.7] text-grey">
                    {service.d}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="mt-8 text-center">
              <Link href="/services" className="btn-black">
                View All Services
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">How It Works</div>
            <h2 className="section-heading">
              Three Simple <span className="text-gold">Steps</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              n: "01",
              t: "Get a Free Quote",
              d: "Fill out our quick form or give us a call. No hidden fees, no surprises — just an honest estimate.",
              icon: <QuoteIcon />,
            },
            {
              n: "02",
              t: "We Handle the Heavy Lifting",
              d: "Our crew shows up on time, carefully packs, loads, and transports everything with care.",
              icon: <TruckIcon />,
            },
            {
              n: "03",
              t: "You Settle In",
              d: "We unload, assemble furniture if needed, and make sure you're happy before we leave.",
              icon: <HomeIcon />,
            },
          ].map((step, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded bg-black-primary">
                  <span className="font-heading text-[22px] font-bold text-gold">
                    {step.n}
                  </span>
                </div>
                <div className="mb-3 flex justify-center">{step.icon}</div>
                <h3 className="mb-2 font-heading text-[17px] font-semibold tracking-[0.5px] uppercase">
                  {step.t}
                </h3>
                <p className="text-sm font-light leading-[1.7] text-grey">
                  {step.d}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-black-primary px-6 py-[72px]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="section-label">Testimonials</div>
              <h2 className="section-heading text-white">
                Tampa Trusts <span className="text-gold">Panther</span>
              </h2>
            </div>
          </ScrollReveal>
          <TestimonialGrid testimonials={TESTIMONIALS} />
          <ScrollReveal>
            <div className="mt-6 flex items-center justify-center gap-1.5">
              <StarIcon />
              <span className="text-[13px] font-light tracking-[0.5px] text-grey-light">
                99 five-star reviews on Google
              </span>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-label">Our Work</div>
              <h2 className="section-heading">
                Packed With <span className="text-gold">Care</span>
              </h2>
            </div>
          </ScrollReveal>
          {/*
            Desktop (lg): 4 columns, 2 rows
            ┌──────────┬──────────────────────┬──────────┐
            │ portrait │  landscape  landscape │ portrait │
            │  team    ├──────────┬───────────┤  bikes   │
            │ (2 rows) │ landscape│  landscape│ (2 rows) │
            └──────────┴──────────┴───────────┴──────────┘

            Tablet (sm): 2 columns
            Mobile: 1 column — portraits get h-80, landscapes get h-56
          */}
          <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 lg:h-[500px]">
            {/* Portrait — team photo: col 1, rows 1-2 */}
            <ScrollReveal className="lg:row-span-2">
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/panther-moving-team-with-customer.webp"
                  alt="Panther Moving crew with a happy customer family after completing a move"
                  fill
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
            {/* Landscape — loading truck: col 2, row 1 */}
            <ScrollReveal delay={100}>
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/mover-loading-truck.webp"
                  alt="Panther Moving crew member loading wrapped furniture onto the truck"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
            {/* Landscape — carrying furniture: col 3, row 1 */}
            <ScrollReveal delay={200}>
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/mover-carrying-furniture.webp"
                  alt="Panther Moving crew member carrying furniture wrapped in a protective blanket"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
            {/* Portrait — bikes: col 4, rows 1-2 */}
            <ScrollReveal delay={300} className="lg:row-span-2">
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/mover-carrying-bikes.webp"
                  alt="Panther Moving crew member carrying bikes during a residential move"
                  fill
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
            {/* Landscape — crew at truck: col 2, row 2 */}
            <ScrollReveal delay={400}>
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/panther-moving-crew-at-truck.webp"
                  alt="Panther Moving crew standing in front of the moving truck ready for a job"
                  fill
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
            {/* Near-square — secured boxes: col 3, row 2 */}
            <ScrollReveal delay={500}>
              <div className="relative aspect-[3/4] sm:aspect-auto sm:h-72 lg:h-full overflow-hidden rounded-lg">
                <Image
                  src="/assets/secured-boxes-in-truck.webp"
                  alt="Shrink-wrapped and secured boxes ready for a safe move"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <ScrollReveal>
          <div className="section-label">Service Area</div>
          <h2 className="section-heading mb-4">
            Serving All of <span className="text-gold">Tampa Bay</span>
          </h2>
          <p className="mb-5 text-[15px] font-light leading-[1.8] text-grey">
            We&apos;re based in Tampa and proudly serve the entire Tampa Bay area.
          </p>
          <div className="flex flex-wrap justify-center gap-2.5">
            {SITE.serviceAreas.map((city) => (
              <Link
                key={city}
                href={`/locations/${getSlugForCity(city)}`}
                className="rounded border border-[#eee] bg-off-white px-4 py-2 text-[13px] font-medium text-black-primary no-underline transition-all hover:border-gold/40 hover:shadow-sm"
              >
                {city}
              </Link>
            ))}
          </div>
        </ScrollReveal>
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
              Get a free, no-obligation quote in minutes. We&apos;ll take care of
              the rest.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 867-4661">
                <span className="btn-outline">{SITE.phone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
