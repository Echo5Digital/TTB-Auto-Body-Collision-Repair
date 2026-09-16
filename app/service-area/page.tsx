import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { business, services } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Serving Houston, TX | TTB Auto Body & Collision Repair",
  description:
    "TTB Auto Body & Collision Repair is located at 6801 Baneway Dr, Suite C, Houston, TX 77072, providing collision repair and auto body services to Houston vehicle owners.",
  path: "/service-area",
});

export default function ServiceAreaPage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Service Area"
          title="Serving Houston, Texas"
          description="TTB Auto Body & Collision Repair is located in Houston, TX, providing collision repair and auto body services to vehicle owners in the area."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Service Area", href: "/service-area" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
              >
                <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
                Our Location
              </p>
              <h2
                className="uppercase leading-tight mb-4"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                  color: "#D9DCE1",
                  letterSpacing: "0.02em",
                }}
              >
                Located at {business.address.street}
              </h2>
              <p
                className="mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                TTB Auto Body &amp; Collision Repair serves vehicle owners across Houston,
                Texas, providing collision repair and auto body services to drivers
                throughout the area. As a Houston-based collision center, the shop is
                positioned to assist local residents with everything from minor dent and
                scratch repair to full collision restoration and insurance claim navigation.
              </p>
              <p
                className="mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                Vehicle owners in and around Houston can contact TTB Auto Body &amp;
                Collision Repair directly to confirm whether their specific location falls
                within the shop's typical service area.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/estimate"
                  className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                    boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                  }}
                >
                  Get a Free Estimate
                </Link>
                <a
                  href={business.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "0.9rem",
                    letterSpacing: "0.1em",
                    color: "#D9DCE1",
                    border: "1px solid rgba(217,220,225,0.3)",
                  }}
                >
                  <MapPin size={16} strokeWidth={2.5} />
                  Get Directions
                </a>
              </div>
            </div>

            <iframe
              title="TTB Auto Body & Collision Repair Houston location map"
              src={business.mapEmbedSrc}
              className="w-full rounded-[0.375rem]"
              style={{ height: "420px", border: "1px solid #1E2128" }}
              loading="lazy"
            />
          </div>
        </Section>

        <Section background="alternate" spacing="lg">
          <h2
            className="uppercase leading-tight mb-8 text-center"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            Services Available in Houston
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="flex flex-col p-5 rounded-[0.375rem] border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128" }}
              >
                <h3
                  className="uppercase mb-2"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: "1rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.03em",
                  }}
                >
                  {service.title}
                </h3>
                <span
                  className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1 mt-auto"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#D9DCE1" }}
                >
                  Learn More <ArrowRight size={12} strokeWidth={2.5} color="#E50914" />
                </span>
              </Link>
            ))}
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
