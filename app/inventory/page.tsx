import type { Metadata } from "next";
import { Suspense } from "react";
import ProgressIndicator from "@/components/ProgressIndicator";
import InventoryForm from "@/components/InventoryForm";

export const metadata: Metadata = {
  title: "Moving Inventory Form | Complete Your Quote",
  description:
    "Complete your moving inventory to receive an accurate quote from Panther Moving. List your items room by room for the most precise estimate.",
};

export default function InventoryPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="section-label">Step 2 of 2</div>
        <h1 className="section-heading text-white">
          Moving <span className="text-gold">Inventory</span>
        </h1>
        <p className="mt-2.5 text-[15px] font-light text-grey-light">
          Help us understand your move so we can give you the most accurate
          quote
        </p>
      </section>

      {/* Progress Indicator */}
      <ProgressIndicator currentStep={2} />

      {/* Inventory Form */}
      <section className="mx-auto max-w-[800px] px-6 pt-4 pb-20">
        <Suspense fallback={null}>
          <InventoryForm />
        </Suspense>
      </section>
    </>
  );
}
