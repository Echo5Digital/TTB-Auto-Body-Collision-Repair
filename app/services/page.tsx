import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { services } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Auto Body & Collision Repair Services | TTB, Houston TX",
  description:
    "TTB Auto Body & Collision Repair offers collision repair, auto body repair, painting & refinishing, frame straightening, dent & scratch repair, and insurance claims assistance in Houston, TX.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Our Services"
          title="Complete Auto Body & Collision Repair Services"
          description="TTB Auto Body & Collision Repair provides expert repair and restoration services for all makes and models in Houston, Texas."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.slug}
                className="group relative flex flex-col overflow-hidden rounded-[0.375rem] border transition-all duration-300 hover:-translate-y-1"
                style={{ backgroundColor: "#0F1114", borderColor: "#1E2128", boxShadow: "0 4px 24px rgba(0,0,0,0.45)" }}
              >
                <div className="relative overflow-hidden" style={{ height: "190px" }}>
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div
                    className="absolute inset-0"
                    style={{ background: "linear-gradient(180deg, rgba(8,9,11,0.1) 40%, #0F1114 100%)" }}
                  />
                </div>

                <div className="flex flex-col flex-1 px-6 pt-5 pb-6">
                  <h2
                    className="mb-2 uppercase leading-tight"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: "1.25rem",
                      fontWeight: 700,
                      color: "#D9DCE1",
                      letterSpacing: "0.03em",
                    }}
                  >
                    {service.title}
                  </h2>
                  <p
                    className="mb-5 flex-1"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#8A8F9A", lineHeight: 1.65 }}
                  >
                    {service.shortDescription}
                  </p>

                  <div className="flex items-center justify-between gap-3 pt-4" style={{ borderTop: "1px solid #1E2128" }}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1"
                      style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#D9DCE1" }}
                    >
                      Learn More <ArrowRight size={13} strokeWidth={2.5} color="#E50914" />
                    </Link>
                    <Link
                      href="/estimate"
                      className="inline-flex items-center px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-[0.375rem] transition-all duration-200 hover:brightness-110"
                      style={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                        color: "#fff",
                        letterSpacing: "0.06em",
                      }}
                    >
                      Get Estimate
                    </Link>
                  </div>
                </div>
              </div>
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
