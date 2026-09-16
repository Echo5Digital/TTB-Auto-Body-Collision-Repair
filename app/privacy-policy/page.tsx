import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Privacy Policy | TTB Auto Body & Collision Repair",
  description:
    "Privacy Policy for TTB Auto Body & Collision Repair, explaining how information submitted through this website is collected and used.",
  path: "/privacy-policy",
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

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header phone="+1 281.793.0161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Legal"
          title="Privacy Policy"
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Privacy Policy", href: "/privacy-policy" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="max-w-3xl mx-auto flex flex-col gap-8">
            <p style={sectionStyle}>
              This Privacy Policy is a placeholder outlining, in general terms, how {business.name}{" "}
              handles information submitted through this website. This policy should be reviewed and
              finalized by {business.name} and, where appropriate, legal counsel before publication,
              to ensure it accurately reflects actual data practices and complies with applicable law.
            </p>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Information We Collect
              </h2>
              <p style={sectionStyle}>
                When you submit the contact form or the free estimate form on this website, we may
                collect the information you provide, which can include your name, phone number,
                email address, vehicle details, a description of your vehicle's damage, and any
                photos you choose to upload.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                How Information Is Used
              </h2>
              <p style={sectionStyle}>
                Information submitted through this website is used to respond to your inquiry,
                prepare a free estimate, and communicate with you about your vehicle's repair.
                Information is not sold to third parties.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Contact Forms and Email
              </h2>
              <p style={sectionStyle}>
                Form submissions are directed to {business.name}'s official business email,{" "}
                {business.email}. Please avoid submitting sensitive personal information beyond
                what is necessary to describe your vehicle and request an estimate.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Cookies and Analytics
              </h2>
              <p style={sectionStyle}>
                This website may use basic analytics tools to understand site usage after
                appropriate configuration and consent. Specific tools and consent mechanisms will
                be documented here once finalized.
              </p>
            </div>

            <div>
              <h2 className="uppercase mb-3" style={headingStyle}>
                Contact Us About This Policy
              </h2>
              <p style={sectionStyle}>
                If you have questions about this Privacy Policy, please contact {business.name} at{" "}
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
