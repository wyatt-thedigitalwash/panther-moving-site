import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SITE } from "@/lib/constants";
import { LOCATIONS, getLocationBySlug } from "@/lib/locations";
import {
  ShieldIcon,
  ClockIcon,
  HandIcon,
  PhoneIcon,
  CheckIcon,
} from "@/components/Icons";
import { getTestimonialsForLocation } from "@/lib/testimonials";
import TestimonialGrid from "@/components/TestimonialGrid";
import ScrollReveal from "@/components/ScrollReveal";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) return {};

  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: `/locations/${slug}` },
  };
}

const GALLERY_IMAGES = [
  {
    src: "/assets/mover-loading-truck.webp",
    alt: "Panther Moving crew member loading wrapped furniture onto the truck",
  },
  {
    src: "/assets/packed-moving-truck.webp",
    alt: "Neatly packed moving truck with labeled boxes and wrapped furniture",
  },
  {
    src: "/assets/panther-moving-crew-at-truck.webp",
    alt: "Panther Moving crew standing in front of the moving truck ready for a job",
  },
];

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = getLocationBySlug(slug);
  if (!location) notFound();

  return (
    <>
      <BreadcrumbSchema
        items={[
          { name: "Service Areas", href: "/locations" },
          { name: location.name, href: `/locations/${location.slug}` },
        ]}
      />

      {/* HERO */}
      <section className="relative flex min-h-[55vh] items-center overflow-hidden bg-black-primary">
        <Image
          src={location.image}
          alt={`Panther Moving serving ${location.name}`}
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0.75), rgba(0,0,0,0.4))",
          }}
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />

        <div className="relative w-full max-w-[1000px] mx-auto px-8 pt-36 pb-20">
          <div className="max-w-[650px] hero-content">
            <div className="section-label">{SITE.name}</div>
            <h1 className="section-heading mb-5 text-[clamp(36px,6vw,56px)] text-white">
              Movers in <span className="text-gold">{location.name}</span>
            </h1>
            <p className="mb-8 max-w-[550px] text-base font-light leading-[1.85] text-white/80">
              {location.description}
            </p>
            <div className="mb-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 508-7860">
                <span className="btn-outline">
                  <PhoneIcon /> {SITE.phone}
                </span>
              </a>
            </div>
            <div className="flex flex-wrap gap-5">
              {["Licensed & Insured", "Local Tampa Team", "No Hidden Fees"].map(
                (text) => (
                  <div key={text} className="flex items-center gap-1.5">
                    <CheckIcon />
                    <span className="text-[13px] font-semibold text-white/80">
                      {text}
                    </span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE PANTHER */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-12 text-center">
            <div className="section-label">Why Choose Us</div>
            <h2 className="section-heading">
              Why Choose Panther Moving in{" "}
              <span className="text-gold">{location.name}</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {[
            {
              icon: <ShieldIcon />,
              t: "Licensed & Insured",
              d: `Your belongings are fully protected on every ${location.name} move. We carry comprehensive insurance so you can relax knowing everything is covered.`,
            },
            {
              icon: <ClockIcon />,
              t: "On Time, Every Time",
              d: `We know ${location.name} and we show up when we say we will. No waiting around, no delays — your time matters and we respect it.`,
            },
            {
              icon: <HandIcon />,
              t: "Careful With Your Stuff",
              d: `From ${location.name} apartments to full homes, we treat your belongings like our own. Professional packing, padding, and handling from start to finish.`,
            },
          ].map((feature, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="rounded-lg border border-[#eee] bg-white p-8 transition-all hover:shadow-lg h-full">
                <div className="mb-3.5">{feature.icon}</div>
                <h3 className="mb-2 font-heading text-lg font-semibold tracking-[0.5px] uppercase">
                  {feature.t}
                </h3>
                <p className="text-sm font-light leading-[1.75] text-grey">
                  {feature.d}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-off-white px-6 py-20">
        <ScrollReveal>
          <div className="mx-auto max-w-[800px] text-center">
            <div className="section-label">Our Services</div>
            <h2 className="section-heading mb-4">
              Moving Services in{" "}
              <span className="text-gold">{location.name}</span>
            </h2>
            <p className="mb-8 text-[15px] font-light leading-[1.8] text-grey">
              Panther Moving offers a full range of moving services in{" "}
              {location.name} — from residential and apartment moves to commercial
              relocations, packing, loading, and furniture assembly.
            </p>
            <Link href="/services" className="btn-black">
              View All Services
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* GALLERY */}
      <section className="mx-auto max-w-[1000px] px-6 py-20">
        <ScrollReveal>
          <div className="mb-10 text-center">
            <div className="section-label">Our Work</div>
            <h2 className="section-heading">
              Professional Moves in{" "}
              <span className="text-gold">{location.name}</span>
            </h2>
          </div>
        </ScrollReveal>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {GALLERY_IMAGES.map((img, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="relative h-56 overflow-hidden rounded-lg">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover object-top transition-transform duration-300 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative bg-black-primary px-6 py-[72px]">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <div className="mx-auto max-w-[1000px]">
          <ScrollReveal>
            <div className="mb-10 text-center">
              <div className="section-label">Testimonials</div>
              <h2 className="section-heading text-white">
                What Our Customers <span className="text-gold">Say</span>
              </h2>
            </div>
          </ScrollReveal>
          <TestimonialGrid
            testimonials={getTestimonialsForLocation(location.name, 3)}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="relative px-6 py-[72px] text-center bg-black-primary">
        <div className="absolute top-0 left-0 right-0 h-1 bg-gold" />
        <ScrollReveal>
          <div className="mx-auto max-w-[600px]">
            <h2 className="section-heading mb-3.5 text-white">
              Ready to Move in{" "}
              <span className="text-gold">{location.name}?</span>
            </h2>
            <p className="mb-7 text-base font-light leading-[1.8] text-grey-light">
              Get a free, no-obligation quote in minutes. Our {location.name}{" "}
              moving team is ready to help.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-gold">
                Get Your Free Quote
              </Link>
              <a href={`tel:${SITE.phoneRaw}`} className="no-underline" aria-label="Call Panther Moving at (813) 508-7860">
                <span className="btn-outline">{SITE.phone}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>
      </section>
    </>
  );
}
