import { ArrowUpRight, Award, Brain, Activity, Sparkles } from "lucide-react";

const CoachSection = () => {
  return (
    <section className="relative bg-black pt-28 pb-14 md:pt-36 md:pb-20">
      {/* BIGGER SEPARATOR FROM PREVIOUS SECTION */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center">
        <div className="h-14 w-px bg-white/25 md:h-16" />
        <span className="mt-4 text-md font-semibold uppercase tracking-[0.35em] text-white/50 md:text-base">
          The Coach
        </span>
        <div className="mt-4 h-px w-44 bg-gradient-to-r from-transparent via-white/25 to-transparent md:w-56" />
      </div>

      <div className="container">
        <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14">
          {/* LEFT CONTENT */}
          <div className="space-y-7">
            {/* Intro line */}
            <p className="mt-12 text-xs font-semibold uppercase tracking-widest text-white/60">
              Meet India’s No.1 Life Coach
            </p>

            {/* Big Name */}
            <h2 className="font-heading2 text-white leading-[0.92]">
              {/* Mobile: single line */}
              <span className="block text-5xl sm:text-6xl md:hidden">
                Ankit Neerav
              </span>

              {/* Desktop: stacked */}
              <span className="hidden md:block text-7xl lg:text-8xl">
                Ankit
                <br />
                Neerav
              </span>
            </h2>

            {/* Role Chips — MOBILE: 2 in row + long full-width, with glow */}
            <div className="pt-1">
              <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:gap-2">
                {/* 1 */}
                <span
                  className="
                    relative inline-flex items-center gap-2
                    rounded-full border border-white/10 bg-white/5
                    px-4 py-2 text-xs sm:text-sm font-semibold text-[#fdc702]
                    shadow-[0_0_18px_rgba(253,199,2,0.18)]
                  "
                >
                  <Activity className="h-4 w-4" />
                  Peak Performance
                </span>

                {/* 2 */}
                <span
                  className="
                    relative inline-flex items-center gap-2
                    rounded-full border border-white/10 bg-white/5
                    px-4 py-2 text-xs sm:text-sm font-semibold text-[#fdc702]
                    shadow-[0_0_18px_rgba(253,199,2,0.18)]
                  "
                >
                  <Brain className="h-4 w-4" />
                  Behavior Design
                </span>

                {/* 3 (long one full width on mobile) */}
                <span
                  className="
                    col-span-2 md:col-auto
                    relative inline-flex items-center justify-center md:justify-start gap-2
                    rounded-full border border-white/10 bg-white/5
                    px-4 py-2 text-xs sm:text-sm font-semibold text-[#fdc702]
                    shadow-[0_0_22px_rgba(253,199,2,0.22)]
                  "
                >
                  <Sparkles className="h-4 w-4" />
                  Transformation Coach
                </span>
              </div>
            </div>

            {/* MOBILE IMAGE */}
            <div className="relative md:hidden pt-2">
              <div className="absolute -inset-4 rounded-[28px] bg-gradient-to-tr from-yellow-400/12 via-white/5 to-transparent blur-2xl" />

              <div className="relative w-full rotate-[1deg]">
                <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-yellow-400/45 via-orange-400/30 to-pink-500/25 blur-lg" />
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0f17]">
                  <img
                    src="/Ankit3.webp"
                    alt="Ankit Neerav"
                    className="h-[360px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>

            {/* Narrative */}
            <p className="max-w-xl text-base leading-relaxed text-white/70">
              Over the last decade, Ankit has helped professionals, founders, and
              high-agency individuals shift from{" "}
              <span className="text-white font-semibold">potential</span> to{" "}
              <span className="text-white font-semibold">execution</span>.
            </p>

            {/* Work blends */}
            <div className="space-y-3">
              <p className="text-base font-semibold text-white">
                His work blends:
              </p>

              <div className="grid gap-2 sm:grid-cols-2">
                {[
                  "Performance psychology",
                  "Neuroscience-backed habit models",
                  "Identity engineering",
                  "Strategic life design",
                ].map((point) => (
                  <div
                    key={point}
                    className="rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80"
                  >
                    <span className="mr-2 text-[#fdc702]">•</span>
                    {point}
                  </div>
                ))}
              </div>
            </div>

            {/* Philosophy */}
            <div className="pt-1">
              <p className="max-w-xl text-base text-white/70">
                Recognized for impact-driven coaching and practical frameworks —
                not stage motivation.
              </p>

              <p className="mt-4 text-lg font-semibold text-white">
                Because inspiration fades.
                <br />
                <span className="text-[#fdc702]">Systems scale.</span>
              </p>
            </div>

            {/* CTA — blinking/pulsing professionally */}
            <div className="pt-2 flex flex-col gap-3 sm:flex-row sm:items-center">
              <a
                href="#form"
                className="
                  relative inline-flex items-center justify-center gap-2
                  rounded-full bg-yellow-400 px-7 py-3.5
                  text-sm font-extrabold text-black
                  transition hover:bg-yellow-300
                  shadow-[0_0_28px_rgba(250,204,21,0.3)]
                  hover:shadow-[0_0_38px_rgba(250,204,21,0.4)]
                "
              >
                {/* pulse ring */}
                <span className="pointer-events-none absolute inset-0 rounded-full ring-2 ring-yellow-400/50 animate-cta-pulse" />
                Become Goal-Hacker <ArrowUpRight className="h-4 w-4" />
              </a>

              <span className="text-sm text-white/60">
                Join the leadership workshop
              </span>
            </div>

            {/* Awards */}
            <div className="pt-4 flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70">
                <Award className="h-4 w-4 text-[#fdc702]" />
                Impact Awards • Media Features • Global Stages
              </span>
            </div>
          </div>

          {/* DESKTOP RIGHT — IMAGES */}
          <div className="relative -mt-8 lg:-mt-16 hidden md:block">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-yellow-400/12 via-white/5 to-transparent blur-2xl" />

            <div className="relative flex justify-center lg:justify-end mt-24">
              <div className="relative w-[92%] max-w-[520px] rotate-[2deg]">
                <div className="absolute -inset-[1px] rounded-[28px] bg-gradient-to-r from-yellow-400/45 via-orange-400/30 to-pink-500/25 blur-lg" />
                <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#0b0f17]">
                  <img
                    src="/Ankit.webp"
                    alt="Ankit Neerav"
                    className="h-[420px] w-full object-cover md:h-[520px]"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="absolute -left-6 bottom-6 hidden w-[42%] max-w-[240px] -rotate-[6deg] lg:block">
                <div className="absolute -inset-[1px] rounded-[22px] bg-gradient-to-r from-indigo-400/25 via-cyan-400/25 to-emerald-400/25 blur-lg" />
                <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#0b0f17]">
                  <img
                    src="/Ankit2.webp"
                    alt="Ankit Neerav coaching"
                    className="h-[220px] w-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* /Desktop images */}
        </div>
      </div>

      {/* CTA pulse animation */}
      <style>{`
        @keyframes ctaPulse {
          0% { transform: scale(1); opacity: 0.55; }
          70% { transform: scale(1.08); opacity: 0; }
          100% { transform: scale(1.08); opacity: 0; }
        }
        .animate-cta-pulse {
          animation: ctaPulse 1.8s ease-out infinite;
        }
      `}</style>
    </section>
  );
};

export default CoachSection;
