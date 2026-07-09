import type { Metadata } from "next";
import { type ReactNode } from "react";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Panther Moving collects, uses, discloses, and protects your personal information, including our SMS communications and opt-out policy.",
  alternates: { canonical: "/privacy-policy" },
};

const PRIVACY_EMAIL = "admin@panthermoving.com";
const PRIVACY_PHONE = "813-867-4661";
const PRIVACY_PHONE_RAW = "8138674661";

export default function PrivacyPolicyPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Privacy Policy", href: "/privacy-policy" }]} />

      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="hero-content">
          <div className="section-label">Your Privacy</div>
          <h1 className="section-heading text-white">
            Privacy <span className="text-gold">Policy</span>
          </h1>
          <p className="mt-3 text-[14px] text-grey">Effective Date: July 8, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[760px] px-6 pt-14 pb-20">
        <div className="space-y-10 text-[15px] leading-[1.8] text-black-primary">
          <p>
            Welcome to Panther Moving (&ldquo;Panther Moving,&rdquo; &ldquo;we,&rdquo;
            &ldquo;our,&rdquo; or &ldquo;us&rdquo;). Your privacy is important to us. This
            Privacy Policy explains how we collect, use, disclose, and protect your personal
            information when you visit our website, request a moving quote, schedule services,
            or communicate with us by phone, email, or text message.
          </p>

          <Block title="Information We Collect">
            <p>When you contact Panther Moving, we may collect:</p>
            <List
              items={[
                "Name",
                "Mobile and telephone numbers",
                "Email address",
                "Pickup and delivery addresses",
                "Moving dates",
                "Details about your move",
                "Payment information when applicable",
                "Any information you voluntarily provide through our website, estimate request forms, emails, phone calls, or SMS messages.",
              ]}
            />
            <p>
              Our website may also automatically collect technical information such as browser
              type, IP address, device information, and website usage statistics.
            </p>
          </Block>

          <Block title="How We Use Your Information">
            <p>We use your information to:</p>
            <List
              items={[
                "Prepare moving estimates",
                "Schedule moving services",
                "Confirm appointments",
                "Send dispatch and arrival updates",
                "Respond to customer inquiries",
                "Improve our services",
                "Maintain business records",
                "Comply with applicable laws",
              ]}
            />
            <p>We do not sell your personal information.</p>
          </Block>

          <Block title="SMS Communications">
            <p>
              By providing your mobile number and checking the SMS consent box on our website
              or otherwise opting in, you consent to receive conversational and informational
              text messages from Panther Moving. These messages may include:
            </p>
            <List
              items={[
                "Quote follow-up",
                "Appointment confirmations",
                "Scheduling updates",
                "Crew arrival notifications",
                "Customer service responses",
                "Information regarding your requested moving services",
              ]}
            />
            <p>
              Message frequency varies depending on your interactions with Panther Moving.
              Message and data rates may apply. You may opt out at any time by replying STOP.
              Reply HELP for assistance or contact us directly at:
            </p>
            <p>
              Phone:{" "}
              <a href={`tel:${PRIVACY_PHONE_RAW}`} className="text-gold no-underline hover:underline">
                {PRIVACY_PHONE}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-gold no-underline hover:underline">
                {PRIVACY_EMAIL}
              </a>
            </p>
            <p>
              No mobile opt-in or text message consent will be shared with third parties or
              affiliates for marketing purposes.
            </p>
          </Block>

          <Block title="Information Sharing">
            <p>We may disclose your information only when necessary to:</p>
            <List
              items={[
                "Perform requested moving services",
                "Process payments",
                "Work with trusted vendors who assist in operating our business",
                "Comply with legal obligations",
                "Protect the safety, rights, or property of Panther Moving and our customers",
              ]}
            />
            <p>All vendors are expected to maintain appropriate confidentiality standards.</p>
          </Block>

          <Block title="Data Security">
            <p>
              We employ commercially reasonable administrative, technical, and physical
              safeguards designed to protect your information from unauthorized access,
              disclosure, alteration, or destruction. Although no electronic transmission is
              completely secure, we continually work to safeguard your personal information.
            </p>
          </Block>

          <Block title="Cookies">
            <p>
              Our website may use cookies and similar technologies to improve website
              functionality, analyze website traffic, and enhance your browsing experience. You
              may disable cookies through your browser settings at any time.
            </p>
          </Block>

          <Block title="Your Rights">
            <p>You may request to:</p>
            <List
              items={[
                "Access your personal information",
                "Correct inaccurate information",
                "Request deletion where permitted by law",
                "Withdraw SMS consent by replying STOP",
              ]}
            />
          </Block>

          <Block title="Third-Party Websites">
            <p>
              Our website may contain links to third-party websites. Panther Moving is not
              responsible for the privacy practices or content of those websites.
            </p>
          </Block>

          <Block title="Updates to This Policy">
            <p>
              We may revise this Privacy Policy from time to time. Any changes become effective
              immediately upon posting to this website.
            </p>
          </Block>

          <Block title="Contact Us">
            <p>
              Panther Moving
              <br />
              Website:{" "}
              <a href="https://www.panthermoving.com" className="text-gold no-underline hover:underline">
                https://www.panthermoving.com
              </a>
              <br />
              Phone:{" "}
              <a href={`tel:${PRIVACY_PHONE_RAW}`} className="text-gold no-underline hover:underline">
                {PRIVACY_PHONE}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${PRIVACY_EMAIL}`} className="text-gold no-underline hover:underline">
                {PRIVACY_EMAIL}
              </a>
            </p>
          </Block>
        </div>
      </section>
    </>
  );
}

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-3">
      <h2 className="font-heading text-[22px] uppercase tracking-[1px] text-black-primary">
        {title}
      </h2>
      {children}
    </div>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="ml-5 list-disc space-y-1.5 marker:text-gold">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}
