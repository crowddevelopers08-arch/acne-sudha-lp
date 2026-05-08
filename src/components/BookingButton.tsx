'use client';

import type { ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

const defaultClass =
  'lp-button inline-flex items-center justify-center gap-2.5 rounded-full bg-[#5e9a71] px-7 py-3.5 text-white shadow-[0_12px_28px_rgba(94,154,113,0.28)] transition hover:-translate-y-0.5 hover:bg-[#4f8562]';

export default function BookingButton({ children, className }: Props) {
  const open = () => window.dispatchEvent(new CustomEvent('open-booking'));
  return (
    <button onClick={open} className={className ?? defaultClass}>
      {children}
    </button>
  );
}
