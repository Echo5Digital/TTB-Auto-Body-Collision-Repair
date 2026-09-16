import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SITE_URL } from "@/lib/business";

export interface Crumb {
  label: string;
  href: string;
}

// Deterministic component so BreadcrumbList JSON-LD always matches the
// visible trail exactly.
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  if (items.length === 0) return null;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.label,
      item: `${SITE_URL}${item.href}`,
    })),
  };

  return (
    <nav aria-label="Breadcrumb" style={{ fontFamily: "Inter, sans-serif" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs">
        {items.map((item, i) => (
          <li key={item.href} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={12} color="#4A5060" aria-hidden="true" />}
            {i === items.length - 1 ? (
              <span aria-current="page" style={{ color: "#8A8F9A" }}>
                {item.label}
              </span>
            ) : (
              <Link
                href={item.href}
                className="transition-colors duration-200 hover:text-white"
                style={{ color: "#5a6070" }}
              >
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}
