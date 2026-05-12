export interface Post {
  slug: string;
  title: string;
  description: string;
  type: "guide" | "post";
  date: string;
}

export const POSTS: Post[] = [
  {
    slug: "tampa-movers",
    title: "Tampa Movers: Licensed & Insured Local Moving Company",
    description:
      "Everything you need to know about hiring movers in Tampa. Learn what sets Panther Moving apart, explore our services, and get a free quote.",
    type: "guide",
    date: "2026-03-31",
  },
  {
    slug: "tampa-moving-guide",
    title: "The Complete Guide to Moving in Tampa",
    description:
      "Neighborhoods, moving costs, timing tips, a moving day checklist, and a utility setup guide — everything you need for your Tampa move.",
    type: "guide",
    date: "2026-03-31",
  },
];

export function getPostsByType(type: "guide" | "post"): Post[] {
  return POSTS.filter((p) => p.type === type).sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
