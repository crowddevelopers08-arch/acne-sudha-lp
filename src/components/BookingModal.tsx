'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const concerns = [
  'Acne Treatment',
  'Acne Scars',
  'Pigmentation',
  'Skin Brightening',
  'Chemical Peel',
  'Other',
];

const EMPTY = { name: '', email: '', phone: '', concern: '', description: '' };

export default function BookingModal() {
  const router = useRouter();
  const [open, setOpen]       = useState(false);
  const [loading, setLoading] = useState(false);
  const [fields, setFields]   = useState(EMPTY);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener('open-booking', handler);
    return () => window.removeEventListener('open-booking', handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const close = () => { setOpen(false); setFields(EMPTY); };

  const set = (k: keyof typeof EMPTY) => (e: { target: { value: string } }) =>
    setFields(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: { preventDefault(): void }) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch('/api/submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...fields, source: 'Booking Form', pageUrl: window.location.href }),
      });
    } finally {
      setLoading(false);
      setOpen(false);
      router.push('/thank-you');
    }
  };

  if (!open) return null;

  return (
    /* ── Overlay ── */
    <div
      className="fixed inset-0 z-[200] flex items-end justify-center sm:items-center sm:px-4"
      onClick={close}
    >
      <div className="absolute inset-0 bg-[#071a0d]/80 backdrop-blur-sm" />

      {/* ── Card ── */}
      <div
        className={[
          /* sizing */
          'relative w-full sm:max-w-md md:max-w-lg',
          /* height — scrollable body on small screens */
          'flex flex-col max-h-[94vh] sm:max-h-[90vh] md:max-h-[85vh]',
          /* shape */
          'rounded-t-[24px] sm:rounded-[24px] md:rounded-[28px]',
          /* surface */
          'overflow-hidden border border-[#b72c78]/25 bg-[#fff8f5]',
          'shadow-[0_-8px_40px_rgba(0,0,0,0.25)] sm:shadow-[0_32px_80px_rgba(0,0,0,0.4)]',
          /* slide up animation */
          'translate-y-0',
        ].join(' ')}
        onClick={(e) => e.stopPropagation()}
      >

        {/* ── Header (fixed) ── */}
        <div className="relative shrink-0 bg-[#122017] px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6">
          <div className="absolute inset-x-0 top-0 h-[3px] bg-[#5e9a71]" />

          {/* mobile drag handle */}
          <div className="mx-auto mb-2 h-1 w-10 rounded-full bg-white/20 sm:hidden" />

          <p className="lp-eyebrow mb-0.5 sm:mb-1 text-[#5e9a71] text-xs sm:text-sm">
            Sudha Skin Clinic · Kakinada
          </p>
          <h2 className="lp-subtitle text-white text-lg sm:text-xl md:text-2xl">
            Book Your Consultation
          </h2>
          <p className="lp-small mt-0.5 sm:mt-1 text-white/45 text-xs sm:text-sm">
            A dermatologist will call you back within 24 hours.
          </p>

          <button
            onClick={close}
            className="absolute right-3 sm:right-4 top-3 sm:top-4 flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-full bg-white/10 text-white/60 transition hover:bg-white/20 hover:text-white"
            aria-label="Close"
          >
            <svg className="h-3.5 w-3.5 sm:h-4 sm:w-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* ── Body (scrollable) ── */}
        <div className="overflow-y-auto overscroll-contain px-4 sm:px-5 md:px-7 py-4 sm:py-5 md:py-6">
          <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:gap-4">

              {/* Row 1 — Name + Email (Stack on mobile, 2-col on tablet+) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <label className="flex flex-col gap-1 sm:gap-1.5">
                  <span className="lp-small text-[#122017] text-xs sm:text-sm">Full Name *</span>
                  <input
                    required
                    type="text"
                    placeholder="Your full name"
                    value={fields.name}
                    onChange={set('name')}
                    className="lp-body h-10 sm:h-11 rounded-lg sm:rounded-[10px] border border-[#c8dcd0] bg-white px-3 sm:px-4 text-[#122017] text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-2 focus:ring-[#5e9a71]/20"
                  />
                </label>

                <label className="flex flex-col gap-1 sm:gap-1.5">
                  <span className="lp-small text-[#122017] text-xs sm:text-sm">Email Address *</span>
                  <input
                    required
                    type="email"
                    placeholder="Your email"
                    value={fields.email}
                    onChange={set('email')}
                    className="lp-body h-10 sm:h-11 rounded-lg sm:rounded-[10px] border border-[#c8dcd0] bg-white px-3 sm:px-4 text-[#122017] text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-2 focus:ring-[#5e9a71]/20"
                  />
                </label>
              </div>

              {/* Row 2 — Phone + Concern (Stack on mobile, 2-col on tablet+) */}
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                <label className="flex flex-col gap-1 sm:gap-1.5">
                  <span className="lp-small text-[#122017] text-xs sm:text-sm">Phone Number *</span>
                  <input
                    required
                    type="tel"
                    placeholder="Your phone"
                    value={fields.phone}
                    onChange={set('phone')}
                    className="lp-body h-10 sm:h-11 rounded-lg sm:rounded-[10px] border border-[#c8dcd0] bg-white px-3 sm:px-4 text-[#122017] text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-2 focus:ring-[#5e9a71]/20"
                  />
                </label>

                <label className="flex flex-col gap-1 sm:gap-1.5">
                  <span className="lp-small text-[#122017] text-xs sm:text-sm">Skin Concern *</span>
                  <select
                    required
                    value={fields.concern}
                    onChange={set('concern')}
                    className="lp-body h-10 sm:h-11 rounded-lg sm:rounded-[10px] border border-[#c8dcd0] bg-white px-3 sm:px-4 text-[#122017] text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-2 focus:ring-[#5e9a71]/20"
                  >
                    <option value="" disabled>Select concern</option>
                    {concerns.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </label>
              </div>

              {/* Description — full width */}
              <label className="flex flex-col gap-1 sm:gap-1.5">
                <span className="lp-small text-[#122017] text-xs sm:text-sm">Description</span>
                <textarea
                  rows={3}
                  placeholder="Briefly describe your concern or any questions..."
                  value={fields.description}
                  onChange={set('description')}
                  className="lp-body resize-none rounded-lg sm:rounded-[10px] border border-[#c8dcd0] bg-white px-3 sm:px-4 py-2 sm:py-3 text-[#122017] text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-2 focus:ring-[#5e9a71]/20"
                />
              </label>

              <button
                type="submit"
                disabled={loading}
                className="lp-button mt-1 inline-flex h-11 sm:h-12 w-full items-center justify-center rounded-full bg-[#5e9a71] text-white text-sm sm:text-base shadow-[0_12px_28px_rgba(94,154,113,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4f8562] disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {loading ? 'Submitting…' : 'Confirm Booking'}
              </button>

              <p className="lp-small pb-1 text-center text-[#7a9e85] text-xs sm:text-sm">
                 No obligation ·doctor speaking 
              </p>
            </form>
        </div>
      </div>
    </div>
  );
}
