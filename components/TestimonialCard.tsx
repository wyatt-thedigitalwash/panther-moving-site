import type { Testimonial } from "@/lib/testimonials";
import { StarIcon } from "@/components/Icons";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="flex h-full flex-col rounded-lg border border-slate bg-black-secondary p-6">
      <div className="mb-3 flex gap-0.5">
        {Array(testimonial.rating)
          .fill(0)
          .map((_, j) => (
            <StarIcon key={j} />
          ))}
      </div>
      <p className="mb-3.5 flex-1 text-sm font-light italic leading-[1.75] text-grey-light">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div>
        <div className="font-heading text-[13px] tracking-[1px] text-white">
          &mdash; {testimonial.name}
        </div>
        {testimonial.location && (
          <div className="mt-1 text-[11px] font-light tracking-[0.5px] text-grey-light">
            {testimonial.location}
          </div>
        )}
      </div>
    </div>
  );
}
