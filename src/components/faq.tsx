"use client";

import { useState } from "react";
import BookingButton from './BookingButton';

const faqs = [
  {
    id: 1,
    question: "What causes acne?",
    answer:
      "Acne is caused by blocked pores due to excess oil, bacteria, and dead skin cells. Hormonal changes, stress, and lifestyle factors can also contribute.",
  },
  {
    id: 2,
    question: "How long will it take to see results with acne treatment?",
    answer:
      "Results vary depending on the severity of your acne, but many patients start noticing improvements within 4-6 weeks of treatment.",
  },
  {
    id: 3,
    question: "Are acne scar treatments safe?",
    answer:
      "Yes, acne scar treatments such as laser therapy, chemical peels, and dermarolling are safe when performed by experienced professionals.",
  },
  {
    id: 4,
    question: "How many treatments are required for acne scars to fade?",
    answer:
      "The number of treatments depends on the depth and severity of the scars. Most patients see significant improvements after 3-6 sessions.",
  },
  {
    id: 5,
    question: "Can I go back to my normal routine after acne treatments?",
    answer:
      "Most acne treatments have minimal downtime, but some treatments like laser may require a few days for recovery. Your doctor will provide specific post-care instructions.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(3);

  const toggle = (id: number) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <section className="w-full bg-[#f7fbf8] py-8 sm:py-16 px-4 sm:px-6">
      {/* Heading */}
      <div className="text-center mb-8 sm:mb-12">
        <p
          className="lp-eyebrow mb-2 text-sm sm:text-base"
          style={{ color: "#5e9a71" }}
        >
          ACNE FAQ
        </p>
        <h2
          className="lp-title text-3xl sm:text-4xl md:text-5xl"
          style={{ color: "#122017" }}
        >
          Usually Asked{" "}
          <span 
            className="italic inline-block"
            style={{ color: "#b72c78" }}
          >
            Questions
          </span>
        </h2>
      </div>

      {/* FAQ Items */}
      <div className="max-w-4xl mx-auto flex flex-col gap-3 sm:gap-4">
        {faqs.map((faq) => {
          const isOpen = openId === faq.id;
          return (
            <div
              key={faq.id}
              className={`rounded-xl sm:rounded-2xl overflow-hidden transition-all duration-300 ${
                isOpen ? "mx-0" : "mx-0 sm:mx-6 md:mx-10"
              }`}
              style={{
                background: isOpen ? "#e8f4ea" : "#ffffff",
                outline: isOpen ? "none" : "1.5px solid #b72c78",
              }}
            >
              <button
                onClick={() => toggle(faq.id)}
                className="w-full flex items-center justify-between px-4 sm:px-6 md:px-7 py-3 sm:py-4 md:py-5 text-left gap-3 sm:gap-4"
              >
                <span
                  className="lp-body text-sm sm:text-base md:text-base font-medium"
                  style={{ color: "#122017" }}
                >
                  {faq.question}
                </span>

                {/* Circle arrow icon */}
                <span
                  className="flex-shrink-0 w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 rounded-full border-2 flex items-center justify-center"
                  style={{ borderColor: "#b72c78" }}
                >
                  {isOpen ? (
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                      style={{ color: "#5e9a71" }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  ) : (
                    <svg
                      className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4"
                      style={{ color: "#5e9a71" }}
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2.2}
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
                    </svg>
                  )}
                </span>
              </button>

              {/* Answer */}
              {isOpen && (
                <div className="px-4 sm:px-6 md:px-7 pb-4 sm:pb-5 md:pb-6">
                  <p className="lp-body text-sm sm:text-base" style={{ color: "#4f6d57" }}>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mx-auto mt-10 sm:mt-12 md:mt-14 max-w-5xl px-2 sm:px-0">
        <div className="mb-6 sm:mb-8 text-center sm:text-left">
          <p className="lp-eyebrow mb-3 sm:mb-5 text-[#5e9a71] text-sm sm:text-base">
            Got Questions?
          </p>
          <h3 className="lp-title text-2xl sm:text-3xl md:text-4xl text-[#122017]">
            Acne Treatment in Kakinada {"\u2014"} FAQs
          </h3>
          <p className="lp-body mt-3 sm:mt-4 text-[#4f6d57] text-sm sm:text-base">
            Honest answers from our dermatologist in Kakinada.
          </p>
        </div>

        <div className="rounded-2xl sm:rounded-[28px] border border-[#b72c78] bg-white px-4 sm:px-6 md:px-9 py-6 sm:py-7 md:py-9 shadow-[0_22px_60px_rgba(60,84,66,0.12)] text-center sm:text-left">
          <p className="lp-subtitle text-[#122017] text-lg sm:text-xl md:text-2xl font-semibold">
            Still have a question?
          </p>
          <p className="lp-body mt-3 sm:mt-4 max-w-3xl text-[#4f6d57] text-sm sm:text-base">
            WhatsApp Dr. Sudha directly {"\u2014"} get a response from the doctor, not a receptionist.
          </p>
           <a  href="https://wa.me/+91 9553033366" target="_blank" rel="noreferrer"
                    className="ld-wa mt-5 faq"
                    style={{ display:'inline-flex', alignItems:'center', background:'#5e9a71', color:'#fff', fontSize:'12px', fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', textDecoration:'none', border:'2px solid #5e9a71', borderRadius:'999px' }}>
                    <svg width="16" height="16" fill="currentColor" viewBox="0 0 32 32">
                      <path d="M16.02 4.8A11.14 11.14 0 0 0 6.6 21.9L5.2 27l5.22-1.36A11.14 11.14 0 1 0 16.02 4.8Zm0 2.02a9.12 9.12 0 0 1 7.73 13.95 9.2 9.2 0 0 1-11.96 3.05l-.37-.22-3.1.8.83-3.02-.24-.39A9.12 9.12 0 0 1 16.02 6.82Zm-3.85 4.33c-.2 0-.52.08-.79.38-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.07 3.31 5.1 4.51 2.52 1 3.04.8 3.59.75.55-.05 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35-.3-.15-1.77-.87-2.04-.97-.28-.1-.48-.15-.68.15-.2.3-.78.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.78-1.67-2.08-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.68-1.65-.94-2.25-.24-.58-.5-.5-.68-.5h-.58Z" />
                    </svg>
                    Whatsapp Your Question
                  </a>
        </div>
      </div>
    </section>
  );
}