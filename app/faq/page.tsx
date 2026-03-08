import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Panther Moving services, pricing, service areas, and booking. Get answers about Tampa Bay's trusted local movers.",
};

const FAQ_SCHEMA_ITEMS = [
  {
    q: "What areas do you serve?",
    a: "We're based in Tampa and proudly serve the entire Tampa Bay area, including St. Pete, Clearwater, Brandon, Riverview, Wesley Chapel, Plant City, Lakeland, and beyond.",
  },
  {
    q: "How do I get a quote for my move?",
    a: "Simply fill out our online form or give us a call at (813) 508-7860. We'll provide a fast, free estimate based on your moving details. No obligations, no pressure.",
  },
  {
    q: "Do you offer packing and unpacking services?",
    a: "Yes! We offer full and partial packing services. You can choose to pack everything yourself or let us take care of it all for you. We use professional-grade materials to keep everything safe.",
  },
  {
    q: "Can you move large or specialty items like pianos or safes?",
    a: "Absolutely. Just let us know in advance so we can bring the right equipment and team to handle it safely. We have experience with pianos, gun safes, pool tables, and other heavy items.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "We recommend booking at least 1-2 weeks in advance to secure your preferred date, especially during weekends or peak seasons. But we'll always do our best to work with your schedule, even on short notice.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Panther Moving is fully licensed and insured. Your belongings are protected throughout the entire moving process.",
  },
  {
    q: "Do you charge extra for stairs or long carries?",
    a: "We provide transparent pricing upfront. If your move involves stairs, long hallways, or other factors, we'll include that in your quote so there are no surprises on moving day.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept cash, credit cards, debit cards, and Zelle. Payment is due upon completion of your move.",
  },
];

function FAQPageSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_SCHEMA_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export default function FAQPage() {
  return (
    <>
      <FAQPageSchema />

      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="section-label">Got Questions?</div>
        <h1 className="section-heading text-white">
          Frequently <span className="text-gold">Asked</span>
        </h1>
      </section>

      {/* FAQ List */}
      <section className="mx-auto max-w-[700px] px-6 pt-12 pb-20">
        <FAQAccordion />

        <div className="mt-10 text-center">
          <p className="mb-4 text-[15px] text-grey">
            Still have questions? We&apos;re happy to help.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/contact" className="btn-gold">
              Contact Us
            </Link>
            <a href={`tel:${SITE.phoneRaw}`} className="no-underline">
              <span className="btn-black">{SITE.phone}</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
