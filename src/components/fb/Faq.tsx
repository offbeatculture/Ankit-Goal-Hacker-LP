import { ChevronDown } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    q: "I'm already 50/60+. Is this for me?",
    a: "Absolutely. We have community members in their 70s achieving remarkable goals. Your age doesn't determine your potential — your systems do. This framework works regardless of where you're starting from.",
  },
  {
    q: "I'm a serial procrastinator. Will this actually work?",
    a: "This workshop was designed specifically for procrastinators. The entire framework is built on the insight that willpower is unreliable — so we bypass it entirely with automation and ritual stacking.",
  },
  {
    q: "What if I've tried goal-setting workshops before?",
    a: "Most goal-setting programs stop at 'write down your goals and visualize.' We go further — teaching you exactly how to make execution feel effortless through gamification and habit automation.",
  },
  {
    q: "How long is the workshop?",
    a: "The core workshop runs approximately 2 hours with hands-on exercises. You'll walk away with a completed goal plan and automated rituals ready to implement immediately.",
  },
  {
    q: "Is it Live?",
    a: "This Masterclass was originally recorded during a live session and is now available as a limited-time broadcast.- You’ll experience the full energy of the original session — just like those who attended it live.",
  },
];

const FAQSection = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black pt-20 pb-16 md:pt-24 md:pb-24">

      {/* LINE SEPARATOR */}
      <div className="container mb-12">
        <div className="h-[4px] w-full bg-[#656565]/40" />
      </div>

      <div className="container max-w-3xl">

        {/* Header */}
        <h2 className="mb-10 font-heading2 text-3xl font-bold text-white md:text-4xl">
          Frequently Asked Questions
        </h2>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="rounded-xl border border-white/10 bg-white/5"
            >
              <button
                onClick={() => setOpen(open === index ? null : index)}
                className="flex w-full items-center justify-between px-5 py-4 text-left"
              >
                <span className="text-sm md:text-base font-semibold text-white">
                  {item.q}
                </span>
                <ChevronDown
                  className={`h-4 w-4 text-white/60 transition-transform ${
                    open === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {open === index && (
                <div className="px-5 pb-5 pt-1 text-sm md:text-base text-white/70 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Closing trust line */}
     
      </div>
    </section>
  );
};

export default FAQSection;
