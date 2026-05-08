"use client";

import { useState, useEffect } from "react";

interface Review {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  avatar: string;
  tag: string;
}

const reviews: Review[] = [
  {
    id: 1,
    name: "Ravi, 35",
    location: "Kakinada",
    rating: 5,
    text: "I struggled with severe acne for years, but after treatment at Sudha Skin Clinic, my skin has completely transformed! The doctors are incredibly knowledgeable, and the treatments are effective. I highly recommend them!",
    avatar: "RV",
    tag: "Severe Acne",
  },
  {
    id: 2,
    name: "Priya, 29",
    location: "Kakinada",
    rating: 5,
    text: "I had acne scars on my cheeks for a long time, and nothing seemed to work. After undergoing chemical peels and laser treatment at Sudha Skin Clinic, my scars have almost faded! My confidence has been restored.",
    avatar: "PY",
    tag: "Acne Scars",
  },
  {
    id: 3,
    name: "Karthika, 26",
    location: "Kakinada",
    rating: 5,
    text: "I had tried multiple treatments before, but Sudha Skin Clinic's approach worked wonders! My acne is under control, and my skin looks clearer and smoother. The entire team is professional and caring.",
    avatar: "KA",
    tag: "Clearer Skin",
  },
  {
    id: 4,
    name: "Ananya, 28",
    location: "Kakinada",
    rating: 5,
    text: "Nenu acne scars ni koncham alochinchi treatment start chesanu. Sudha Skin Clinic lo treatments chesi, scars kuda takkuva ayyayi. Nenu chala happy ga unna, and skin chala better feel avtundi!",
    avatar: "AY",
    tag: "Scar Treatment",
  },
  {
    id: 5,
    name: "Karthi, 29",
    location: "Kakinada",
    rating: 5,
    text: "Sudha Skin Clinic lo acne treatment start chesina tarvata, na skin chala clear ayindi. Doctor and staff chala friendly and supportive. Nenu e clinic ni andariki recommend chestha.",
    avatar: "KK",
    tag: "Acne Treatment",
  },
];

const GoogleIcon = ({ size = 22 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24">
    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
  </svg>
);

const Stars = ({ count = 5 }: { count?: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className={`w-3 h-3 sm:w-4 sm:h-4 ${i < count ? "text-amber-400" : "text-gray-200"}`} fill="currentColor" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
);

// Avatar component with initials inside circle
const AvatarCircle = ({ initials, isCenter }: { initials: string; isCenter: boolean }) => {
  const colors = [
    "bg-[#5e9a71]",
    "bg-[#b72c78]",
    "bg-[#3f7455]",
    "bg-[#8a1f58]",
    "bg-[#4f8562]",
  ];
  
  const colorIndex = initials.charCodeAt(0) % colors.length;
  const bgColor = colors[colorIndex];
  
  return (
    <div 
      className={`w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-full flex items-center justify-center flex-shrink-0
        ${isCenter ? "bg-white/30 text-white" : bgColor + " text-white"}`}
      style={isCenter ? { backgroundColor: "rgba(255,255,255,0.3)" } : {}}
    >
      <span className="text-sm sm:text-base md:text-lg font-semibold">
        {initials}
      </span>
    </div>
  );
};

export default function VoiceOfSatisfaction() {
  const [active, setActive] = useState(0);
  const [isMounted, setIsMounted] = useState(false);

  const go = (d: number) => {
    setActive((a) => (a + d + reviews.length) % reviews.length);
  };

  useEffect(() => {
    setIsMounted(true);
    const t = setInterval(() => go(1), 5500);
    return () => clearInterval(t);
  }, []);

  const getR = (offset: number) => reviews[(active + offset + reviews.length) % reviews.length];

  return (
    <section id="reviews"
      className="relative w-full overflow-hidden py-12 sm:py-16 md:py-20 px-4 sm:px-6"
      style={{ background: '#0e1a12' }}
    >
      <style>{`
        .card-hover { transition: transform 0.35s ease, box-shadow 0.35s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 24px 48px rgba(94,154,113,0.25); }
        .dot-pill { transition: width 0.3s ease, background 0.3s ease; }
        .btn-nav { transition: all 0.25s ease; }
        .btn-nav:hover { transform: scale(1.12); }
      `}</style>

      {/* Background orbs */}
      <div className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full blur-[120px] opacity-20 pointer-events-none"
        style={{ background: "radial-gradient(circle, #3f7455, #5e9a71)" }} />
      <div className="absolute -bottom-20 -left-20 w-[400px] h-[400px] rounded-full blur-[100px] opacity-15 pointer-events-none"
        style={{ background: "radial-gradient(circle, #5e9a71, #3f7455)" }} />

      {/* Decorative grid lines */}
      <div className="absolute inset-0 opacity-5 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      <div className="vos-section max-w-6xl mx-auto relative z-10">

        {/* ── Header Row ── */}
        <div className="flex flex-col sm:flex-row md:flex-row sm:items-center md:items-end justify-between mb-10 sm:mb-12 md:mb-14 gap-6 sm:gap-7 md:gap-8">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2 mb-3">
              <div className="w-6 sm:w-8 h-px bg-[#5e9a71]" />
              <span className="lp-eyebrow text-[#5e9a71] text-xs sm:text-sm md:text-base">Acne Patient Stories</span>
            </div>
            <h2 className="lp-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
              What Acne Patients in Kakinada Say about{" "}
              <span 
                className="italic inline-block"
                style={{ color: "#b72c78" }}
              >
                Sudha Skin Clinic
              </span>
            </h2>
          </div>

          {/* Google badge */}
          <div className="flex items-center gap-3 rounded-2xl px-4 sm:px-5 py-3 sm:py-4 w-fit mx-auto sm:mx-0 border border-white/15"
            style={{ background: "rgba(255,255,255,0.07)", backdropFilter: "blur(16px)" }}>
            <GoogleIcon size={24} />
            <div>
              <p className="lp-small mb-1 text-white/60 text-xs sm:text-sm">Google Rating</p>
              <div className="flex items-center gap-2">
                <Stars count={5} />
                <span className="lp-small text-amber-400 text-xs sm:text-sm">4.6 / 5</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Responsive Cards ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-5 md:gap-6 mb-10 items-stretch">
          {[0, 1, 2].map((offset) => {
            const r = getR(offset);
            const isCenter = offset === 1;
            
            const shouldShowOnMobile = offset === 0;
            const shouldShowOnTablet = offset <= 1;
            
            return (
              <div
                key={r.id + "-" + offset}
                onClick={() => setActive((active + offset) % reviews.length)}
                className={`card-hover rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-7 flex flex-col gap-4 sm:gap-1 cursor-pointer relative overflow-hidden
                  ${isCenter && isMounted ? "md:-translate-y-4 shadow-2xl" : ""}
                  ${!shouldShowOnMobile ? "hidden sm:block" : ""}
                  ${!shouldShowOnTablet ? "hidden md:block" : ""}`}
                style={
                  isCenter
                    ? { background: "linear-gradient(135deg, #b72c78 0%, #8a1f58 100%)", boxShadow: "0 30px 60px rgba(183,44,120,0.34)" }
                    : { background: "rgba(255,255,255,0.06)", backdropFilter: "blur(16px)", border: "1px solid rgba(255,255,255,0.12)" }
                }
              >
                {/* Large quote mark bg */}
                <span className="absolute top-3 right-4 sm:right-5 text-6xl sm:text-7xl md:text-8xl leading-none select-none pointer-events-none"
                  style={{ color: isCenter ? "rgba(255,255,255,0.12)" : "rgba(94,154,113,0.18)", fontFamily: "Georgia, serif" }}>
                  "
                </span>

                {/* Tag */}
                <span className={`lp-small px-2.5 sm:px-3 py-1 rounded-full w-fit text-xs sm:text-sm mb-3
                  ${isCenter ? "bg-white/25 text-white" : "bg-[#5e9a71]/20 text-[#a8d4b5]"}`}>
                  ✦ {r.tag}
                </span>

                {/* Review text */}
                <p className={`lp-body flex-1 text-sm sm:text-base ${isCenter ? "text-white" : "text-white/65"} leading-relaxed mt-3`}>
                  "{r.text.length > 120 ? r.text.substring(0, 120) + "..." : r.text}"
                </p>

                {/* Divider */}
                <div className={`h-px ${isCenter ? "bg-white/25" : "bg-white/10"} mt-4`} />

                {/* Author Section - FIXED ALIGNMENT */}
                <div className="flex items-center justify-between w-full mt-3">
                  {/* Left: Avatar + Name + Location */}
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <AvatarCircle initials={r.avatar} isCenter={isCenter} />
                    <div className="min-w-0">
                      <p className={`text-sm sm:text-base ${isCenter ? "text-white" : "text-white/90"} font-medium truncate`}>
                        {r.name}
                      </p>
                      <p className={`text-xs sm:text-sm ${isCenter ? "text-white/65" : "text-white/45"} truncate`}>
                        {r.location}
                      </p>
                    </div>
                  </div>
                  
                  {/* Right: Google Icon + Stars */}
                  <div className="flex flex-col items-end gap-1 flex-shrink-0 ml-3">
                    <GoogleIcon size={14} />
                    <Stars count={r.rating} />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Controls ── */}
        <div className="flex items-center justify-center gap-4 sm:gap-5">
          <button onClick={() => go(-1)} className="btn-nav w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white border border-white/20"
            style={{ background: "rgba(255,255,255,0.08)" }}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>

          <div className="flex items-center gap-1.5 sm:gap-2">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="dot-pill h-1.5 sm:h-2 rounded-full"
                style={{ width: i === active ? "20px" : "6px", background: i === active ? "#b72c78" : "rgba(255,255,255,0.25)" }}
              />
            ))}
          </div>

          <button onClick={() => go(1)} className="btn-nav w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full flex items-center justify-center text-white border border-white/20"
            style={{ background: "rgba(255,255,255,0.08)" }}>
            <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>

      </div>
    </section>
  );
}