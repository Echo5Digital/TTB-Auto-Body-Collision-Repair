"use client";

import { useMemo, useState } from "react";
import Section from "@/components/Section";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import ProjectPhotosModal from "@/components/ProjectPhotosModal";
import ImageLightbox from "@/components/ImageLightbox";
import { MoreHorizontal, Images, ChevronDown } from "lucide-react";

interface Project {
  title: string;
  before: string;
  after: string;
  photos?: string[];
}

const projects: Project[] = [
  {
    title: "Collision Repair",
    before: "/images/Image_20260924_233917_323-100kb.jpeg",
    after: "/images/Image_20260924_233917_111-100kb.jpeg",
  },
  {
    title: "Dent & Scratch Repair",
    before: "/images/Image_20260924_233958_744-70kb.jpeg",
    after: "/images/Image_20260924_233956_232-70kb.jpeg",
    photos: [
      "/images/Image_20260924_233958_744-70kb.jpeg",
      "/images/Image_20260924_233956_232-70kb.jpeg",
      "/images/Image_20260924_233957_406-70kb.jpeg",
      "/images/Image_20260924_233956_006-70kb.jpeg",
    ],
  },
  {
    title: "Auto Body Repair",
    before: "/images/Image_20260924_233916_662-80kb.jpeg",
    after: "/images/Image_20260924_234213_735%201-80kb.jpeg",
  },
  {
    title: "Painting & Refinishing",
    before: "/images/Image_20260924_233957_945-100kb.jpeg",
    after: "/images/Image_20260924_233957_666-100kb.jpeg",
  },
  {
    title: "Body Retouch",
    before: "/images/Image_20260924_233956_489-80kb.jpeg",
    after: "/images/Image_20260924_233958_670-80kb.jpeg",
  },
  {
    title: "Full Respray & Finish",
    before: "/images/Image_20260924_234057_093-70kb.jpeg",
    after: "/images/Image_20260924_234056_147-70kb.jpeg",
    photos: [
      "/images/Image_20260924_234056_060-70kb.jpeg",
      "/images/Image_20260924_234056_211-70kb.jpeg",
      "/images/Image_20260924_234057_093-70kb.jpeg",
      "/images/Image_20260924_234058_550-70kb.jpeg",
      "/images/Image_20260924_234058_478-70kb.jpeg",
      "/images/Image_20260924_234057_984-70kb.jpeg",
    ],
  },
  {
    title: "Bumper & Panel Repair",
    before: "/images/Image_20260924_234237_228-70kb.jpeg",
    after: "/images/Image_20260924_234237_814-70kb.jpeg",
    photos: [
      "/images/Image_20260924_234237_228-70kb.jpeg",
      "/images/Image_20260924_234237_814-70kb.jpeg",
      "/images/Image_20260924_234213_916-70kb.jpeg",
      "/images/Image_20260924_234214_378-70kb.jpeg",
      "/images/unnamed%202-70kb.jpg",
    ],
  },
  {
    title: "Insurance Claim Repair",
    before: "/images/Image_20260924_234237_395%201-80kb.jpeg",
    after: "/images/Image_20260924_234237_306%201-80kb.jpeg",
  },
  {
    title: "Full Vehicle Restoration",
    before: "/images/Image_20260924_234214_021-70kb.jpeg",
    after: "/images/Image_20260924_234057_984-70kb.jpeg",
    photos: [
      "/images/Image_20260924_234211_728-70kb.jpeg",
      "/images/Image_20260924_234212_426-70kb.jpeg",
      "/images/Image_20260924_234212_321-70kb.jpeg",
      "/images/Image_20260924_234212_231-70kb.jpeg",
      "/images/Image_20260924_234056_147-70kb.jpeg",
    ],
  },
];

const GRID_PAGE_SIZE = 10;

export default function GalleryClient() {
  const [activePhotos, setActivePhotos] = useState<{ title: string; photos: string[] } | null>(null);
  const [showGallery, setShowGallery] = useState(false);
  const [gridVisibleCount, setGridVisibleCount] = useState(GRID_PAGE_SIZE);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);

  const allPhotos = useMemo(() => {
    const seen = new Set<string>();
    const flat: string[] = [];
    for (const project of projects) {
      for (const src of [project.before, project.after, ...(project.photos ?? [])]) {
        if (!seen.has(src)) {
          seen.add(src);
          flat.push(src);
        }
      }
    }
    return flat;
  }, []);

  const visibleGridPhotos = allPhotos.slice(0, gridVisibleCount);
  const hasMoreGridPhotos = gridVisibleCount < allPhotos.length;

  return (
    <Section background="default" spacing="lg">
      <h2
        className="uppercase leading-tight mb-8"
        style={{
          fontFamily: '"Barlow Condensed", sans-serif',
          fontWeight: 800,
          fontSize: "clamp(1.5rem, 3vw, 2.1rem)",
          color: "#D9DCE1",
          letterSpacing: "0.02em",
        }}
      >
        Our Comprehensive Project Gallery – Real Transformations
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <div
            key={idx}
            className="rounded-[0.375rem] overflow-hidden border"
            style={{ backgroundColor: "#0E1014", borderColor: "#1E2128", boxShadow: "0 4px 24px rgba(0,0,0,0.4)" }}
          >
            <div className="relative">
              <BeforeAfterSlider before={project.before} after={project.after} alt={project.title} height={220} />
              {project.photos && project.photos.length > 0 ? (
                <button
                  type="button"
                  onClick={() => setActivePhotos({ title: project.title, photos: project.photos! })}
                  aria-label={`View all photos for ${project.title}`}
                  className="absolute bottom-3 right-3 flex items-center justify-center rounded-full transition-colors duration-150 hover:brightness-110"
                  style={{
                    width: "34px",
                    height: "34px",
                    backgroundColor: "rgba(8,9,11,0.85)",
                    border: "1px solid rgba(217,220,225,0.25)",
                  }}
                >
                  <MoreHorizontal size={18} color="#D9DCE1" />
                </button>
              ) : null}
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
                {project.title}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-10">
        <button
          type="button"
          onClick={() => setShowGallery((v) => !v)}
          className="inline-flex items-center gap-2 px-8 py-3.5 uppercase font-black tracking-widest rounded-[0.375rem] text-white transition-all duration-200 hover:brightness-110 active:scale-95"
          style={{
            fontFamily: '"Barlow Condensed", sans-serif',
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            background: "linear-gradient(135deg, #E50914 0%, #A80712 100%)",
            boxShadow: "0 4px 20px rgba(229,9,20,0.4)",
          }}
        >
          <Images size={18} strokeWidth={2.5} />
          View Our Gallery
          <ChevronDown
            size={18}
            strokeWidth={2.5}
            style={{ transform: showGallery ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
          />
        </button>
      </div>

      {showGallery ? (
        <div className="mt-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {visibleGridPhotos.map((src, idx) => (
              <button
                key={`${src}-${idx}`}
                type="button"
                onClick={() => setLightboxSrc(src)}
                className="relative rounded-[0.375rem] overflow-hidden border transition-transform duration-150 hover:scale-[1.03]"
                style={{ borderColor: "#1E2128", aspectRatio: "1 / 1" }}
              >
                <img src={src} alt={`Gallery photo ${idx + 1}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {hasMoreGridPhotos ? (
            <div className="flex justify-center mt-8">
              <button
                type="button"
                onClick={() => setGridVisibleCount((c) => Math.min(c + GRID_PAGE_SIZE, allPhotos.length))}
                className="inline-flex items-center gap-2 px-8 py-3.5 uppercase font-black tracking-widest rounded-[0.375rem] border transition-all duration-200 hover:brightness-125 active:scale-95"
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontSize: "0.9rem",
                  letterSpacing: "0.1em",
                  color: "#D9DCE1",
                  borderColor: "rgba(217,220,225,0.25)",
                  backgroundColor: "#0E1014",
                }}
              >
                Load More
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {activePhotos ? (
        <ProjectPhotosModal
          title={activePhotos.title}
          photos={activePhotos.photos}
          onClose={() => setActivePhotos(null)}
        />
      ) : null}

      {lightboxSrc ? (
        <ImageLightbox
          src={lightboxSrc}
          alt="Gallery photo"
          onClose={() => setLightboxSrc(null)}
        />
      ) : null}
    </Section>
  );
}
