import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import { services, getServiceBySlug, business } from "@/lib/business";
import { serviceContent } from "@/lib/serviceContent";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, ArrowRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

interface ServicePageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: ServicePageProps): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};

  return buildMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: ServicePageProps) {
  const service = getServiceBySlug(params.slug);
  const content = serviceContent[params.slug];

  if (!service || !content) {
    notFound();
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: content.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "AutoBodyShop",
      name: business.name,
    },
    areaServed: business.areaServed,
    url: `https://example.com/services/${service.slug}`,
  };

  const otherServices = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header phone="+1 281.793.0161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow={service.keywordTheme}
          title={service.title}
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Services", href: "/services" },
            { label: service.title, href: `/services/${service.slug}` },
          ]}
        />

        {/* Direct Answer */}
        <Section background="default" spacing="md">
          <div
            className="rounded-[0.375rem] border px-6 py-5"
            style={{ borderColor: "rgba(229,9,20,0.35)", backgroundColor: "rgba(229,9,20,0.06)" }}
          >
            <p
              className="text-xs uppercase tracking-widest mb-1 font-semibold"
              style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
            >
              Quick Answer
            </p>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#D9DCE1", lineHeight: 1.7 }}>
              {content.directAnswer}
            </p>
          </div>
        </Section>

        {/* Coverage */}
        <Section background="alternate" spacing="lg">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
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
                {content.coverageHeading}
              </h2>
              <p
                className="mb-6"
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.75 }}
              >
                {content.coverageIntro}
              </p>
              <div className="flex flex-col gap-3">
                {content.coveragePoints.map((point) => (
                  <div key={point} className="flex items-start gap-3">
                    <CheckCircle size={18} color="#E50914" strokeWidth={2.5} className="shrink-0 mt-0.5" />
                    <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#D9DCE1" }}>
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[0.375rem] overflow-hidden border" style={{ borderColor: "#1E2128" }}>
              <img
                src={service.image}
                alt={service.title}
                className="w-full object-cover"
                style={{ height: "360px" }}
              />
            </div>
          </div>
        </Section>

        {/* CTA Banner */}
        <Section background="default" spacing="md">
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
                  fontSize: "clamp(1.4rem, 2.8vw, 1.9rem)",
                  color: "#D9DCE1",
                  letterSpacing: "0.02em",
                }}
              >
                Request a Free Estimate for {service.title}
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A" }}>
                Contact TTB Auto Body &amp; Collision Repair to discuss your vehicle's damage.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
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
                href={`tel:${business.phones[0].tel}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  color: "#D9DCE1",
                  border: "1px solid rgba(217,220,225,0.3)",
                }}
              >
                Call Now
              </a>
            </div>
          </div>
        </Section>

        {/* Service FAQs */}
        <Section background="alternate" spacing="lg">
          <div className="text-center mb-10">
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2"
              style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
            >
              <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
              Common Questions
            </p>
            <h2
              className="uppercase leading-tight"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "clamp(1.8rem, 3.2vw, 2.4rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
              }}
            >
              {service.title} FAQs
            </h2>
          </div>
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={content.faqs} />
          </div>
        </Section>

        {/* Other Services */}
        <Section background="default" spacing="lg">
          <h2
            className="uppercase leading-tight mb-8 text-center"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(1.6rem, 3vw, 2.1rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            Other Services
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherServices.map((s) => (
              <Link
                key={s.slug}
                href={`/services/${s.slug}`}
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
                  {s.title}
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
        phone="+1 281.793.0161"
        email="ttbautorepair@gmail.com"
        address="6801 Baneway Dr, Suite C, Houston, TX 77072"
        hours="Mon–Sat: 8am–6pm"
      />
    </>
  );
}
