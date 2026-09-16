"use client";

import React, { useState } from "react";
import Link from "next/link";
import Section from "@/components/Section";
import EstimateForm from "@/components/EstimateForm";
import {
  CheckCircle,
  ChevronDown,
  MapPin,
  Phone,
  Mail,
  ArrowRight,
} from "lucide-react";

interface FaqItem {
  question: string;
  answer: string;
}

interface HomeClientProps {
  faqData: FaqItem[];
}

export default function HomeClient({ faqData }: HomeClientProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const trustBadges = [
    { icon: "/images/icon1.png", title: "Quality Workmanship" },
    { icon: "/images/icon2.png", title: "Honest Service" },
    { icon: "/images/icon3.png", title: "Competitive Pricing" },
    { icon: "/images/icon4.png", title: "Free Estimates" },
  ];

  const services = [
    {
      title: "Collision Repair",
      slug: "collision-repair",
      description: "Expert collision repair for all types of vehicle damage.",
      icon: "/images/icon9.png",
      image:
        "https://images.pexels.com/photos/33749906/pexels-photo-33749906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Auto Body Repair",
      slug: "auto-body-repair",
      description: "Restore your vehicle's appearance and structural integrity.",
      icon: "/images/icon13.png",
      image:
        "https://images.pexels.com/photos/6870310/pexels-photo-6870310.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Painting & Refinishing",
      slug: "painting-refinishing",
      description: "Flawless paint and color matching for a like-new finish.",
      icon: "/images/icon10.png",
      image:
        "https://images.pexels.com/photos/6870314/pexels-photo-6870314.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Frame Straightening",
      slug: "frame-straightening",
      description: "Correct frame damage for a safer, stronger vehicle.",
      icon: "/images/icon12.png",
      image:
        "https://images.pexels.com/photos/4480507/pexels-photo-4480507.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Dent & Scratch Repair",
      slug: "dent-scratch-repair",
      description: "Remove dents, scratches and restore your vehicle's look.",
      icon: "/images/icon15.png",
      image:
        "https://images.pexels.com/photos/35149611/pexels-photo-35149611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      title: "Insurance Claims Assistance",
      slug: "insurance-claims-assistance",
      description: "We help guide you through the claims process.",
      icon: "/images/icon16.png",
      image:
        "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const beforeAfterItems = [
    {
      before:
        "https://images.pexels.com/photos/33749906/pexels-photo-33749906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      after:
        "https://images.pexels.com/photos/6873021/pexels-photo-6873021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
    {
      before:
        "https://images.pexels.com/photos/13758363/pexels-photo-13758363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      after:
        "https://images.pexels.com/photos/5233262/pexels-photo-5233262.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    },
  ];

  const makesModels = [
    "Chevrolet",
    "Ford",
    "Toyota",
    "Honda",
    "Nissan",
    "BMW",
    "Mercedes-Benz",
    "Audi",
    "Lexus",
    "RAM",
    "GMC",
  ];

  const whyChoose = [
    "Comprehensive body repair services",
    "All makes and models",
    "Foreign & domestic vehicles",
    "Professional customer service",
    "Free estimate process",
    "Quality workmanship",
  ];

  const repairSteps = [
    { icon: "/images/icon5.png", step: "1", title: "Contact TTB", desc: "Reach out by phone or online." },
    { icon: "/images/icon7.png", step: "2", title: "Discuss Damage", desc: "Tell us about your vehicle and the damage." },
    { icon: "/images/icon7.png", step: "3", title: "Request Estimate", desc: "Get a detailed repair estimate." },
    { icon: "/images/icon8.png", step: "4", title: "Repair Planning", desc: "We handle the repair process." },
    { icon: "/images/icon1.png", step: "5", title: "Completion", desc: "Pick up your vehicle with confidence." },
  ];

  return (
    <main style={{ backgroundColor: "#08090B" }}>
      {/* ── HERO ── */}
      <section
        className="relative w-full overflow-hidden"
        style={{ minHeight: "88vh", display: "flex", alignItems: "center" }}
        aria-label="Hero — TTB Auto Body & Collision Repair in Houston"
      >
        <img
          src="/images/Homebanner.png"
          alt="Crashed and fully repaired black SUV side by side in TTB Auto Body's collision repair shop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(8,9,11,0.95) 0%, rgba(8,9,11,0.75) 35%, rgba(8,9,11,0.25) 65%, rgba(8,9,11,0.55) 100%)",
            zIndex: 1,
          }}
        />

        <div className="relative w-full px-4 sm:px-6 lg:px-12 xl:px-20" style={{ zIndex: 2 }}>
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-[3px] w-12" style={{ backgroundColor: "#E50914" }} />
              <span
                className="text-sm font-semibold uppercase tracking-[0.2em]"
                style={{ fontFamily: "Inter, sans-serif", color: "#E50914" }}
              >
                TTB Auto Body &amp; Collision Repair
              </span>
            </div>

            <h1
              className="mb-6 leading-none uppercase"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(2.6rem, 6.5vw, 4.8rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
                lineHeight: 1.02,
              }}
            >
              From Collision Damage to{" "}
              <span style={{ color: "#E50914" }}>Road-Ready Confidence.</span>
            </h1>

            <p
              className="mb-8 max-w-lg leading-relaxed"
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1.05rem",
                color: "rgba(217,220,225,0.85)",
              }}
            >
              Professional auto body and collision repair for all makes and models in
              Houston, Texas. Get in touch with TTB Auto Body &amp; Collision Repair for
              a free estimate.
            </p>

            <div className="flex flex-wrap gap-4 mb-8">
              <Link
                href="/estimate"
                className="inline-flex items-center gap-2 px-8 py-4 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "1rem",
                  letterSpacing: "0.12em",
                  background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                  boxShadow: "0 4px 24px rgba(229,9,20,0.5)",
                }}
              >
                Get a Free Estimate
              </Link>
              <a
                href="tel:+12817930161"
                className="inline-flex items-center gap-2 px-8 py-4 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200 hover:bg-white/10"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "1rem",
                  letterSpacing: "0.1em",
                  color: "#D9DCE1",
                  border: "1px solid rgba(217,220,225,0.3)",
                }}
              >
                <Phone size={17} strokeWidth={2.5} />
                Call Now
              </a>
            </div>

            <div className="flex items-center gap-2">
              <MapPin size={16} color="#E50914" strokeWidth={2.5} />
              <span
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.9rem",
                  color: "rgba(217,220,225,0.75)",
                  fontWeight: 500,
                }}
              >
                Houston, TX
              </span>
            </div>
          </div>
        </div>

        {/* All Makes / Models badge */}
        <div
          className="absolute right-6 md:right-10 bottom-8 md:bottom-14 text-right hidden sm:block"
          style={{ zIndex: 2 }}
        >
          <p
            className="uppercase font-black leading-none"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              color: "#D9DCE1",
              letterSpacing: "0.06em",
            }}
          >
            All Makes
          </p>
          <p
            className="uppercase font-black leading-none"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "clamp(1.1rem, 2vw, 1.6rem)",
              color: "#D9DCE1",
              letterSpacing: "0.06em",
            }}
          >
            All Models
          </p>
          <p
            className="uppercase font-black leading-none"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)",
              color: "#E50914",
              letterSpacing: "0.04em",
            }}
          >
            Foreign &amp; Domestic
          </p>
        </div>

        <div
          className="absolute bottom-0 left-0 right-0 h-24"
          style={{ background: "linear-gradient(to bottom, transparent, #08090B)", zIndex: 2 }}
        />
      </section>

      {/* ── TRUST STRIP ── */}
      <div style={{ backgroundColor: "#0B0C0F", borderTop: "1px solid #1E2128", borderBottom: "1px solid #1E2128" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {trustBadges.map(({ icon, title }) => (
              <div key={title} className="flex flex-col items-center text-center gap-3">
                <img src={icon} alt="" className="w-28 h-28 object-contain" />
                <p
                  className="uppercase leading-tight"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontWeight: 700,
                    fontSize: "0.85rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.04em",
                  }}
                >
                  {title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <Section background="default" spacing="lg" id="services">
        <div className="mb-12">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
            style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
          >
            <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
            Our Services
          </p>
          <h2
            className="uppercase leading-tight"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            Complete Auto Body &amp; Collision Services
          </h2>
          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "0.95rem",
              color: "#8A8F9A",
              lineHeight: 1.65,
            }}
          >
            We provide expert repair and restoration services to get your vehicle back on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="group relative flex flex-col overflow-hidden rounded-[0.375rem] border transition-all duration-300 hover:-translate-y-1"
              style={{ backgroundColor: "#0F1114", borderColor: "#1E2128", boxShadow: "0 4px 24px rgba(0,0,0,0.45)" }}
            >
              <div className="relative overflow-hidden" style={{ height: "170px" }}>
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div
                  className="absolute inset-0"
                  style={{ background: "linear-gradient(180deg, rgba(8,9,11,0.1) 40%, #0F1114 100%)" }}
                />
                <div
                  className="absolute bottom-3 left-4 w-11 h-11 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "#08090B" }}
                >
                  <img src={service.icon} alt="" aria-hidden="true" className="w-8 h-8 object-contain" />
                </div>
              </div>

              <div className="flex flex-col flex-1 px-5 pt-5 pb-5">
                <h3
                  className="mb-2 uppercase leading-tight"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "1.15rem",
                    fontWeight: 700,
                    color: "#D9DCE1",
                    letterSpacing: "0.03em",
                  }}
                >
                  {service.title}
                </h3>
                <p
                  className="mb-5"
                  style={{ fontFamily: "Inter, sans-serif", fontSize: "0.87rem", color: "#8A8F9A", lineHeight: 1.6 }}
                >
                  {service.description}
                </p>

                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: "1px solid #1E2128" }}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-xs font-bold uppercase tracking-widest inline-flex items-center gap-1 transition-colors"
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

      {/* ── BEFORE & AFTER ── */}
      <Section background="alternate" spacing="lg" id="before-after">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-center">
          <div>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
              style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
            >
              <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
              Before &amp; After
            </p>
            <h2
              className="uppercase leading-tight mb-4"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 800,
                fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
                color: "#D9DCE1",
                letterSpacing: "0.02em",
              }}
            >
              Real Repairs. Real Results.
            </h2>
            <p
              className="mb-8"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.7 }}
            >
              See the difference professional collision repair can make.
            </p>
            <Link
              href="/gallery"
              className="inline-flex items-center gap-2 px-7 py-3.5 uppercase font-black tracking-widest text-white rounded-[0.375rem] transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "0.9rem",
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
              }}
            >
              View Gallery
              <ArrowRight size={16} strokeWidth={2.5} />
            </Link>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {beforeAfterItems.map((item, idx) => (
              <div
                key={idx}
                className="relative rounded-[0.375rem] overflow-hidden border"
                style={{ borderColor: "#1E2128", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
              >
                <div className="grid grid-cols-2">
                  <div className="relative">
                    <img src={item.before} alt="Before repair" className="w-full object-cover" style={{ height: "220px" }} />
                    <span
                      className="absolute bottom-3 left-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
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
                  <div className="relative">
                    <img src={item.after} alt="After repair" className="w-full object-cover" style={{ height: "220px" }} />
                    <span
                      className="absolute bottom-3 right-3 px-3 py-1 text-xs font-bold uppercase tracking-wider rounded"
                      style={{ backgroundColor: "rgba(229,9,20,0.9)", color: "#fff", fontFamily: '"Barlow Condensed", sans-serif' }}
                    >
                      After
                    </span>
                  </div>
                </div>
                <div className="absolute inset-y-0 left-1/2 w-[2px] -translate-x-1/2" style={{ backgroundColor: "#E50914" }} />
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── ALL MAKES AND MODELS ── */}
      <Section background="default" spacing="md" id="makes-models">
        <p
          className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
          style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
        >
          <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
          All Makes &amp; Models
        </p>
        <h2
          className="uppercase leading-tight mb-2"
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 800,
            fontSize: "clamp(1.8rem, 3.2vw, 2.5rem)",
            color: "#D9DCE1",
            letterSpacing: "0.02em",
          }}
        >
          We Service All Makes and Models
        </h2>
        <p
          className="mb-8"
          style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.65 }}
        >
          Foreign and domestic vehicles, including:
        </p>

        <div className="flex flex-wrap gap-3">
          {makesModels.map((make) => (
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

      {/* ── WHY CHOOSE TTB ── */}
      <Section background="alternate" spacing="none" id="why-choose" containerClassName="!max-w-full !px-0">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
          <div className="relative min-h-[320px]">
            <img
              src="https://images.pexels.com/photos/4489749/pexels-photo-4489749.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
              alt="Technician polishing a car's freshly painted surface"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, rgba(8,9,11,0.2), transparent)" }} />
          </div>

          <div className="flex flex-col justify-center px-6 sm:px-10 lg:px-16 py-16" style={{ backgroundColor: "#0E1014" }}>
            <p
              className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
              style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
            >
              <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
              Why Choose TTB
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
              Why Choose TTB?
            </h2>
            <p
              className="mb-8 max-w-md"
              style={{ fontFamily: "Inter, sans-serif", fontSize: "0.95rem", color: "#8A8F9A", lineHeight: 1.7 }}
            >
              We&apos;re committed to quality, reliability and customer satisfaction.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyChoose.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle size={18} color="#E50914" strokeWidth={2.5} className="shrink-0 mt-0.5" />
                  <span style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#D9DCE1" }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── REPAIR PROCESS ── */}
      <Section background="default" spacing="lg" id="process">
        <div className="text-center mb-14">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2"
            style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
          >
            <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
            Our Repair Process
          </p>
          <h2
            className="uppercase leading-tight"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            5 Simple Steps to Get You Back on the Road
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-8">
          {repairSteps.map((step, idx) => (
            <div key={step.step} className="relative flex flex-col items-center text-center gap-3">
              {idx < repairSteps.length - 1 && (
                <div
                  className="hidden sm:block absolute top-10 left-1/2 w-full h-[1px]"
                  style={{ backgroundColor: "#E50914", opacity: 0.4 }}
                />
              )}
              <img
                src={step.icon}
                alt=""
                className="relative w-20 h-20 object-contain z-10"
                style={{ backgroundColor: "#08090B", borderRadius: "9999px" }}
              />
              <h3
                className="uppercase leading-tight"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 700,
                  fontSize: "0.95rem",
                  color: "#D9DCE1",
                  letterSpacing: "0.03em",
                }}
              >
                {step.step}. {step.title}
              </h3>
              <p
                style={{ fontFamily: "Inter, sans-serif", fontSize: "0.8rem", color: "#8A8F9A", lineHeight: 1.5 }}
              >
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── FREE ESTIMATE CTA BANNER ── */}
      <section id="estimate" className="relative overflow-hidden w-full" aria-label="Free Estimate CTA">
        <img
          src="/images/Homebanner.png"
          alt="Crashed and fully repaired black SUV side by side in TTB's collision repair shop"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 0 }}
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(135deg, rgba(168,7,18,0.92) 0%, rgba(8,9,11,0.85) 100%)", zIndex: 1 }}
        />

        <div
          className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex flex-col lg:flex-row items-center justify-between gap-8"
          style={{ zIndex: 2 }}
        >
          <div>
            <h2
              className="uppercase leading-tight mb-2"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 900,
                fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
                color: "#fff",
                letterSpacing: "0.02em",
              }}
            >
              Ready to Get Your Vehicle Back on the Road?
            </h2>
            <p
              style={{
                fontFamily: "Inter, sans-serif",
                fontSize: "1rem",
                color: "rgba(255,255,255,0.85)",
                lineHeight: 1.6,
                maxWidth: "480px",
              }}
            >
              Contact TTB today for a free estimate.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <Link
              href="/estimate"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 uppercase font-black tracking-widest rounded-[0.375rem] transition-all duration-200 hover:bg-gray-100 active:scale-95"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "1rem",
                letterSpacing: "0.1em",
                background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
                color: "#fff",
                boxShadow: "0 4px 20px rgba(0,0,0,0.35)",
              }}
            >
              Get a Free Estimate
            </Link>
            <a
              href="tel:+12817930161"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 uppercase font-bold tracking-widest rounded-[0.375rem] transition-all duration-200"
              style={{
                fontFamily: '"Barlow Condensed", sans-serif',
                fontSize: "1rem",
                letterSpacing: "0.1em",
                color: "#fff",
                border: "1px solid rgba(255,255,255,0.4)",
              }}
            >
              <Phone size={17} strokeWidth={2.5} />
              Call Now
            </a>
          </div>
        </div>
      </section>

      {/* ── CONTACT & LOCATION ── */}
      <Section background="default" spacing="lg" id="contact">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left: Location / Contact / Trust / Map */}
          <div className="flex flex-col gap-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-3">
                  <div
                    className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#E50914" }}
                  >
                    <MapPin size={18} color="#fff" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3
                      className="text-xs uppercase mb-1 font-bold"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                    >
                      Our Location
                    </h3>
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
                      6801 Baneway Dr, Suite C
                      <br />
                      Houston, TX 77072
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
                    <h3
                      className="text-xs uppercase mb-1 font-bold"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                    >
                      Call Us
                    </h3>
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
                      <a href="tel:+12817930161" className="hover:text-white transition-colors" style={{ color: "inherit" }}>
                        +1 2817930161
                      </a>
                      <br />
                      <a href="tel:+12819759433" className="hover:text-white transition-colors" style={{ color: "inherit" }}>
                        +1 2819759433
                      </a>
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
                    <h3
                      className="text-xs uppercase mb-1 font-bold"
                      style={{ fontFamily: "Inter, sans-serif", color: "#E50914", letterSpacing: "0.1em" }}
                    >
                      Email Us
                    </h3>
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
                      <a href="mailto:ttbautorepair@gmail.com" className="hover:text-white transition-colors" style={{ color: "inherit" }}>
                        ttbautorepair@gmail.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 content-start sm:border-l" style={{ borderColor: "#1E2128" }}>
                {trustBadges.map(({ icon, title }) => (
                  <div key={title} className="flex flex-col items-center text-center gap-2 px-2">
                    <img src={icon} alt="" className="w-24 h-24 object-contain" />
                    <p
                      className="uppercase leading-tight"
                      style={{
                        fontFamily: '"Barlow Condensed", sans-serif',
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        color: "#D9DCE1",
                        letterSpacing: "0.02em",
                      }}
                    >
                      {title}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <iframe
              title="TTB Auto Body & Collision Repair location map"
              src="https://www.google.com/maps?q=6801+Baneway+Dr+Suite+C+Houston+TX+77072&output=embed"
              className="w-full rounded-[0.375rem]"
              style={{ height: "260px", border: "1px solid #1E2128" }}
              loading="lazy"
            />

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=6801+Baneway+Dr+Suite+C+Houston+TX+77072"
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
          </div>

          {/* Right: Estimate Form */}
          <EstimateForm />
        </div>
      </Section>

      {/* ── FAQ ── */}
      <Section background="alternate" spacing="lg" id="faq">
        <div className="text-center mb-12">
          <p
            className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center justify-center gap-2"
            style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
          >
            <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
            Have Questions?
          </p>
          <h2
            className="uppercase leading-tight"
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#D9DCE1",
              letterSpacing: "0.02em",
            }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div className="max-w-3xl mx-auto flex flex-col gap-3">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="rounded-[0.375rem] border overflow-hidden"
              style={{
                backgroundColor: "#0E1014",
                borderColor: openFaq === index ? "rgba(229,9,20,0.5)" : "#1E2128",
                transition: "border-color 0.2s ease",
              }}
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                aria-expanded={openFaq === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span
                  className="uppercase font-bold leading-snug"
                  style={{
                    fontFamily: '"Barlow Condensed", sans-serif',
                    fontSize: "1.05rem",
                    color: "#D9DCE1",
                    letterSpacing: "0.04em",
                  }}
                >
                  {item.question}
                </span>
                <ChevronDown
                  size={20}
                  color="#E50914"
                  strokeWidth={2.5}
                  style={{
                    flexShrink: 0,
                    transform: openFaq === index ? "rotate(180deg)" : "rotate(0deg)",
                    transition: "transform 0.25s ease",
                  }}
                />
              </button>

              {openFaq === index && (
                <div id={`faq-answer-${index}`} className="px-6 pb-5" style={{ borderTop: "1px solid #1E2128" }}>
                  <p
                    className="pt-4"
                    style={{ fontFamily: "Inter, sans-serif", fontSize: "0.9rem", color: "#8A8F9A", lineHeight: 1.7 }}
                  >
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </Section>
    </main>
  );
}
