'use client';

const sections = [
  {
    number: '01',
    title: 'Information We Collect',
    content: [
      {
        subtitle: 'Personal Information',
        text: 'When you book a consultation or contact us, we collect information such as your name, email address, phone number, and any health-related details you voluntarily provide to help us deliver personalised skincare treatment.',
      },
      {
        subtitle: 'Usage Data',
        text: 'We automatically collect certain information when you visit our website, including your IP address, browser type, pages viewed, and time spent on each page. This helps us improve your experience on our platform.',
      },
    ],
  },
  {
    number: '02',
    title: 'How We Use Your Information',
    content: [
      {
        subtitle: 'Treatment & Communication',
        text: 'Your information is used to schedule appointments, provide treatment plans, send appointment reminders, and respond to your enquiries. We may also send you updates about our services if you have opted in to receive them.',
      },
      {
        subtitle: 'Service Improvement',
        text: 'Aggregated, anonymised data may be used to analyse trends, improve our website, and enhance the quality of care we provide. We never sell or rent your personal information to third parties.',
      },
    ],
  },
  {
    number: '03',
    title: 'Data Storage & Security',
    content: [
      {
        subtitle: 'How We Protect Your Data',
        text: 'We implement industry-standard security measures including SSL encryption, secure servers, and restricted access controls to protect your personal information from unauthorised access, disclosure, or misuse.',
      },
      {
        subtitle: 'Retention Period',
        text: 'We retain your personal data only for as long as necessary to fulfil the purposes outlined in this policy, or as required by applicable law. Medical records are retained in accordance with healthcare regulations.',
      },
    ],
  },
  {
    number: '04',
    title: 'Cookies & Tracking',
    content: [
      {
        subtitle: 'What Are Cookies',
        text: 'Our website uses cookies — small text files stored on your device — to enhance functionality, remember your preferences, and analyse site traffic. You can control cookie settings through your browser at any time.',
      },
      {
        subtitle: 'Third-Party Analytics',
        text: 'We may use third-party services such as Google Analytics to understand how visitors interact with our site. These services have their own privacy policies, and we encourage you to review them independently.',
      },
    ],
  },
  {
    number: '05',
    title: 'Your Rights',
    content: [
      {
        subtitle: 'Access & Correction',
        text: 'You have the right to access, update, or request deletion of your personal information at any time. To exercise these rights, please contact us directly and we will respond within 30 days.',
      },
      {
        subtitle: 'Opt-Out',
        text: 'You may unsubscribe from our marketing communications at any time by clicking the unsubscribe link in any email, or by contacting us directly. Opting out does not affect communications related to your treatment.',
      },
    ],
  },
  {
    number: '06',
    title: 'Contact Us',
    content: [
      {
        subtitle: 'Get In Touch',
        text: 'If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your data, please contact our team at hello@sudhaskin.in or call us at +91 99999 99999. We are happy to help.',
      },
    ],
  },
];

export const PrivacyPolicy = () => {
  return (
    <main
      style={{
        background: '#0e1a12',
        minHeight: '100vh',
        fontFamily: 'var(--font-manrope), sans-serif',
      }}
    >
      <style>{`
        .pp-serif  { font-family: var(--font-noto-serif), serif !important; }
        .pp-link   { color: #5e9a71; text-decoration: none; border-bottom: 1px solid rgba(94,154,113,0.4); transition: border-color 0.2s; }
        .pp-link:hover { border-color: #5e9a71; }
        .pp-section { transition: opacity 0.2s ease; }
        .pp-section:hover .pp-num { color: #5e9a71 !important; }
      `}</style>

      {/* ── HERO ── */}
      <div
        style={{
          position: 'relative',
          overflow: 'hidden',
          borderBottom: '1px solid rgba(94,154,113,0.2)',
          padding: 'clamp(80px,10vw,140px) clamp(20px,4vw,64px) clamp(60px,8vw,100px)',
        }}
      >
        <div style={{ position:'absolute', top:'-100px', right:'-100px', width:'420px', height:'420px', borderRadius:'50%', border:'1px solid rgba(94,154,113,0.15)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', top:'-50px', right:'-50px', width:'240px', height:'240px', borderRadius:'50%', border:'1px solid rgba(183,44,120,0.1)', pointerEvents:'none' }} />
        <div style={{ position:'absolute', bottom:0, left:0, width:'180px', height:'180px', opacity:0.06, backgroundImage:'radial-gradient(rgba(94,154,113,0.6) 1px, transparent 1px)', backgroundSize:'14px 14px', pointerEvents:'none' }} />

        <div style={{ maxWidth:'1200px', margin:'0 auto', position:'relative', zIndex:1 }}>
          <div style={{ display:'flex', alignItems:'center', gap:'12px', marginBottom:'32px' }}>
            <div style={{ width:'24px', height:'1px', background:'#5e9a71' }} />
            <span style={{ fontSize:'11px', letterSpacing:'0.28em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500 }}>
              Legal · Sudha Skin Clinic
            </span>
          </div>

          <h1 className="pp-serif" style={{ fontSize:'clamp(2.8rem,6vw,5.5rem)', fontWeight:900, color:'#ffffff', lineHeight:1.05, margin:'0 0 8px' }}>
            Privacy
          </h1>
          <h1 className="pp-serif" style={{ fontSize:'clamp(2.8rem,6vw,5.5rem)', fontWeight:500, fontStyle:'italic', color:'#b72c78', lineHeight:1.05, margin:'0 0 32px' }}>
            Policy.
          </h1>

          <div style={{ display:'flex', flexWrap:'wrap', gap:'32px', alignItems:'center' }}>
            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <span style={{ fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', fontWeight:300 }}>Last Updated</span>
              <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)', fontWeight:400 }}>1 January 2024</span>
            </div>
            <div style={{ width:'1px', height:'32px', background:'rgba(94,154,113,0.3)' }} />
            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <span style={{ fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', fontWeight:300 }}>Effective Date</span>
              <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)', fontWeight:400 }}>1 January 2024</span>
            </div>
            <div style={{ width:'1px', height:'32px', background:'rgba(94,154,113,0.3)' }} />
            <div style={{ display:'flex', flexDirection:'column', gap:'4px' }}>
              <span style={{ fontSize:'10px', letterSpacing:'0.22em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)', fontWeight:300 }}>Jurisdiction</span>
              <span style={{ fontSize:'13px', color:'rgba(255,255,255,0.6)', fontWeight:400 }}>India</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── BODY ── */}
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: 'clamp(48px,6vw,96px) clamp(20px,4vw,64px)',
          display: 'grid',
          gridTemplateColumns: '260px 1fr',
          gap: 'clamp(32px,4vw,80px)',
          alignItems: 'start',
        }}
      >
        {/* ── LEFT: sticky TOC ── */}
        <aside
          style={{
            position: 'sticky',
            top: '32px',
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
          }}
        >
          <p style={{ fontSize:'10px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500, marginBottom:'16px' }}>
            Contents
          </p>
          {sections.map((s) => (
            <a
              key={s.number}
              href={`#section-${s.number}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '8px 0',
                textDecoration: 'none',
                borderBottom: '1px solid rgba(94,154,113,0.1)',
                transition: 'all 0.2s ease',
              }}
              onMouseEnter={e => { e.currentTarget.style.paddingLeft = '6px'; }}
              onMouseLeave={e => { e.currentTarget.style.paddingLeft = '0px'; }}
            >
              <span style={{ fontSize:'10px', color:'#5e9a71', fontWeight:500, letterSpacing:'0.1em', width:'20px', flexShrink:0 }}>
                {s.number}
              </span>
              <span style={{ fontSize:'12px', color:'rgba(255,255,255,0.5)', fontWeight:300, letterSpacing:'0.05em' }}>
                {s.title}
              </span>
            </a>
          ))}

          <div
            style={{
              marginTop: '32px',
              padding: '20px',
              background: 'rgba(94,154,113,0.08)',
              border: '1px solid rgba(94,154,113,0.2)',
              borderRadius: '8px',
            }}
          >
            <p style={{ fontSize:'11px', letterSpacing:'0.15em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500, margin:'0 0 8px' }}>
              Questions?
            </p>
            <p style={{ fontSize:'12px', color:'rgba(255,255,255,0.5)', lineHeight:1.7, margin:'0 0 16px', fontWeight:300 }}>
              Our team is happy to clarify anything about how we handle your data.
            </p>
            <a
              href="mailto:hello@sudhaskin.in"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                fontSize: '11px',
                fontWeight: 500,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: '#ffffff',
                background: '#5e9a71',
                padding: '10px 18px',
                textDecoration: 'none',
                transition: 'background 0.2s',
                borderRadius: '999px',
              }}
              onMouseEnter={e => { e.currentTarget.style.background = '#b72c78'; }}
              onMouseLeave={e => { e.currentTarget.style.background = '#5e9a71'; }}
            >
              Email Us →
            </a>
          </div>
        </aside>

        {/* ── RIGHT: sections ── */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>

          <div style={{ paddingBottom: '48px', borderBottom: '1px solid rgba(94,154,113,0.12)', marginBottom: '48px' }}>
            <p style={{ fontSize:'15px', lineHeight:1.9, color:'rgba(255,255,255,0.55)', fontWeight:300, maxWidth:'640px', margin:0 }}>
              At <strong style={{ fontWeight:500, color:'#ffffff' }}>Sudha Skin Clinic</strong>, your privacy is as important to us as your skin health.
              This policy explains what information we collect, how we use it, and the choices you have.
              By using our services, you agree to the practices described below.
            </p>
          </div>

          {sections.map((s, idx) => (
            <div
              key={s.number}
              id={`section-${s.number}`}
              className="pp-section"
              style={{
                paddingBottom: '56px',
                marginBottom: '56px',
                borderBottom: idx < sections.length - 1 ? '1px solid rgba(94,154,113,0.12)' : 'none',
                scrollMarginTop: '32px',
              }}
            >
              <div style={{ display:'flex', alignItems:'flex-start', gap:'20px', marginBottom:'32px' }}>
                <span
                  className="pp-num pp-serif"
                  style={{
                    fontSize: '3.5rem',
                    fontWeight: 900,
                    lineHeight: 1,
                    color: 'rgba(94,154,113,0.08)',
                    transition: 'color 0.2s ease',
                    userSelect: 'none',
                    flexShrink: 0,
                    marginTop: '-8px',
                  }}
                >
                  {s.number}
                </span>
                <div>
                  <div style={{ display:'flex', alignItems:'center', gap:'10px', marginBottom:'6px' }}>
                    <div style={{ width:'16px', height:'1px', background:'#5e9a71' }} />
                    <span style={{ fontSize:'10px', letterSpacing:'0.25em', textTransform:'uppercase', color:'#5e9a71', fontWeight:500 }}>
                      Section {s.number}
                    </span>
                  </div>
                  <h2
                    className="pp-serif"
                    style={{ fontSize:'clamp(1.4rem,2.5vw,2rem)', fontWeight:700, color:'#ffffff', margin:0, lineHeight:1.2 }}
                  >
                    {s.title}
                  </h2>
                </div>
              </div>

              <div style={{ display:'flex', flexDirection:'column', gap:'28px' }}>
                {s.content.map((block) => (
                  <div
                    key={block.subtitle}
                    style={{
                      paddingLeft: '24px',
                      borderLeft: '2px solid rgba(183,44,120,0.35)',
                    }}
                  >
                    <h3
                      style={{
                        fontSize: '13px',
                        fontWeight: 500,
                        letterSpacing: '0.08em',
                        color: 'rgba(255,255,255,0.9)',
                        margin: '0 0 10px',
                        textTransform: 'uppercase',
                      }}
                    >
                      {block.subtitle}
                    </h3>
                    <p
                      style={{
                        fontSize: '14px',
                        lineHeight: 1.85,
                        color: 'rgba(255,255,255,0.55)',
                        fontWeight: 300,
                        margin: 0,
                        maxWidth: '640px',
                      }}
                    >
                      {block.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div
            style={{
              padding: '24px 28px',
              background: 'rgba(94,154,113,0.07)',
              border: '1px solid rgba(94,154,113,0.2)',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '16px',
            }}
          >
            <span style={{ fontSize:'20px', flexShrink:0, marginTop:'2px' }}>📋</span>
            <p style={{ fontSize:'13px', lineHeight:1.8, color:'rgba(255,255,255,0.5)', fontWeight:300, margin:0 }}>
              This policy may be updated periodically to reflect changes in our practices or legal requirements.
              We will notify you of any significant changes via email or a prominent notice on our website.
              Your continued use of our services after such changes constitutes acceptance of the updated policy.
            </p>
          </div>

          <div className="mt-10" style={{ display:'flex', gap:'24px', flexWrap:'wrap', marginTop:'40px' }}>
            {[
              { label:'← Back to Home', href:'/' },
              { label:'View Treatments', href:'/' },
              { label:'Read Reviews', href:'/' },
            ].map(({ label, href }) => (
              <a
                key={label}
                href={href}
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
