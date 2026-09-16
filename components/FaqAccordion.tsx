"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col gap-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-[0.375rem] border overflow-hidden"
          style={{
            backgroundColor: "#0E1014",
            borderColor: openIndex === index ? "rgba(229,9,20,0.5)" : "#1E2128",
            transition: "border-color 0.2s ease",
          }}
        >
          <button
            onClick={() => toggle(index)}
            className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
            aria-expanded={openIndex === index}
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
                transform: openIndex === index ? "rotate(180deg)" : "rotate(0deg)",
                transition: "transform 0.25s ease",
              }}
            />
          </button>

          {openIndex === index && (
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
  );
}
