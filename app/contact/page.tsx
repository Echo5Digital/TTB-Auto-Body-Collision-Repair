import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import EstimateForm from "@/components/EstimateForm";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { MapPin, Phone, Mail, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Contact TTB Auto Body & Collision Repair | Houston, TX",
  description:
    "Contact TTB Auto Body & Collision Repair in Houston, TX by phone, email, or the contact form. Request a free estimate for collision repair or auto body work.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Header phone="+1 281.793.0161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Get In Touch"
          title="Contact TTB Auto Body & Collision Repair"
          description="Reach out for a free estimate or to ask about any of our services. We're here to help Houston drivers get back on the road."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Contact", href: "/contact" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            {/* Left: Location / Contact / Map */}
            <div className="flex flex-col gap-6">
              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E50914" }}
                >
                  <MapPin size={18} color="#fff" strokeWidth={2.5} />
                </div>
                <div>
                  <h2
                    className="text-xs uppercase mb-1 font-bold"
                    style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                  >
                    Our Location
                  </h2>
                  <p
                    className="uppercase"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#D9DCE1",
                      lineHeight: 1.4,
                    }}
                  >
                    {business.address.street}
                    <br />
                    {business.address.city}, {business.address.state} {business.address.zip}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E50914" }}
                >
                  <Phone size={18} color="#fff" strokeWidth={2.5} />
                </div>
                <div>
                  <h2
                    className="text-xs uppercase mb-1 font-bold"
                    style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                  >
                    Call Us
                  </h2>
                  <p
                    className="uppercase"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#D9DCE1",
                      lineHeight: 1.4,
                    }}
                  >
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
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#E50914" }}
                >
                  <Mail size={18} color="#fff" strokeWidth={2.5} />
                </div>
                <div>
                  <h2
                    className="text-xs uppercase mb-1 font-bold"
                    style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                  >
                    Email Us
                  </h2>
                  <p
                    className="break-all"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontWeight: 700,
                      fontSize: "1.05rem",
                      color: "#D9DCE1",
                      lineHeight: 1.4,
                    }}
                  >
                    <a href={`mailto:${business.email}`} className="hover:text-white transition-colors" style={{ color: "inherit" }}>
                      {business.email}
                    </a>
                  </p>
                </div>
              </div>

              <iframe
                title="TTB Auto Body & Collision Repair location map"
                src={business.mapEmbedSrc}
                className="w-full rounded-[0.375rem]"
                style={{ height: "320px", border: "1px solid #1E2128" }}
                loading="lazy"
              />

              <a
                href={business.directionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
              >
                <MapPin size={16} strokeWidth={2.5} />
                Get Directions
                <ArrowRight size={15} strokeWidth={2.5} />
              </a>

              <div
                className="p-6 rounded-[0.375rem] border"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128" }}
              >
                <h2
                  className="uppercase mb-3"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: "1.1rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.05em",
                  }}
                >
                  Have a Quick Question?
                </h2>
                <p className="mb-4" style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A", lineHeight: 1.6 }}>
                  Check our frequently asked questions for quick answers about services,
                  estimates, and insurance claims assistance.
                </p>
                <Link
                  href="/faq"
                  className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#E50914" }}
                >
                  View FAQs <ArrowRight size={13} strokeWidth={2.5} />
                </Link>
              </div>
            </div>

            {/* Right: Estimate Form */}
            <EstimateForm />
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
