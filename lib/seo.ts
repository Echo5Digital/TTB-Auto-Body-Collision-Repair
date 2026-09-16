import type { Metadata } from "next";
import { SITE_URL, business } from "./business";

interface PageSeoInput {
  title: string;
  description: string;
  path: string; // e.g. "/about" or "/" for home
}

export function buildMetadata({ title, description, path }: PageSeoInput): Metadata {
  const url = `${SITE_URL}${path === "/" ? "" : path}`;

  return {
    title,
    description,
    alternates: {
      canonical: path,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: business.name,
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
