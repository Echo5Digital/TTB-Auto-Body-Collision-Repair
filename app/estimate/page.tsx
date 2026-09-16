import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import EstimatePageClient from "./EstimatePageClient";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle } from "lucide-react";

export const metadata = buildMetadata({
  title: "Get a Free Estimate | TTB Auto Body & Collision Repair Houston, TX",
  description:
    "Request a free auto body repair estimate from TTB Auto Body & Collision Repair in Houston, TX. Describe your vehicle's damage and we'll follow up promptly.",
  path: "/estimate",
});

export default function EstimatePage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Free Estimates"
          title="Get Your Free Auto Body Repair Estimate"
          description="Tell us about your vehicle's damage and TTB Auto Body & Collision Repair will follow up to discuss your repair options."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Get a Free Estimate", href: "/estimate" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1 flex flex-col gap-6">
              <div>
                <h2
                  className="uppercase leading-tight mb-3"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 800,
                    fontSize: "1.4rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.02em",
                  }}
                >
                  How It Works
                </h2>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A", lineHeight: 1.7 }}>
                  Fill out the form with your contact and vehicle details, and describe the
                  damage as best you can. Photos help TTB Auto Body &amp; Collision Repair
                  understand your vehicle's condition, but a full estimate may require an
                  in-person inspection.
                </p>
              </div>

              <div
                className="p-6 rounded-[0.375rem] border flex flex-col gap-3"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128" }}
              >
                <h3
                  className="uppercase text-sm font-bold"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#D9DCE1", letterSpacing: "0.05em" }}
                >
                  Helpful Information to Include
                </h3>
                {[
                  "Vehicle make, model, and year",
                  "The service you believe you need",
                  "A description of the damage",
                  "Photos of the damage, if available",
                  "Your preferred contact method",
                ].map((point) => (
                  <div key={point} className="flex items-start gap-2">
                    <CheckCircle size={15} color="#E50914" strokeWidth={2.5} className="shrink-0 mt-0.5" />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#8A8F9A" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div
                className="p-6 rounded-[0.375rem] border"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128" }}
              >
                <h3
                  className="uppercase text-sm font-bold mb-2"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#D9DCE1", letterSpacing: "0.05em" }}
                >
                  Prefer to Call or Email?
                </h3>
                <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#8A8F9A", lineHeight: 1.6 }}>
                  {business.phones.map((p) => (
                    <a
                      key={p.tel}
                      href={`tel:${p.tel}`}
                      className="block hover:text-white transition-colors"
                      style={{ color: "inherit" }}
                    >
                      +1 {p.display}
                    </a>
                  ))}
                  <a
                    href={`mailto:${business.email}`}
                    className="block hover:text-white transition-colors break-all"
                    style={{ color: "inherit" }}
                  >
                    {business.email}
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-2">
              <EstimatePageClient />
            </div>
          </div>
        </Section>
      </main>
      <Footer
        phone="+1 2817930161"
        email="ttbautorepair@gmail.com"
        address="6801 Baneway Dr, Suite C, Houston, TX 77072"
        hours="Mon–Sat: 8am–6pm"
      />
    </>
  );
}
