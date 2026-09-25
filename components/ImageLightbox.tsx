"use client";

import { useEffect } from "react";
import { X } from "lucide-react";

interface ImageLightboxProps {
  src: string;
  alt: string;
  label?: string;
  onClose: () => void;
}

export default function ImageLightbox({ src, alt, label, onClose }: ImageLightboxProps) {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "rgba(8,9,11,0.92)" }}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={alt}
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

      {label ? (
        <span
          className="absolute top-4 left-4 sm:top-6 sm:left-6 px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded"
          style={{
            backgroundColor: "rgba(229,9,20,0.9)",
            color: "#fff",
            fontFamily: '"Barlow Condensed", sans-serif',
          }}
        >
          {label}
        </span>
      ) : null}

      <img
        src={src}
        alt={alt}
        onClick={(e) => e.stopPropagation()}
        className="max-w-full max-h-full object-contain rounded-[0.375rem]"
        style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.6)" }}
      />
    </div>
  );
}
