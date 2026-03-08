export const SITE = {
  name: "Panther Moving",
  tagline: "Stress-Free Moves. Guaranteed.",
  phone: "(813) 508-7860",
  phoneRaw: "8135087860",
  email: "scottr@panthermoving.com",
  address: "2107 W Platt St, Tampa, FL",
  city: "Tampa",
  state: "FL",
  url: "https://panthermoving.com",
  instagram: "https://www.instagram.com/panthermoving",
  instagramHandle: "@panthermoving",
  serviceAreas: [
    "Tampa",
    "St. Petersburg",
    "Clearwater",
    "Brandon",
    "Riverview",
    "Wesley Chapel",
    "Plant City",
    "Lakeland",
  ],
} as const;

export const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
] as const;

export const HOME_SIZE_OPTIONS = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4+ Bedrooms",
  "Office",
  "Storage Unit",
] as const;

export const BEDROOM_OPTIONS = [
  "Studio",
  "1 Bedroom",
  "2 Bedrooms",
  "3 Bedrooms",
  "4 Bedrooms",
  "5+ Bedrooms",
] as const;

export const TRUCK_DISTANCE_OPTIONS = [
  "Under 50ft",
  "50-100ft",
  "100-200ft",
  "200ft+",
] as const;
