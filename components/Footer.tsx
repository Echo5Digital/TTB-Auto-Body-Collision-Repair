'use client';

import React from 'react';
import Link from 'next/link';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Twitter, ChevronRight, Shield, ArrowRight } from 'lucide-react';

interface FooterLink {
  label: string;
  route: string;
}

interface FooterProps {
  businessName?: string;
  tagline?: string;
  phone?: string;
  email?: string;
  address?: string;
  hours?: string;
  links?: FooterLink[];
  facebookUrl?: string;
  instagramUrl?: string;
  twitterUrl?: string;
}

const defaultLinks: FooterLink[] = [
  { label: 'Home', route: '/' },
  { label: 'Collision Repair', route: '/#services' },
  { label: 'Auto Body Repair', route: '/#services' },
  { label: 'Car Painting', route: '/#services' },
  { label: 'Frame Straightening', route: '/#services' },
  { label: 'Dent & Scratch Repair', route: '/#services' },
  { label: 'Insurance Claims', route: '/#services' },
  { label: 'Before & After', route: '/#before-after' },
  { label: 'Get a Free Estimate', route: '/#estimate' },
  { label: 'Contact Us', route: '/#contact' },
  { label: 'Location', route: '/#location' },
];

export default function Footer({
  businessName = 'TTB Auto Body & Collision Repair',
  tagline = 'Precision repairs. Flawless finishes. Trusted by drivers for years.',
  phone = '(555) 123-4567',
  email = 'info@ttbautobody.com',
  address = '1234 Auto Drive, Suite 100, Los Angeles, CA 90001',
  hours = 'Mon–Fri: 8am–6pm | Sat: 9am–4pm',
  links = defaultLinks,
  facebookUrl = '#',
  instagramUrl = '#',
  twitterUrl = '#',
}: FooterProps) {
  const serviceLinks = links.filter(l =>
    ['Collision Repair', 'Auto Body Repair', 'Car Painting', 'Frame Straightening', 'Dent & Scratch Repair', 'Insurance Claims'].includes(l.label)
  );

  const quickLinks = links.filter(l =>
    ['Home', 'Before & After', 'Get a Free Estimate', 'Contact Us', 'Location'].includes(l.label)
  );

  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: '#08090B',
        color: '#D9DCE1',
        fontFamily: 'Inter, sans-serif',
      }}
    >
      {/* Top CTA Strip */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          backgroundColor: '#0B0C0F',
          backgroundImage: 'url(/images/cta-bg.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <div
          className="footer-cta-content"
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '1.5rem 2rem',
            position: 'relative',
            zIndex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
            <div
              style={{
                width: '2.25rem',
                height: '2.25rem',
                borderRadius: '9999px',
                border: '2px solid #E50914',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0,
                marginTop: '0.1rem',
              }}
            >
              <Shield size={16} color="#E50914" fill="#E50914" fillOpacity={0.15} />
            </div>
            <div>
              <span
                style={{
                  fontFamily: 'Barlow Condensed, sans-serif',
                  fontSize: '1.35rem',
                  fontWeight: 800,
                  color: '#fff',
                  textTransform: 'uppercase',
                  letterSpacing: '0.03em',
                  display: 'block',
                  lineHeight: 1.2,
                }}
              >
                Free Estimates <span style={{ fontWeight: 400, opacity: 0.9 }}>— No Obligation</span>
              </span>
              <span
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '0.85rem',
                  color: 'rgba(255,255,255,0.7)',
                  fontWeight: 400,
                }}
              >
                Get a quick, accurate repair cost estimate for your vehicle damage.
              </span>
            </div>
          </div>

          <Link
            href="/#estimate"
            className="inline-flex items-center gap-2 hover:brightness-110 transition-all duration-200"
            style={{
              background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)',
              color: '#fff',
              fontFamily: 'Barlow Condensed, sans-serif',
              fontWeight: 700,
              fontSize: '0.95rem',
              textTransform: 'uppercase',
              letterSpacing: '0.06em',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              textDecoration: 'none',
              boxShadow: '0 4px 16px rgba(229,9,20,0.45)',
              whiteSpace: 'nowrap',
            }}
          >
            Get Your Free Estimate
            <ArrowRight size={16} strokeWidth={2.5} />
          </Link>
        </div>

        <img
          src="/images/car.png"
          alt=""
          aria-hidden="true"
          style={{
            position: 'absolute',
            right: '3.5rem',
            top: '50%',
            transform: 'translateY(-50%)',
            height: 'auto',
            width: '420px',
            maxWidth: '34vw',
            objectFit: 'contain',
            pointerEvents: 'none',
            zIndex: 0,
            display: 'none',
          }}
          className="footer-cta-car"
        />
      </div>

      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '3.5rem 2rem 2rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '2.5rem',
        }}
      >
        {/* Brand Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div>
            <div style={{ marginBottom: '0.5rem' }}>
              <img
                src="/images/ttblogo.png"
                alt="TTB Auto Body & Collision Repair"
                style={{ width: '96px', height: '96px', objectFit: 'contain' }}
              />
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: '#9aa0ac',
                lineHeight: 1.6,
                marginTop: '0.75rem',
              }}
            >
              {tagline}
            </p>
          </div>

          {/* Social Icons */}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '0.25rem' }}>
            {[
              { href: facebookUrl, Icon: Facebook, label: 'Facebook' },
              { href: instagramUrl, Icon: Instagram, label: 'Instagram' },
              { href: twitterUrl, Icon: Twitter, label: 'Twitter' },
            ].map(({ href, Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                style={{
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: '0.375rem',
                  backgroundColor: '#151619',
                  border: '1px solid #2a2d34',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'background-color 0.2s, border-color 0.2s',
                  textDecoration: 'none',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#E50914';
                  e.currentTarget.style.borderColor = '#E50914';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#151619';
                  e.currentTarget.style.borderColor = '#2a2d34';
                }}
              >
                <Icon size={15} color="#D9DCE1" />
              </a>
            ))}
          </div>
        </div>

        {/* Services Column */}
        <div>
          <h3
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '1.25rem',
              paddingBottom: '0.6rem',
              borderBottom: '2px solid #E50914',
              display: 'inline-block',
            }}
          >
            Our Services
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {serviceLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.route}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.9rem',
                    color: '#9aa0ac',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E50914')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9aa0ac')}
                >
                  <ChevronRight size={13} color="#E50914" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '1.25rem',
              paddingBottom: '0.6rem',
              borderBottom: '2px solid #E50914',
              display: 'inline-block',
            }}
          >
            Quick Links
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {quickLinks.map(link => (
              <li key={link.label}>
                <Link
                  href={link.route}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.35rem',
                    fontSize: '0.9rem',
                    color: '#9aa0ac',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#E50914')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#9aa0ac')}
                >
                  <ChevronRight size={13} color="#E50914" />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h3
            style={{
              fontFamily: 'Barlow Condensed, sans-serif',
              fontSize: '1.1rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              color: '#fff',
              marginBottom: '1.25rem',
              paddingBottom: '0.6rem',
              borderBottom: '2px solid #E50914',
              display: 'inline-block',
            }}
          >
            Contact Us
          </h3>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <li>
              <a
                href={`tel:${phone.replace(/\D/g, '')}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  textDecoration: 'none',
                  color: '#9aa0ac',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E50914')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9aa0ac')}
              >
                <Phone size={16} color="#E50914" style={{ marginTop: '2px', flexShrink: 0 }} />
                {phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${email}`}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '0.65rem',
                  textDecoration: 'none',
                  color: '#9aa0ac',
                  fontSize: '0.9rem',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#E50914')}
                onMouseLeave={e => (e.currentTarget.style.color = '#9aa0ac')}
              >
                <Mail size={16} color="#E50914" style={{ marginTop: '2px', flexShrink: 0 }} />
                {email}
              </a>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <MapPin size={16} color="#E50914" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#9aa0ac', lineHeight: 1.5 }}>{address}</span>
            </li>
            <li style={{ display: 'flex', alignItems: 'flex-start', gap: '0.65rem' }}>
              <Clock size={16} color="#E50914" style={{ marginTop: '2px', flexShrink: 0 }} />
              <span style={{ fontSize: '0.9rem', color: '#9aa0ac', lineHeight: 1.5 }}>{hours}</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
        }}
      >
        <div style={{ height: '1px', backgroundColor: '#1e2128' }} />
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '1.25rem 2rem',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '0.75rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <p style={{ fontSize: '0.8rem', color: '#5a6070', margin: 0 }}>
          &copy; {currentYear} {businessName}. All rights reserved.
        </p>
        <div style={{ display: 'flex', gap: '1.25rem' }}>
          {['Privacy Policy', 'Terms of Service'].map(item => (
            <a
              key={item}
              href="#"
              style={{
                fontSize: '0.8rem',
                color: '#5a6070',
                textDecoration: 'none',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.color = '#E50914')}
              onMouseLeave={e => (e.currentTarget.style.color = '#5a6070')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>

      <style>{`
        @media (min-width: 900px) {
          .footer-cta-car {
            display: block !important;
          }
          .footer-cta-content {
            justify-content: flex-start !important;
            padding-right: 420px !important;
          }
        }
      `}</style>
    </footer>
  );
}