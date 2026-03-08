import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
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

export const metadata: Metadata = {
  title: "Panther Moving | Tampa's Trusted Local Movers",
  description:
    "Professional, affordable moving services across Tampa Bay. Residential, apartment, commercial moves, packing & more. Licensed & insured. Get a free quote today.",
};

function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://panthermoving.com",
    name: SITE.name,
    description:
      "Professional, affordable moving services across Tampa Bay. Licensed & insured local movers.",
    telephone: SITE.phone,
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "2107 W Platt St",
      addressLocality: "Tampa",
      addressRegion: "FL",
      addressCountry: "US",
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
      reviewCount: "500",
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
      <section className="relative flex min-h-screen items-center overflow-hidden bg-black-primary">
        {/* Diagonal accent */}
        <div
          className="absolute top-0 right-0 h-full w-[55%]"
          style={{
            background: "linear-gradient(160deg, rgba(201,172,42,0.03), rgba(201,172,42,0.01))",
            clipPath: "polygon(30% 0, 100% 0, 100% 100%, 0% 100%)",
          }}
        />
        {/* Gold stripe */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

        <div className="relative mx-auto grid w-full max-w-[1100px] grid-cols-1 items-center gap-12 px-8 pt-36 pb-24 lg:grid-cols-2">
          <div>
            <div className="section-label">Tampa&apos;s Trusted Moving Company</div>
            <h1 className="section-heading mb-4 text-[clamp(40px,6vw,64px)] text-white">
              Stress-Free Moves.
              <br />
              <span className="text-gold">Guaranteed.</span>
            </h1>
            <p className="mb-7 max-w-[460px] text-[17px] font-light leading-[1.8] text-grey-light">
              From apartments to full homes, Panther Moving makes your Tampa
              move fast, easy, and affordable &mdash; with a local team you can
              count on.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline">
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
                    <span className="text-[13px] font-normal text-grey-light">
                      {text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="hidden justify-center lg:flex">
            <div className="relative h-[400px] w-full overflow-hidden rounded-lg border-2 border-gold/20">
              <Image
                src="/assets/mover-carrying-furniture.webp"
                alt="Panther Moving crew member carrying furniture wrapped in a protective blanket"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="bg-gold px-6 py-4">
        <div className="mx-auto flex max-w-[1000px] flex-wrap justify-center gap-10">
          {[
            { n: "5-Star Rated", v: "Google Reviews" },
            { n: "500+", v: "Moves Completed" },
            { n: "Same-Day", v: "Quotes Available" },
            { n: "100%", v: "Satisfaction Guarantee" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="font-heading text-lg font-bold text-black-primary">
                {stat.n}
              </div>
              <div className="text-[11px] font-medium text-black-primary/70">
                {stat.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY PANTHER */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <div className="mb-12 text-center">
          <div className="section-label">Why Panther Moving</div>
          <h2 className="section-heading">
            Moving Done <span className="text-gold">Right</span>
          </h2>
        </div>
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
            <div
              key={i}
              className="rounded-lg border border-[#eee] bg-white p-8 transition-all hover:shadow-lg"
            >
              <div className="mb-3.5">{feature.icon}</div>
              <h3 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase">
                {feature.t}
              </h3>
              <p className="text-sm font-light leading-[1.75] text-grey">
                {feature.d}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-12 text-center">
            <div className="section-label">Our Services</div>
            <h2 className="section-heading">
              What We <span className="text-gold">Move</span>
            </h2>
          </div>
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
              <Link
                key={i}
                href="/services"
                className="block rounded-lg border border-[#eee] bg-white p-6 no-underline transition-all hover:shadow-lg"
              >
                <div className="mb-3">{service.icon}</div>
                <h3 className="mb-1.5 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                  {service.t}
                </h3>
                <p className="text-[13px] font-light leading-[1.7] text-grey">
                  {service.d}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/services" className="btn-black">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <div className="mb-12 text-center">
          <div className="section-label">How It Works</div>
          <h2 className="section-heading">
            Three Simple <span className="text-gold">Steps</span>
          </h2>
        </div>
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
            <div key={i} className="p-8 text-center">
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
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-black-primary px-6 py-[72px]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-10 text-center">
            <div className="section-label">Testimonials</div>
            <h2 className="section-heading text-white">
              Tampa Trusts <span className="text-gold">Panther</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              {
                n: "Marcus T.",
                q: "Showed up on time, moved everything without a scratch, and were done in half the time I expected. Best movers in Tampa.",
              },
              {
                n: "Jennifer R.",
                q: "I was dreading my apartment move but these guys made it so easy. Careful with all my stuff and super friendly. Highly recommend.",
              },
              {
                n: "David K.",
                q: "Used Panther for our office relocation. Professional, efficient, and affordable. Will definitely use again for our next move.",
              },
            ].map((review, i) => (
              <div
                key={i}
                className="rounded-lg border border-slate bg-black-secondary p-6"
              >
                <div className="mb-3 flex gap-0.5">
                  {Array(5)
                    .fill(0)
                    .map((_, j) => (
                      <StarIcon key={j} />
                    ))}
                </div>
                <p className="mb-3.5 text-sm font-light italic leading-[1.75] text-grey-light">
                  &ldquo;{review.q}&rdquo;
                </p>
                <div className="font-heading text-[13px] tracking-[1px] text-white">
                  &mdash; {review.n}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GALLERY */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <div className="mb-12 text-center">
            <div className="section-label">Our Work</div>
            <h2 className="section-heading">
              Packed With <span className="text-gold">Care</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                src: "/assets/mover-loading-truck.webp",
                alt: "Panther Moving crew member loading wrapped furniture onto the truck",
              },
              {
                src: "/assets/packed-moving-truck.webp",
                alt: "Neatly packed moving truck with labeled boxes and wrapped furniture",
              },
              {
                src: "/assets/organized-truck-load.webp",
                alt: "Organized truck load with boxes and equipment secured for transport",
              },
              {
                src: "/assets/secured-boxes-in-truck.webp",
                alt: "Shrink-wrapped and secured boxes ready for a safe move",
              },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-lg ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2 h-64 lg:h-full" : "h-64"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-105"
                  sizes={i === 0 ? "(max-width: 1024px) 100vw, 33vw" : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE AREA */}
      <section className="mx-auto max-w-[800px] px-6 py-16 text-center">
        <div className="section-label">Service Area</div>
        <h2 className="section-heading mb-4">
          Serving All of <span className="text-gold">Tampa Bay</span>
        </h2>
        <p className="mb-5 text-[15px] font-light leading-[1.8] text-grey">
          We&apos;re based in Tampa and proudly serve the entire Tampa Bay area.
        </p>
        <div className="flex flex-wrap justify-center gap-2.5">
          {SITE.serviceAreas.map((city) => (
            <span
              key={city}
              className="rounded border border-[#eee] bg-off-white px-4 py-2 text-[13px] font-medium text-black-primary"
            >
              {city}
            </span>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-gradient-to-br from-black-primary to-black-secondary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
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
            <a href={`tel:${SITE.phoneRaw}`} className="no-underline">
              <span className="btn-outline">{SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
