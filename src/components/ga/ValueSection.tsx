import {
  Target,
  Split,
  Repeat,
  CalendarClock,
  Zap,
  ArrowRight,
} from "lucide-react";

const cards = [
  {
    title: "Make Progress Addictive",
    kicker: "MMIR Formula",
    description:
      "Milestones + Meaning + Identity + Rewards. When these align, your brain stops resisting action.",
    icon: Target,
    gradient: "from-yellow-400 via-orange-400 to-pink-500",
    span: "md:col-span-1",
  },
  {
    title: "Separate Planning from Execution",
    kicker: "Elite Performers",
    description:
      "Learn the Plan–Action Split that eliminates decision fatigue and increases follow-through.",
    icon: Split,
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
    span: "md:col-span-1",
  },
  {
    title: "Install Behavioral Rituals",
    kicker: "No Motivation Needed",
    description:
      "Build habits that run even on bad days. Consistency becomes automatic.",
    icon: Repeat,
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
    span: "md:col-span-2",
  },
  {
    title: "Compress a 10-Year Vision into 30-Day Moves",
    kicker: "Clarity → Speed",
    description:
      "When your brain knows where it’s going, resistance drops dramatically.",
    icon: CalendarClock,
    gradient: "from-indigo-400 via-sky-400 to-cyan-400",
    span: "md:col-span-1",
  },
  {
    title: "Turn Mundane Tasks Into Dopamine Loops",
    kicker: "Trainable Skill",
    description:
      "Make difficult work feel satisfying. Yes — this is trainable.",
    icon: Zap,
    gradient: "from-emerald-400 via-lime-400 to-yellow-300",
    span: "md:col-span-1",
  },
];

const ValueSection = () => {
  return (
    <section className="bg-black py-10 md:py-24">
      <div className="container">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-left">
          <h2 className="font-heading2 text-3xl font-bold text-white md:text-4xl">
            Inside This Workshop You’ll Learn How To
          </h2>
          <p className="mt-3 text-[#fdc702] font-bold">
            Systems designed to work with your brain — not against it.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4 md:auto-rows-[240px] items-stretch">
          {cards.map((card) => {
            const Icon = card.icon;

            return (
              <div key={card.title} className={`${card.span} relative group h-full`}>
                {/* Glow */}
                <div
                  className={`
                    absolute -inset-[1px] rounded-2xl
                    bg-gradient-to-r ${card.gradient}
                    opacity-35 blur-lg
                    transition-opacity duration-500
                    group-hover:opacity-65
                    animate-gradient-glow
                  `}
                />

                {/* Card */}
                <div className="relative h-full rounded-2xl border border-white/10 bg-[#0b0f17] p-6 md:p-7 flex flex-col">
                  {/* Icon */}
                  <div
                    className={`
                      mb-4 inline-flex h-11 w-11 items-center justify-center
                      rounded-xl bg-gradient-to-br ${card.gradient}
                      text-black
                    `}
                  >
                    <Icon className="h-5 w-5" />
                  </div>

                  {/* Kicker */}
                  <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                    {card.kicker}
                  </p>

                  {/* Title */}
                  <h3 className="mt-2 text-lg font-semibold text-white md:text-xl leading-snug">
                    {card.title}
                  </h3>

                  {/* Description (clamped for consistent height) */}
                  <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
                    {card.description}
                  </p>

                  {/* Spacer keeps layout consistent */}
                  <div className="mt-auto" />
                </div>
              </div>
            );
          })}

          {/* CTA Card */}
          <div className="relative md:col-span-2 group h-full">
            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-yellow-400 via-orange-400 to-pink-500 opacity-40 blur-lg transition-opacity duration-500 group-hover:opacity-70 animate-gradient-glow" />

            <div className="relative h-full rounded-2xl border border-white/10 bg-[#0b0f17] p-7 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
                  Limited Seats
                </p>
                <h3 className="mt-2 text-xl font-semibold text-white">
                  Ready to Join the Workshop?
                </h3>
                <p className="mt-3 text-sm text-white/70 line-clamp-3">
                  Secure your spot and get instant access to the system.
                </p>
              </div>

              <a
                href="#form"
                className="
                  mt-6 inline-flex w-fit items-center gap-2
                  rounded-full bg-yellow-400 px-8 py-3
                  text-base font-extrabold text-black
                  transition hover:bg-yellow-300
                  shadow-[0_0_30px_rgba(250,204,21,0.35)]
                "
              >
                Reserve My Spot
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Glow animation */}
      <style>{`
        @keyframes gradient-glow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient-glow {
          background-size: 200% 200%;
          animation: gradient-glow 6s ease infinite;
        }
      `}</style>

      {/* line-clamp helper if not enabled (safe fallback) */}
      <style>{`
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default ValueSection;
