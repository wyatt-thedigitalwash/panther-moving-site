import type { Metadata } from "next";
import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/Icons";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact Us | Get a Free Moving Quote",
  description:
    "Request a free, no-obligation moving quote from Panther Moving. Call (813) 508-7860 or fill out our quick form. We respond within the hour.",
};

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="section-label">Let&apos;s Get Started</div>
        <h1 className="section-heading text-white">
          Request a <span className="text-gold">Free Quote</span>
        </h1>
        <p className="mt-2.5 text-[15px] font-light text-grey-light">
          Fill out the form and we&apos;ll get back to you fast &mdash; usually
          within the hour
        </p>
      </section>

      {/* Contact Content */}
      <section className="mx-auto max-w-[1000px] px-6 pt-12 pb-20">
        <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-2">
          {/* Left - Contact Info */}
          <div>
            <div className="mb-5 rounded-lg border border-[#eee] bg-off-white p-7">
              <h3 className="mb-4 font-heading text-lg font-semibold tracking-[1px] uppercase">
                Get In Touch
              </h3>

              <div className="mb-3.5">
                <div className="mb-0.5 font-heading text-[11px] tracking-[2px] text-gold">
                  PHONE
                </div>
                <a
                  href={`tel:${SITE.phoneRaw}`}
                  className="flex items-center gap-2 text-[15px] font-medium text-black-primary no-underline"
                >
                  <PhoneIcon color="#C9AC2A" />
                  {SITE.phone}
                </a>
              </div>

              <div className="mb-3.5">
                <div className="mb-0.5 font-heading text-[11px] tracking-[2px] text-gold">
                  EMAIL
                </div>
                <a
                  href={`mailto:${SITE.email}`}
                  className="text-[15px] font-medium text-black-primary no-underline"
                >
                  {SITE.email}
                </a>
              </div>

              <div className="mb-3.5">
                <div className="mb-0.5 font-heading text-[11px] tracking-[2px] text-gold">
                  ADDRESS
                </div>
                <span className="text-[15px] text-black-primary">
                  {SITE.address}
                </span>
              </div>

              <div>
                <div className="mb-0.5 font-heading text-[11px] tracking-[2px] text-gold">
                  INSTAGRAM
                </div>
                <a
                  href={SITE.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] font-medium text-black-primary no-underline"
                >
                  {SITE.instagramHandle}
                </a>
              </div>
            </div>

            <div className="rounded-lg bg-black-primary p-6 text-center">
              <div className="font-heading text-2xl font-bold tracking-wider text-gold uppercase">
                {SITE.name}
              </div>
              <p className="mt-2 text-sm text-grey">
                Tampa&apos;s trusted local movers
              </p>
            </div>
          </div>

          {/* Right - Form */}
          <ContactForm />
        </div>
      </section>
    </>
  );
}
