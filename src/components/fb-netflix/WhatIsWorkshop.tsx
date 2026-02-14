import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { Target, Split, Repeat, CalendarClock, Zap } from "lucide-react";

const cards = [
  {
    title: "Make Progress Addictive",
    kicker: "MMIR Formula",
    description:
      "Milestones + Meaning + Identity + Rewards. When these align, your brain stops resisting action.",
    icon: Target,
    gradient: "from-yellow-400 via-orange-400 to-pink-500",
  },
  {
    title: "Separate Planning from Execution",
    kicker: "Elite Performers",
    description:
      "Learn the Plan–Action Split that eliminates decision fatigue and increases follow-through.",
    icon: Split,
    gradient: "from-blue-400 via-cyan-400 to-emerald-400",
  },
  {
    title: "Install Behavioral Rituals",
    kicker: "No Motivation Needed",
    description:
      "Build habits that run even on bad days. Consistency becomes automatic.",
    icon: Repeat,
    gradient: "from-purple-400 via-fuchsia-500 to-pink-500",
  },
  {
    title: "Compress a 10-Year Vision into 30-Day Moves",
    kicker: "Clarity → Speed",
    description:
      "When your brain knows where it’s going, resistance drops dramatically.",
    icon: CalendarClock,
    gradient: "from-indigo-400 via-sky-400 to-cyan-400",
  },
  {
    title: "Turn Mundane Tasks Into Dopamine Loops",
    kicker: "Trainable Skill",
    description:
      "Make difficult work feel satisfying. Yes — this is trainable.",
    icon: Zap,
    gradient: "from-emerald-400 via-lime-400 to-yellow-300",
  },
];

type CardItem = (typeof cards)[number];
const TOTAL_TILES = cards.length + 1;

function CardTile({
  index,
  card,
  widthClass,
  tileRef,
}: {
  index: number;
  card: CardItem;
  widthClass?: string;
  tileRef?: (el: HTMLDivElement | null) => void;
}) {
  const Icon = card.icon;

  return (
    <div
      ref={tileRef}
      className={`tile relative shrink-0 snap-start ${widthClass ?? ""}`.trim()}
      data-index={index - 1}
    >
      <div className="pointer-events-none absolute -left-2 bottom-4 text-[84px] md:text-[92px] font-extrabold leading-none text-white/10 select-none drop-shadow-[0_10px_18px_rgba(0,0,0,0.7)]">
        {index}
      </div>

      <div className="group relative ml-10 h-[260px] rounded-2xl border border-white/10 bg-[#0b0f17] p-5 md:p-6 transition-transform duration-300 hover:-translate-y-1 overflow-hidden">
        <div
          className={`
            absolute -inset-[1px] rounded-2xl
            bg-gradient-to-r ${card.gradient}
            opacity-20 blur-lg
            transition-opacity duration-500
            group-hover:opacity-45
          `}
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col">
          <div
            className={`
              mb-4 inline-flex h-11 w-11 items-center justify-center
              rounded-xl bg-gradient-to-br ${card.gradient}
              text-black
            `}
          >
            <Icon className="h-5 w-5" />
          </div>

          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            {card.kicker}
          </p>

          <h3 className="mt-2 text-lg md:text-xl font-semibold text-white leading-snug">
            {card.title}
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
            {card.description}
          </p>

          <div className="mt-auto" />
        </div>
      </div>
    </div>
  );
}

function CTATile({
  index,
  widthClass,
  tileRef,
}: {
  index: number;
  widthClass?: string;
  tileRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <div
      ref={tileRef}
      className={`tile relative shrink-0 snap-start ${widthClass ?? ""}`.trim()}
      data-index={index - 1}
    >
      <div className="pointer-events-none absolute -left-2 bottom-4 text-[84px] md:text-[92px] font-extrabold leading-none text-white/10 select-none drop-shadow-[0_10px_18px_rgba(0,0,0,0.7)]">
        {index}
      </div>

      <div className="group relative ml-10 h-[260px] rounded-2xl border border-white/10 bg-[#0b0f17] p-5 md:p-6 overflow-hidden">
        <div
          className="
            absolute -inset-[1px] rounded-2xl
            bg-gradient-to-r from-white/20 via-white/10 to-transparent
            opacity-30 blur-lg
            transition-opacity duration-500
            group-hover:opacity-50
          "
          aria-hidden="true"
        />

        <div className="relative flex h-full flex-col">
          <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
            Limited Seats
          </p>

          <h3 className="mt-2 text-lg md:text-xl font-semibold text-white">
            Ready to Join the Workshop?
          </h3>

          <p className="mt-3 text-sm leading-relaxed text-white/70 line-clamp-3">
            Register now and access the execution system + recording.
          </p>

          <div className="mt-auto">
            <a
              href="#form"
              className="
                inline-flex items-center gap-2
                rounded-full bg-yellow-400 px-6 py-3
                text-sm font-extrabold text-black
                transition hover:bg-yellow-300
                shadow-[0_0_22px_rgba(250,204,21,0.28)]
              "
            >
              Register for ₹99 <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

const WhatIsWorkshop = () => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const tileRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  const setTileRef = (i: number) => (el: HTMLDivElement | null) => {
    tileRefs.current[i] = el;
  };

  // Active dot based on which tile is most visible
  useEffect(() => {
    const root = trackRef.current;
    if (!root) return;

    const els = tileRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        // pick the entry with highest intersectionRatio
        let best = { idx: activeIndex, ratio: 0 };
        for (const e of entries) {
          const idx = Number((e.target as HTMLElement).dataset.index || "0");
          if (e.intersectionRatio > best.ratio) best = { idx, ratio: e.intersectionRatio };
        }
        if (best.ratio > 0.45) setActiveIndex(best.idx);
      },
      {
        root,
        threshold: [0.2, 0.35, 0.5, 0.65, 0.8],
      }
    );

    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const scrollToIndex = (i: number) => {
    const root = trackRef.current;
    const el = tileRefs.current[i];
    if (!root || !el) return;

    // scroll so tile aligns near start of track
    root.scrollTo({
      left: el.offsetLeft - 12,
      behavior: "smooth",
    });
  };

  const dots = useMemo(() => Array.from({ length: TOTAL_TILES }), []);

  return (
    <section className="relative bg-black pt-10 pb-14 md:pt-14 md:pb-16 overflow-hidden">
      {/* Thin parabolic curve with shine */}
      <div className="pointer-events-none absolute left-0 right-0 top-0 -translate-y-1">
        <svg className="w-full h-16 md:h-20" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path
            d="M0,80 C360,10 1080,10 1440,80"
            fill="none"
            stroke="rgba(101,101,101,0.75)"
            strokeWidth="2"
          />
          <path
            d="M0,80 C360,10 1080,10 1440,80"
            fill="none"
            stroke="rgba(255,255,255,0.45)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray="140 1600"
            className="curve-shine"
          />
        </svg>
      </div>

      <div className="container pt-6 md:pt-12">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center text-center">
          <div className="max-w-3xl">
            <h2 className="font-heading2 text-3xl font-bold text-white md:text-4xl">
              Inside This Workshop You’ll Learn How To
            </h2>
            <p className="mt-1 text-sm md:text-base text-white/70">
              Systems designed to work with your brain not against it.
            </p>
          </div>

          <div className="flex justify-center pt-2">
            <a
              href="#register"
              className="
                relative inline-flex items-center justify-center
                rounded-xl bg-yellow-400 text-black font-extrabold
                px-10 py-4 text-base md:text-lg
                transition-all duration-300
                hover:bg-yellow-300
                focus:outline-none
                focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black
                animate-cta-glow
              "
            >
              Register for ₹99
            </a>
          </div>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-base font-semibold text-white md:text-lg">
            Trending Now
          </p>

          {/* MOBILE/TABLET: horizontal scroll */}
          <div className="relative lg:hidden">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-5 bg-gradient-to-r from-black/40 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-5 bg-gradient-to-l from-black/40 to-transparent z-10" />

            <div
              ref={trackRef}
              className="no-scrollbar flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scroll-smooth"
            >
              {cards.map((card, i) => (
                <CardTile
                  key={card.title}
                  card={card}
                  index={i + 1}
                  widthClass="w-[82%] sm:w-[60%]"
                  tileRef={setTileRef(i)}
                />
              ))}
              <CTATile
                index={cards.length + 1}
                widthClass="w-[82%] sm:w-[60%]"
                tileRef={setTileRef(cards.length)}
              />
            </div>

            {/* Dots */}
            <div className="mt-4 flex items-center justify-center gap-2">
              {dots.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to card ${i + 1}`}
                  className={`
                    rounded-full transition-all
                    ${activeIndex === i ? "w-6 h-2 bg-white/70" : "w-2 h-2 bg-white/25 hover:bg-white/40"}
                  `}
                />
              ))}
            </div>
          </div>

          {/* DESKTOP: keep your grid as-is */}
          {/* (dots are only needed for scroll layout) */}
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { scrollbar-width: none; }

        @keyframes curveShineMove {
          0% { stroke-dashoffset: 1600; opacity: .2; }
          50% { opacity: .55; }
          100% { stroke-dashoffset: 0; opacity: .2; }
        }
        .curve-shine { animation: curveShineMove 4.8s ease-in-out infinite; }

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

export default WhatIsWorkshop;
