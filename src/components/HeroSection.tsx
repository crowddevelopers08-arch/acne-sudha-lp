"use client";

import { useEffect } from 'react';
import BookingButton from './BookingButton';

const trustItems = [
  { icon: 'health_and_safety', line1: '3–4 Weeks to First', line2: 'Results' },
  { icon: 'verified_user', line1: '100% Doctor ', line2: 'Performed' },
  { icon: 'translate', line1: 'Telugu', line2: 'Speaking Doctor' },
  { icon: 'workspace_premium', line1: '10+ Years', line2: 'of Expertise' },
];

const stats = [
  { value: '3–4', label: 'Weeks to First Results' },
  { value: '100%', label: 'Doctor Performed' },
  { value: 'Telugu', label: ' Speaking Doctor' },
  { value: 'Treatment', label: ' Planned by Dermatologists' },
];

export const HeroSection = () => {
  useEffect(() => {
    /* Load Google Fonts + Material Icons if not already present */
    const ids = ['lumina-gfonts', 'lumina-micons'];
    const hrefs = [
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Inter:wght@300;400;500&display=swap',
      'https://fonts.googleapis.com/icon?family=Material+Icons+Round',
    ];
    hrefs.forEach((href, i) => {
      if (!document.getElementById(ids[i])) {
        const link = document.createElement('link');
        link.id = ids[i];
        link.rel = 'stylesheet';
        link.href = href;
        document.head.appendChild(link);
      }
    });
  }, []);

  return (
    <div className="font-['Inter',sans-serif] bg-[#0e1a12] overflow-hidden">
      <style>{`
        @keyframes hero-shimmer {
          0%   { transform: translateX(-120%) skewX(-18deg); }
          100% { transform: translateX(320%)  skewX(-18deg); }
        }
        @keyframes hero-pulse {
          0%   { transform: scale(1);   opacity: 0.55; }
          100% { transform: scale(1.7); opacity: 0; }
        }
        .hbtn {
          position: relative;
          overflow: hidden;
          transition: transform 0.28s cubic-bezier(.4,0,.2,1),
                      box-shadow 0.28s ease,
                      background 0.28s ease,
                      border-color 0.28s ease;
        }
        .hbtn::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg,
            transparent 0%, rgba(255,255,255,0.26) 50%, transparent 100%);
          transform: translateX(-120%) skewX(-18deg);
        }
        .hbtn:hover::before {
          animation: hero-shimmer 0.55s ease forwards;
        }
        .hbtn:hover  { transform: translateY(-3px) scale(1.02); }
        .hbtn:active { transform: translateY(-1px) scale(0.99); }

        .hbtn-green:hover {
          background: #4f8562 !important;
          box-shadow: 0 14px 32px rgba(94,154,113,0.5);
        }
        .hbtn-wa:hover {
          background: #9e225e !important;
          border-color: #9e225e !important;
          box-shadow: 0 14px 32px rgba(183,44,120,0.48);
        }

        /* ping dot on WhatsApp button */
        .hbtn-ping {
          position: absolute;
          top: -3px; right: -3px;
          width: 10px; height: 10px;
          border-radius: 50%;
          background: #4ade80;
        }
        .hbtn-ping::after {
          content: '';
          position: absolute;
          inset: 0;
          border-radius: 50%;
          background: #4ade80;
          animation: hero-pulse 1.6s ease-out infinite;
        }
        @media (max-width: 639px) {
          .hero-content-mobile {
            background-image: linear-gradient(rgba(10,18,9,0.65), rgba(10,18,9,0.65)), url('/images23.jpg') !important;
            background-size: cover !important;
            background-position: top center !important;
          }
        }
      `}</style>
      {/* ── BANNER ── */}
      <div className="hero-banner relative grid grid-cols-1 lg:grid-cols-2 min-h-[580px] overflow-hidden">
        {/* Left image pane - Hidden on mobile (bg image used instead), visible sm+ */}
        <div className="hidden sm:block relative overflow-hidden min-h-[320px] sm:min-h-[380px] lg:min-h-full">
          <img
            alt="Radiant Skin"
            className="w-full h-full object-cover object-top block"
            src="/images23.jpg"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0e1a12] lg:via-transparent via-55% to-100%" />
          <div className="absolute bottom-0 left-0 right-0 h-[120px] bg-gradient-to-t from-[#0e1a12] to-transparent" />
          
        </div>

        {/* Right content pane - Mobile: Over bg image, Tablet/Desktop: Same as before */}
        <div className="hero-content-mobile relative sm:bg-[#17251a] flex flex-col justify-center px-5 sm:px-6 md:px-8 lg:px-11 py-8 sm:py-10 md:py-12 lg:py-10 gap-5 sm:gap-6 md:gap-7">
          <div className="absolute top-0 right-0 w-16 sm:w-20 h-16 sm:h-20 border-t border-r border-[#b72c78]/20" />
          <div className="absolute bottom-0 left-0 w-16 sm:w-20 h-16 sm:h-20 border-b border-l border-[#b72c78]/20" />

          {/* Headline */}
          <div>
            <span className="inline-flex items-center gap-1.5 mb-1.5 sm:mb-2 px-3 py-1 rounded-full border border-[#5e9a71]/40 bg-[#5e9a71]/10 text-[#5e9a71] text-xs font-medium tracking-wide">
              <span className="w-1.5 h-1.5 rounded-full bg-[#5e9a71] inline-block" />
                You Don't Have to Hide Any More. Advanced
            </span>
            <h1 className="lp-title hidden sm:block mb-2 sm:mb-2.5 max-sm:text-xl text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              Best Acne Clinic<br />
              <span className="italic inline-block" style={{ color: "#b72c78" }}>
              in Kakinada · Clear  
              <span style={{ color: "#fff" }}> skin starts here.</span>
              </span>
            </h1>
            <h1 className="lp-title block sm:hidden mb-2 text-white text-lg">
              Best Acne Clinic 
             <span className="italic inline-block" style={{ color: "#b72c78" }}>
               in Kakinada · Clear 
            <span style={{ color: "#fff" }}> skin starts here.</span>
            </span>
               
            </h1>
            <p className="lp-body text-white/80 sm:text-white/40 text-sm sm:text-base">
              Now Available Right Here in Kakinada.
              <br className="hidden sm:block" />
              Visit Sudha Skin Clinic and get best treatment
            </p>
          </div>

          {/* Trust badges - Wrap on mobile, flex on tablet */}
          <div className="grid grid-cols-2 sm:hidden gap-3">
            {trustItems.map((item) => (
              <div key={item.line1} className="flex items-center gap-1.5">
                <div className="w-7 h-7 sm:w-[34px] sm:h-[34px] rounded-full bg-[#5e9a71]/12 border border-[#b72c78]/25 flex items-center justify-center shrink-0">
                  <span className="material-icons-round text-sm sm:text-base text-[#5e9a71]">
                    {item.icon}
                  </span>
                </div>
                <p className="lp-small tracking-[0.04em] sm:tracking-[0.06em] uppercase text-white/80 text-xs sm:text-sm">
                  {item.line1}<br />{item.line2}
                </p>
              </div>
            ))}
          </div>
          
          {/* ── CTA STRIP ── */}
          <div className="flex flex-col sm:flex-row justify-start gap-3">

            {/* Primary — Book Consultation */}
            <BookingButton
              className="hbtn hbtn-green inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base w-full sm:w-auto bg-[#5e9a71] shadow-[0_6px_20px_rgba(94,154,113,0.32)]"
            >
              <span className="material-icons-round text-[17px]">calendar_today</span>
              Book Your Consultation
            </BookingButton>

            {/* Secondary — WhatsApp */}
            <a
              href="https://wa.me/+91 9553033366"
              target="_blank"
              rel="noreferrer"
              className="hbtn hbtn-wa inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-full text-white font-semibold text-sm sm:text-base w-full sm:w-auto"
              style={{ background: '#b72c78', border: '2px solid #b72c78', boxShadow: '0 6px 20px rgba(183,44,120,0.28)', textDecoration: 'none', position: 'relative' }}
            >
              <span className="hbtn-ping" />
              <svg width="17" height="17" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
              </svg>
              WhatsApp Us
            </a>
          </div>

          {/* ── WARNING ALERT ── */}
          <div style={{
            display: 'flex', gap: '12px', alignItems: 'flex-start',
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid #b72c78',
            borderRadius: '10px',
            padding: '14px 16px',
          }}>
            <span style={{ fontSize: '16px', flexShrink: 0, marginTop: '1px' }}>⚠️</span>
            <div>
              <p style={{ margin: '0 0 4px', fontSize: '13px', fontWeight: 700, color: '#f5c842', lineHeight: 1.3 }}>
                Most acne products treat the symptom, not the cause
              </p>
              <p style={{ margin: 0, fontSize: '12px', lineHeight: 1.6, color: 'rgba(255,255,255,0.65)', fontWeight: 400 }}>
                Hormonal acne, bacterial acne, and fungal acne all need different treatments.
                The wrong product makes it worse — or does nothing at all.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ── DIVIDER ── */}
      <div className="h-px bg-gradient-to-r from-transparent via-[#5e9a71]/40 to-transparent" />

      {/* ── STATS BAR ── */}
      <div className="hidden sm:block bg-[#0e1a12] px-5 sm:px-6 md:px-8 lg:px-11 py-6 sm:py-8 md:py-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-0">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`
                ${i === 0 ? 'pr-3 sm:pr-6' : i === stats.length - 1 ? 'pl-3 sm:pl-6' : 'px-3 sm:px-6'}
                ${i % 2 === 1 && i < 2 ? 'border-l border-white/10 sm:border-l-0' : ''}
                ${i >= 2 && i % 2 === 0 ? 'border-t border-white/10 sm:border-t-0' : ''}
                ${i > 0 && i < 2 ? 'sm:border-l sm:border-white/10' : ''}
                ${i > 1 ? 'sm:border-l sm:border-white/10' : ''}
                ${i === 2 ? 'sm:border-t-0' : ''}
                pt-3 sm:pt-0
              `}
            >
              <p className="lp-stat mb-1 sm:mb-1.5 text-[#b72c78] text-base sm:text-lg md:text-xl">
                {s.value}
              </p>
              <p className="lp-small tracking-[0.06em] sm:tracking-[0.09em] uppercase text-white/35 text-xs sm:text-sm">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;