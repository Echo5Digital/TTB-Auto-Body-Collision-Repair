import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import Section from "@/components/Section";
import { buildMetadata } from "@/lib/seo";
import { ArrowRight, Info } from "lucide-react";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Gallery | TTB Auto Body & Collision Repair Houston, TX",
  description:
    "See illustrative examples of collision repair, auto body repair, and painting & refinishing work from TTB Auto Body & Collision Repair in Houston, TX.",
  path: "/gallery",
});

const galleryItems = [
  {
    category: "Collision Repair",
    before:
      "https://images.pexels.com/photos/33749906/pexels-photo-33749906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    after:
      "https://images.pexels.com/photos/6873021/pexels-photo-6873021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    category: "Auto Body Repair",
    before:
      "https://images.pexels.com/photos/13758363/pexels-photo-13758363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    after:
      "https://images.pexels.com/photos/5233262/pexels-photo-5233262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    category: "Painting & Refinishing",
    before:
      "https://images.pexels.com/photos/30152449/pexels-photo-30152449.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    after:
      "https://images.pexels.com/photos/6870314/pexels-photo-6870314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export default function GalleryPage() {
  return (
    <>
      <Header phone="+1 2817930161" />
      <main style={{ backgroundColor: "#08090B" }}>
        <PageHero
          eyebrow="Our Work"
          title="Gallery / Before & After"
          description="A look at the type of collision repair, auto body repair, and refinishing work TTB Auto Body & Collision Repair performs in Houston, Texas."
          breadcrumbs={[
            { label: "Home", href: "/" },
            { label: "Gallery", href: "/gallery" },
          ]}
        />

        <Section background="default" spacing="md">
          <div
            className="rounded-[0.375rem] border px-6 py-5 flex gap-4 items-start"
            style={{ borderColor: "rgba(217,220,225,0.2)", backgroundColor: "#0E1014" }}
          >
            <Info size={20} color="#D9DCE1" className="shrink-0 mt-0.5" />
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.88rem", color: "#8A8F9A", lineHeight: 1.7 }}>
              The images below are illustrative examples of the type of collision repair,
              auto body repair, and refinishing work TTB Auto Body &amp; Collision Repair
              performs. They are not photographs of specific TTB customer vehicles. Actual
              project photos will be added to this gallery once provided by TTB.
            </p>
          </div>
        </Section>

        <Section background="default" spacing="lg">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {galleryItems.map((item, idx) => (
              <div
                key={idx}
                className="rounded-[0.375rem] overflow-hidden border"
                style={{ backgroundColor: "#0E1014", borderColor: "#1E2128", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              >
                <div className="relative">
                  <img
                    src={item.before}
                    alt={`Illustrative before example — ${item.category}`}
                    className="w-full object-cover"
                    style={{ height: "200px" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                    style={{
                      backgroundColor: "rgba(8,9,11,0.85)",
                      color: "#D9DCE1",
                      fontFamily: '"Barlow Condensed", sans-serif',
                      border: "1px solid rgba(217,220,225,0.2)",
                    }}
                  >
                    Before
                  </span>
                </div>

                <div
                  className="flex items-center justify-center h-8"
                  style={{ background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)" }}
                >
                  <span
                    className="text-xs font-bold uppercase tracking-widest text-white"
                    style={{ fontFamily: '"Barlow Condensed", sans-serif', letterSpacing: "0.15em" }}
                  >
                    Illustrative Example
                  </span>
                </div>

                <div className="relative">
                  <img
                    src={item.after}
                    alt={`Illustrative after example — ${item.category}`}
                    className="w-full object-cover"
                    style={{ height: "200px" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                    style={{ backgroundColor: "rgba(229,9,20,0.9)", color: "#fff", fontFamily: '"Barlow Condensed", sans-serif' }}
                  >
                    After
                  </span>
                </div>

                <div className="px-5 py-4" style={{ borderTop: "1px solid #1E2128" }}>
                  <p
                    className="uppercase font-bold tracking-wide text-center"
                    style={{
                      fontFamily: '"Barlow Condensed", sans-serif',
                      fontSize: "1rem",
                      color: "#D9DCE1",
                      letterSpacing: "0.06em",
                    }}
                  >
                    {item.category}
                  </p>
                </div>
              </div>
            ))}
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
                See What TTB Can Do for Your Vehicle
              </h2>
              <p style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A" }}>
                Contact TTB Auto Body &amp; Collision Repair for a free estimate.
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
