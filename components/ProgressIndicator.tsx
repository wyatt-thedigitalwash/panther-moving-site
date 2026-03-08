interface ProgressIndicatorProps {
  currentStep: 1 | 2;
}

export default function ProgressIndicator({
  currentStep,
}: ProgressIndicatorProps) {
  return (
    <div className="flex items-center justify-center gap-3 py-6">
      {/* Step 1 */}
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full font-heading text-sm font-bold ${
            currentStep >= 1
              ? "bg-gold text-black-primary"
              : "bg-[#ddd] text-grey"
          }`}
        >
          1
        </div>
        <span
          className={`font-heading text-xs tracking-[1.5px] uppercase ${
            currentStep >= 1 ? "font-semibold text-gold" : "text-grey"
          }`}
        >
          Quick Quote
        </span>
      </div>

      {/* Connector */}
      <div
        className={`h-[2px] w-12 ${
          currentStep >= 2 ? "bg-gold" : "bg-[#ddd]"
        }`}
      />

      {/* Step 2 */}
      <div className="flex items-center gap-2">
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-full font-heading text-sm font-bold ${
            currentStep >= 2
              ? "bg-gold text-black-primary"
              : "bg-[#ddd] text-grey"
          }`}
        >
          2
        </div>
        <span
          className={`font-heading text-xs tracking-[1.5px] uppercase ${
            currentStep >= 2 ? "font-semibold text-gold" : "text-grey"
          }`}
        >
          Inventory
        </span>
      </div>
    </div>
  );
}
