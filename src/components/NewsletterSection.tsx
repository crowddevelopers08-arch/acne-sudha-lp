"use client";

import { useState, useEffect, useRef } from "react";

const features = [
  {
    id: 1,
    title: "Expert Care for Acne Treatment",
    description:
      "Our dermatologists use advanced, personalized treatments to clear acne and prevent future breakouts.",
    side: "left",
    image: "images12.jpg",
  },
  {
    id: 2,
    title: "Correct Diagnosis Before Any Treatment",
    description:
      "Hormonal, bacterial, fungal, and cystic acne all require different treatments. We identify your acne type before prescribing anything so you are not wasting money on the wrong solution.",
    side: "left",
    image: "images13.jpg",
  },
  {
    id: 3,
    title: "Effective Acne Scar Solutions",
    description:
      "We offer specialized treatments like chemical peels, lasers, and dermarolling to reduce acne scars and restore smooth skin.",
    side: "right",
    image: "images14.jpg",
  },
  {
    id: 4,
    title: "Proven Results with Minimal Downtime",
    description:
      "Achieve clear, healthy skin with our safe, clinically-proven treatments, with minimal recovery time.",
    side: "right",
    image: "/beautiful.jpg",
  },
];

interface FeatureCardProps {
  title: string;
  description: string;
  isActive: boolean;
  onHover: () => void;
  onLeave: () => void;
}

const FeatureCard = ({ title, description, isActive, onHover, onLeave }: FeatureCardProps) => (
  <div
    className="flex-1 flex flex-col justify-center py-4 sm:py-5 md:py-6 cursor-pointer transition-all duration-300 hover:translate-x-1"
    onMouseEnter={onHover}
    onMouseLeave={onLeave}
  >
    <h3
      className="lp-subtitle mb-2 sm:mb-3 text-lg sm:text-xl md:text-2xl transition-colors duration-300"
      style={{ color: isActive ? "#b72c78" : "#122017" }}
    >
      {title}
    </h3>

    <div
      className="mb-3 sm:mb-4 w-full transition-colors duration-300"
      style={{
        borderBottom: `1px solid ${isActive ? "#b72c78" : "rgba(18,32,23,0.15)"}`,
      }}
    />

    <p className="lp-body text-[#4f6d57] text-sm sm:text-base">
      {description}
    </p>
  </div>
);

export const NewsletterSection = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [isHovered, setIsHovered] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeFeature = features[activeIndex];

  const startTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % features.length);
    }, 3000);
  };

  useEffect(() => {
    if (!isHovered) startTimer();
    else if (timerRef.current) clearInterval(timerRef.current);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, [isHovered]);

  const handleHover = (index: number) => {
    setIsHovered(true);
    setActiveIndex(index);
  };

  const handleLeave = () => {
    setIsHovered(false);
  };

  return (
    <section
      className="w-full py-8 sm:py-14 md:py-16 px-4 sm:px-6 md:px-16"
      style={{ background: "#f7fbf8" }}
    >
      {/* Heading */}
      <div className="text-center mb-10 sm:mb-12 md:mb-14">
        <h2 className="lp-title max-w-5xl mx-auto text-[#122017] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
          Why Kakinada Chooses{" "}
          <span className="italic inline-block" style={{ color: "#b72c78" }}>
            Sudha Skin Clinic
          </span>{" "}
          For their acne treatments
        </h2>
      </div>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto max-sm:gap-2 gap-8 md:gap-0">

        {/* LEFT */}
        <div className="flex flex-col order-1 md:order-1 max-sm:mr-0 sm:mr-8">
          {features
            .filter((f) => f.side === "left")
            .map((f, i) => (
              <FeatureCard
                key={f.id}
                {...f}
                isActive={activeIndex === i}
                onHover={() => handleHover(i)}
                onLeave={handleLeave}
              />
            ))}
        </div>

        {/* CENTER IMAGE */}
        <div
          className="relative order-2 md:order-2 max-sm:m-0 mt-8 mb-8"
          style={{ minHeight: "320px" }}
        >
          {features.map((f, i) => (
            <img
              key={f.id}
              src={f.image}
              alt={f.title}
              className="absolute inset-0 w-full h-full object-cover rounded-sm shadow-lg"
              style={{
                opacity: activeIndex === i ? 1 : 0,
                transition: "opacity 0.6s ease",
                zIndex: activeIndex === i ? 2 : 1,
              }}
            />
          ))}

          {/* Progress bar */}
          <div
            className="absolute bottom-0 left-0 right-0 z-10"
            style={{ height: "3px", background: "rgba(18,32,23,0.1)", borderRadius: "0 0 4px 4px" }}
          >
            <div
              key={activeIndex}
              style={{
                height: "100%",
                background: "#b72c78",
                borderRadius: "0 0 4px 4px",
                animation: isHovered ? "none" : "progress 3s linear forwards",
              }}
            />
          </div>

          <style>{`
            @keyframes progress {
              from { width: 0%; }
              to { width: 100%; }
            }
          `}</style>
        </div>

        {/* RIGHT */}
        <div className="flex flex-col order-3 md:order-3 max-sm:ml-0 sm:ml-8">
          {features
            .filter((f) => f.side === "right")
            .map((f, i) => {
              const globalIndex = i + features.filter((x) => x.side === "left").length;
              return (
                <FeatureCard
                  key={f.id}
                  {...f}
                  isActive={activeIndex === globalIndex}
                  onHover={() => handleHover(globalIndex)}
                  onLeave={handleLeave}
                />
              );
            })}
        </div>
      </div>
    </section>
  );
};