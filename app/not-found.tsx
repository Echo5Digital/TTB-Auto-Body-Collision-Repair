import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Section from "@/components/Section";
import { business } from "@/lib/business";
import { ArrowRight, Phone, Search } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <Header phone="+1 281.793.0161" />
      <main style={{ backgroundColor: "#08090B", minHeight: "60vh" }}>
        <Section background="default" spacing="xl">
          <div className="max-w-xl mx-auto text-center flex flex-col items-center gap-5">
            <p
              className="uppercase font-black leading-none"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "clamp(4rem, 12vw, 7rem)",
                color: "#E50914",
                letterSpacing: "0.02em",
              }}
            >
              404
            </p>
            <h1
              className="uppercase leading-tight"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "clamp(1.6rem, 3.5vw, 2.2rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
              }}
            >
              Page Not Found
            </h1>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.7 }}>
              The page you're looking for doesn't exist or may have moved. Try one of the links
              below, or contact TTB Auto Body &amp; Collision Repair directly.
            </p>

            <div className="flex flex-wrap gap-4 justify-center mt-2">
              <Link
                href="/"
                className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
                }}
              >
                Back to Home
                <ArrowRight size={15} strokeWidth={2.5} />
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
                <Phone size={16} strokeWidth={2.5} />
                Call Now
              </a>
            </div>

            <div className="flex flex-wrap gap-3 justify-center mt-6 text-xs">
              {[
                { label: "Services", href: "/services" },
                { label: "Gallery", href: "/gallery" },
                { label: "FAQs", href: "/faq" },
                { label: "Contact", href: "/contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="inline-flex items-center gap-1 uppercase font-bold tracking-widest transition-colors hover:text-white"
                  style={{ fontFamily: '"Barlow Condensed", sans-serif', color: "#8A8F9A" }}
                >
                  <Search size={11} strokeWidth={2.5} color="#E50914" />
                  {link.label}
                </Link>
              ))}
            </div>
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
