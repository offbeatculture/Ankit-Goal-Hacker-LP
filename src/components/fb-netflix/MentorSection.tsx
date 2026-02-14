import { ArrowUpRight, Award, Brain, Activity, Sparkles , ArrowRight} from "lucide-react";

const awards = [
  {
    text: "Impact Awardee — Robbins-Madanes Institute",
    gradient: "from-yellow-400 via-orange-400 to-pink-500",
  },
  {
    text: "Unicorn Coach ’23 • Unicorn X ’24",
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
  },
  {
    text: "Generated ₹50+ Crore in Business Revenue",
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
  },
  {
    text: "1,000,000+ Students Enrolled in Trainings",
    gradient: "from-indigo-400 via-sky-400 to-cyan-400",
  },
];


const metrics = [
  { label: "Years Coaching", value: "10+" },
  { label: "Revenue Impact", value: "₹50Cr+" },
  { label: "Students", value: "1M+" },
];

const MentorSection = () => {
  return (
    <section className="relative bg-black py-14 md:py-20 ">
      {/* Separator */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center">
        <div className="h-12 w-px bg-white/20 md:h-14" />
        <span className="mt-3 text-xs font-semibold uppercase tracking-[0.35em] text-white/45 md:text-sm">
          The Coach
        </span>
        <div className="mt-3 h-px w-40 bg-gradient-to-r from-transparent via-white/20 to-transparent md:w-56" />
      </div>

      <div className="container pt-16 md:pt-18 ">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 ">
          {/* LEFT */}
          <div className="space-y-6 text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/55">
              Meet India’s No.1 Life Coach
            </p>

            {/* Name */}
            <h2 className="font-heading2 text-white leading-[0.92]">
              <span className="block text-5xl sm:text-6xl md:hidden">
                ANKIT NEERAV
              </span>
              <span className="hidden md:block text-7xl lg:text-8xl">
                Ankit
                <br />
                Neerav
              </span>
            </h2>

            {/* Chips */}
            <div className="pt-1">
              <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/85">
                  <Activity className="h-4 w-4 text-white/65" />
                  Peak Performance
                </span>

                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/85">
                  <Brain className="h-4 w-4 text-white/65" />
                  Behavior Design
                </span>

                <span className="col-span-2 md:col-auto inline-flex items-center justify-center md:justify-start gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs sm:text-sm font-semibold text-white/85">
                  <Sparkles className="h-4 w-4 text-white/65" />
                  Transformation Coach
                </span>
              </div>
            </div>

            {/* Mobile image */}
            <div className="relative md:hidden pt-2">
              <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0f17]">
                <img
                  src="/Ankit3.webp"
                  alt="Ankit Neerav"
                  className="h-[340px] w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Metrics strip (minimal credibility) */}
            <div className="grid grid-cols-3 gap-2 pt-2">
              {metrics.map((m) => (
                <div
                  key={m.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-3 text-center"
                >
                  <div className="text-lg font-extrabold text-[#facc15]">
                    {m.value}
                  </div>
                  <div className="mt-1 text-[11px] uppercase tracking-wider text-white/55">
                    {m.label}
                  </div>
                </div>
              ))}
            </div>

            {/* Awards focus */}
            <div className="pt-2">
              <div className="mb-3 inline-flex items-center gap-2 text-sm font-semibold text-white">
                <Award className="h-4 w-4 text-white/70" />
                Recognition & Impact
              </div>

            <div className="grid gap-3">
  {awards.map((a) => (
    <div
      key={a.text}
      className="
        relative overflow-hidden rounded-xl
        border border-white/10
        px-4 py-3
        text-sm text-white
      "
    >
      {/* Gradient background (low opacity) */}
      <div
        className={`
          absolute inset-0
          bg-gradient-to-r ${a.gradient}
          opacity-[0.50]
        `}
        aria-hidden="true"
      />

      {/* Content */}
      <span className="relative z-10 text-white/90 font-bold">
        {a.text}
      </span>
    </div>
  ))}
</div>



            </div>

            {/* CTA */}
            <div className="pt-3 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#form"
                className="
                  relative inline-flex items-center justify-center gap-2
                  rounded-full bg-yellow-400 px-7 py-3.5
                  text-sm font-extrabold text-black
                  transition hover:bg-yellow-300
                  shadow-[0_0_18px_rgba(250,204,21,0.22)]
                "
              >
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-yellow-400/35 animate-cta-pulse-min" />
                 Register for ₹99 <ArrowRight className="h-4 w-4" />
              </a>

              <span className="text-sm text-white/55">
                Join the workshop
              </span>
            </div>
          </div>

          {/* RIGHT (desktop only) */}
          <div className="relative hidden md:block">
            <div className="absolute -inset-6 rounded-[32px] bg-white/5 blur-2xl" />

            <div className="relative flex justify-center lg:justify-end">
              <div className="relative w-[92%] max-w-[520px]">
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f17]">
                  <img
                    src="/Ankit3.webp"
                    alt="Ankit Neerav"
                    className="h-[520px] w-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* optional secondary image (desktop only) */}
                <div className="absolute -left-6 bottom-6 hidden w-[42%] max-w-[240px] -rotate-[5deg] lg:block">
                  <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0f17]">
                    <img
                      src="/Ankit.webp"
                      alt="Ankit Neerav coaching"
                      className="h-[220px] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* /RIGHT */}
        </div>
      </div>

      <style>{`
        @keyframes ctaPulseMin {
          0% { transform: scale(1); opacity: .45; }
          75% { transform: scale(1.06); opacity: 0; }
          100% { transform: scale(1.06); opacity: 0; }
        }
        .animate-cta-pulse-min {
          animation: ctaPulseMin 2.2s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default MentorSection;
