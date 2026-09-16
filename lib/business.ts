// Centralized, verified business facts. Do not add unconfirmed details
// (hours, certifications, reviews, warranties) — use CONFIRM_BEFORE_LAUNCH
// below to track what still needs client sign-off.

export const SITE_URL = "https://example.com"; // placeholder — confirm final domain before launch

export const business = {
  name: "TTB Auto Body & Collision Repair",
  shortName: "TTB Auto Body",
  tagline: "From Collision Damage to Road-Ready Confidence.",
  address: {
    street: "6801 Baneway Dr, Suite C",
    city: "Houston",
    state: "TX",
    zip: "77072",
    full: "6801 Baneway Dr, Suite C, Houston, TX 77072",
  },
  phones: [
    { display: "281.793.0161", tel: "+12817930161" },
    { display: "281.975.9433", tel: "+12819759433" },
  ],
  email: "ttbautorepair@gmail.com",
  areaServed: "Houston, Texas",
  mapEmbedSrc:
    "https://www.google.com/maps?q=6801+Baneway+Dr+Suite+C+Houston+TX+77072&output=embed",
  directionsUrl:
    "https://www.google.com/maps/dir/?api=1&destination=6801+Baneway+Dr+Suite+C+Houston+TX+77072",
  vehicleMakes: [
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
  ],
  trustPoints: [
    "Quality Workmanship",
    "Honest Service",
    "Competitive Pricing",
    "Free Estimates",
  ],
};

export interface ServiceInfo {
  slug: string;
  title: string;
  shortDescription: string;
  metaTitle: string;
  metaDescription: string;
  keywordTheme: string;
  image: string;
}

export const services: ServiceInfo[] = [
  {
    slug: "collision-repair",
    title: "Collision Repair",
    shortDescription:
      "Expert collision repair for all types of vehicle damage, from initial assessment through final inspection.",
    metaTitle: "Collision Repair Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair provides collision repair in Houston, TX for all makes and models. Request a free estimate for your vehicle today.",
    keywordTheme: "Collision Repair Houston TX",
    image:
      "https://images.pexels.com/photos/33749906/pexels-photo-33749906.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "auto-body-repair",
    title: "Auto Body Repair",
    shortDescription:
      "Restore your vehicle's appearance and structural integrity with professional auto body repair.",
    metaTitle: "Auto Body Repair Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair offers auto body repair in Houston, TX for foreign and domestic vehicles. Get a free estimate for your repair today.",
    keywordTheme: "Auto Body Repair Houston TX",
    image:
      "https://images.pexels.com/photos/6870773/pexels-photo-6870773.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "painting-refinishing",
    title: "Painting & Refinishing",
    shortDescription:
      "Automotive paint repair and refinishing services to restore your vehicle's exterior finish.",
    metaTitle: "Auto Painting & Refinishing Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair provides automotive painting and refinishing in Houston, TX. Contact us for a free estimate on your vehicle's finish.",
    keywordTheme: "Auto Painting Houston TX",
    image:
      "https://images.pexels.com/photos/4489761/pexels-photo-4489761.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "frame-straightening",
    title: "Frame Straightening",
    shortDescription:
      "Structural repair and frame straightening services to help restore your vehicle after collision damage.",
    metaTitle: "Frame Straightening Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair offers frame straightening and structural repair in Houston, TX. Request a free estimate for your vehicle's frame damage.",
    keywordTheme: "Frame Straightening Houston TX",
    image:
      "https://images.pexels.com/photos/4488645/pexels-photo-4488645.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "dent-scratch-repair",
    title: "Dent & Scratch Repair",
    shortDescription:
      "Remove dents and scratches and restore your vehicle's cosmetic appearance.",
    metaTitle: "Dent & Scratch Repair Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair provides dent and scratch repair in Houston, TX. Get a free estimate for cosmetic repair on your vehicle.",
    keywordTheme: "Dent Repair Houston TX",
    image:
      "https://images.pexels.com/photos/35149611/pexels-photo-35149611.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
  {
    slug: "insurance-claims-assistance",
    title: "Insurance Claims Assistance",
    shortDescription:
      "Guidance through the collision repair process, including estimate preparation and documentation support.",
    metaTitle: "Insurance Claims Assistance Houston, TX | TTB Auto Body & Collision Repair",
    metaDescription:
      "TTB Auto Body & Collision Repair helps Houston, TX customers navigate the collision repair process, including estimates and insurance documentation.",
    keywordTheme: "Insurance Collision Repair Houston",
    image:
      "https://images.pexels.com/photos/4489732/pexels-photo-4489732.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  },
];

export function getServiceBySlug(slug: string): ServiceInfo | undefined {
  return services.find((s) => s.slug === slug);
}

// Items still requiring client confirmation before launch — do not
// fabricate these. Surfaced in the delivery notes, not on the live site.
export const CONFIRM_BEFORE_LAUNCH = [
  "Official business logo files (final/vector versions)",
  "Operating hours and holiday hours",
  "Existing website domain (if replacing one)",
  "Google Business Profile URL",
  "Social media profile links",
  "Company history and team/owner information",
  "Warranty policy",
  "Accepted payment methods",
  "Insurance claim process details (direct billing, partnered insurers, etc.)",
  "Whether appointments/scheduling is supported",
  "Whether towing, rental vehicles, or additional services are offered",
  "Actual repair portfolio photographs for the gallery",
];
