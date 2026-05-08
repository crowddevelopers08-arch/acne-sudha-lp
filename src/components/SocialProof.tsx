import BookingButton from './BookingButton';

const points = [
  'Doctor consultation',
  'No sales pressure',
  'Telugu-speaking doctor',
];

export const SocialProof = () => {
  return (
    <section className="bg-[#0e1a12] px-5 py-12 max-sm:py-4 md:px-8 lg:px-10">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-[22px] border border-[#b72c78] bg-[#f7fbf8] shadow-[16px_16px_0_rgba(0,0,0,0.14)]">
        <div className="grid items-center gap-7 px-6 py-9 md:px-10 lg:grid-cols-[1fr_auto] lg:px-12">
          <div>
            <p className="lp-eyebrow mb-3 text-[#007d80]">
              Call Consultation
            </p>
            <h2 className="lp-title max-w-[620px] text-[#061114]">
              Clear Skin Starts with <span className="italic" style={{ color: "#b72c78" }}>One call</span>
            </h2>

            <div className="lp-body mt-5 flex flex-wrap gap-x-3 gap-y-2 text-[#315e63]">
              {points.map((point, index) => (
                <span key={point}>
                  {point}
                  {index < points.length - 1 ? <span className="mx-3 text-[#5e9a71]">&middot;</span> : null}
                </span>
              ))}
            </div>
            <p className="lp-body mt-3 text-[#52777b]">
              Consultations Mon - Sat, 10 AM - 8PM
            </p>
          </div>

          <BookingButton className="lp-button inline-flex h-[58px] w-full items-center justify-center rounded-full bg-[#5e9a71] px-9 max-sm:px-0 text-white shadow-[0_16px_34px_rgba(94,154,113,0.28)] transition hover:bg-[#4f8562] md:w-[330px]">
            Call for an Appointment
          </BookingButton>
        </div>
      </div>
    </section>
  );
};
