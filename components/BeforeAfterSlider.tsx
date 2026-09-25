"use client";

import { useCallback, useRef, useState } from "react";
import { ChevronsLeftRight } from "lucide-react";
import ImageLightbox from "./ImageLightbox";

interface BeforeAfterSliderProps {
  before: string;
  after: string;
  alt: string;
  height?: number;
}

const DRAG_THRESHOLD_PX = 5;

export default function BeforeAfterSlider({ before, after, alt, height = 260 }: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [lightbox, setLightbox] = useState<"before" | "after" | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const draggingRef = useRef(false);
  const movedRef = useRef(false);
  const downPosRef = useRef({ x: 0, y: 0 });

  const updatePosition = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  const handlePointerDown = (e: React.PointerEvent) => {
    draggingRef.current = true;
    movedRef.current = false;
    downPosRef.current = { x: e.clientX, y: e.clientY };
    (e.target as Element).setPointerCapture?.(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!draggingRef.current) return;
    const dx = e.clientX - downPosRef.current.x;
    const dy = e.clientY - downPosRef.current.y;
    if (Math.hypot(dx, dy) > DRAG_THRESHOLD_PX) movedRef.current = true;
    if (movedRef.current) updatePosition(e.clientX);
  };

  const handlePointerUp = (e: React.PointerEvent) => {
    draggingRef.current = false;
    if (!movedRef.current) {
      const el = containerRef.current;
      if (el) {
        const rect = el.getBoundingClientRect();
        const pct = ((e.clientX - rect.left) / rect.width) * 100;
        setLightbox(pct <= position ? "before" : "after");
      }
    }
  };

  return (
    <>
      <div
        ref={containerRef}
        className="relative w-full select-none touch-none overflow-hidden"
        style={{ height: `${height}px`, cursor: "ew-resize" }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={() => {
          draggingRef.current = false;
        }}
      >
        <img src={after} alt={`After — ${alt}`} className="absolute inset-0 w-full h-full object-cover" draggable={false} />

        <div className="absolute inset-0 overflow-hidden" style={{ width: `${position}%` }}>
          <img
            src={before}
            alt={`Before — ${alt}`}
            className="absolute inset-0 h-full object-cover"
            style={{ width: containerRef.current ? `${containerRef.current.offsetWidth}px` : "100%", maxWidth: "none" }}
            draggable={false}
          />
        </div>

        <span
          className="absolute top-3 left-3 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider rounded pointer-events-none"
          style={{
            backgroundColor: "rgba(8,9,11,0.85)",
            color: "#D9DCE1",
            fontFamily: '"Barlow Condensed", sans-serif',
            border: "1px solid rgba(217,220,225,0.2)",
          }}
        >
          Before
        </span>
        <span
          className="absolute top-3 right-3 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-wider rounded pointer-events-none"
          style={{ backgroundColor: "rgba(229,9,20,0.9)", color: "#fff", fontFamily: '"Barlow Condensed", sans-serif' }}
        >
          After
        </span>

        <div
          className="absolute inset-y-0 pointer-events-none"
          style={{ left: `${position}%`, width: "2px", backgroundColor: "#E50914", transform: "translateX(-1px)" }}
        >
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full flex items-center justify-center"
            style={{
              width: "36px",
              height: "36px",
              backgroundColor: "#E50914",
              boxShadow: "0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            <ChevronsLeftRight size={18} color="#fff" strokeWidth={2.5} />
          </div>
        </div>
      </div>

      {lightbox ? (
        <ImageLightbox
          src={lightbox === "before" ? before : after}
          alt={`${lightbox === "before" ? "Before" : "After"} — ${alt}`}
          label={lightbox === "before" ? "Before" : "After"}
          onClose={() => setLightbox(null)}
        />
      ) : null}
    </>
  );
}
