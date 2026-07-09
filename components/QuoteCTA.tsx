import { SITE } from "@/lib/constants";
import { PhoneIcon } from "@/components/Icons";

interface QuoteCTAProps {
  heading?: string;
  description?: string;
}

export default function QuoteCTA({
  heading = "Get Your Free Quote",
  description = "Tell us about your move and we’ll get back to you with a fast, no-obligation estimate. It only takes a couple of minutes.",
}: QuoteCTAProps) {
  return (
    <div className="rounded-lg border border-[#eee] bg-off-white p-8 text-center sm:p-10">
      <h3 className="mb-3 font-heading text-xl font-semibold uppercase tracking-[1px]">
        {heading}
      </h3>
      <p className="mx-auto mb-7 max-w-[440px] text-[15px] leading-[1.7] text-grey">
        {description}
      </p>
      <a
        href={SITE.quoteUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-gold inline-block px-8 py-4"
        aria-label="Request a free moving quote (opens in new tab)"
      >
        Request a Free Quote &rarr;
      </a>
      <p className="mt-6 flex flex-wrap items-center justify-center gap-1.5 text-[13px] text-grey">
        Prefer to talk? Call us at
        <a
          href={`tel:${SITE.phoneRaw}`}
          className="inline-flex items-center gap-1.5 font-semibold text-black-primary no-underline"
          aria-label={`Call Panther Moving at ${SITE.phone}`}
        >
          <PhoneIcon color="#C9AC2A" />
          {SITE.phone}
        </a>
      </p>
    </div>
  );
}
