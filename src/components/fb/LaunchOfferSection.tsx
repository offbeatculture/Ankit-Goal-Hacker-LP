import {
  Check,
  Sparkles,
  Target,
  BarChart3,
  Repeat,
  SplitSquareVertical,
  Sheet,
  PlayCircle,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

const included = [
  { title: "Complete Goal Hacking Framework Training", icon: Sparkles },
  { title: "Guided 10-Year Visualization Exercise", icon: Target },
  { title: "MMIR Formula Deep Dive", icon: BarChart3 },
  { title: "Ritual Recipe for Habit Automation", icon: Repeat },
  { title: "Plan-Action Separation Technique", icon: SplitSquareVertical },
  { title: "Downloadable Goal Hacking Planner (Excel)", icon: Sheet },
  { title: "Lifetime Access to Workshop Recording", icon: PlayCircle },
];

const LaunchOfferSection = () => {
  return (
    <section className="relative bg-black py-10 md:py-16 overflow-hidden">
      {/* subtle ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-yellow-400/10 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-[520px] h-[520px] rounded-full bg-yellow-300/5 blur-[160px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-5xl">
        {/* Outer framed card */}
        <div className="relative rounded-[28px] border border-[#facc15]/50 bg-[#0B0F1A] p-6 md:p-10 shadow-[0_0_0_1px_rgba(250,204,21,0.10)_inset] overflow-hidden">
          {/* subtle frame glow */}
          <div
            className="pointer-events-none absolute -inset-[1px] rounded-[28px] opacity-70"
            style={{
              background:
                "radial-gradient(900px circle at 50% -10%, rgba(250,204,21,0.18) 0%, transparent 55%)",
            }}
          />

          <div className="relative">
            {/* Banner image */}
           {/* Banner image (no box) */}
<div className="mb-10 md:mb-14 relative flex justify-center">
  {/* soft glow behind image */}
  <div className="absolute -inset-10 bg-yellow-400/10 blur-[60px] rounded-full pointer-events-none" />

  <img
    src="goal-hacking.png"
    alt="Goal Hacking Workshop Bundle"
    className="
      relative
      w-[140%]
      max-w-5xl
      h-auto
      object-contain
      select-none
    "
    loading="lazy"
  />
</div>

            {/* Pill */}
            <div className="flex justify-center">
              <span className="inline-flex items-center rounded-full bg-white text-black px-4 py-2 text-xs md:text-sm font-extrabold tracking-wide">
                LAUNCH OFFER
              </span>
            </div>

            {/* Title */}
            <h2 className="mt-6 text-center font-heading2 text-3xl md:text-5xl text-white">
              Goal Hacking Workshop
            </h2>

            {/* ✅ Layout change:
                - Desktop: 2 columns (included | price)
                - Mobile: single flow (included first, then price+cta below)
            */}
            <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-start">
              {/* Included box */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 md:p-7">
                <p className="text-[11px] tracking-[0.22em] uppercase text-white/45 font-body">
                  What’s included
                </p>

                <div className="mt-5 space-y-3">
                  {included.map((it) => {
                    const Icon = it.icon;
                    return (
                      <div
                        key={it.title}
                        className="flex items-start gap-3 rounded-xl border border-white/5 bg-black/20 px-4 py-3"
                      >
                        <div className="mt-0.5 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-[#facc15]/12 border border-[#facc15]/25">
                          <Icon className="h-5 w-5 text-[#facc15]" />
                        </div>

                        <div className="flex-1">
                          <p className="text-white/90 text-sm md:text-[15px] font-body leading-snug">
                            {it.title}
                          </p>
                        </div>

                        <Check className="h-5 w-5 text-[#facc15] opacity-90 mt-1" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Price + CTA box */}
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-5 md:p-7 flex flex-col">
                {/* Price */}
                <div className="text-center">
                  <p className="text-white/40 line-through text-base md:text-lg font-body">
                    ₹999
                  </p>
                  <p className="mt-1 text-[#facc15] text-4xl md:text-6xl font-heading2 tracking-tight">
                    ₹99
                  </p>
                  <p className="mt-2 text-white/55 text-xs md:text-sm font-body">
                    One-time payment • Instant access
                  </p>
                </div>

                {/* CTA panel */}
                <div className="mt-5 rounded-2xl bg-[#facc15]/10 border border-[#facc15]/25 p-4 md:p-6">
                  <a
                    href="#form"
                    className="
                      relative inline-flex items-center justify-center gap-2
                      w-full
                      rounded-xl
                      px-5 py-3
                      md:px-6 md:py-4
                      font-bold text-black
                      bg-[#facc15]
                      transition hover:brightness-95
                      shadow-[0_0_26px_rgba(250,204,21,0.32)]
                    "
                  >
                    Become A Goal-Hacker 
                    <span className="pointer-events-none absolute -inset-[2px] rounded-xl opacity-25 blur-[10px] bg-[#facc15]" />
                  </a>

                  <div className="mt-3 flex items-center justify-center gap-2 text-white/65 text-xs md:text-sm font-body">
                    <ShieldCheck className="h-4 w-4 text-[#facc15]" />
                    100% Satisfaction Guaranteed
                  </div>
                </div>

                <p className="mt-4 text-center text-white/50 text-xs font-body">
                  Limited launch pricing • Seats may fill fast
                </p>
              </div>
            </div>

            {/* bottom subtle separator */}
            <div className="mt-10 flex justify-center">
              <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LaunchOfferSection;