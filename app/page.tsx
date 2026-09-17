import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HomeClient from "./HomeClient";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Houston Collision & Auto Body Repair | TTB Auto Body",
  description:
    "TTB Auto Body & Collision Repair in Houston, TX specializes in collision repair, auto body work, car painting, frame straightening, and insurance claim assistance. Get a free estimate today.",
  path: "/",
});

const faqData = [
  {
    question: "What services does TTB Auto Body & Collision Repair offer?",
    answer:
      "TTB Auto Body & Collision Repair offers collision repair, auto body repair, car painting, frame straightening, dent and scratch repair, and insurance claim assistance for vehicle owners in Houston, Texas.",
  },
  {
    question: "Does TTB Auto Body provide free estimates?",
    answer:
      "Yes, TTB Auto Body & Collision Repair offers free estimates. You can request one through the website to get an assessment of your vehicle's repair needs.",
  },
  {
    question: "Can TTB Auto Body help me with my insurance claim?",
    answer:
      "Yes, TTB Auto Body & Collision Repair provides insurance claim assistance to help Houston vehicle owners navigate the claims process as part of their collision repair services.",
  },
  {
    question: "Where does TTB Auto Body & Collision Repair provide service?",
    answer:
      "TTB Auto Body & Collision Repair serves vehicle owners in Houston, Texas.",
  },
  {
    question: "Does TTB Auto Body handle frame straightening?",
    answer:
      "Yes, frame straightening is one of the core services offered by TTB Auto Body & Collision Repair in Houston, TX.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "TTB Auto Body & Collision Repair",
  description:
    "TTB Auto Body & Collision Repair in Houston, TX specializes in collision repair, auto body work, car painting, frame straightening, dent and scratch repair, and insurance claim assistance.",
  provider: {
    "@type": "AutoBodyShop",
    name: "TTB Auto Body & Collision Repair",
    areaServed: "Houston, Texas",
  },
  serviceType: [
    "Collision Repair",
    "Auto Body Repair",
    "Car Painting",
    "Frame Straightening",
    "Dent and Scratch Repair",
    "Insurance Claim Assistance",
  ],
  areaServed: "Houston, Texas",
};

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

export default function HomePage() {
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
      <Header phone="+1 2817930161" />
      <HomeClient faqData={faqData} />
      <Footer
        phone="+1 2817930161"
        email="ttbautorepair@gmail.com"
        address="6801 Baneway Dr, Suite C, Houston, TX 77072"
        hours="Mon–Sat: 8am–6pm"
      />
    </>
  );
}