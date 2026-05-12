"use client";

import Link from "next/link";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-black-primary px-6">
      <div className="text-center">
        <div className="section-label">Error</div>
        <h1 className="section-heading mb-4 text-white">
          Something Went <span className="text-gold">Wrong</span>
        </h1>
        <p className="mb-8 text-[15px] font-light leading-[1.8] text-grey-light">
          An unexpected error occurred. Please try again or head back to the
          home page.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <button onClick={reset} className="btn-gold">
            Try Again
          </button>
          <Link href="/" className="btn-outline">
            Go Home
          </Link>
        </div>
      </div>
    </section>
  );
}
