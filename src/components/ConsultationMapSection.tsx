import BookingButton from './BookingButton';

const trustPoints = [
  'Book consultation',
  'No obligation',
  'Telugu-speaking doctor',
  'Kakinada clinic',
];

export const ConsultationMapSection = () => {
  return (
    <section className="relative overflow-hidden bg-[#0e1a12] px-4 sm:px-5 md:px-8 lg:px-10 py-12 sm:py-16 md:py-20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_24%,rgba(94,154,113,0.22),transparent_30%),radial-gradient(circle_at_82%_20%,rgba(94,154,113,0.16),transparent_26%)]" />
      <div className="absolute inset-0 opacity-25 bg-[linear-gradient(90deg,rgba(94,154,113,0.16)_1px,transparent_1px),linear-gradient(180deg,rgba(94,154,113,0.12)_1px,transparent_1px)] bg-[length:56px_56px]" />

      <div className="relative z-10 mx-auto grid max-w-[1180px] gap-6 sm:gap-7 md:gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-stretch">
        {/* Left Column - Content */}
        <div className="flex flex-col justify-center rounded-2xl sm:rounded-[28px] border border-[#b72c78]/35 bg-[#122017]/88 px-5 sm:px-8 md:px-10 lg:px-12 py-8 sm:py-9 md:py-10 shadow-[12px_12px_0_rgba(0,0,0,0.24)] sm:shadow-[18px_18px_0_rgba(0,0,0,0.24)]">
          <div className="mb-6 sm:mb-7 md:mb-9 inline-flex w-fit items-center rounded-full border border-[#b72c78]/45 bg-[#17251a] px-4 sm:px-5 md:px-6 py-2 sm:py-3">
            <span className="mr-2 sm:mr-3 h-2 w-2 sm:h-3 sm:w-3 rounded-full bg-[#b72c78]" />
            <span className="lp-eyebrow text-[#5e9a71] text-xs sm:text-sm md:text-base">
              Book Consultation &bull; Kakinada
            </span>
          </div>

          <h2 className="lp-title text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
            Don't let Acne take {' '}
            <span 
              className="italic inline-block"
              style={{ color: "#b72c78" }}
            >
             away your confidence.
            </span>
          </h2>

          <p className="lp-body mt-5 sm:mt-6 md:mt-7 max-w-3xl text-white/62 text-sm sm:text-base">
           Acne does not have to define how you feel about yourself. Qualified dermatologist-led treatment is now available in Kakinada — no waiting, no travel, no compromise.
          </p>

          <div className="mt-7 sm:mt-8 md:mt-9 grid gap-3 sm:gap-4 grid-cols-1 sm:grid-cols-2">
            <BookingButton className="lp-button inline-flex min-h-[50px] sm:min-h-[56px] md:min-h-[64px] w-full items-center justify-center rounded-full bg-[#5e9a71] px-5 sm:px-6 md:px-6 text-white shadow-[0_18px_38px_rgba(94,154,113,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4f8562] text-sm sm:text-base">
              Book Your Consultation
            </BookingButton>
             <a href="https://wa.me/+91 9553033366" target="_blank" rel="noreferrer"
                    className="ld-wa faq"
                    style={{ display:'inline-flex', alignItems:'center', background:'#5e9a71', color:'#fff', fontSize:'12px', fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', textDecoration:'none', border:'2px solid #5e9a71', borderRadius:'999px' }}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
                    </svg>
                    Whatsapp Chat
                  </a>
          </div>

          <div className="lp-body mt-7 sm:mt-8 md:mt-9 flex flex-wrap gap-x-2 sm:gap-x-3 gap-y-1.5 sm:gap-y-2 text-white/56 text-xs sm:text-sm md:text-base">
            {trustPoints.map((point, index) => (
              <span key={point} className="whitespace-nowrap">
                {point}
                {index < trustPoints.length - 1 ? (
                  <span className="mx-1.5 sm:mx-2 md:mx-3 text-[#5e9a71]">&bull;</span>
                ) : null}
              </span>
            ))}
          </div>
        </div>

        {/* Right Column - Map */}
        <div className="overflow-hidden rounded-2xl sm:rounded-[28px] border border-[#b72c78]/35 bg-[#17251a] shadow-[12px_12px_0_rgba(0,0,0,0.24)] sm:shadow-[18px_18px_0_rgba(0,0,0,0.24)]">
          <div className="border-b border-[#b72c78]/35 px-5 sm:px-6 py-4 sm:py-5">
            <p className="lp-eyebrow text-[#5e9a71] text-xs sm:text-sm md:text-base">
              Find the Clinic
            </p>
            <h3 className="lp-subtitle mt-1.5 sm:mt-2 text-white text-base sm:text-lg md:text-xl">
              Sudha Skin Clinic, Kakinada
            </h3>
          </div>

          <iframe
            className="h-[320px] sm:h-[380px] md:h-[420px] lg:h-[520px] w-full border-0 grayscale-[20%]"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            src="https://maps.google.com/maps?q=Sudha%20Skin%20Clinic%20Kakinada&t=&z=14&ie=UTF8&iwloc=&output=embed"
            title="Map showing Sudha Skin Clinic in Kakinada"
          />
        </div>
      </div>
    </section>
  );
};