import type { Metadata } from "next";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/Icons";
import ReferClientForm from "@/components/ReferClientForm";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Refer a Client | Panther Moving Referral Program",
  description:
    "Submit a client referral to Panther Moving. We'll handle the move, you earn the referral bonus.",
  alternates: { canonical: "/refer" },
};

export default function ReferPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="hero-content mx-auto max-w-[600px]">
          <div className="section-label">Referral Program</div>
          <h1 className="section-heading text-white">
            Refer a <span className="text-gold">Client</span>
          </h1>
          <p className="mt-2.5 text-[15px] font-light text-grey-light">
            Already a referral partner? Submit your client&apos;s info below and
            we&apos;ll take it from here.
          </p>
          <p className="mt-4 text-[13px] text-grey-light">
            Not a partner yet?{" "}
            <Link
              href="/referral-program"
              className="font-semibold text-gold no-underline hover:underline"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </section>

      {/* Form */}
      <section className="mx-auto max-w-[560px] px-6 py-20">
        <ScrollReveal>
          <ReferClientForm />
        </ScrollReveal>
      </section>

      {/* CTA */}
      <section className="relative bg-black-primary px-6 py-[72px] text-center">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Have <span className="text-gold">Questions?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Give us a call &mdash; we&apos;re happy to help.
            </p>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="btn-gold inline-flex items-center gap-2"
              aria-label="Call Panther Moving at (813) 508-7860"
            >
              <PhoneIcon color="#111111" /> {SITE.phone}
            </a>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
