import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { business } from "@/lib/business";
import { buildMetadata } from "@/lib/seo";
import { CheckCircle, ArrowRight, Phone } from "lucide-react";
import Link from "next/link";

export const metadata = {
  ...buildMetadata({
    title: "Thank You | TTB Auto Body & Collision Repair",
    description: "Thank you for contacting TTB Auto Body & Collision Repair in Houston, TX.",
    path: "/thank-you",
  }),
  robots: { index: false, follow: true },
};

export default function ThankYouPage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B", minHeight: "60vh" }}>
        <Section background="default" spacing="xl">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <div
              className="w-16 h-16 rounded-full flex items-center justify-center"
              style={{ backgroundColor: "rgba(34,197,94,0.12)", border: "2px solid #22c55e" }}
            >
              <CheckCircle size={32} color="#22c55e" strokeWidth={2.5} />
            </div>
            <h1
              className="uppercase leading-tight"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "clamp(2rem, 4vw, 2.8rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
              }}
            >
              Thank You
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "1rem", color: "#8A8F9A", lineHeight: 1.7 }}>
              Your request has been received. TTB Auto Body &amp; Collision Repair will follow up
              with you using the contact method you provided. If your request is urgent, feel
              free to call the shop directly.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <a
                href={`tel:${business.phones[0].tel}`}
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
              >
                <Phone size={16} strokeWidth={2.5} />
                Call {business.phones[0].display}
              </a>
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  color: "#D9DCE1",
                  border: "1px solid rgba(217,220,225,0.3)",
                }}
              >
                Back to Home
                <ArrowRight size={15} strokeWidth={2.5} />
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
