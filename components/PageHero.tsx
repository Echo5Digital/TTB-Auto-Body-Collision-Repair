import React from "react";
import Breadcrumbs, { Crumb } from "./Breadcrumbs";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs: Crumb[];
}

export default function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: "#0B0C0F", paddingTop: "3.5rem", paddingBottom: "3rem" }}
    >
      <div
        className="absolute top-0 left-0 right-0 h-[4px]"
        style={{
          background: "linear-gradient(90deg, #E50914 0%, #A80712 60%, transparent 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(229,9,20,0.08) 0%, transparent 50%)",
        }}
      />
      <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-4">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <p
          className="text-xs uppercase tracking-[0.2em] mb-2 flex items-center gap-2"
          style={{ color: "#E50914", fontFamily: "Inter, sans-serif" }}
        >
          <span className="inline-block w-6 h-[2px]" style={{ backgroundColor: "#E50914" }} />
          {eyebrow}
        </p>
        <h1
          className="uppercase leading-tight"
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontWeight: 800,
            fontSize: "clamp(2rem, 4.5vw, 3.2rem)",
            color: "#D9DCE1",
            letterSpacing: "0.02em",
          }}
        >
          {title}
        </h1>
        {description && (
          <p
            className="mt-4 max-w-2xl"
            style={{
              fontFamily: "Inter, sans-serif",
              fontSize: "1rem",
              color: "#8A8F9A",
              lineHeight: 1.7,
            }}
          >
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
