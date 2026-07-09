import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Tampa Moving Guide: Costs, Neighborhoods & Tips",
  description:
    "Everything you need to know about moving to Tampa. Explore neighborhoods, understand moving costs, get a moving day checklist, and learn when to move for the best rates.",
  alternates: { canonical: "/blog/tampa-moving-guide" },
};

export default function TampaMovingGuidePage() {
  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Blog", href: "/blog" },
          { name: "Tampa Moving Guide", href: "/blog/tampa-moving-guide" },
        ]}
      />

      {/* HERO */}
      <section className="relative flex min-h-[50vh] items-center bg-black-primary">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_70%_40%,rgba(200,172,42,0.3),transparent_60%)]" />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

        <div className="relative w-full max-w-[1000px] mx-auto px-8 pt-36 pb-20 text-center hero-content">
          <div className="section-label">Tampa Moving Guide</div>
          <h1 className="section-heading mb-5 text-[clamp(32px,5.5vw,52px)] text-white">
            The Complete Guide to{" "}
            <span className="text-gold">Moving in Tampa</span>
          </h1>
          <p className="mx-auto max-w-[600px] text-base font-light leading-[1.85] text-white/80">
            Everything you need to know about moving to or within Tampa &mdash;
            from neighborhood guides and cost breakdowns to checklists and
            utility setup. Written by Tampa&apos;s local movers.
          </p>
        </div>
      </section>

      {/* WHY PEOPLE MOVE TO TAMPA */}
      <section className="mx-auto max-w-[800px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="section-label">Living in Tampa</div>
            <h2 className="section-heading">
              Why People Are Moving to{" "}
              <span className="text-gold">Tampa</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <div className="space-y-4 text-[15px] font-light leading-[1.85] text-grey">
            <p>
              Tampa has become one of the fastest-growing cities in the U.S., and
              for good reason. With year-round warm weather, no state income tax,
              and a cost of living that&apos;s still below many major metros,
              Tampa offers an attractive combination of affordability and
              lifestyle.
            </p>
            <p>
              The job market has expanded significantly in healthcare, finance,
              tech, and defense. Major employers like USAA, JPMorgan Chase,
              AdventHealth, and MacDill Air Force Base provide a stable economic
              base. Tampa&apos;s downtown has seen a wave of development with new
              restaurants, entertainment venues, and waterfront projects along
              Water Street.
            </p>
            <p>
              Beyond work, Tampa offers easy access to Gulf Coast beaches,
              professional sports (Bucs, Lightning, Rays), an expanding food
              scene, and a growing cultural district. Families appreciate the
              range of public, charter, and private school options across
              Hillsborough County.
            </p>
          </div>
        </ScrollReveal>
      </section>

      {/* BEST NEIGHBORHOODS */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-label">Neighborhoods</div>
              <h2 className="section-heading">
                Best Neighborhoods in{" "}
                <span className="text-gold">Tampa</span>
              </h2>
              <p className="mx-auto mt-4 max-w-[600px] text-[15px] font-light leading-[1.8] text-grey">
                Tampa has a neighborhood for every lifestyle and budget. Here are
                some of the most popular areas people are moving to.
              </p>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                name: "South Tampa",
                vibe: "Upscale, walkable, family-friendly",
                desc: "Home to Hyde Park, Palma Ceia, and Bayshore Boulevard. South Tampa offers tree-lined streets, top-rated schools, and a strong sense of community. Homes range from historic bungalows to waterfront estates. Expect higher price points but a premium lifestyle.",
              },
              {
                name: "Seminole Heights",
                vibe: "Trendy, eclectic, up-and-coming",
                desc: "Known for its craft breweries, local restaurants, and renovated bungalows. Seminole Heights has become a hotspot for young professionals and creatives. Home prices are more accessible than South Tampa, with a growing arts and food scene.",
              },
              {
                name: "Downtown & Water Street",
                vibe: "Urban, modern, walkable",
                desc: "Tampa's downtown core has transformed with the Water Street development. High-rise condos, new restaurants, and the Riverwalk make this ideal for professionals who want an urban lifestyle. Rentals and condos range from moderate to luxury.",
              },
              {
                name: "Westchase",
                vibe: "Suburban, planned community, families",
                desc: "A master-planned community in northwest Tampa with well-maintained parks, excellent schools, and a town center. Westchase is popular with families looking for newer construction and a suburban feel while staying within Tampa city limits.",
              },
              {
                name: "New Tampa",
                vibe: "Suburban, newer development, convenient",
                desc: "Located in the northern part of the city near the I-75/I-275 interchange. New Tampa offers newer homes, shopping centers, and easy access to both Tampa and Wesley Chapel. A solid choice for commuters and families.",
              },
              {
                name: "Davis Islands",
                vibe: "Island living, quiet, close to downtown",
                desc: "A pair of man-made islands just south of downtown with a small-town feel. Davis Islands has its own airport, yacht club, and community pool. Homes range from mid-century to new construction with water views available.",
              },
              {
                name: "Ybor City",
                vibe: "Historic, nightlife, cultural",
                desc: "Tampa's historic Latin quarter offers a unique mix of nightlife, history, and character. Ybor is drawing more residents with loft conversions and new development while maintaining its cigar-era architecture and vibrant weekend scene.",
              },
              {
                name: "Carrollwood",
                vibe: "Established, central, affordable",
                desc: "A centrally located area with a mix of established neighborhoods and newer development. Carrollwood offers good schools, convenient shopping, and reasonable home prices. Popular with families and professionals who need easy access to all parts of Tampa.",
              },
            ].map((hood, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="rounded-lg border border-[#eee] bg-white p-6 h-full">
                  <h3 className="mb-1 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                    {hood.name}
                  </h3>
                  <div className="mb-3 text-[12px] font-medium tracking-[0.5px] text-gold">
                    {hood.vibe}
                  </div>
                  <p className="text-[13px] font-light leading-[1.75] text-grey">
                    {hood.desc}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOVING COSTS */}
      <section className="mx-auto max-w-[900px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="section-label">Cost Guide</div>
            <h2 className="section-heading">
              Tampa Moving Costs:{" "}
              <span className="text-gold">What to Expect</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="space-y-6">
          <ScrollReveal>
            <p className="text-[15px] font-light leading-[1.85] text-grey">
              Moving costs in Tampa vary based on the size of your home, distance,
              and the services you need. Here&apos;s a general breakdown of what
              local Tampa moves typically cost to help you budget.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {[
              {
                size: "Studio / 1 Bedroom",
                range: "$300 – $600",
                detail: "2 movers, 2–4 hours",
              },
              {
                size: "2 Bedrooms",
                range: "$500 – $1,000",
                detail: "2–3 movers, 3–5 hours",
              },
              {
                size: "3 Bedrooms",
                range: "$800 – $1,500",
                detail: "3–4 movers, 4–7 hours",
              },
              {
                size: "4+ Bedrooms",
                range: "$1,200 – $2,500+",
                detail: "4+ movers, 5–9 hours",
              },
            ].map((tier, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-lg border border-[#eee] bg-off-white p-5 h-full">
                  <h3 className="mb-1 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                    {tier.size}
                  </h3>
                  <div className="mb-1 font-heading text-xl font-bold text-gold">
                    {tier.range}
                  </div>
                  <div className="text-[13px] font-light text-grey">
                    {tier.detail}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
          <ScrollReveal>
            <div className="rounded-lg border border-[#eee] bg-white p-6">
              <h3 className="mb-3 font-heading text-base font-semibold tracking-[0.5px] uppercase">
                Other Cost Factors
              </h3>
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                {[
                  "Long-distance moves are priced by weight and mileage",
                  "Packing services add $150–$400+ depending on home size",
                  "Specialty items (pianos, safes) may have additional fees",
                  "Weekend and end-of-month moves may cost slightly more",
                  "Stairs and long carry distances can affect hourly time",
                  "Tipping is optional — $20–$40 per mover is standard",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-2 text-[13px] font-light leading-[1.7] text-grey"
                  >
                    <CheckIcon color="#C9AC2A" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-[15px] font-light leading-[1.85] text-grey">
              These ranges are estimates based on typical local Tampa moves. Your
              actual cost depends on your specific situation. The best way to get
              an accurate number is to{" "}
              <Link
                href="/contact"
                className="font-medium text-gold underline"
              >
                request a free quote
              </Link>
              .
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* WHEN TO MOVE */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="section-label">Timing</div>
              <h2 className="section-heading">
                When to Move in{" "}
                <span className="text-gold">Tampa</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="space-y-5">
            {[
              {
                t: "Best Months to Move",
                p: "October through April is considered off-peak season in Tampa. The weather is mild, demand is lower, and you're more likely to get your preferred date and potentially better rates. January through March are especially good — comfortable temperatures and availability is high.",
              },
              {
                t: "Peak Season",
                p: "May through September is peak moving season nationwide, and Tampa is no exception. Summer months are busiest — book early if you need to move during this period. Keep in mind that Tampa's summer heat and afternoon thunderstorms can add complexity to moving day logistics.",
              },
              {
                t: "Hurricane Season",
                p: "Atlantic hurricane season runs from June 1 through November 30, with the most active months being August through October. While this doesn't mean you can't move during these months, it's worth monitoring forecasts and having a flexible backup date if possible. Your moving company should be prepared to reschedule if severe weather threatens.",
              },
            ].map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="rounded-lg border border-[#eee] bg-white p-6">
                  <h3 className="mb-2 font-heading text-base font-semibold tracking-[0.5px] uppercase">
                    {card.t}
                  </h3>
                  <p className="text-[14px] font-light leading-[1.8] text-grey">
                    {card.p}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* MOVING DAY CHECKLIST */}
      <section className="mx-auto max-w-[800px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="section-label">Checklist</div>
            <h2 className="section-heading">
              Your Moving Day{" "}
              <span className="text-gold">Checklist</span>
            </h2>
            <p className="mx-auto mt-4 max-w-[550px] text-[15px] font-light leading-[1.8] text-grey">
              Stay organized with this timeline so nothing falls through the
              cracks on your Tampa move.
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-6">
          {[
            {
              period: "4 Weeks Before",
              items: [
                "Get quotes from movers and book your moving date",
                "Start decluttering — donate, sell, or toss items you don't need",
                "Notify your landlord if renting and arrange lease end date",
                "Begin gathering packing supplies (boxes, tape, bubble wrap)",
                "Create a moving binder or folder for important documents",
              ],
            },
            {
              period: "2 Weeks Before",
              items: [
                "Start packing non-essential rooms (guest rooms, storage, garage)",
                "Submit a change of address with USPS",
                "Transfer or set up utilities at your new address",
                "Notify banks, insurance, subscriptions of your new address",
                "Arrange care for pets and children on moving day",
              ],
            },
            {
              period: "1 Week Before",
              items: [
                "Pack most of your home — leave out daily essentials only",
                "Confirm moving date and arrival time with your movers",
                "Prepare an essentials box (toiletries, chargers, snacks, documents)",
                "Clean and defrost your refrigerator",
                "Take photos of electronics setups for easy reassembly",
              ],
            },
            {
              period: "Moving Day",
              items: [
                "Do a final walkthrough of every room, closet, and cabinet",
                "Be available to answer questions from your moving crew",
                "Keep valuables, medications, and important documents with you",
                "Confirm delivery address and any access instructions with movers",
                "Check off items as they're loaded onto the truck",
              ],
            },
            {
              period: "Day After",
              items: [
                "Unpack essentials and set up beds, bathroom, and kitchen first",
                "Check all items against your inventory — report any issues promptly",
                "Introduce yourself to neighbors",
                "Update your driver's license and vehicle registration (FL requires within 30 days)",
                "Explore your new Tampa neighborhood",
              ],
            },
          ].map((phase, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="rounded-lg border border-[#eee] bg-white p-6">
                <h3 className="mb-4 font-heading text-base font-semibold tracking-[0.5px] uppercase text-black-primary">
                  {phase.period}
                </h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14px] font-light leading-[1.7] text-grey"
                    >
                      <span className="mt-0.5 shrink-0">
                        <CheckIcon color="#C9AC2A" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* UTILITIES & ADDRESS CHANGE */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="section-label">Utilities</div>
              <h2 className="section-heading">
                Utilities & Address Change{" "}
                <span className="text-gold">Guide</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <ScrollReveal>
              <div className="rounded-lg border border-[#eee] bg-white p-6 h-full">
                <h3 className="mb-3 font-heading text-base font-semibold tracking-[0.5px] uppercase">
                  Tampa Utilities to Set Up
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "Tampa Electric (TECO) — electricity",
                    "City of Tampa Water — water & sewer",
                    "TECO Peoples Gas — natural gas",
                    "Spectrum, Frontier, or Xfinity — internet & cable",
                    "Republic Services — trash & recycling (may be included with water)",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] font-light leading-[1.7] text-grey"
                    >
                      <span className="mt-0.5 shrink-0">
                        <CheckIcon color="#C9AC2A" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <div className="rounded-lg border border-[#eee] bg-white p-6 h-full">
                <h3 className="mb-3 font-heading text-base font-semibold tracking-[0.5px] uppercase">
                  Address Change Reminders
                </h3>
                <ul className="space-y-2.5">
                  {[
                    "USPS mail forwarding (do this at least 2 weeks early)",
                    "Florida driver's license (update within 30 days)",
                    "Vehicle registration and insurance",
                    "Banks, credit cards, and investment accounts",
                    "Health insurance and medical providers",
                    "Voter registration",
                    "Employer and payroll records",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-[14px] font-light leading-[1.7] text-grey"
                    >
                      <span className="mt-0.5 shrink-0">
                        <CheckIcon color="#C9AC2A" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-black-primary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <div className="section-label">Let&apos;s Do This</div>
            <h2 className="section-heading mb-3.5 text-white">
              Need Help With Your{" "}
              <span className="text-gold">Tampa Move?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Panther Moving is Tampa&apos;s locally owned, licensed, and insured
              moving company. Whether you&apos;re moving across town or settling
              into Tampa for the first time, we&apos;ll make your move
              stress-free. Get a free quote today.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 867-4661">
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
