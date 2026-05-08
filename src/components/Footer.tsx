import Image from "next/image";
import Link from "next/link";

const GRAIN = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.72' numOctaves='4' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23g)' opacity='1'/%3E%3C/svg%3E")`;

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Treatments", href: "#treatments" },
  { label: "Specialists", href: "#specialists" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

const SERVICES = [
  "Hair Regrowth",
  "Hair Transplant",
  "Laser Hair Removal",
  "Carbon Laser Facial",
  "Acne Scar Care",
];

export default function Footer() {
  return (
    <footer
      style={{
        position: "relative",
        width: "100%",
        background: "#0e1a12",
        overflow: "hidden",
        fontFamily: "var(--font-manrope), sans-serif",
      }}
    >
      <style>{`
        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .footer-inner {
            padding: 32px 20px 16px !important;
          }
          .footer-bottom {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 8px !important;
            margin-bottom: 40px !important;
          }
        }
        @media (min-width: 640px) and (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 28px !important;
          }
        }
        .footer-link:hover { color: #5e9a71 !important; }
      `}</style>

      {/* Grain texture */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          backgroundImage: GRAIN, backgroundRepeat: "repeat",
          backgroundSize: "240px 240px", opacity: 0.1, mixBlendMode: "screen",
        }}
      />

      {/* Diagonal line pattern */}
      <div
        aria-hidden
        style={{
          position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
          backgroundImage: "repeating-linear-gradient(135deg,transparent,transparent 7px,rgba(255,255,255,0.015) 7px,rgba(255,255,255,0.015) 8px)",
        }}
      />

      {/* Green glow top-left */}
      <div
        aria-hidden
        style={{
          position: "absolute", top: 0, left: 0, width: "36%", height: "60%",
          background: "radial-gradient(ellipse at 0% 0%, rgba(94,154,113,0.18) 0%, transparent 72%)",
          zIndex: 2, pointerEvents: "none",
        }}
      />

      {/* Pink glow top-right */}
      <div
        aria-hidden
        style={{
          position: "absolute", right: 0, top: 0, width: "34%", height: "55%",
          background: "radial-gradient(ellipse at 100% 0%, rgba(183,44,120,0.14) 0%, transparent 70%)",
          zIndex: 2, pointerEvents: "none",
        }}
      />

      <div
        className="footer-inner"
        style={{ position: "relative", zIndex: 10, maxWidth: "1220px", margin: "0 auto", padding: "42px 44px 18px" }}
      >
        <div
          className="footer-grid"
          style={{ display: "grid", gridTemplateColumns: "1.2fr 0.8fr 0.9fr 1fr", gap: "20px", alignItems: "start" }}
        >
          {/* Brand */}
          <div>
            <div style={{ marginBottom: "12px" }}>
              <Link href="/" aria-label="Go to homepage" style={{ display: "inline-block" }}>
                <div className="relative h-12 w-20 sm:w-44 lg:h-20 lg:w-38">
                  <Image
                    src="/logos.JPG"
                    alt="Sudha Skin Hair Aesthetics logo"
                    fill
                    sizes="(max-width: 640px) 80px, 176px"
                    className="object-contain object-left"
                    priority
                  />
                </div>
              </Link>
            </div>

            <h3 style={{ margin: "0 0 10px 0", fontSize: "15px", lineHeight: 1.5, color: "#fffdfa", fontWeight: 700 }}>
              Skin and hair care with expert-led, personalised treatment.
            </h3>

            <p style={{ margin: 0, fontSize: "14px", lineHeight: 1.7, color: "rgba(255,253,250,0.65)", maxWidth: "300px", fontWeight: 400 }}>
              Modern technology, careful consultation, and visible results designed around each patient.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <p style={{ margin: "0 0 12px 0", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5e9a71", fontWeight: 800 }}>
              Quick Links
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="footer-link"
                  style={{ color: "rgba(255,253,250,0.7)", textDecoration: "none", fontSize: "14px", fontWeight: 500, transition: "color 0.2s" }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Popular Care */}
          <div>
            <p style={{ margin: "0 0 12px 0", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5e9a71", fontWeight: 800 }}>
              Popular Care
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
              {SERVICES.map((service) => (
                <span key={service} style={{ color: "rgba(255,253,250,0.7)", fontSize: "14px", fontWeight: 400 }}>
                  {service}
                </span>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <p style={{ margin: "0 0 12px 0", fontSize: "11px", letterSpacing: "0.22em", textTransform: "uppercase", color: "#5e9a71", fontWeight: 800 }}>
              Contact
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "9px" }}>
              <span style={{ color: "rgba(255,253,250,0.65)", fontSize: "13px", lineHeight: 1.6, fontWeight: 400 }}>
                4th Floor, Avon Diagnostics, Temple St, Salipeta, Kakinada, Andhra Pradesh 533001
              </span>
              <a href="tel:+919553033366" style={{ color: "#fffdfa", textDecoration: "none", fontSize: "14px", fontWeight: 600 }}>
                +91 9553033366
              </a>
              <a href="mailto:sudhaaesthetics@gmail.com" style={{ color: "#fffdfa", textDecoration: "none", fontSize: "13px", fontWeight: 500 }}>
                sudhaaesthetics@gmail.com
              </a>
              <span style={{ color: "rgba(255,253,250,0.65)", fontSize: "13px", lineHeight: 1.6, fontWeight: 400 }}>
                Mon – Sat
                <br />
                10:00 AM – 7:00 PM
              </span>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="footer-bottom"
          style={{
            marginTop: "28px", paddingTop: "14px",
            borderTop: "1px solid rgba(94,154,113,0.2)",
            display: "flex", alignItems: "center",
            justifyContent: "space-between", gap: "12px", flexWrap: "wrap",
          }}
        >
          <span style={{ color: "rgba(255,253,250,0.45)", fontSize: "12px", fontWeight: 400, letterSpacing: "0.04em" }}>
            Copyright 2026 Sudha Aesthetics. All rights reserved.
          </span>
          <Link
            href="/privacy-policy"
            style={{ color: "rgba(255,253,250,0.55)", textDecoration: "none", fontSize: "12px", fontWeight: 500, letterSpacing: "0.04em" }}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
