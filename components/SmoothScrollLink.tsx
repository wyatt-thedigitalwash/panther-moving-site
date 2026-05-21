"use client";

import { type ReactNode } from "react";

interface SmoothScrollLinkProps {
  target: string;
  className?: string;
  children: ReactNode;
}

export default function SmoothScrollLink({
  target,
  className,
  children,
}: SmoothScrollLinkProps) {
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        document.querySelector(target)?.scrollIntoView({ behavior: "smooth" });
      }}
    >
      {children}
    </button>
  );
}
