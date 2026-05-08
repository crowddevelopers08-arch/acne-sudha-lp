'use client';

const FEATURES = [
  {
    title: 'Expert Diagnosis First',
    desc: 'Every treatment starts with a thorough consultation by our dermatologists — not guesswork.',
  },
  {
    title: 'Advanced Technology',
    desc: 'Clinically proven equipment: MNRF, chemical peels, lasers, and more — all under one roof.',
  },
  {
    title: 'Personalised Protocol',
    desc: 'No two skins are alike. Your treatment plan is built around your specific condition and skin type.',
  },
  {
    title: 'Visible, Tracked Results',
    desc: 'Measurable improvement within weeks, photographed and reviewed at every session.',
  },
];

export const VideoSection = () => {
  return (
    <section
      style={{
        background: '#f7fbf8',
        fontFamily: 'var(--font-manrope), sans-serif',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      <style>{`
        .vs-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: clamp(36px,5vw,72px);
          align-items: stretch;
          max-width: 1200px;
          margin: 0 auto;
        }
        .vs-cta { transition: all 0.28s cubic-bezier(.4,0,.2,1); }
        .vs-cta:hover { background: #4f8562 !important; transform: translateY(-2px); box-shadow: 0 10px 28px rgba(94,154,113,0.45); }

        /* Hide scrollbar for iframe container */
        .vs-reel-wrap iframe {
          pointer-events: auto;
        }
        
        /* Prevent iframe from being scrollable */
        .vs-reel-wrap {
          overflow: hidden !important;
        }

        @media (max-width: 767px) {
          .vs-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .vs-reel-wrap { max-width: 340px; margin: 0 auto; }
          .vs-heading h2 { font-size: clamp(1.7rem,6vw,2.2rem) !important; }
        }
      `}</style>

      <div className="pb-19">

        {/* ── HEADING ── */}
        <div
          className="vs-heading"
          style={{ textAlign: 'center', maxWidth: '620px', margin: '0 auto clamp(36px,5vw,56px)' }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '14px' }}>
            <div style={{ width: '28px', height: '1px', background: '#5e9a71' }} />
            <span className="lp-eyebrow" style={{ color: '#5e9a71' }}>Inside the Clinic</span>
            <div style={{ width: '28px', height: '1px', background: '#5e9a71' }} />
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-manrope), sans-serif',
              fontSize: 'clamp(2rem,4.5vw,3rem)',
              fontWeight: 800,
              color: '#122017',
              lineHeight: 1.1,
              margin: '0 0 14px',
            }}
          >
            See How We Treat.{' '}
            <span style={{ color: '#b72c78', fontStyle: 'italic', fontWeight: 700 }}>
              Not Just What We Claim.
            </span>
          </h2>

          <p style={{ fontSize: '15px', lineHeight: 1.7, color: 'rgba(18,32,23,0.55)', fontWeight: 400, margin: 0 }}>
            A look inside Sudha Skin Clinic — our doctors, our process, and the real care
            behind every result in Kakinada.
          </p>
        </div>

        {/* ── GRID ── */}
        <div className="vs-grid">

          {/* LEFT: Instagram Reel — Fixed, no scroll */}
          <div className="vs-reel-wrap" style={{ position: 'relative', height: '100%', minHeight: '500px' }}>
            {/* Offset decorative border */}
            <div
              style={{
                position: 'absolute', inset: 0,
                transform: 'translate(8px, 8px)',
                borderRadius: '16px',
                border: '1px solid rgba(94,154,113,0.3)',
                zIndex: 0,
              }}
            />
            <div
              style={{
                position: 'relative', zIndex: 1,
                borderRadius: '16px',
                overflow: 'hidden',
                height: '100%',
                minHeight: '500px',
                background: '#0e1a12',
                boxShadow: '0 24px 64px rgba(18,32,23,0.15)',
              }}
            >
              {/* Fixed container for iframe - prevents scrolling */}
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  overflow: 'hidden',
                }}
              >
                <iframe
                  src="https://www.instagram.com/reel/DV3M2Y7kSWK/embed/?autoplay=1&muted=1"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: 'none',
                    display: 'block',
                    overflow: 'hidden',
                  }}
                  allowFullScreen
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  title="Sudha Skin Clinic Reel"
                  scrolling="no"
                />
              </div>
              {/* Corner accents */}
              <div style={{ position: 'absolute', top: 0, left: 0, width: '36px', height: '36px', borderTop: '2px solid #5e9a71', borderLeft: '2px solid #5e9a71', borderRadius: '16px 0 0 0', pointerEvents: 'none', zIndex: 2 }} />
              <div style={{ position: 'absolute', bottom: 0, right: 0, width: '36px', height: '36px', borderBottom: '2px solid #b72c78', borderRight: '2px solid #b72c78', borderRadius: '0 0 16px 0', pointerEvents: 'none', zIndex: 2 }} />
            </div>
          </div>

          {/* RIGHT: Content */}
          <div style={{ display: 'flex', flexDirection: 'column' }}>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '32px' }}>
              {FEATURES.map(({ title, desc }, i) => (
                <div
                  key={title}
                  style={{
                    display: 'flex', gap: '16px', alignItems: 'flex-start',
                    paddingBottom: i < FEATURES.length - 1 ? '20px' : 0,
                    borderBottom: i < FEATURES.length - 1 ? '1px solid rgba(94,154,113,0.12)' : 'none',
                  }}
                >
                  {/* Green dot instead of number badge */}
                  <div
                    style={{
                      width: '8px', height: '8px', borderRadius: '50%', flexShrink: 0,
                      background: '#5e9a71',
                      marginTop: '6px',
                    }}
                  />
                  <div>
                    <p style={{ margin: '0 0 4px', fontSize: '15px', fontWeight: 700, color: '#122017', lineHeight: 1.3 }}>
                      {title}
                    </p>
                    <p style={{ margin: 0, fontSize: '13px', lineHeight: 1.65, color: 'rgba(18,32,23,0.55)', fontWeight: 400 }}>
                      {desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            
            <a
              href="https://wa.me/919553033366"
              target="_blank"
              rel="noreferrer"
              className="vs-cta"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 28px', background: '#5e9a71',
                color: '#fff', fontSize: '13px', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                textDecoration: 'none', borderRadius: '999px',
                alignSelf: 'flex-start',
                boxShadow: '0 6px 20px rgba(94,154,113,0.3)',
              }}
            >
              <svg width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
              </svg>
              Book Your Consultation
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};