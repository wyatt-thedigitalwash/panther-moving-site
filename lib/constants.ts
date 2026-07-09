export const SITE = {
  name: "Panther Moving",
  tagline: "Stress-Free Moves. Guaranteed.",
  phone: "(813) 867-4661",
  phoneRaw: "8138674661",
  email: "scottr@panthermoving.com",
  address: "2107 W Platt St, Tampa, FL",
  city: "Tampa",
  state: "FL",
  url: "https://panthermoving.com",
  // Jobber public request form — where all quote requests are collected
  quoteUrl:
    "https://clienthub.getjobber.com/hubs/35badd86-608d-4659-8994-a03e41a6cc72/public/requests/4956282/new",
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
  { href: "/locations", label: "Service Areas" },
  { href: "/referral-program", label: "Referral Program" },
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
