export interface Location {
  slug: string;
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
}

export const LOCATIONS: Location[] = [
  {
    slug: "tampa",
    name: "Tampa",
    description:
      "From South Tampa to Seminole Heights, Panther Moving is Tampa's go-to local moving company. Whether you're relocating near Bayshore Boulevard, settling into a new place in Westshore, or moving out of a downtown high-rise, our crew knows every neighborhood and handles every move with care.",
    metaTitle: "Tampa Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Looking for reliable movers in Tampa? Panther Moving offers affordable, stress-free residential and commercial moves across Tampa. Licensed & insured. Get a free quote.",
    image: "/assets/panther-moving-team-with-customer.webp",
  },
  {
    slug: "st-petersburg",
    name: "St. Petersburg",
    description:
      "Moving in or out of St. Petersburg? From the vibrant neighborhoods around Central Avenue and the historic Old Northeast to waterfront condos near the Pier, Panther Moving delivers fast, careful service throughout St. Pete. We know the area and we'll get you settled quickly.",
    metaTitle: "St. Petersburg Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Professional movers in St. Petersburg, FL. Panther Moving handles residential and commercial moves across St. Pete with care. Licensed & insured. Free quotes available.",
    image: "/assets/mover-loading-truck.webp",
  },
  {
    slug: "clearwater",
    name: "Clearwater",
    description:
      "Whether you're moving near Clearwater Beach, relocating in the Countryside area, or settling into a home off Gulf-to-Bay, Panther Moving has you covered. Our team provides full-service moving throughout Clearwater with the same reliability and care we're known for across Tampa Bay.",
    metaTitle: "Clearwater Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Trusted movers in Clearwater, FL. Panther Moving provides affordable residential and commercial moving services across Clearwater. Licensed & insured. Get your free quote.",
    image: "/assets/packed-moving-truck.webp",
  },
  {
    slug: "brandon",
    name: "Brandon",
    description:
      "Panther Moving proudly serves Brandon and the surrounding communities near Valrico and Riverview. Whether you're moving to a new home off Bloomingdale Avenue or relocating near Westfield Brandon, our professional crew handles every detail so you don't have to.",
    metaTitle: "Brandon Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Need movers in Brandon, FL? Panther Moving offers professional, affordable moving services throughout Brandon. Licensed & insured. Request a free quote today.",
    image: "/assets/organized-truck-load.webp",
  },
  {
    slug: "riverview",
    name: "Riverview",
    description:
      "From the growing neighborhoods of FishHawk Ranch and Boyette to communities along US-301, Panther Moving is Riverview's trusted local mover. We handle residential moves of all sizes with the professionalism and attention to detail that Riverview families rely on.",
    metaTitle: "Riverview Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Reliable movers in Riverview, FL. Panther Moving offers stress-free residential and commercial moves across Riverview. Licensed & insured. Free estimates available.",
    image: "/assets/mover-carrying-furniture.webp",
  },
  {
    slug: "wesley-chapel",
    name: "Wesley Chapel",
    description:
      "Wesley Chapel is one of Tampa Bay's fastest-growing communities, and Panther Moving is right there with it. From new construction homes near The Shops at Wiregrass to established neighborhoods throughout Pasco County, we deliver dependable, full-service moves every time.",
    metaTitle: "Wesley Chapel Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Professional movers in Wesley Chapel, FL. Panther Moving provides careful, affordable moving services for homes and businesses. Licensed & insured. Get a free quote.",
    image: "/assets/secured-boxes-in-truck.webp",
  },
  {
    slug: "plant-city",
    name: "Plant City",
    description:
      "Moving in Plant City? Panther Moving serves the entire Plant City area, from historic downtown to the newer developments along the I-4 corridor. Whether you're moving across town or relocating from the Tampa area, our experienced team makes every move smooth and hassle-free.",
    metaTitle: "Plant City Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Affordable movers in Plant City, FL. Panther Moving handles local and nearby moves with care and professionalism. Licensed & insured. Request your free quote.",
    image: "/assets/panther-moving-crew-at-truck.webp",
  },
  {
    slug: "lakeland",
    name: "Lakeland",
    description:
      "Panther Moving extends its trusted service to Lakeland and the surrounding Polk County area. Whether you're settling into a lakefront home, moving near downtown Lakeland, or relocating from the Tampa Bay region, our crew brings the same professional, on-time service to every job.",
    metaTitle: "Lakeland Movers | Panther Moving — Licensed & Insured",
    metaDescription:
      "Trusted movers in Lakeland, FL. Panther Moving offers full-service residential and commercial moves in Lakeland. Licensed & insured. Get your free estimate today.",
    image: "/assets/mover-carrying-bikes.webp",
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return LOCATIONS.find((loc) => loc.slug === slug);
}

export function getSlugForCity(city: string): string {
  const location = LOCATIONS.find((loc) => loc.name === city);
  return location ? location.slug : city.toLowerCase().replace(/\s+/g, "-");
}
