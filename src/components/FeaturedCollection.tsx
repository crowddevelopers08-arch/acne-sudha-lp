'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import BookingButton from './BookingButton';

const fieldDefs = [
  { id: 'name',   label: 'Name',          placeholder: 'Enter your full name',  type: 'text' },
  { id: 'phone',  label: 'Mobile Number', placeholder: 'Enter mobile number',   type: 'tel'  },
  { id: 'location', label: 'Location',   placeholder: 'Enter your location',    type: 'text' },
];

const EMPTY = { name: '', phone: '', location: '' };

export const FeaturedCollection = () => {
  const router = useRouter();
  const [fields, setFields] = useState(EMPTY);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof EMPTY) =>
    (e: React.ChangeEvent<HTMLInputElement>) =>
      setFields(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch(process.env.NEXT_PUBLIC_GAS_URL!, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'text/plain' },
        body: JSON.stringify({ ...fields, source: 'Contact Form' }),
      });
    } finally {
      setLoading(false);
      router.push('/thank-you');
    }
  };

  return (
    <section id='contact' className="bg-[#0e1a12] px-4 sm:px-5 md:px-8 lg:px-10 py-8 sm:py-14 md:py-16">
      <div className="mx-auto max-w-[1180px] overflow-hidden rounded-2xl sm:rounded-[24px] md:rounded-[28px] border border-[#b72c78]/40 bg-[#17251a] shadow-[0_20px_50px_rgba(0,0,0,0.30)] sm:shadow-[0_24px_70px_rgba(0,0,0,0.35)]">

        <div className="flex flex-col lg:grid lg:grid-cols-[0.95fr_1.05fr]">

          {/* Left Side */}
          <div className="relative overflow-hidden bg-[#0b3035] px-5 sm:px-6 md:px-8 lg:px-10 py-8 sm:py-9 md:py-10 lg:py-12 text-white">
            <div
              aria-hidden="true"
              className="absolute inset-0 scale-105 bg-[url('https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=90')] bg-cover bg-center"
            />
            <div className="absolute inset-0 bg-[#06272d]/20" />
            <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(5,31,36,0.96)_0%,rgba(5,31,36,0.82)_45%,rgba(5,31,36,0.28)_100%)]" />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(5,31,36,0.48),transparent_55%)]" />
            <div className="absolute inset-x-0 top-0 h-1 bg-[#5e9a71]" />

            <div className="relative z-10">
              <p className="lp-eyebrow mb-3 sm:mb-4 text-[#5e9a71] text-sm sm:text-base">
                Acne Consultation
              </p>
              <h2 className="lp-title text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
                Could this be{" "}
                <span className="italic inline-block" style={{ color: "#b72c78" }}>
                  your story?
                </span>
              </h2>
              <p className="lp-body mt-4 sm:mt-5 max-w-[470px] text-white/82 text-sm sm:text-base">
                Book Acne consultation with our Kakinada's best dermatologist.
              </p>
            </div>
          </div>

          {/* Right Side - Form */}
          <form className="px-5 sm:px-6 md:px-8 lg:px-10 py-6 sm:py-7 md:py-8 lg:py-12" onSubmit={handleSubmit}>
            <div className="mb-6 sm:mb-7 text-center lg:text-left">
              <h3 className="lp-subtitle text-white text-lg sm:text-xl md:text-2xl">
                Consult a Skin Doctor
              </h3>
              <p className="lp-body mt-1.5 sm:mt-2 text-white/55 text-sm sm:text-base">
                Share a few details and we will help you with the next step.
              </p>
            </div>

            <div className="grid gap-4 sm:gap-5 grid-cols-1 sm:grid-cols-2">
              {fieldDefs.map((field) => (
                <label
                  className={field.id === 'location' ? 'block sm:col-span-2' : 'block'}
                  htmlFor={field.id}
                  key={field.id}
                >
                  <span className="lp-small mb-1.5 sm:mb-2 block text-white/75 text-xs sm:text-sm">
                    {field.label}*
                  </span>
                  <input
                    className="lp-body h-11 sm:h-12 w-full rounded-lg sm:rounded-[10px] border border-white/15 bg-white/8 px-3 sm:px-4 text-white text-sm sm:text-base outline-none transition focus:border-[#b72c78] focus:ring-4 focus:ring-[#5e9a71]/15"
                    id={field.id}
                    name={field.id}
                    placeholder={field.placeholder}
                    required
                    type={field.type}
                    value={fields[field.id as keyof typeof EMPTY]}
                    onChange={set(field.id as keyof typeof EMPTY)}
                  />
                </label>
              ))}
            </div>

            <label className="lp-small mt-4 sm:mt-5 flex items-start gap-2.5 sm:gap-3 text-white/55 text-xs sm:text-sm">
              <input
                className="mt-0.5 sm:mt-1 h-3.5 w-3.5 sm:h-4 sm:w-4 rounded border-[#8db2b7] accent-[#007b83]"
                defaultChecked
                type="checkbox"
              />
              <span className="leading-tight sm:leading-normal">I understand and accept the terms and conditions.</span>
            </label>

            <button
              type="submit"
              disabled={loading}
              className="lp-button mt-5 sm:mt-6 md:mt-7 inline-flex h-12 sm:h-13 w-full items-center justify-center rounded-full bg-[#5e9a71] px-6 sm:px-8 text-white text-sm sm:text-base shadow-[0_14px_30px_rgba(94,154,113,0.28)] transition hover:bg-[#4f8562] disabled:opacity-60 disabled:cursor-not-allowed sm:max-w-[310px] sm:mx-auto sm:flex"
            >
              {loading ? 'Submitting…' : 'Book Now'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
