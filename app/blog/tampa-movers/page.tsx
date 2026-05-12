import type { Metadata } from "next";
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
  CheckIcon,
  PhoneIcon,
} from "@/components/Icons";
import { TESTIMONIALS } from "@/lib/testimonials";
import TestimonialGrid from "@/components/TestimonialGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title:
    "Tampa Movers | Licensed & Insured Local Moving Company | Panther Moving",
  description:
    "Looking for the best movers in Tampa? Panther Moving is a licensed & insured Tampa moving company offering residential, commercial, and apartment moves. Get a free quote today.",
  alternates: { canonical: "/blog/tampa-movers" },
};

export default function TampaMoversPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Tampa Movers", href: "/blog/tampa-movers" },
        ]}
      />
      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center bg-black-primary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_50%,rgba(200,172,42,0.3),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

        <div className="relative w-full max-w-[1000px] mx-auto px-8 pt-36 pb-20">
          <div className="max-w-[650px] hero-content">
            <div className="section-label">Tampa Movers</div>
            <h1 className="section-heading mb-5 text-[clamp(36px,6vw,56px)] text-white">
              Tampa&apos;s Most Trusted{" "}
              <span className="text-gold">Moving Company</span>
            </h1>
            <p className="mb-8 max-w-[550px] text-base font-light leading-[1.85] text-white/80">
              Panther Moving is a locally owned and operated Tampa moving company.
              Licensed, insured, and 5-star rated on Google, we&apos;ve completed
              over 500 moves across Tampa Bay &mdash; and counting.
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 508-7860">
                <span className="btn-outline">
                  <PhoneIcon /> {SITE.phone}
                </span>
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {[
                "Licensed & Insured",
                "5-Star Google Reviews",
                "No Hidden Fees",
              ].map((text) => (
                <div key={text} className="flex items-center gap-1.5">
                  <CheckIcon />
                  <span className="text-[13px] font-semibold text-white/80">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHAT SETS US APART */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-heading">
              What Sets Panther Moving{" "}
              <span className="text-gold">Apart</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {[
            {
              icon: <ShieldIcon />,
              t: "Licensed & Insured",
              d: "Every move is fully covered by comprehensive insurance. We're a licensed Florida moving company, so your belongings are protected from pickup to delivery.",
            },
            {
              icon: <CheckIcon color="#C9AC2A" />,
              t: "Transparent Pricing",
              d: "No hidden fees, no surprises. We provide detailed, upfront quotes so you know exactly what your Tampa move will cost before we lift a single box.",
            },
            {
              icon: <HandIcon />,
              t: "Careful Handling",
              d: "Our crew uses professional packing materials, furniture blankets, and proper technique on every item. We treat your belongings like our own — because that's how it should be.",
            },
            {
              icon: <ClockIcon />,
              t: "Local Tampa Expertise",
              d: "We know Tampa inside and out. From navigating downtown one-ways to handling South Tampa's tight driveways, our local knowledge means a faster, smoother move.",
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

      {/* SERVICES IN TAMPA */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-label">Our Services</div>
              <h2 className="section-heading">
                Our Moving Services in{" "}
                <span className="text-gold">Tampa</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {[
              {
                icon: <HomeIcon />,
                t: "Residential Moves",
                d: "Houses, condos, townhomes — any size across Tampa. Full-service packing, loading, transport, and setup at your new home.",
              },
              {
                icon: <ApartmentIcon />,
                t: "Apartment Moves",
                d: "From Channelside high-rises to Seminole Heights walk-ups, we handle narrow hallways, stairs, and elevators with ease.",
              },
              {
                icon: <BuildingIcon />,
                t: "Commercial Moves",
                d: "Office relocations, retail moves, and commercial buildouts. We work around your schedule to minimize downtime.",
              },
              {
                icon: <BoxIcon />,
                t: "Packing & Unpacking",
                d: "Don't want to pack? We bring the supplies and carefully pack every room. We'll unpack at your new place too.",
              },
              {
                icon: <TruckIcon />,
                t: "Loading & Unloading",
                d: "Already rented a truck? Our crew handles the heavy lifting — loading, securing, and unloading your belongings.",
              },
              {
                icon: <SofaIcon />,
                t: "Furniture Assembly",
                d: "We disassemble bulky furniture for safe transport and reassemble everything at your new Tampa home.",
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

      {/* TAMPA NEIGHBORHOODS */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">Coverage Area</div>
            <h2 className="section-heading">
              Tampa Neighborhoods{" "}
              <span className="text-gold">We Serve</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[600px] text-[15px] font-light leading-[1.8] text-grey">
              No matter where you are in Tampa, Panther Moving is ready to help.
              Here are some of the neighborhoods and areas we serve every day.
            </p>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              area: "South Tampa",
              neighborhoods: [
                "Hyde Park",
                "Palma Ceia",
                "Bayshore",
                "Davis Islands",
                "Harbour Island",
                "Ballast Point",
              ],
            },
            {
              area: "Downtown & Channel District",
              neighborhoods: [
                "Downtown Tampa",
                "Channelside",
                "Ybor City",
                "Water Street",
                "Tampa Heights",
              ],
            },
            {
              area: "Westshore & Airport Area",
              neighborhoods: [
                "Westshore",
                "Carrollwood",
                "Town 'N' Country",
                "Westchase",
                "Citrus Park",
              ],
            },
            {
              area: "New Tampa & USF",
              neighborhoods: [
                "New Tampa",
                "USF Area",
                "Temple Terrace",
                "Pebble Creek",
                "Tampa Palms",
              ],
            },
            {
              area: "Seminole Heights & Central",
              neighborhoods: [
                "Seminole Heights",
                "Riverside Heights",
                "Virginia Park",
                "Wellswood",
                "North Bon Air",
              ],
            },
            {
              area: "East Tampa & Beyond",
              neighborhoods: [
                "East Tampa",
                "Brandon",
                "Riverview",
                "Valrico",
                "Seffner",
              ],
            },
          ].map((group, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="rounded-lg border border-[#eee] bg-white p-6 h-full">
                <h3 className="mb-3 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                  {group.area}
                </h3>
                <ul className="space-y-1.5">
                  {group.neighborhoods.map((n) => (
                    <li
                      key={n}
                      className="flex items-center gap-2 text-[13px] font-light text-grey"
                    >
                      <CheckIcon color="#C9AC2A" />
                      {n}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="section-label">Pricing</div>
              <h2 className="section-heading">
                How Much Does It Cost to Move in{" "}
                <span className="text-gold">Tampa?</span>
              </h2>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <div className="space-y-5">
              <p className="text-[15px] font-light leading-[1.85] text-grey">
                The cost of a local move in Tampa depends on several factors,
                including the size of your home, the distance between locations,
                and how much packing or special handling is needed. Most local
                Tampa moves are charged by the hour, with rates based on crew
                size and the truck required.
              </p>
              <div className="rounded-lg border border-[#eee] bg-white p-6">
                <h3 className="mb-4 font-heading text-base font-semibold tracking-[0.5px] uppercase">
                  Factors That Affect Your Moving Cost
                </h3>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "Number of bedrooms and total items",
                    "Distance between pickup and delivery",
                    "Stairs, elevators, or long carry distances",
                    "Packing and unpacking services",
                    "Furniture disassembly and reassembly",
                    "Specialty items (pianos, safes, antiques)",
                    "Time of year and day of week",
                    "Additional stops or storage needs",
                  ].map((factor) => (
                    <div
                      key={factor}
                      className="flex items-start gap-2 text-[13px] font-light leading-[1.7] text-grey"
                    >
                      <CheckIcon color="#C9AC2A" />
                      <span>{factor}</span>
                    </div>
                  ))}
                </div>
              </div>
              <p className="text-[15px] font-light leading-[1.85] text-grey">
                The best way to get an accurate price for your Tampa move is to
                request a free, no-obligation quote. We&apos;ll walk through your
                specific needs and give you an honest estimate with no hidden
                fees. Most quotes are returned the same day.
              </p>
              <div className="text-center pt-2">
                <Link href="/contact" className="btn-gold">
                  Get Your Free Quote
                </Link>
              </div>
            </div>
          </ScrollReveal>
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
                What Our Tampa Customers{" "}
                <span className="text-gold">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <TestimonialGrid testimonials={TESTIMONIALS.slice(0, 3)} />
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-black-primary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Get Your Free Moving{" "}
              <span className="text-gold">Quote</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Ready to move in Tampa? Get a free, no-obligation quote from
              Panther Moving. Call us or fill out our quick form &mdash;
              most quotes are returned the same day.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 508-7860">
                <span className="btn-outline">
                  <PhoneIcon /> {SITE.phone}
                </span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
