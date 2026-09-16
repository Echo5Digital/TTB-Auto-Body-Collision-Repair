import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  imageSrc?: string;
  imageAlt?: string;
  badge?: string;
  cta?: {
    label: string;
    href: string;
  };
  variant?: "service" | "testimonial" | "blog";
  author?: string;
  date?: string;
  rating?: number;
  className?: string;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  icon: Icon,
  imageSrc,
  imageAlt = "Card image",
  badge,
  cta,
  variant = "service",
  author,
  date,
  rating,
  className = "",
}) => {
  const renderStars = (count: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <span
        key={i}
        style={{ color: i < count ? "#E50914" : "#3a3d44" }}
        className="text-lg leading-none"
      >
        ★
      </span>
    ));
  };

  return (
    <div
      className={`group relative flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 ${className}`}
      style={{
        backgroundColor: "#0F1114",
        borderRadius: "0.375rem",
        border: "1px solid #1E2128",
        boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
      }}
    >
      {/* Top accent bar */}
      <div
        className="absolute top-0 left-0 right-0 h-[3px] transition-all duration-300 group-hover:opacity-100 opacity-70"
        style={{
          background: "linear-gradient(90deg, #E50914 0%, #A80712 100%)",
        }}
      />

      {/* Image */}
      {imageSrc && (
        <div className="relative overflow-hidden" style={{ height: "200px" }}>
          <img
            src={imageSrc}
            alt={imageAlt}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, transparent 50%, #0F1114 100%)",
            }}
          />
          {badge && (
            <span
              className="absolute top-3 right-3 px-2 py-1 text-xs font-bold uppercase tracking-wider"
              style={{
                backgroundColor: "#E50914",
                color: "#D9DCE1",
                fontFamily: "Barlow Condensed, sans-serif",
                borderRadius: "0.375rem",
                boxShadow: "0 2px 8px rgba(229,9,20,0.5)",
              }}
            >
              {badge}
            </span>
          )}
        </div>
      )}

      {/* Body */}
      <div className="flex flex-col flex-1 p-6">
        {/* Icon + Badge (no image) */}
        {!imageSrc && (
          <div className="flex items-start justify-between mb-4">
            {Icon && (
              <div
                className="flex items-center justify-center w-12 h-12 shrink-0 transition-transform duration-300 group-hover:scale-110"
                style={{
                  backgroundColor: "rgba(229,9,20,0.12)",
                  borderRadius: "0.375rem",
                  border: "1px solid rgba(229,9,20,0.25)",
                }}
              >
                <Icon size={24} color="#E50914" strokeWidth={2} />
              </div>
            )}
            {badge && (
              <span
                className="px-2 py-1 text-xs font-bold uppercase tracking-wider"
                style={{
                  backgroundColor: "#E50914",
                  color: "#D9DCE1",
                  fontFamily: "Barlow Condensed, sans-serif",
                  borderRadius: "0.375rem",
                  boxShadow: "0 2px 8px rgba(229,9,20,0.5)",
                }}
              >
                {badge}
              </span>
            )}
          </div>
        )}

        {/* Rating (testimonial) */}
        {variant === "testimonial" && rating !== undefined && (
          <div className="flex gap-0.5 mb-3">{renderStars(rating)}</div>
        )}

        {/* Title */}
        <h3
          className="mb-2 uppercase leading-tight tracking-wide transition-colors duration-200 group-hover:text-white"
          style={{
            fontFamily: "Barlow Condensed, sans-serif",
            fontSize: "1.25rem",
            fontWeight: 700,
            color: "#D9DCE1",
          }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="flex-1 leading-relaxed mb-4"
          style={{
            fontFamily: "Inter, sans-serif",
            fontSize: "0.9rem",
            color: "#8A8F9A",
            lineHeight: "1.6",
          }}
        >
          {description}
        </p>

        {/* Author / Date (blog or testimonial) */}
        {(author || date) && (
          <div
            className="flex items-center gap-3 mb-4 pt-4"
            style={{ borderTop: "1px solid #1E2128" }}
          >
            {author && (
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold uppercase shrink-0"
                  style={{
                    backgroundColor: "#E50914",
                    color: "#fff",
                    fontFamily: "Barlow Condensed, sans-serif",
                  }}
                >
                  {author.charAt(0)}
                </div>
                <span
                  style={{
                    fontFamily: "Inter, sans-serif",
                    fontSize: "0.8rem",
                    color: "#D9DCE1",
                    fontWeight: 600,
                  }}
                >
                  {author}
                </span>
              </div>
            )}
            {date && (
              <span
                className="ml-auto"
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "0.75rem",
                  color: "#555A66",
                }}
              >
                {date}
              </span>
            )}
          </div>
        )}

        {/* CTA */}
        {cta && (
          <a
            href={cta.href}
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-bold uppercase tracking-wider transition-all duration-200 hover:brightness-110 active:scale-95 mt-auto"
            style={{
              fontFamily: "Barlow Condensed, sans-serif",
              background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
              color: "#fff",
              borderRadius: "0.375rem",
              letterSpacing: "0.08em",
              boxShadow: "0 4px 14px rgba(229,9,20,0.35)",
              textDecoration: "none",
            }}
          >
            {cta.label}
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        )}
      </div>
    </div>
  );
};

export default Card;