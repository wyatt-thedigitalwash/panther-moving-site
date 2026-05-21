import Image from "next/image";
import Link from "next/link";
import { SITE } from "@/lib/constants";
import FooterNav from "@/components/FooterNav";

export default function Footer() {
  return (
    <footer className="bg-black-primary px-6 pt-14 pb-6">
      <div className="mx-auto max-w-[1000px]">
        <div className="mb-9 grid grid-cols-1 gap-6 md:grid-cols-3 items-start">
          {/* Brand */}
          <div>
            <Image
              src="/assets/panther-moving-branding-02.svg"
              alt="Panther Moving"
              width={180}
              height={60}
              className="mb-3.5 h-auto w-[180px]"
            />
            <p className="text-[13px] leading-[1.7] text-grey">
              Tampa&apos;s trusted local movers. Fast, affordable, professional
              &mdash; every time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <div className="mb-2.5 font-heading text-[11px] tracking-[3px] text-gold">
              NAVIGATION
            </div>
            <FooterNav />
            <Link
              href="/referral-program"
              className="mb-1.5 block text-[13px] text-grey transition-colors duration-200 hover:text-gold"
            >
              Referral Program
            </Link>
          </div>

          {/* Contact */}
          <div>
            <div className="mb-2.5 font-heading text-[11px] tracking-[3px] text-gold">
              CONTACT
            </div>
            <a
              href={`tel:${SITE.phoneRaw}`}
              className="mb-1.5 block text-sm font-semibold text-white no-underline"
              aria-label="Call Panther Moving at (813) 508-7860"
            >
              {SITE.phone}
            </a>
            <a
              href={`mailto:${SITE.email}`}
              className="mb-1.5 block text-[13px] text-grey no-underline"
            >
              {SITE.email}
            </a>
            <div className="text-[13px] text-grey">{SITE.address}</div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-between gap-2 border-t border-slate pt-4">
          <span className="text-[11px] text-grey">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </span>
          <div className="flex items-center gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-grey no-underline hover:text-white transition-colors"
              aria-label="Follow Panther Moving on Instagram (opens in new tab)"
            >
              {SITE.instagramHandle}
            </a>
            <a
              href="https://thedigitalwash.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[11px] text-grey no-underline hover:text-white transition-colors"
              aria-label="Website by The Digital Wash (opens in new tab)"
            >
              Website by The Digital Wash
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
