'use client';

import { useState, useEffect } from 'react';

const cases = [
  {
    before: '/ACNI-02.jpeg',
    after: '/ACNI-03.jpeg',
    number: '01',
    patient: 'Jebix Shylin S.',
    gender: 'Female · 29',
    location: 'Kakinada',
    concern: 'Post-acne marks & uneven texture',
    area: 'Cheeks',
    treatment: 'Peels + Medical Skincare',
    sessions: '5 Sessions',
    duration: '3 Months',
    result: '82%',
    resultLabel: 'Marks Reduced',
    quote: 'The treatment plan was clear from day one, and my marks have reduced so much.',
  },

  {
    before: '/ACNI-06.jpeg',
    after: '/ACNI-07.jpeg',
    number: '02',
    patient: 'Siva T.',
    gender: 'Female · 31',
    location: 'Kakinada',
    concern: 'Acne scars & dullness',
    area: 'Face',
    treatment: 'Laser + Dermarolling',
    sessions: '7 Sessions',
    duration: '5 Months',
    result: '75%',
    resultLabel: 'Texture Improved',
    quote: 'I can see real improvement in my skin texture, and my confidence is back.',
  },
  {
    before: '/ACNE.jpeg',
    after: '/ACNE1.jpeg',
    number: '03',
    patient: 'Priya R.',
    gender: 'Female · 27',
    location: 'Kakinada',
    concern: 'Ice-pick & boxcar acne scars',
    area: 'Full Face',
    treatment: 'Subcision + MNRF',
    sessions: '8 Sessions',
    duration: '4 Months',
    result: '85%',
    resultLabel: 'Scar Reduction',
    quote: 'I never thought my skin could look this clear. Lumina gave me my confidence back.',
  },
];

export const LuminaDifference = () => {
  const [active, setActive] = useState(0);
  const [fading, setFading] = useState(false);
  const [progressKey, setProgressKey] = useState(0);

  const goTo = (idx: number) => {
    if (idx === active) return;
    setFading(true);
    setTimeout(() => {
      setActive(idx);
      setFading(false);
      setProgressKey((k) => k + 1);
    }, 350);
  };

  useEffect(() => {
    const t = setInterval(() => goTo((active + 1) % cases.length), 6500);
    return () => clearInterval(t);
  }, [active]);

  const c = cases[active];

  return (
    <section className="ld" style={{ background: '#f7fbf8', minHeight: '100vh', fontFamily: 'var(--font-manrope), sans-serif', position: 'relative', overflowX: 'hidden' }}>
      <style>{`
        .ld-serif { font-family: var(--font-manrope), sans-serif !important; }
        @keyframes prog6 { from{transform:scaleX(0)} to{transform:scaleX(1)} }
        .ld-prog { animation: prog6 6.5s linear forwards; transform-origin:left; }
        @keyframes fadeUp { from{opacity:0;transform:translateY(14px)} to{opacity:1;transform:translateY(0)} }
        .ld-fu { animation: fadeUp 0.45s ease forwards; }
        .ld-thumb { transition: opacity 0.25s, outline 0.25s; }
        .ld-thumb:hover { opacity: 1 !important; }
        .ld-wa { transition: all 0.3s cubic-bezier(0.4,0,0.2,1); }
        .ld-wa:hover { background:#b72c78 !important; border-color:#b72c78 !important; transform:translateY(-2px); box-shadow:0 8px 24px rgba(183,44,120,0.35); }
        .ld-arrow { transition: all 0.2s ease; cursor:pointer; }
        .ld-arrow:hover { background:#5e9a71 !important; color:#fff !important; border-color:#5e9a71 !important; }

        /* ── MOBILE (≤639px) ── */
        @media (max-width: 639px) {
          .ld-main-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            overflow: hidden !important;
            width: 100% !important;
          }
          .ld-left-col { order: 2 !important; }
          .ld-right-col { order: 1 !important; width: 100% !important; min-width: 0 !important; overflow: hidden !important; }

          .ld-ghost-num {
            font-size: 72px !important;
            margin-bottom: -36px !important;
          }
          .ld-heading h2 {
            font-size: 1.75rem !important;
          }
          .ld-eyebrow {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 6px !important;
            margin-bottom: 28px !important;
          }
          .ld-heading {
            margin-bottom: 28px !important;
          }
          .ld-images-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 8px !important;
            width: 100% !important;
            max-width: 100% !important;
            overflow: hidden !important;
          }
          .ld-image-box {
            aspect-ratio: 3/4 !important;
            min-width: 0 !important;
            width: 100% !important;
            overflow: hidden !important;
          }
          .ld-image-box img {
            width: 100% !important;
            height: 100% !important;
            object-fit: cover !important;
          }
          .ld-right-col {
            width: 100% !important;
            min-width: 0 !important;
            overflow: hidden !important;
          }
          .ld-thumb-wrapper {
            flex-direction: column !important;
            gap: 10px !important;
          }
          .ld-thumb-row {
            gap: 8px !important;
            width: 100% !important;
            overflow-x: auto !important;
            scroll-snap-type: x mandatory !important;
            -webkit-overflow-scrolling: touch !important;
            padding-bottom: 6px !important;
            scrollbar-width: none !important;
          }
          .ld-thumb-row::-webkit-scrollbar { display: none !important; }
          .ld-thumb-btn {
            width: 64px !important;
            height: 80px !important;
            scroll-snap-align: start !important;
            flex-shrink: 0 !important;
          }
          .ld-nav-col {
            flex-direction: row !important;
            justify-content: space-between !important;
            width: 100% !important;
            gap: 0 !important;
          }
          .ld-nav-counter {
            font-size: 11px !important;
          }
          .ld-nav-btn {
            width: 36px !important;
            height: 36px !important;
            font-size: 14px !important;
          }
          .ld-nav-btn-prev::after { content: '←' !important; }
          .ld-nav-btn-next::after { content: '→' !important; }
          .ld-nav-btn-prev, .ld-nav-btn-next { font-size: 0 !important; }
          .ld-nav-btn-prev::after, .ld-nav-btn-next::after { font-size: 16px !important; }

          .ld-details {
            gap: 8px !important;
          }
          .ld-cta-row {
            flex-direction: column !important;
            align-items: flex-start !important;
            gap: 10px !important;
          }
          .ld-wa {
            width: 100% !important;
            justify-content: center !important;
          }
          .ld-section-pad {
            padding: clamp(24px,5vw,48px) 16px !important;
            overflow-x: hidden !important;
          }
          .ld-quote p {
            font-size: 0.95rem !important;
          }
        }

        /* ── STATS GRID: only ≤321px ── */
        @media (max-width: 321px) {
          .ld-stats-grid { grid-template-columns: 1fr !important; }
          .ld-stat-val { font-size: 1.1rem !important; }
        }

        /* ── TABLET (640px – 1023px) ── */
        @media (min-width: 640px) and (max-width: 1023px) {
          .ld-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .ld-ghost-num {
            font-size: 90px !important;
            margin-bottom: -44px !important;
          }
          .ld-heading h2 {
            font-size: clamp(2rem, 4vw, 2.8rem) !important;
          }
          .ld-eyebrow {
            margin-bottom: 32px !important;
          }
          .ld-heading {
            margin-bottom: 32px !important;
          }
          .ld-images-grid {
            grid-template-columns: 1fr 1fr !important;
            max-width: 600px !important;
          }
          .ld-image-box {
            aspect-ratio: 3/4 !important;
          }
          .ld-stat-val {
            font-size: 1.25rem !important;
          }
          .ld-thumb-btn {
            width: 68px !important;
            height: 84px !important;
          }
          .ld-section-pad {
            padding: clamp(32px,5vw,64px) clamp(20px,4vw,40px) !important;
          }
          .ld-info-cols {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
          .ld-info-cols-left { display: flex; flex-direction: column; gap: 20px; }
          .ld-info-cols-right { display: flex; flex-direction: column; gap: 20px; }
        }

        /* ── DESKTOP (≥1024px) ── */
        @media (min-width: 1024px) {
          .ld-main-grid {
            grid-template-columns: 1fr 1.3fr;
            gap: clamp(24px,4vw,64px);
          }
          .ld-info-cols { display: contents; }
          .ld-info-cols-left { display: contents; }
          .ld-info-cols-right { display: contents; }
        }
        @media (max-width: 321px) {
          .ld-stats-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div style={{ position:'absolute', top:'-120px', right:'-120px', width:'500px', height:'500px', borderRadius:'50%', border:'1px solid rgba(94,154,113,0.18)' }} />
        <div style={{ position:'absolute', top:'-60px', right:'-60px', width:'300px', height:'300px', borderRadius:'50%', border:'1px solid rgba(183,44,120,0.12)' }} />
        <div style={{ position:'absolute', bottom:0, left:0, width:'220px', height:'220px', opacity:0.06, backgroundImage:'radial-gradient(#5e9a71 1px, transparent 1px)', backgroundSize:'16px 16px' }} />
      </div>

      <div id='treatments' className="ld-section-pad" style={{ position:'relative', zIndex:10, maxWidth:'1200px', margin:'0 auto', padding:'clamp(40px,6vw,96px) clamp(20px,4vw,64px)' }}>

        {/* ── EYEBROW ── */}
        <div className="ld-eyebrow" style={{ display:'flex', alignItems:'center', justifyContent:'space-between', marginBottom:'48px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px' }}>
            <div style={{ width:'24px', height:'1px', background:'#5e9a71' }} />
            <span style={{ fontSize:'11px', letterSpacing:'0.28em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500 }}>Before &amp; After · Real Patients</span>
          </div>
          <span style={{ fontSize:'11px', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(18,32,23,0.4)', fontWeight:300 }}>Kakinada · Sudha Skin Clinic</span>
        </div>

        {/* ── HEADING ── */}
        <div className="ld-heading" style={{ marginBottom:'48px' }}>
          <h2 className="ld-serif" style={{ fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:700, color:'#122017', lineHeight:1.1, margin:0 }}>
            Real Kakinada Stories.
          </h2>
          <h2 className="ld-serif" style={{ fontSize:'clamp(2.2rem,5vw,4rem)', fontWeight:500, fontStyle:'italic', color:'#b72c78', lineHeight:1.1, margin:0 }}>
            Real Acne Recovery.
          </h2>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="ld-main-grid" style={{ display:'grid', gridTemplateColumns:'1fr 1.3fr', gap:'clamp(24px,4vw,64px)', alignItems:'start' }}>

          {/* ───── LEFT: Info ───── */}
          <div className="ld-left-col" style={{ display:'flex', flexDirection:'column', gap:'28px' }}>

            {/* Ghost number */}
            <div className="ld-ghost-num ld-serif" style={{ fontSize:'120px', fontWeight:900, lineHeight:1, color:'rgba(94,154,113,0.14)', marginBottom:'-60px', userSelect:'none' }}>
              {c.number}
            </div>

            {/* On tablet: info in 2 cols */}
            <div className="ld-info-cols">
              <div className="ld-info-cols-left max-sm:mb-3">
                {/* Quote */}
                <div className={`ld-quote ${fading ? '' : 'ld-fu'}`} style={{ opacity: fading ? 0 : 1, transition:'opacity 0.35s', borderLeft:'2px solid #b72c78', paddingLeft:'18px' }}>
                  <p className="ld-serif" style={{ fontStyle:'italic', fontSize:'1.05rem', color:'rgba(18,32,23,0.65)', lineHeight:1.7, margin:0 }}>
                    "{c.quote}"
                  </p>
                  <p style={{ fontSize:'11px', letterSpacing:'0.2em', textTransform:'uppercase', color:'#5e9a71', marginTop:'10px', fontWeight:500 }}>
                    — {c.patient}, {c.gender}
                  </p>
                </div>

                {/* Stats */}
                <div className={`ld-stats-grid ${fading ? '' : 'ld-fu'}`} style={{ opacity: fading ? 0 : 1, display:'grid', gridTemplateColumns:'repeat(3,1fr)', border:'1px solid rgba(94,154,113,0.2)', overflow:'hidden' }}>
                  {[
                    { val: c.result, label: c.resultLabel },
                    { val: c.sessions, label: 'Treatment' },
                    { val: c.duration, label: 'Duration' },
                  ].map(({ val, label }, i) => (
                    <div key={label} style={{ textAlign:'center', padding:'12px 4px', borderRight: i < 2 ? '1px solid rgba(94,154,113,0.2)' : 'none', overflow:'hidden', minWidth:0 }}>
                      <p className="ld-serif ld-stat-val" style={{ fontSize:'1.1rem', fontWeight:700, color:'#b72c78', margin:0, whiteSpace:'nowrap' }}>{val}</p>
                      <p style={{ fontSize:'9px', letterSpacing:'0.08em', textTransform:'uppercase', color:'rgba(18,32,23,0.5)', margin:'4px 0 0', fontWeight:300, wordBreak:'break-word', lineHeight:1.3 }}>{label}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="ld-info-cols-right max-sm:mt-3">
                {/* Details */}
                <div className={`ld-details ${fading ? '' : 'ld-fu'}`} style={{ opacity: fading ? 0 : 1, display:'flex', flexDirection:'column', gap:'10px' }}>
                  {[
                    ['Concern', c.concern],
                    ['Area', c.area],
                    ['Treatment', c.treatment],
                    ['Location', c.location],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display:'flex', alignItems:'baseline', gap:'12px', fontSize:'13px' }}>
                      <span style={{ color:'rgba(94,154,113,0.6)', textTransform:'uppercase', letterSpacing:'0.18em', fontSize:'10px', fontWeight:300, width:'72px', flexShrink:0 }}>{k}</span>
                      <span style={{ width:'1px', height:'12px', background:'rgba(94,154,113,0.3)', flexShrink:0 }} />
                      <span style={{ color:'rgba(18,32,23,0.75)', fontWeight:400 }}>{v}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="ld-cta-row max-sm:mt-3" style={{ display:'flex', alignItems:'center', gap:'16px', flexWrap:'wrap' }}>
                  <a href="https://wa.me/919999999999" target="_blank" rel="noreferrer"
                    className="ld-wa"
                    style={{ display:'inline-flex', alignItems:'center', gap:'10px', padding:'14px 28px', background:'#5e9a71', color:'#fff', fontSize:'12px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', textDecoration:'none', border:'2px solid #5e9a71', borderRadius:'999px' }}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
                    </svg>
                    Book Your Consultation
                  </a>
                  <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
                    <span style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#4ade80', display:'inline-block' }} />
                    <span style={{ fontSize:'11px', color:'rgba(18,32,23,0.5)', letterSpacing:'0.12em', textTransform:'uppercase' }}>Responding Now</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* ───── RIGHT: Before / After ───── */}
          <div className="ld-right-col" style={{ display:'flex', flexDirection:'column', gap:'14px', width:'100%', minWidth:0, overflow:'hidden' }}>

            {/* TWO CLEAN BOXES — Before | After (Text removed from top) */}
            <div className="ld-images-grid" style={{
              display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px',
              opacity: fading ? 0 : 1, transition:'opacity 0.35s',
              width:'100%', maxWidth:'100%', overflow:'hidden',
            }}>
              {/* BEFORE BOX - Text removed from top */}
              <div className="ld-image-box" style={{ position:'relative', overflow:'hidden', borderRadius:'6px', aspectRatio:'3/4' }}>
                <img
                  key={`before-${active}`}
                  src={c.before}
                  alt="Before treatment"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 55%, rgba(8,18,10,0.7) 100%)', pointerEvents:'none' }} />
                {/* REMOVED: Before badge at top-left */}
                {/* REMOVED: Patient name and gender at bottom */}
              </div>

              {/* AFTER BOX - Text removed from top */}
              <div className="ld-image-box" style={{ position:'relative', overflow:'hidden', borderRadius:'6px', aspectRatio:'3/4' }}>
                <img
                  key={`after-${active}`}
                  src={c.after}
                  alt="After treatment"
                  style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top center', display:'block' }}
                />
                <div style={{ position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 45%, rgba(8,18,10,0.75) 100%)', pointerEvents:'none' }} />
                {/* REMOVED: After badge at top-right */}
                {/* REMOVED: Result badge */}
                {/* REMOVED: Concern text at bottom */}
                <div style={{ position:'absolute', bottom:0, left:0, right:0, height:'3px', background:'rgba(255,255,255,0.08)', zIndex:20 }}>
                  <div key={progressKey} className="ld-prog" style={{ height:'100%', background:'#5e9a71' }} />
                </div>
              </div>
            </div>

            {/* Thumbnails + nav row */}
            <div className="ld-thumb-wrapper" style={{ display:'flex', alignItems:'center', gap:'10px' }}>
              {/* Thumbs — horizontal scrollable row */}
              <div className="ld-thumb-row" style={{ display:'flex', flexDirection:'row', gap:'8px', flex:1, overflowX:'auto', paddingBottom:'4px', scrollSnapType:'x mandatory', WebkitOverflowScrolling:'touch' }}>
                {cases.map((cs, i) => (
                  <button key={i} onClick={() => goTo(i)}
                    className="ld-thumb ld-thumb-btn"
                    style={{
                      position:'relative', overflow:'hidden', borderRadius:'4px',
                      width:'72px', height:'90px', flexShrink:0,
                      border:'none', padding:0, cursor:'pointer',
                      scrollSnapAlign:'start',
                      outline: i === active ? '2px solid #5e9a71' : '2px solid transparent',
                      outlineOffset:'2px',
                      opacity: i === active ? 1 : 0.38,
                    }}>
                    <img src={cs.after} alt={cs.patient}
                      style={{ width:'100%', height:'100%', objectFit:'cover', objectPosition:'top', display:'block' }} />
                    <div style={{ position:'absolute', inset:0, background:'linear-gradient(0deg, rgba(0,0,0,0.6), transparent)' }} />
                    <span style={{ position:'absolute', bottom:'5px', left:'7px', fontSize:'10px', fontWeight:600, letterSpacing:'0.1em', color:'white' }}>
                      {cs.number}
                    </span>
                  </button>
                ))}
              </div>

              {/* Arrows + counter */}
              <div className="ld-nav-col" style={{ display:'flex', flexDirection:'column', alignItems:'center', gap:'8px', flexShrink:0 }}>
                <button
                  className="ld-arrow ld-nav-btn ld-nav-btn-prev"
                  onClick={() => goTo((active - 1 + cases.length) % cases.length)}
                  style={{ width:'36px', height:'36px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(94,154,113,0.4)', background:'transparent', color:'rgba(18,32,23,0.65)', fontSize:'14px', cursor:'pointer', borderRadius:'4px' }}>
                  ↑
                </button>
                <span className="ld-nav-counter" style={{ fontSize:'10px', letterSpacing:'0.15em', color:'rgba(18,32,23,0.4)', fontWeight:300 }}>
                  {String(active + 1).padStart(2,'0')}/{String(cases.length).padStart(2,'0')}
                </span>
                <button
                  className="ld-arrow ld-nav-btn ld-nav-btn-next"
                  onClick={() => goTo((active + 1) % cases.length)}
                  style={{ width:'36px', height:'36px', display:'flex', alignItems:'center', justifyContent:'center', border:'1px solid rgba(94,154,113,0.4)', background:'transparent', color:'rgba(18,32,23,0.65)', fontSize:'14px', cursor:'pointer', borderRadius:'4px' }}>
                  ↓
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};