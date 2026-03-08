"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-3.5 transition-all duration-300 ${
          scrolled
            ? "bg-black-primary/97 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.3)]"
            : "bg-gradient-to-b from-black/60 to-transparent"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <Image
            src="/assets/panther-moving-site-logo.svg"
            alt="Panther Moving"
            width={160}
            height={40}
            className="h-10 w-auto"
            priority
          />
        </Link>

        <ul className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className={`font-heading text-[13px] font-medium tracking-[1.5px] uppercase transition-colors duration-200 ${
                  pathname === href ? "text-gold" : "text-white hover:text-gold"
                }`}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/contact" className="btn-gold">
              Free Quote
            </Link>
          </li>
        </ul>

        <button
          className="block text-2xl text-white bg-transparent border-none cursor-pointer md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? "\u2715" : "\u2630"}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 flex flex-col gap-3 bg-black-primary/98 px-8 pt-20 transition-transform duration-300 md:hidden ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV_LINKS.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="border-b border-slate py-3 font-heading text-lg tracking-[2px] uppercase text-white"
            onClick={() => setMobileOpen(false)}
          >
            {label}
          </Link>
        ))}
        <Link
          href="/contact"
          className="mt-2 font-heading text-lg tracking-[2px] uppercase text-gold"
          onClick={() => setMobileOpen(false)}
        >
          Get Free Quote &rarr;
        </Link>
      </div>
    </>
  );
}
