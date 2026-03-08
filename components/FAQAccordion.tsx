"use client";

import { useState } from "react";

const FAQS = [
  {
    q: "What areas do you serve?",
    a: "We're based in Tampa and proudly serve the entire Tampa Bay area, including St. Pete, Clearwater, Brandon, Riverview, Wesley Chapel, Plant City, Lakeland, and beyond.",
  },
  {
    q: "How do I get a quote for my move?",
    a: "Simply fill out our online form or give us a call at (813) 508-7860. We'll provide a fast, free estimate based on your moving details. No obligations, no pressure.",
  },
  {
    q: "Do you offer packing and unpacking services?",
    a: "Yes! We offer full and partial packing services. You can choose to pack everything yourself or let us take care of it all for you. We use professional-grade materials to keep everything safe.",
  },
  {
    q: "Can you move large or specialty items like pianos or safes?",
    a: "Absolutely. Just let us know in advance so we can bring the right equipment and team to handle it safely. We have experience with pianos, gun safes, pool tables, and other heavy items.",
  },
  {
    q: "How far in advance should I book my move?",
    a: "We recommend booking at least 1-2 weeks in advance to secure your preferred date, especially during weekends or peak seasons. But we'll always do our best to work with your schedule, even on short notice.",
  },
  {
    q: "Are you licensed and insured?",
    a: "Yes, Panther Moving is fully licensed and insured. Your belongings are protected throughout the entire moving process.",
  },
  {
    q: "Do you charge extra for stairs or long carries?",
    a: "We provide transparent pricing upfront. If your move involves stairs, long hallways, or other factors, we'll include that in your quote so there are no surprises on moving day.",
  },
  {
    q: "What forms of payment do you accept?",
    a: "We accept cash, credit cards, debit cards, and Zelle. Payment is due upon completion of your move.",
  },
];

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      className={`shrink-0 text-gold transition-transform duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)] ${
        open ? "rotate-180" : ""
      }`}
    >
      <path
        d="M6 9l6 6 6-6"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQS.map((faq, i) => {
        const isOpen = open === i;

        return (
          <div key={i} className="border-b border-[#eee]">
            <button
              onClick={() => setOpen(isOpen ? null : i)}
              className="flex w-full items-center justify-between bg-transparent border-none cursor-pointer py-5 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-heading text-base font-semibold tracking-[0.3px]">
                {faq.q}
              </span>
              <ChevronIcon open={isOpen} />
            </button>

            {/* Animated content wrapper using CSS grid row trick */}
            <div
              className="grid transition-[grid-template-rows] duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
              style={{
                gridTemplateRows: isOpen ? "1fr" : "0fr",
              }}
            >
              <div className="overflow-hidden">
                <div
                  className="pb-5 text-sm leading-[1.8] font-light text-grey transition-opacity duration-[400ms] ease-[cubic-bezier(0.4,0,0.2,1)]"
                  style={{
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  {faq.a}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
