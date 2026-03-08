import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  HomeIcon,
  ApartmentIcon,
  BuildingIcon,
  BoxIcon,
  TruckIcon,
  SofaIcon,
} from "@/components/Icons";

export const metadata: Metadata = {
  title: "Our Moving Services",
  description:
    "Residential moves, apartment moves, commercial relocations, packing, loading, and furniture assembly. Professional moving services across Tampa Bay.",
};

const SERVICES = [
  {
    icon: <HomeIcon />,
    t: "Local Residential Moves",
    d: "Whether you're moving from a studio apartment or a 5-bedroom home, we handle everything. Our crew carefully packs, loads, transports, and unloads your belongings — with padding and protection for every item. We know Tampa's neighborhoods inside and out, so we plan the fastest routes and avoid the headaches.",
  },
  {
    icon: <ApartmentIcon />,
    t: "Apartment Moves",
    d: "Narrow hallways, tight elevators, multiple flights of stairs — we've seen it all. Our apartment move specialists come prepared with the right equipment and techniques to get your stuff out safely and efficiently, no matter the layout.",
  },
  {
    icon: <BuildingIcon />,
    t: "Commercial & Office Moves",
    d: "Moving your business means minimizing downtime. We work around your schedule — evenings, weekends, whenever works best — to get your office relocated with minimal disruption. Cubicles, conference tables, IT equipment, filing cabinets — we handle it all.",
  },
  {
    icon: <BoxIcon />,
    t: "Packing & Unpacking",
    d: "Don't want to deal with packing? We've got you. Our team uses professional packing materials and techniques to ensure everything from your fine china to your flat screen arrives safely. We'll unpack at your new place too — just tell us where you want things.",
  },
  {
    icon: <TruckIcon />,
    t: "Loading & Unloading",
    d: "Already rented a truck? No problem. Hire our crew just for the muscle. We'll load everything properly, secure it for transport, and unload at your destination. Heavy furniture, awkward items, fragile boxes — we handle it all.",
  },
  {
    icon: <SofaIcon />,
    t: "Furniture Assembly & Disassembly",
    d: "Big furniture doesn't fit through doorways? We disassemble it, move it safely, and put it all back together at your new place. Bed frames, desks, shelving units, dining tables — we come with the tools and know-how.",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-black-primary px-6 pt-36 pb-16 text-center">
        <Image
          src="/assets/mover-loading-truck.webp"
          alt="Panther Moving crew loading furniture onto the moving truck"
          fill
          className="object-cover opacity-20"
          priority
        />
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="relative">
          <div className="section-label">What We Do</div>
          <h1 className="section-heading text-white">
            Our <span className="text-gold">Services</span>
          </h1>
          <p className="mt-2.5 text-[15px] font-light text-grey-light">
            Professional, affordable moving services across Tampa Bay
          </p>
        </div>
      </section>

      {/* Service List */}
      <section className="mx-auto max-w-[900px] px-6 py-16">
        {SERVICES.map((service, i) => (
          <div
            key={i}
            className={`flex gap-6 py-8 items-start ${
              i < SERVICES.length - 1 ? "border-b border-[#eee]" : ""
            }`}
          >
            <div className="flex h-[60px] w-[60px] shrink-0 items-center justify-center rounded-lg bg-off-white">
              {service.icon}
            </div>
            <div>
              <h3 className="mb-2 font-heading text-xl font-semibold tracking-[0.5px] uppercase">
                {service.t}
              </h3>
              <p className="text-sm font-light leading-[1.8] text-grey">
                {service.d}
              </p>
            </div>
          </div>
        ))}
        <div className="mt-10 text-center">
          <Link href="/contact" className="btn-gold">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  );
}
