import type { Testimonial } from "@/lib/testimonials";
import TestimonialCard from "@/components/TestimonialCard";
import ScrollReveal from "@/components/ScrollReveal";

interface TestimonialGridProps {
  testimonials: Testimonial[];
}

export default function TestimonialGrid({ testimonials }: TestimonialGridProps) {
  const colClass =
    testimonials.length === 2
      ? "grid grid-cols-1 gap-5 md:grid-cols-2 max-w-[700px] mx-auto"
      : "grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3";

  return (
    <div className={colClass}>
      {testimonials.map((testimonial, i) => (
        <ScrollReveal key={testimonial.id} delay={i * 100} className="h-full">
          <TestimonialCard testimonial={testimonial} />
        </ScrollReveal>
      ))}
    </div>
  );
}
