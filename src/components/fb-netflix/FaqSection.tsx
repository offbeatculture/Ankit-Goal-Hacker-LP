import { Plus, X } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "Is this another goal-setting workshop?",
    a: "No. This is execution architecture. We don’t talk about what you want — we design systems that make action inevitable.",
  },
  {
    q: "What if I procrastinate heavily?",
    a: "Perfect. This framework was designed for intelligent procrastinators — people who overthink, delay, and still expect high standards from themselves.",
  },
  {
    q: "Is this beginner-friendly?",
    a: "Yes — simple enough to start immediately, but powerful enough for high performers, founders, and leaders.",
  },
  {
    q: "Will I get the recording?",
    a: "Yes. Lifetime access to the full recording, frameworks, and updates.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container max-w-4xl">
        {/* Title (Netflix style) */}
        <h2 className="mb-6 text-center font-heading2 text-2xl font-extrabold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* List */}
        <div className="space-y-2">
          {faqs.map((item, index) => {
            const isOpen = open === index;

            return (
              <div
                key={index}
                className="overflow-hidden bg-[#2d2d2d] transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-7"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-semibold text-white md:text-xl">
                    {item.q}
                  </span>

                  <span className="shrink-0 text-white">
                    {isOpen ? (
                      <X className="h-6 w-6 md:h-7 md:w-7" />
                    ) : (
                      <Plus className="h-6 w-6 md:h-7 md:w-7" />
                    )}
                  </span>
                </button>

                {isOpen && (
                  <div className="border-t border-black/40 px-5 pb-6 pt-5 md:px-7">
                    <p className="text-sm leading-relaxed text-white/80 md:text-lg">
                      {item.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
