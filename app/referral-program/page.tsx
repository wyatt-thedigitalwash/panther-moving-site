import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon, StarIcon, ShieldIcon, CheckIcon } from "@/components/Icons";
import ReferralForm from "@/components/ReferralForm";
import ScrollReveal from "@/components/ScrollReveal";
import SmoothScrollLink from "@/components/SmoothScrollLink";

export const metadata: Metadata = {
  title: "Referral Partner Program | Panther Moving",
  description:
    "Join Panther Moving's referral partner program. Send us your clients, earn a bonus on every completed move. Realtors, property managers, and businesses welcome.",
  alternates: { canonical: "/referral-program" },
};

const PARTNER_TYPES = [
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Realtors",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <rect x="4" y="3" width="16" height="18" rx="2" stroke="#C9AC2A" strokeWidth="1.5" />
        <path d="M9 7h2M13 7h2M9 11h2M13 11h2M9 15h2M13 15h2" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Apartment Complexes",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4m6 0h4a2 2 0 012 2v14a2 2 0 01-2 2h-4" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 3v18M7 7h2M7 11h2M15 7h2M15 11h2" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    title: "Property Managers",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M2 20h20M4 20V8l4-4h8l4 4v12M10 20v-6h4v6M9 10h6" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Builders & Contractors",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Concierge & Front Desk Teams",
  },
  {
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M9 22V12h6v10" stroke="#C9AC2A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Local Businesses",
  },
];

const BENEFITS = [
  {
    icon: <StarIcon />,
    title: "99 Five-Star Google Reviews",
    description:
      "Your clients are in the best hands. Our reputation speaks for itself with nearly 100 perfect reviews.",
  },
  {
    icon: <ShieldIcon size={24} />,
    title: "Licensed & Insured",
    description:
      "Full liability coverage on every move. You can confidently refer knowing your clients are protected.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" stroke="#C9AC2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Your Clients Get a Discount",
    description:
      "Referred clients receive a discount on their move — giving you something valuable to offer.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <circle cx="12" cy="12" r="10" stroke="#C9AC2A" strokeWidth="2" />
        <path d="M12 6v6l4 2" stroke="#C9AC2A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    title: "Reliable, On-Time Crew",
    description:
      "Professional movers who show up when they say they will. No delays, no excuses — every time.",
  },
];

export default function ReferralProgramPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-20 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="hero-content mx-auto max-w-[700px]">
          <div className="section-label">Referral Partner Program</div>
          <h1 className="section-heading text-white">
            Partner With Tampa&apos;s{" "}
            <span className="text-gold">Top-Rated Movers</span>
          </h1>
          <p className="mx-auto mt-4 max-w-[560px] text-[15px] font-light leading-[1.8] text-grey-light">
            Panther Moving is building a network of trusted referral partners
            across Tampa Bay. Send us your clients, and we&apos;ll take care of
            them like our own.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <SmoothScrollLink target="#signup" className="btn-gold">
              Become a Referral Partner
            </SmoothScrollLink>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="no-underline"
              aria-label="Call Panther Moving at (813) 508-7860"
            >
              <span className="btn-outline">
                <PhoneIcon /> {SITE.phone}
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* How It Works */}
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
              t: "Sign Up",
              d: "Fill out the form below to join our referral partner network.",
            },
            {
              n: "02",
              t: "Refer a Client",
              d: "Send us anyone who needs a move. We'll handle the rest.",
            },
            {
              n: "03",
              t: "Get Rewarded",
              d: "After every completed move, you earn a referral bonus.",
            },
          ].map((step, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="p-8 text-center">
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded bg-black-primary">
                  <span className="font-heading text-[22px] font-bold text-gold">
                    {step.n}
                  </span>
                </div>
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

      {/* Who We Partner With */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-12 text-center">
              <div className="section-label">Our Partners</div>
              <h2 className="section-heading">
                Who We <span className="text-gold">Partner With</span>
              </h2>
            </div>
          </ScrollReveal>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {PARTNER_TYPES.map((partner, i) => (
              <ScrollReveal key={i} delay={i * 80}>
                <div className="flex items-center gap-4 rounded-lg border border-[#eee] bg-white p-6 transition-all hover:shadow-lg h-full">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded bg-gold/10">
                    {partner.icon}
                  </div>
                  <h3 className="font-heading text-base font-semibold tracking-[0.5px] uppercase">
                    {partner.title}
                  </h3>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Why Partner With Panther */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">Why Panther Moving</div>
            <h2 className="section-heading">
              Why Partner With <span className="text-gold">Panther</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {BENEFITS.map((benefit, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rounded-lg border border-[#eee] bg-white p-8 transition-all hover:shadow-lg h-full">
                <div className="mb-3.5">{benefit.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase">
                  {benefit.title}
                </h3>
                <p className="text-sm font-light leading-[1.75] text-grey">
                  {benefit.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* What Your Clients Get */}
      <section className="bg-off-white px-6 py-20">
        <div className="mx-auto max-w-[700px] text-center">
          <ScrollReveal>
            <div className="section-label">Client Benefits</div>
            <h2 className="section-heading mb-4">
              What Your Clients <span className="text-gold">Get</span>
            </h2>
            <p className="mb-4 text-[15px] font-light leading-[1.8] text-grey">
              Every client you refer receives a special discount on their move
              &mdash; giving you something valuable to offer and making it a
              win-win for everyone involved.
            </p>
            <div className="inline-flex items-center gap-2 rounded border border-gold/30 bg-white px-5 py-3">
              <CheckIcon />
              <span className="font-heading text-sm font-semibold tracking-[1px] uppercase">
                $X off their move
              </span>
              <span className="text-[13px] text-grey">(amount TBD)</span>
            </div>
            <p className="mt-4 text-[13px] font-light leading-[1.7] text-grey">
              You look great for connecting them with a top-rated mover. They
              save money. Everybody wins.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Already a Partner CTA */}
      <section className="mx-auto max-w-[600px] px-6 pt-20 pb-0 text-center">
        <ScrollReveal>
          <div className="rounded-lg border border-gold/30 bg-white p-8">
            <h3 className="mb-2 font-heading text-lg font-semibold tracking-[1px] uppercase">
              Already a Partner?
            </h3>
            <p className="mb-4 text-sm font-light leading-[1.7] text-grey">
              If you&apos;re already part of our referral network, submit a
              client referral directly.
            </p>
            <Link href="/refer" className="btn-gold">
              Refer a Client
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* Signup Form */}
      <section className="mx-auto max-w-[560px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-8 text-center">
            <div className="section-label">Get Started</div>
            <h2 className="section-heading">
              Become a <span className="text-gold">Partner</span>
            </h2>
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <ReferralForm />
        </ScrollReveal>
      </section>

      {/* Final CTA */}
      <section className="relative bg-black-primary px-6 py-[72px] text-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Have <span className="text-gold">Questions?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Give us a call or shoot us an email. We&apos;d love to chat about
              how we can work together.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={`tel:${SITE.phoneRaw}`}
                className="btn-gold"
                aria-label="Call Panther Moving at (813) 508-7860"
              >
                {SITE.phone}
              </a>
              <a href={`mailto:${SITE.email}`} className="btn-outline">
                {SITE.email}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
