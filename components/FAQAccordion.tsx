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

export default function FAQAccordion() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <div>
      {FAQS.map((faq, i) => (
        <div key={i} className="border-b border-[#eee]">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="flex w-full items-center justify-between bg-transparent border-none cursor-pointer py-5 text-left"
          >
            <span className="font-heading text-base font-semibold tracking-[0.3px]">
              {faq.q}
            </span>
            <span
              className={`ml-3 shrink-0 font-heading text-xl text-gold transition-transform duration-200 ${
                open === i ? "rotate-45" : ""
              }`}
            >
              +
            </span>
          </button>
          {open === i && (
            <div className="pb-5 text-sm leading-[1.8] font-light text-grey">
              {faq.a}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
