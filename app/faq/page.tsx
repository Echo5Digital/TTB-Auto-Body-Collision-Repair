import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import FaqAccordion from "@/components/FaqAccordion";
import { faqData } from "@/lib/faq";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "FAQs | TTB Auto Body & Collision Repair Houston, TX",
  description:
    "Answers to common questions about collision repair, auto body repair, free estimates, and insurance claims assistance from TTB Auto Body & Collision Repair in Houston, TX.",
  path: "/faq",
});

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FaqPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Have Questions?"
          title="Frequently Asked Questions"
          description="Answers to common questions about TTB Auto Body & Collision Repair's services in Houston, Texas."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "FAQs", href: "/faq" },
          ]}
        />

        <Section background="default" spacing="lg">
          <div className="max-w-3xl mx-auto">
            <FaqAccordion items={faqData} />
          </div>
        </Section>

        <Section background="alternate" spacing="md">
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
                Still Have Questions?
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A" }}>
                Contact TTB Auto Body &amp; Collision Repair directly.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 shrink-0">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
              >
                Contact Us
                <ArrowRight size={16} strokeWidth={2.5} />
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
