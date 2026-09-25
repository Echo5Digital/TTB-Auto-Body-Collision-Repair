"use client";

import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface ProjectPhotosModalProps {
  title: string;
  photos: string[];
  initialIndex?: number;
  onClose: () => void;
}

export default function ProjectPhotosModal({ title, photos, initialIndex = 0, onClose }: ProjectPhotosModalProps) {
  const [index, setIndex] = useState(initialIndex);

  const goPrev = () => setIndex((i) => (i - 1 + photos.length) % photos.length);
  const goNext = () => setIndex((i) => (i + 1) % photos.length);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [photos.length, onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "rgba(8,9,11,0.92)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={`${title} — photo ${index + 1} of ${photos.length}`}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute top-4 right-4 sm:top-6 sm:right-6 flex items-center justify-center rounded-full transition-colors duration-150 hover:brightness-110"
        style={{ width: "40px", height: "40px", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(217,220,225,0.25)" }}
      >
        <X size={20} color="#D9DCE1" />
      </button>

      <span
        className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded"
        style={{
          backgroundColor: "rgba(229,9,20,0.9)",
          color: "#fff",
          fontFamily: '"Barlow Condensed", sans-serif',
        }}
      >
        {title} — {index + 1} / {photos.length}
      </span>

      {photos.length > 1 ? (
        <>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            aria-label="Previous photo"
            className="absolute left-2 sm:left-6 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors duration-150 hover:brightness-110"
            style={{ width: "44px", height: "44px", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(217,220,225,0.25)" }}
          >
            <ChevronLeft size={22} color="#D9DCE1" />
          </button>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            aria-label="Next photo"
            className="absolute right-2 sm:right-6 top-1/2 -translate-y-1/2 flex items-center justify-center rounded-full transition-colors duration-150 hover:brightness-110"
            style={{ width: "44px", height: "44px", backgroundColor: "rgba(255,255,255,0.1)", border: "1px solid rgba(217,220,225,0.25)" }}
          >
            <ChevronRight size={22} color="#D9DCE1" />
          </button>
        </>
      ) : null}

      <img
        src={photos[index]}
        alt={`${title} — photo ${index + 1} of ${photos.length}`}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-[0.375rem]"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
      />

      {photos.length > 1 ? (
        <div
          className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex gap-2"
          onClick={(e) => e.stopPropagation()}
        >
          {photos.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to photo ${i + 1}`}
              className="rounded-full transition-all duration-150"
              style={{
                width: i === index ? "20px" : "8px",
                height: "8px",
                backgroundColor: i === index ? "#E50914" : "rgba(217,220,225,0.4)",
              }}
            />
          ))}
        </div>
      ) : null}
    </div>
  );
}
