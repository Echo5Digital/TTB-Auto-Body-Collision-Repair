import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Terms of Use | TTB Auto Body & Collision Repair",
  description:
    "Terms of Use for the TTB Auto Body & Collision Repair website, covering acceptable use, content ownership, and estimate disclaimers.",
  path: "/terms-of-use",
});

const sectionStyle = {
  fontFamily: "Inter, sans-serif",
  fontSize: "0.95rem",
  color: "#8A8F9A",
  lineHeight: 1.8,
};

const headingStyle = {
  fontFamily: '"Barlow Condensed", sans-serif',
  fontWeight: 700,
  fontSize: "1.3rem",
  color: "#D9DCE1",
  letterSpacing: "0.03em",
};

export default function TermsOfUsePage() {
  return (
    <>
      <Header phone="+1 281.793.0161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Legal"
          title="Terms of Use"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Terms of Use", href: "/terms-of-use" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <p style={sectionStyle}>
              These Terms of Use are a placeholder governing the use of this website. This
              document should be reviewed and finalized by {business.name} and, where
              appropriate, legal counsel before publication.
            </p>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Website Content
              </h2>
              <p style={sectionStyle}>
                Content on this website is provided for general informational purposes about
                {" "}{business.name}'s services in {business.areaServed}. It does not constitute a
                guarantee of repair outcomes, pricing, or timelines.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Estimates
              </h2>
              <p style={sectionStyle}>
                Estimate requests submitted through this website are preliminary and may require
                an in-person inspection of your vehicle. Estimates are not final quotes until
                confirmed directly by {business.name}.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Acceptable Use
              </h2>
              <p style={sectionStyle}>
                You agree to use this website only for lawful purposes and not to submit false,
                misleading, or fraudulent information through any form on this website.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Intellectual Property
              </h2>
              <p style={sectionStyle}>
                The content, design, and imagery on this website belong to {business.name} or
                their respective owners and may not be reproduced without permission.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Contact
              </h2>
              <p style={sectionStyle}>
                Questions about these Terms of Use can be directed to {business.name} at{" "}
                {business.email} or {business.phones[0].display}.
              </p>
            </div>

            <p className="text-xs" style={{ color: "#5a6070", fontFamily: "Inter, sans-serif" }}>
              This page is a draft placeholder and requires review and approval by {business.name}{" "}
              before launch.
            </p>
          </div>
        </Section>
      </main>
      <Footer
        phone="+1 281.793.0161"
        email="ttbautorepair@gmail.com"
        address="6801 Baneway Dr, Suite C, Houston, TX 77072"
        hours="Mon–Sat: 8am–6pm"
      />
    </>
  );
}
