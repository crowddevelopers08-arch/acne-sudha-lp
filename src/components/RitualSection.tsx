"use client";

import { useState, useEffect } from "react";
import Image from "next/image"; // Using Next.js Image component for better handling

const doctors = [
  {
    name: "Dr.Ravi vadrevu",
    role: "MD.DD",
    specialty: "Skin & Laser Expert",
    qualifications: "Clinical Director",
    image: "/Dr-Ravi-Vadrevu.png",
    exp: "40+ Yrs",
    experience: "40+ Years of Experience",
    featured: true,
    description: "Leading dermatologist with extensive experience in acne treatment and laser procedures.",
  },
  {
    name: "Dr.VKG Sudha",
    role: "MD,DVL",
    specialty: "Hair Restoration",
    qualifications: "Senior Consultant",
    image: "/sudha.jpeg",
    exp: "10+ Yrs",
    experience: "10+ Years of Experience",
    featured: false,
    description: "Specialized in hair restoration and advanced dermatological treatments.",
  },
  {
    name: "Dr.K.Chandrakala",
    role: "MBBS,DD",
    specialty: "Acne & Scar Care",
    qualifications: "Consultant",
    image: "/chandrakala.jpeg",
    exp: "25+ Yrs",
    experience: "25+ Years of Experience",
    featured: false,
    description: "Expert in acne management and scar treatment with proven results.",
  },
];

// Mobile & Tablet Carousel Component
const MobileCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % doctors.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="specialists" className="lg:hidden">
      {/* Carousel Container */}
      <div className="relative px-2">
        {/* Main Card */}
        <div className="overflow-hidden rounded-2xl">
          <div
            className="transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            <div className="flex">
              {doctors.map((doctor, idx) => (
                <div key={idx} className="w-full flex-shrink-0 px-2">
                  <article className="relative min-h-[580px] overflow-hidden rounded-2xl border border-[#115057] bg-[#07171a] shadow-xl">
                    {/* Doctor Image - Fixed positioning */}
                    <div className="absolute inset-0 h-full w-full">
                      <img
                        alt={doctor.name}
                        className="h-full w-full object-cover object-center"
                        src={doctor.image}
                        onError={(e) => {
                          // Fallback if image doesn't load
                          e.currentTarget.src = "https://via.placeholder.com/400x600?text=Doctor+Image";
                        }}
                      />
                    </div>
                    
                    {/* Gradient Overlay for better text readability */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#07171a] via-[#07171a]/70 to-transparent" />
                    
                    {/* Additional overlay for bottom text */}
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#07171a]/90" />

                    {/* Badge */}
                    <div className="absolute left-4 top-4 z-10 border border-[#b72c78]/40 bg-[#101810]/80 px-3 py-1.5 backdrop-blur-sm rounded-full">
                      <p className="text-xs uppercase tracking-wider text-[#5e9a71]">
                        {doctor.featured ? "Lead Dermatologist" : "Treatment Specialist"}
                      </p>
                    </div>

                    {/* Content Section */}
                    <div className="absolute bottom-0 left-0 right-0 z-10 p-6">
                      <h3 className="text-2xl font-bold text-white">{doctor.name}</h3>
                      <p className="mt-1 text-sm text-[#c8e3e5]">{doctor.qualifications}</p>
                      <p className="mt-3 text-sm text-white/80 leading-relaxed">{doctor.description}</p>

                      <div className="mt-5 flex gap-3">
                        <div className="flex-1 border-l-4 border-[#b72c78] bg-[#122017]/88 px-4 py-2 rounded-r">
                          <p className="text-xs uppercase tracking-wider text-white/42">
                            Experience
                          </p>
                          <p className="text-lg font-semibold text-[#b72c78]">{doctor.exp}</p>
                        </div>
                        <div className="flex-1 border-l-4 border-[#b72c78] bg-[#122017]/88 px-4 py-2 rounded-r">
                          <p className="text-xs uppercase tracking-wider text-white/42">
                            Specialty
                          </p>
                          <p className="text-lg font-semibold text-[#b72c78]">{doctor.role}</p>
                        </div>
                      </div>

                      <div className="mt-4">
                        <span className="inline-block rounded-full bg-[#5e9a71]/20 px-3 py-1.5 text-xs text-[#a8d4b5]">
                          ✦ {doctor.specialty}
                        </span>
                      </div>
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="mt-6 flex justify-center gap-2">
          {doctors.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx ? "w-8 bg-[#b72c78]" : "w-2 bg-white/30"
              }`}
            />
          ))}
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 rounded-full bg-black/60 p-2 text-white backdrop-blur-sm transition hover:bg-black/80"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Core Expertise Section */}
      <div className="mt-8 rounded-2xl border border-[#b72c78]/35 bg-[#122017] p-6 shadow-lg">
        <p className="lp-eyebrow mb-4 text-center text-[#5e9a71]">Core Expertise</p>
        <div className="grid gap-3">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="lp-body flex items-center rounded-lg bg-[#17251a] px-4 py-3 text-[#e9f4eb]"
            >
              <span className="mr-3 text-[#5e9a71] text-lg">+</span>
              {doctor.specialty}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Desktop Component (Original Design)
const DesktopRitualSection = () => {
  const [leadDoctor, ...supportDoctors] = doctors;

  return (
    <div id="specialists" className="hidden lg:grid lg:grid-cols-[1.05fr_0.95fr] lg:gap-6 lg:items-stretch">
      {/* Lead Doctor Card */}
      <article className="relative min-h-[620px] overflow-hidden border border-[#115057] bg-[#07171a] shadow-[22px_22px_0_rgba(0,0,0,0.34)]">
        <img
          alt={`${leadDoctor.name} dermatologist`}
          className="absolute inset-0 h-full w-full object-cover object-center"
          src={leadDoctor.image}
          onError={(e) => {
            e.currentTarget.src = "https://via.placeholder.com/600x800?text=Doctor+Image";
          }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,11,13,0.96)_0%,rgba(3,11,13,0.58)_42%,rgba(3,11,13,0.18)_76%),linear-gradient(90deg,rgba(3,11,13,0.82)_0%,transparent_58%)]" />

        <div className="lp-small absolute left-5 top-5 border border-[#b72c78]/40 bg-[#101810]/80 px-4 py-2 uppercase tracking-[0.18em] text-[#5e9a71] backdrop-blur-sm">
          Lead Dermatologist
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <p className="lp-eyebrow mb-3 text-[#5e9a71]">Featured Specialist</p>
          <h3 className="lp-title text-white">{leadDoctor.name}</h3>
          <p className="lp-body mt-3 text-[#c8e3e5]">{leadDoctor.qualifications}</p>

          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            <div className="border-l-4 border-[#b72c78] bg-[#122017]/88 px-5 py-4">
              <p className="lp-small uppercase tracking-[0.18em] text-white/42">Experience</p>
              <p className="lp-stat mt-2 text-[#b72c78]">{leadDoctor.exp}</p>
            </div>
            <div className="border-l-4 border-[#b72c78] bg-[#122017]/88 px-5 py-4">
              <p className="lp-small uppercase tracking-[0.18em] text-white/42">Specialty</p>
              <p className="lp-stat mt-2 text-[#b72c78]">{leadDoctor.role}</p>
            </div>
          </div>
        </div>
      </article>

      {/* Right Column */}
      <div className="flex flex-col gap-6">
        <div className="border border-[#b72c78]/35 bg-[#122017] p-6 shadow-[14px_14px_0_rgba(0,0,0,0.28)] md:p-7">
          <p className="lp-eyebrow mb-4 text-[#5e9a71]">Core Expertise</p>
          <div className="grid gap-3 sm:grid-cols-2">
            {doctors.map((d) => (
              <div className="lp-body bg-[#17251a] px-4 py-4 text-[#e9f4eb]" key={d.name}>
                <span className="mr-2 text-[#5e9a71]">+</span>
                {d.specialty}
              </div>
            ))}
          </div>
        </div>

        {supportDoctors.map((doctor) => (
          <article
            className="grid overflow-hidden border border-[#123f45] bg-[#07191d] shadow-[14px_14px_0_rgba(0,0,0,0.24)] sm:grid-cols-[180px_1fr]"
            key={doctor.name}
          >
            <div className="relative min-h-[230px] overflow-hidden">
              <img
                alt={`${doctor.name} acne treatment specialist`}
                className="h-full w-full object-cover object-center"
                src={doctor.image}
                onError={(e) => {
                  e.currentTarget.src = "https://via.placeholder.com/200x300?text=Doctor";
                }}
              />
              <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,11,13,0.48),transparent)]" />
            </div>

            <div className="px-5 py-5">
              <p className="lp-eyebrow text-[#5e9a71]">Treatment Specialist</p>
              <h3 className="lp-subtitle mt-2 text-white">{doctor.name}</h3>
              <p className="lp-body mt-1 text-[#accfd2]">{doctor.qualifications}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="lp-small bg-[#17251a] px-3 py-2 text-[#5e9a71]">{doctor.exp}</span>
                <span className="lp-small bg-[#17251a] px-3 py-2 text-[#5e9a71]">{doctor.role}</span>
              </div>

              <div className="mt-4">
                <span className="lp-small text-[#d3e9ea]">{doctor.specialty}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

// Main Component
export const RitualSection = () => {
  return (
    <section id="specialists" className="relative overflow-hidden bg-[#f7fbf8] px-4 sm:px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(94,154,113,0.08)_0%,transparent_34%),radial-gradient(circle_at_72%_18%,rgba(94,154,113,0.06),transparent_28%)]" />
      <div className="absolute inset-0 opacity-10 bg-[linear-gradient(90deg,rgba(18,32,23,0.08)_1px,transparent_1px),linear-gradient(180deg,rgba(18,32,23,0.06)_1px,transparent_1px)] bg-[length:72px_72px]" />
      <div className="absolute -left-28 top-20 h-72 w-72 rounded-full bg-[#5e9a71]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        <div className="mb-8 sm:mb-10 md:mb-12 max-w-[1040px] text-center sm:text-left">
          <p className="lp-eyebrow mb-3 sm:mb-4 md:mb-5 text-[#5e9a71] text-sm sm:text-base">
            Your Acne Treatment Specialists
          </p>
          <h2 className="lp-title text-[#122017] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            Meet Your{" "}
            <span
              className="italic inline-block"
              style={{ color: "#b72c78" }}
            >
              Dermatologist
            </span>{" "}
            {"\u2014"}
            <br className="hidden sm:block" />
            Qualified Acne Treatment Specialist in Kakinada
          </h2>
        </div>

        {/* Mobile Carousel - Visible on mobile/tablet */}
        <MobileCarousel />

        {/* Desktop Original - Visible only on desktop */}
        <DesktopRitualSection />
      </div>
    </section>
  );
};