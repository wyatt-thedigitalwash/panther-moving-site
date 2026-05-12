export interface Testimonial {
  id: string;
  name: string;
  text: string;
  rating: 5;
  location?: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "barbara-volpi",
    name: "Barbara Volpi",
    text: "We had an amazing experience with Scott Rogers and Panther Moving. Scott, Marcus and Robbie did a very professional job moving us to our new home in South Tampa. Scott and his team made the entire process as stress free as possible. They went above and beyond. They thoroughly wrapped and protected our furniture — expertly packing the truck so that none of the furniture would move during transport. We would absolutely use them again and highly recommend!",
    rating: 5,
    location: "South Tampa",
  },
  {
    id: "anfernee-johnson",
    name: "Anfernee Johnson",
    text: "Scotty was on time, professional, and handled my belongings with care. Panther moving worked efficiently and made the whole process stress-free. Pricing was fair with no surprises. I would definitely recommend this company to anyone needing a reliable moving service.",
    rating: 5,
    location: "Tampa",
  },
  {
    id: "irene-rodriguez",
    name: "Irene Rodríguez",
    text: "Scott and Rob did an amazing job with my move in West Tampa. I'm single, and they made me feel safe and comfortable with their professionalism and care for my belongings. Everything was quick, seamless, and most importantly, nothing was broken or damaged during the move. The best part of my move was having them. Thank you both! I highly recommend them!",
    rating: 5,
    location: "West Tampa",
  },
  {
    id: "michael-rivera",
    name: "Michael Rivera",
    text: "I had a great experience with Panther Moving Company. The team was punctual, professional, and handled everything with care. They made the entire process smooth and stress-free. What stood out most was their efficiency and attention to detail — everything arrived in perfect condition. The crew was also very respectful and easy to work with. I highly recommend Panther Moving Company and will definitely use them again!",
    rating: 5,
    location: "Tampa",
  },
  {
    id: "jessica-f",
    name: "Jessica F.",
    text: "Cannot say enough good things about Scotty, Rob, and Panther Moving! Absolutely wonderful! Professional, quick, moved a sofa up three flights of stairs and into an impossible space, and kept everything clean! Cannot recommend them enough!",
    rating: 5,
    location: "Tampa",
  },
  {
    id: "christina-bevilacqua",
    name: "Christina Bevilacqua",
    text: "Panther Moving are excellent. Marcus and Scott were reliable, friendly, fair and efficient. They helped us move from one third floor apartment to another third floor apartment and did a fantastic job. I would highly recommend their services. Thank you!",
    rating: 5,
    location: "Tampa",
  },
];

export function getTestimonialsForLocation(
  locationName: string,
  count: number = 3
): Testimonial[] {
  const locationLower = locationName.toLowerCase();

  // Find testimonials matching or containing the location name
  const matching = TESTIMONIALS.filter((t) =>
    t.location?.toLowerCase().includes(locationLower) ||
    locationLower.includes(t.location?.toLowerCase() ?? "")
  );

  // Fill remaining slots with non-matching testimonials
  if (matching.length >= count) {
    return matching.slice(0, count);
  }

  const remaining = TESTIMONIALS.filter(
    (t) => !matching.includes(t)
  );
  return [...matching, ...remaining].slice(0, count);
}
