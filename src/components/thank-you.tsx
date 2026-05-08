'use client';

const nextSteps = [
  {
    number: '01',
    icon: '📞',
    title: 'We Will Call You',
    text: 'Our team will reach out within 24 hours to confirm your consultation time and answer any initial questions.',
  },
  {
    number: '02',
    icon: '📋',
    title: 'Skin Assessment',
    text: 'Your doctor will perform a thorough skin analysis to understand your concern and recommend the right treatment plan.',
  },
  {
    number: '03',
    icon: '✨',
    title: 'Your Journey Begins',
    text: 'We craft a personalised treatment plan designed around your skin, lifestyle, and goals — real results, real care.',
  },
];

const stats = [
  { value: '500+', label: 'Patients Treated' },
  { value: '97%', label: 'Satisfaction Rate' },
  { value: '8+', label: 'Years Experience' },
  { value: '15+', label: 'Treatments Available' },
];

export const ThankYou = () => {
  return (
    <main
      style={{
        background: '#0e1a12',
        minHeight: '100vh',
        fontFamily: 'var(--font-manrope), sans-serif',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <style>{`
        .ty-serif { font-family: var(--font-noto-serif), serif !important; }
        @keyframes fadeUp { from { opacity:0; transform:translateY(24px); } to { opacity:1; transform:translateY(0); } }
        .ty-fu-1 { animation: fadeUp 0.6s ease 0.1s both; }
        .ty-fu-2 { animation: fadeUp 0.6s ease 0.25s both; }
        .ty-fu-3 { animation: fadeUp 0.6s ease 0.4s both; }
        .ty-fu-4 { animation: fadeUp 0.6s ease 0.55s both; }
        .ty-fu-5 { animation: fadeUp 0.6s ease 0.7s both; }
        @keyframes checkPop { 0%{transform:scale(0) rotate(-15deg);opacity:0} 70%{transform:scale(1.15) rotate(3deg);opacity:1} 100%{transform:scale(1) rotate(0deg);opacity:1} }
        .ty-check { animation: checkPop 0.7s cubic-bezier(0.34,1.56,0.64,1) 0.2s both; }
        @keyframes shimmer { 0%,100%{opacity:0.4} 50%{opacity:1} }
        .ty-shimmer { animation: shimmer 2.5s ease infinite; }
        .ty-card { transition: transform 0.25s ease, box-shadow 0.25s ease; }
        .ty-card:hover { transform: translateY(-4px); box-shadow: 0 16px 40px rgba(94,154,113,0.2) !important; }
        .ty-wa { transition: all 0.3s ease; }
        .ty-wa:hover { background: #b72c78 !important; border-color: #b72c78 !important; transform: translateY(-2px); box-shadow: 0 8px 24px rgba(183,44,120,0.35); }
        .ty-sec { transition: all 0.25s ease; }
        .ty-sec:hover { background: rgba(94,154,113,0.08) !important; }
      `}</style>

      {/* ── DECORATIVE BG ── */}
      <div style={{ position:'absolute', inset:0, pointerEvents:'none', overflow:'hidden' }}>
        <div style={{ position:'absolute', top:'-140px', right:'-140px', width:'520px', height:'520px', borderRadius:'50%', border:'1px solid rgba(94,154,113,0.18)' }} />
        <div style={{ position:'absolute', top:'-70px', right:'-70px', width:'300px', height:'300px', borderRadius:'50%', border:'1px solid rgba(183,44,120,0.1)' }} />
        <div style={{ position:'absolute', bottom:'-80px', left:'-80px', width:'360px', height:'360px', borderRadius:'50%', border:'1px solid rgba(94,154,113,0.12)' }} />
        <div style={{ position:'absolute', bottom:0, right:0, width:'200px', height:'200px', opacity:0.05, backgroundImage:'radial-gradient(rgba(94,154,113,0.6) 1px, transparent 1px)', backgroundSize:'14px 14px' }} />
        <div style={{ position:'absolute', top:0, left:0, width:'160px', height:'160px', opacity:0.05, backgroundImage:'radial-gradient(rgba(183,44,120,0.5) 1px, transparent 1px)', backgroundSize:'12px 12px' }} />
      </div>

      <div style={{ position:'relative', zIndex:1, maxWidth:'1100px', margin:'0 auto',}} className="py-5">

        {/* ── HERO ── */}
        <div style={{ textAlign:'center', marginBottom:'30px' }}>

          {/* Check icon */}
          <div className="ty-check" style={{ display:'inline-flex', alignItems:'center', justifyContent:'center', width:'80px', height:'80px', borderRadius:'50%', background:'linear-gradient(135deg, #5e9a71, #3f7455)', marginBottom:'12px', boxShadow:'0 12px 40px rgba(94,154,113,0.4)' }}>
            <svg width="36" height="36" fill="none" stroke="#ffffff" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
          </div>

          {/* Eyebrow */}
          <div className="ty-fu-1" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'12px', marginBottom:'14px' }}>
            <div style={{ width:'24px', height:'1px', background:'#5e9a71' }} />
            <span style={{ fontSize:'11px', letterSpacing:'0.28em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500 }}>
              Booking Confirmed · Kakinada
            </span>
            <div style={{ width:'24px', height:'1px', background:'#5e9a71' }} />
          </div>

          {/* Heading */}
          <h1 className="ty-serif ty-fu-2" style={{ fontSize:'clamp(3rem,7vw,6rem)', fontWeight:900, color:'#ffffff', lineHeight:1, margin:'0 0 8px' }}>
            Thank You
          </h1>
          <h1 className="ty-serif ty-fu-2" style={{ fontSize:'clamp(3rem,7vw,6rem)', fontWeight:500, fontStyle:'italic', color:'#b72c78', lineHeight:1, margin:'0 0 18px' }}>
            for Reaching Out.
          </h1>

          {/* Subtext */}
          <p className="ty-fu-3" style={{ fontSize:'clamp(14px,1.8vw,17px)', color:'rgba(255,255,255,0.5)', lineHeight:1.85, fontWeight:300, maxWidth:'520px', margin:'0 auto 20px' }}>
            Your consultation request has been received. Our skincare specialists at Sudha Skin Clinic Kakinada will be in touch with you shortly.
          </p>

          {/* WhatsApp CTA */}
          <div className="ty-fu-3" style={{ display:'flex', alignItems:'center', justifyContent:'center', gap:'16px', flexWrap:'wrap' }}>
            <a
              href="https://wa.me/+91 9553033366"
              target="_blank"
              rel="noreferrer"
              className="ty-wa"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '10px',
                padding: '14px 32px',
                background: '#5e9a71', color: '#ffffff',
                fontSize: '12px', fontWeight: 500, letterSpacing: '0.14em', textTransform: 'uppercase',
                textDecoration: 'none', border: '2px solid #5e9a71', borderRadius: '999px',
              }}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 32 32">
                <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
              </svg>
              Chat on WhatsApp
            </a>
            <div style={{ display:'flex', alignItems:'center', gap:'6px' }}>
              <span className="ty-shimmer" style={{ width:'7px', height:'7px', borderRadius:'50%', background:'#4ade80', display:'inline-block' }} />
              <span style={{ fontSize:'11px', color:'rgba(255,255,255,0.4)', letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:300 }}>Responding Now</span>
            </div>
          </div>
        </div>

        {/* ── DIVIDER ── */}
        <div className="ty-fu-4" style={{ display:'flex', alignItems:'center', gap:'20px', marginBottom:'34px' }}>
          <div style={{ flex:1, height:'1px', background:'rgba(94,154,113,0.25)' }} />
          <span style={{ fontSize:'10px', letterSpacing:'0.28em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500, whiteSpace:'nowrap' }}>
            What Happens Next
          </span>
          <div style={{ flex:1, height:'1px', background:'rgba(94,154,113,0.25)' }} />
        </div>

        {/* ── NEXT STEPS ── */}
        <div className="ty-fu-4" style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(280px, 1fr))', gap:'16px', marginBottom:'40px' }}>
          {nextSteps.map((step) => (
            <div
              key={step.number}
              className="ty-card"
              style={{
                padding: '32px 28px',
                background: '#17251a',
                border: '1px solid rgba(94,154,113,0.2)',
                borderRadius: '12px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <span
                className="ty-serif"
                style={{
                  position: 'absolute', top: '-8px', right: '16px',
                  fontSize: '5rem', fontWeight: 900, lineHeight: 1,
                  color: 'rgba(94,154,113,0.08)', userSelect: 'none', pointerEvents: 'none',
                }}
              >
                {step.number}
              </span>

              <div style={{ fontSize:'28px', marginBottom:'20px' }}>{step.icon}</div>

              <div style={{ width:'24px', height:'2px', background:'#5e9a71', marginBottom:'16px' }} />

              <h3
                className="ty-serif"
                style={{ fontSize:'1.25rem', fontWeight:700, color:'#ffffff', margin:'0 0 12px', lineHeight:1.2 }}
              >
                {step.title}
              </h3>
              <p style={{ fontSize:'13px', color:'rgba(255,255,255,0.5)', lineHeight:1.8, margin:0, fontWeight:300 }}>
                {step.text}
              </p>
            </div>
          ))}
        </div>

        {/* ── STATS ── */}
        <div className="ty-fu-5"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4,1fr)',
            border: '1px solid rgba(94,154,113,0.2)',
            marginBottom: '40px',
            background: '#17251a',
            borderRadius: '12px',
            overflow: 'hidden',
          }}
        >
          {stats.map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                textAlign: 'center',
                padding: 'clamp(20px,3vw,36px) 16px',
                borderRight: i < stats.length - 1 ? '1px solid rgba(94,154,113,0.2)' : 'none',
              }}
            >
              <p className="ty-serif" style={{ fontSize:'clamp(1.6rem,3vw,2.4rem)', fontWeight:900, color:'#b72c78', margin:'0 0 6px' }}>
                {value}
              </p>
              <p style={{ fontSize:'10px', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)', margin:0, fontWeight:300 }}>
                {label}
              </p>
            </div>
          ))}
        </div>

        {/* ── BOTTOM NAV ── */}
        <div className="ty-fu-5"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '16px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(94,154,113,0.2)',
          }}
        >
          <div>
            <h3 className="ty-serif" style={{ fontSize:'1.4rem', fontWeight:700, color:'#ffffff', margin:'0 0 4px' }}>
              Sudha Skin <span style={{ fontStyle:'italic', fontWeight:500, color:'#5e9a71' }}>Clinic.</span>
            </h3>
            <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.4)', margin:0, fontWeight:300, letterSpacing:'0.05em' }}>
              Kakinada · Advanced Skin Treatments
            </p>
          </div>

          <div style={{ display:'flex', gap:'24px', flexWrap:'wrap' }}>
            {[
              { label:'← Back to Home', href:'/' },
              { label:'View Treatments', href:'/' },
              { label:'Read Reviews', href:'/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className="ty-sec"
                style={{
                  fontSize: '11px', letterSpacing: '0.15em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)', fontWeight: 400, textDecoration: 'none',
                  padding: '8px 16px',
                  border: '1px solid rgba(94,154,113,0.2)',
                  borderRadius: '4px',
                  transition: 'all 0.2s ease',
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#5e9a71'; e.currentTarget.style.color = '#5e9a71'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(94,154,113,0.2)'; e.currentTarget.style.color = 'rgba(255,255,255,0.45)'; }}
              >
                {label}
              </a>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
};
