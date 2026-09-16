'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Phone, ChevronRight } from 'lucide-react';

interface NavLink {
  label: string;
  route: string;
}

interface HeaderProps {
  businessName?: string;
  phone?: string;
  navLinks?: NavLink[];
  ctaLabel?: string;
  ctaRoute?: string;
}

const defaultNavLinks: NavLink[] = [
  { label: 'Home', route: '/' },
  { label: 'About', route: '/about' },
  { label: 'Services', route: '/services' },
  { label: 'Gallery', route: '/gallery' },
  { label: 'FAQs', route: '/faq' },
  { label: 'Contact', route: '/contact' },
];

export default function Header({
  businessName = 'TTB Auto Body & Collision Repair',
  phone = '(555) 123-4567',
  navLinks = defaultNavLinks,
  ctaLabel = 'Free Estimate',
  ctaRoute = '/estimate',
}: HeaderProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  const shortName = businessName.split(' ').slice(0, 3).join(' ');

  return (
    <>
      <header
        style={{
          backgroundColor: scrolled ? 'rgba(8,9,11,0.97)' : '#08090B',
          borderBottom: scrolled ? '1px solid rgba(229,9,20,0.25)' : '1px solid rgba(255,255,255,0.06)',
          transition: 'background-color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
          boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.6)' : 'none',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 50,
        }}
      >
        {/* Top bar */}
        <div
          style={{
            backgroundColor: '#E50914',
            padding: '6px 0',
          }}
        >
          <div
            style={{
              maxWidth: '1280px',
              margin: '0 auto',
              padding: '0 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              gap: '0.5rem',
            }}
          >
            <Phone size={13} color="#fff" strokeWidth={2.5} />
            <a
              href={`tel:${phone.replace(/\D/g, '')}`}
              style={{
                color: '#fff',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 600,
                letterSpacing: '0.03em',
                textDecoration: 'none',
              }}
            >
              {phone}
            </a>
            <span style={{ color: 'rgba(255,255,255,0.5)', margin: '0 0.5rem' }}>|</span>
            <span
              style={{
                color: 'rgba(255,255,255,0.85)',
                fontFamily: 'Inter, sans-serif',
                fontSize: '0.78rem',
                fontWeight: 400,
              }}
            >
              Mon–Sat: 8am–6pm
            </span>
          </div>
        </div>

        {/* Main nav */}
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            padding: '0 1.5rem',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: '92px',
          }}
        >
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/ttblogo.png"
              alt="TTB Auto Body & Collision Repair"
              style={{
                width: '84px',
                height: '84px',
                objectFit: 'contain',
                flexShrink: 0,
              }}
            />
          </Link>

          {/* Desktop nav */}
          <nav
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            className="desktop-nav"
          >
            {navLinks.map((link) => (
              <Link
                key={link.route}
                href={link.route}
                style={{
                  fontFamily: '"Barlow Condensed", sans-serif',
                  fontWeight: 600,
                  fontSize: '0.95rem',
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: 'rgba(217,220,225,0.8)',
                  textDecoration: 'none',
                  padding: '0.4rem 0.75rem',
                  borderRadius: '0.375rem',
                  transition: 'color 0.2s ease, background-color 0.2s ease',
                  whiteSpace: 'nowrap',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(229,9,20,0.1)';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,220,225,0.8)';
                  (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
                }}
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href={ctaRoute}
              style={{
                marginLeft: '0.5rem',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.4rem',
                background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)',
                color: '#fff',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 700,
                fontSize: '0.95rem',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                textDecoration: 'none',
                padding: '0.55rem 1.1rem',
                borderRadius: '0.375rem',
                boxShadow: '0 2px 14px rgba(229,9,20,0.4)',
                transition: 'filter 0.2s ease, box-shadow 0.2s ease, transform 0.15s ease',
                whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = 'brightness(1.12)';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 20px rgba(229,9,20,0.55)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.filter = 'none';
                (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 2px 14px rgba(229,9,20,0.4)';
                (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)';
              }}
            >
              {ctaLabel}
              <ChevronRight size={15} strokeWidth={2.5} />
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              background: 'transparent',
              border: '1px solid rgba(217,220,225,0.15)',
              borderRadius: '0.375rem',
              color: '#D9DCE1',
              width: '42px',
              height: '42px',
              cursor: 'pointer',
              transition: 'border-color 0.2s ease, background-color 0.2s ease',
              flexShrink: 0,
            }}
            className="mobile-hamburger"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 48,
            backgroundColor: 'rgba(0,0,0,0.65)',
            backdropFilter: 'blur(3px)',
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile drawer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          bottom: 0,
          width: '280px',
          zIndex: 49,
          backgroundColor: '#0E0F12',
          borderLeft: '1px solid rgba(229,9,20,0.2)',
          transform: mobileOpen ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          display: 'flex',
          flexDirection: 'column',
          overflowY: 'auto',
        }}
        aria-hidden={!mobileOpen}
      >
        {/* Drawer header */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '1.25rem 1.25rem 1rem',
            borderBottom: '1px solid rgba(255,255,255,0.07)',
          }}
        >
          <span
            style={{
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 800,
              fontSize: '1.1rem',
              color: '#D9DCE1',
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            Menu
          </span>
          <button
            onClick={() => setMobileOpen(false)}
            aria-label="Close menu"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'rgba(217,220,225,0.6)',
              cursor: 'pointer',
              padding: '0.25rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <X size={22} />
          </button>
        </div>

        {/* Drawer links */}
        <nav style={{ flex: 1, padding: '1rem 0' }}>
          {navLinks.map((link, index) => (
            <Link
              key={link.route}
              href={link.route}
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.85rem 1.25rem',
                fontFamily: '"Barlow Condensed", sans-serif',
                fontWeight: 600,
                fontSize: '1.05rem',
                letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: 'rgba(217,220,225,0.85)',
                textDecoration: 'none',
                borderBottom: index < navLinks.length - 1 ? '1px solid rgba(255,255,255,0.05)' : 'none',
                transition: 'color 0.2s ease, background-color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = '#fff';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'rgba(229,9,20,0.08)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLAnchorElement).style.color = 'rgba(217,220,225,0.85)';
                (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent';
              }}
            >
              {link.label}
              <ChevronRight size={16} strokeWidth={2} style={{ opacity: 0.4 }} />
            </Link>
          ))}
        </nav>

        {/* Drawer CTA */}
        <div style={{ padding: '1.25rem', borderTop: '1px solid rgba(255,255,255,0.07)' }}>
          <Link
            href={ctaRoute}
            onClick={() => setMobileOpen(false)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: 'linear-gradient(135deg, #E50914 0%, #A80712 100%)',
              color: '#fff',
              fontFamily: '"Barlow Condensed", sans-serif',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              padding: '0.85rem 1rem',
              borderRadius: '0.375rem',
              boxShadow: '0 2px 18px rgba(229,9,20,0.4)',
              marginBottom: '0.75rem',
            }}
          >
            {ctaLabel}
            <ChevronRight size={16} strokeWidth={2.5} />
          </Link>
          <a
            href={`tel:${phone.replace(/\D/g, '')}`}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              border: '1px solid rgba(217,220,225,0.2)',
              borderRadius: '0.375rem',
              padding: '0.75rem 1rem',
              color: '#D9DCE1',
              fontFamily: 'Inter, sans-serif',
              fontWeight: 600,
              fontSize: '0.9rem',
              textDecoration: 'none',
              transition: 'border-color 0.2s ease',
            }}
          >
            <Phone size={15} strokeWidth={2.5} />
            {phone}
          </a>
        </div>
      </div>

      {/* Spacer to offset fixed header */}
      <div style={{ height: '128px' }} aria-hidden="true" />

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}