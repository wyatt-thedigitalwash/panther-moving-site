"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { NAV_LINKS } from "@/lib/constants";

function isActive(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function FooterNav() {
  const pathname = usePathname();

  return (
    <>
      {NAV_LINKS.map(({ href, label }) => (
        <Link
          key={href}
          href={href}
          className={`mb-1.5 block text-[13px] transition-colors duration-200 ${
            isActive(pathname, href)
              ? "text-gold"
              : "text-grey hover:text-gold"
          }`}
        >
          {label}
        </Link>
      ))}
    </>
  );
}
