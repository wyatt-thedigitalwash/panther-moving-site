import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import FAQAccordion from "@/components/FAQAccordion";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Common questions about Panther Moving services, pricing, service areas, and booking. Get answers about Tampa Bay's trusted local movers.",
};

export default function FAQPage() {
  return (
    <>
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
