import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { business, services } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "About TTB Auto Body & Collision Repair | Houston, TX",
  description:
    "Learn about TTB Auto Body & Collision Repair in Houston, TX — a collision repair and auto body shop serving all makes and models, foreign and domestic.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="About Us"
          title="About TTB Auto Body & Collision Repair"
          description="A Houston, Texas collision repair and auto body shop focused on quality workmanship, honest service, and helping vehicle owners get back on the road."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "About", href: "/about" },
          ]}
        />

        {/* About TTB */}
        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p
                className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
              >
                <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
                Who We Are
              </p>
              <h2
                className="uppercase leading-tight mb-4"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                  color: "#D9DCE1",
                  letterSpacing: "0.02em",
                }}
              >
                Collision Repair &amp; Auto Body Specialists in Houston
              </h2>
              <p
                className="mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                TTB Auto Body &amp; Collision Repair is an auto body and collision repair shop
                located at {business.address.full}. The shop focuses on restoring vehicles
                after collision damage, handling everything from cosmetic dent and scratch
                repair to structural frame straightening.
              </p>
              <p
                className="mb-4"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                TTB works on all makes and models, including foreign and domestic vehicles,
                and offers free estimates so customers can understand their repair needs
                before committing to service.
              </p>
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95 mt-2"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
              >
                Get a Free Estimate
                <ArrowRight size={16} strokeWidth={2.5} />
              </Link>
            </div>

            <div className="relative rounded-[0.375rem] overflow-hidden border" style={{ borderColor: "#1E2128" }}>
              <img
                src="https://images.pexels.com/photos/13065690/pexels-photo-13065690.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Technician working on a vehicle in TTB Auto Body & Collision Repair's Houston shop"
                className="w-full object-cover"
                style={{ height: "360px" }}
              />
            </div>
          </div>
        </Section>

        {/* Our Repair Services */}
        <Section background="alternate" spacing="lg">
          <div className="text-center mb-12">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2"
              style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
            >
              <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
              Our Repair Services
            </p>
            <h2
              className="uppercase leading-tight"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
              }}
            >
              Complete Collision &amp; Auto Body Services
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group flex flex-col p-6 rounded-[0.375rem] border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128" }}
              >
                <h3
                  className="uppercase mb-2"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.03em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 flex-1"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.85rem", color: "#8A8F9A", lineHeight: 1.6 }}
                >
                  {service.shortDescription}
                </p>
                <span
                  className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#D9DCE1" }}
                >
                  Learn More <ArrowRight size={13} strokeWidth={2.5} color="#E50914" />
                </span>
              </Link>
            ))}
          </div>
        </Section>

        {/* Our Approach */}
        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 rounded-[0.375rem] overflow-hidden border" style={{ borderColor: "#1E2128" }}>
              <img
                src="https://images.pexels.com/photos/6870314/pexels-photo-6870314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="Technician spray painting a vehicle panel at TTB Auto Body & Collision Repair"
                className="w-full object-cover"
                style={{ height: "340px" }}
              />
            </div>

            <div className="order-1 lg:order-2">
              <p
                className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
                style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
              >
                <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
                Our Approach
              </p>
              <h2
                className="uppercase leading-tight mb-4"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(1.9rem, 3.5vw, 2.6rem)",
                  color: "#D9DCE1",
                  letterSpacing: "0.02em",
                }}
              >
                Quality Workmanship, Honest Service
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                TTB Auto Body &amp; Collision Repair approaches every vehicle with the same
                focus: understand the damage, provide a clear free estimate, and complete
                the repair with attention to detail.
              </p>
              <div className="flex flex-col gap-3">
                {business.trustPoints.map((point) => (
                  <div key={point} className="flex items-center gap-3">
                    <CheckCircle size={18} color="#E50914" strokeWidth={2.5} className="shrink-0" />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#D9DCE1" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* All Makes & Models */}
        <Section background="alternate" spacing="md">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
            style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
          >
            <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
            All Makes &amp; Models
          </p>
          <h2
            className="uppercase leading-tight mb-4"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.2rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            Foreign &amp; Domestic Vehicles
          </h2>
          <p
            className="mb-8 max-w-2xl"
            style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.7 }}
          >
            TTB Auto Body &amp; Collision Repair services all makes and models, including:
          </p>
          <div className="flex flex-wrap gap-3">
            {business.vehicleMakes.map((make) => (
              <span
                key={make}
                className="px-5 py-2.5 rounded-[0.375rem] border uppercase font-bold"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.04em",
                  color: "#D9DCE1",
                  borderColor: "#1E2128",
                  backgroundColor: "#0E1014",
                }}
              >
                {make}
              </span>
            ))}
          </div>
        </Section>

        {/* Contact CTA */}
        <Section background="default" spacing="lg">
          <div
            className="flex flex-col md:flex-row items-center justify-between gap-6 p-8 rounded-[0.375rem] border"
            style={{ borderColor: "#1E2128", backgroundColor: "#0E1014" }}
          >
            <div>
              <h2
                className="uppercase leading-tight mb-2"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3vw, 2rem)",
                  color: "#D9DCE1",
                  letterSpacing: "0.02em",
                }}
              >
                Ready to Restore Your Vehicle?
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A" }}>
                Contact TTB Auto Body &amp; Collision Repair for a free estimate.
              </p>
            </div>
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  color: "#D9DCE1",
                  border: "1px solid rgba(217,220,225,0.3)",
                }}
              >
                Contact Us
              </Link>
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
