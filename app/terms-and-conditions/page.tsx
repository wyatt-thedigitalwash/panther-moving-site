import type { Metadata } from "next";
import Link from "next/link";
import { type ReactNode } from "react";
import { BreadcrumbSchema } from "@/lib/breadcrumbs";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description:
    "The terms and conditions governing your use of the Panther Moving website and moving services, including estimates, payments, cancellations, and SMS communications.",
  alternates: { canonical: "/terms-and-conditions" },
};

const CONTACT_EMAIL = "admin@panthermoving.com";
const CONTACT_PHONE = "(813) 867-4661";
const CONTACT_PHONE_RAW = "8138674661";

export default function TermsAndConditionsPage() {
  return (
    <>
      <BreadcrumbSchema
        items={[{ name: "Terms & Conditions", href: "/terms-and-conditions" }]}
      />

      {/* Hero */}
      <section className="relative bg-black-primary px-6 pt-36 pb-16 text-center">
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold" />
        <div className="hero-content">
          <div className="section-label">The Fine Print</div>
          <h1 className="section-heading text-white">
            Terms &amp; <span className="text-gold">Conditions</span>
          </h1>
          <p className="mt-3 text-[14px] text-grey">Effective Date: July 8, 2026</p>
        </div>
      </section>

      {/* Content */}
      <section className="mx-auto max-w-[760px] px-6 pt-14 pb-20">
        <div className="space-y-10 text-[15px] leading-[1.8] text-black-primary">
          <p>
            Welcome to Panther Moving. By accessing our website, requesting a quote,
            scheduling services, or communicating with us by phone, email, or text message,
            you agree to these Terms &amp; Conditions.
          </p>

          <Block title="Services">
            <p>
              Panther Moving provides residential, commercial, apartment, office, packing,
              loading, unloading, and related moving services throughout the Tampa Bay area
              and surrounding communities. All services are subject to scheduling availability
              and acceptance by Panther Moving.
            </p>
          </Block>

          <Block title="Estimates">
            <p>
              Moving estimates are provided based upon the information supplied by the
              customer. Final pricing may change if:
            </p>
            <List
              items={[
                "Inventory differs from what was originally disclosed",
                "Additional labor or services are requested",
                "Access conditions change",
                "Travel distance changes",
                "Waiting time occurs",
                "Additional packing materials are required",
              ]}
            />
          </Block>

          <Block title="Customer Responsibilities">
            <p>Customers agree to:</p>
            <List
              items={[
                "Provide accurate information regarding the move",
                "Ensure legal access to both pickup and delivery locations",
                "Notify Panther Moving of oversized, unusually heavy, fragile, or specialty items before the scheduled move",
                "Ensure all valuables, cash, jewelry, medications, firearms, and important documents remain in their personal possession",
              ]}
            />
          </Block>

          <Block title="Payments">
            <p>
              Payment is due upon completion of services unless otherwise agreed in writing.
              Accepted payment methods may include credit cards, debit cards, certified funds,
              or other approved payment methods. Late balances may be subject to additional
              collection costs where permitted by law.
            </p>
          </Block>

          <Block title="Cancellations">
            <p>
              Customers should notify Panther Moving as soon as possible if a scheduled move
              must be canceled or rescheduled. Cancellation fees may apply depending upon the
              timing of the cancellation and resources already reserved.
            </p>
          </Block>

          <Block title="Website Use">
            <p>
              Users agree not to misuse this website, attempt unauthorized access, interfere
              with website functionality, or submit false or misleading information.
            </p>
          </Block>

          <Block title="SMS Terms & Conditions">
            <SubSection title="1. SMS Consent & Communication">
              <p>
                The information (including phone numbers) obtained through the SMS consent
                process will not be shared with third parties or affiliates for marketing
                purposes.
              </p>
            </SubSection>

            <SubSection title="2. Types of SMS Communications">
              <p>
                We send conversational and informational external SMS messages. Example:
                &ldquo;Hello, this is a friendly reminder of your upcoming move with Panther
                Moving on [Date] at [Time]. You can reply STOP to opt out of SMS messaging from
                Panther Moving at any time.&rdquo;
              </p>
            </SubSection>

            <SubSection title="3. Message Frequency">
              <p>
                Message frequency may vary depending on the type of communication. You may
                receive up to 5 SMS messages per week related to your appointments, moves, or
                account status. Example: &ldquo;Message frequency may vary. You may receive up
                to 5 SMS messages per week regarding your appointment, moves, or account
                status.&rdquo;
              </p>
            </SubSection>

            <SubSection title="4. Potential Fees for SMS Messaging">
              <p>
                Standard message and data rates may apply, depending on your mobile
                carrier&rsquo;s pricing plan. These fees may vary based on whether the message
                is sent domestically or internationally.
              </p>
            </SubSection>

            <SubSection title="5. Opt-In Method">
              <p>
                Users can opt in by submitting an online form and checking the designated SMS
                consent box.
              </p>
            </SubSection>

            <SubSection title="6. Opt-Out Method">
              <p>
                You can opt out of receiving SMS messages at any time. To do so, simply reply
                &ldquo;STOP&rdquo; to any SMS message you receive. Alternatively, you can
                contact us directly to request removal from our messaging list. If you do not
                wish to receive SMS messages, you can choose not to check the SMS consent box on
                our forms.
              </p>
            </SubSection>

            <SubSection title="7. Help & Support">
              <p>
                If you are experiencing any issues, you can reply with the keyword HELP, or you
                can get assistance directly from us at{" "}
                <a
                  href={`mailto:${CONTACT_EMAIL}`}
                  className="text-gold no-underline hover:underline"
                >
                  {CONTACT_EMAIL}
                </a>
                .
              </p>
            </SubSection>

            <SubSection title="8. Standard Messaging Disclosures">
              <List
                items={[
                  "Message and data rates may apply.",
                  "Message frequency may vary.",
                  'You can opt out at any time by texting "STOP."',
                ]}
              />
              <p>
                For assistance, text &ldquo;HELP&rdquo; or visit our{" "}
                <Link
                  href="/privacy-policy"
                  className="text-gold no-underline hover:underline"
                >
                  Privacy Policy
                </Link>{" "}
                and{" "}
                <Link
                  href="/terms-and-conditions"
                  className="text-gold no-underline hover:underline"
                >
                  Terms and Conditions
                </Link>{" "}
                pages.
              </p>
            </SubSection>
          </Block>

          <Block title="Limitation of Liability">
            <p>
              To the fullest extent permitted by law, Panther Moving shall not be liable for
              indirect, incidental, consequential, special, or punitive damages arising from
              use of our website or services. Nothing in these Terms limits any rights or
              remedies that cannot legally be limited under applicable law.
            </p>
          </Block>

          <Block title="Intellectual Property">
            <p>
              All website content, including text, graphics, logos, photographs, and other
              materials, is the property of Panther Moving unless otherwise noted and may not
              be copied, reproduced, or distributed without prior written permission.
            </p>
          </Block>

          <Block title="Governing Law">
            <p>
              These Terms &amp; Conditions shall be governed by and interpreted under the laws
              of the State of Florida.
            </p>
          </Block>

          <Block title="Changes to These Terms">
            <p>
              Panther Moving reserves the right to modify these Terms &amp; Conditions at any
              time. Updated versions become effective immediately upon posting to this website.
            </p>
          </Block>

          <Block title="Contact Information">
            <p>
              Panther Moving
              <br />
              Phone:{" "}
              <a href={`tel:${CONTACT_PHONE_RAW}`} className="text-gold no-underline hover:underline">
                {CONTACT_PHONE}
              </a>
              <br />
              Email:{" "}
              <a href={`mailto:${CONTACT_EMAIL}`} className="text-gold no-underline hover:underline">
                {CONTACT_EMAIL}
              </a>
              <br />
              Website:{" "}
              <a href="https://www.panthermoving.com" className="text-gold no-underline hover:underline">
                https://www.panthermoving.com
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

function SubSection({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div className="space-y-2">
      <h3 className="font-heading text-[16px] font-semibold uppercase tracking-[0.5px] text-black-primary">
        {title}
      </h3>
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
