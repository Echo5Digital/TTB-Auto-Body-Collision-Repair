import type { Metadata } from "next";
import "./globals.css";
import { SITE_URL, business } from "@/lib/business";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "TTB Auto Body & Collision Repair | Houston, TX",
    template: "%s",
  },
  description:
    "TTB Auto Body & Collision Repair in Houston, TX offers collision repair, auto body repair, painting, refinishing, dent repair, and more. Request a free estimate.",
};

// Sitewide JSON-LD. Only verified facts — no fabricated hours, ratings,
// reviews, or credentials. AutoBodyShop is a valid schema.org LocalBusiness
// subtype for this business.
const SITEWIDE_SCHEMA = [
  {
    "@context": "https://schema.org",
    "@type": "AutoBodyShop",
    name: business.name,
    url: SITE_URL,
    telephone: business.phones[0].tel,
    email: business.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.state,
      postalCode: business.address.zip,
      addressCountry: "US",
    },
    areaServed: business.areaServed,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: business.name,
    url: SITE_URL,
  },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@400;500;600;700;800;900&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased" style={{ backgroundColor: "#08090B" }}>
        {SITEWIDE_SCHEMA.map((schema: Record<string, unknown>, i: number) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
        {children}
      </body>
    </html>
  );
}
