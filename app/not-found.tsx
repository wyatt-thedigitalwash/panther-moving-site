import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center bg-black-primary px-6">
      <div className="text-center">
        <div className="section-label">404</div>
        <h1 className="section-heading mb-4 text-white">
          Page Not <span className="text-gold">Found</span>
        </h1>
        <p className="mb-8 text-[15px] font-light leading-[1.8] text-grey-light">
          Sorry, the page you&apos;re looking for doesn&apos;t exist or has been
          moved.
        </p>
        <Link href="/" className="btn-gold">
          Go Home
        </Link>
      </div>
    </section>
  );
}
