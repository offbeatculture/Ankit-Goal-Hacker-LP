import {
  Target,
  BarChart3,
  SplitSquareVertical,
  Sparkles,
  Sheet,
  Brain,
} from "lucide-react";

const masteryItems = [

  {
    title: "The 3 Laws of Goal Achievement",
    description:
      "The secret source to make the good achievement easy , fun & effortless",
    icon: Brain,
  },
  {
    title: "The 10-Year Visualization Technique",
    description:
      "A guided process to define your dream life with vivid clarity — your home, career, relationships, and impact.",
    icon: Target,
  },
  {
    title: "The MMIR Formula",
    description:
      "Milestones + Meaning + Identity + Rewards = Goals that pull you forward instead of requiring constant pushing.",
    icon: BarChart3,
  },
  {
    title: "Plan-Action Separation",
    description:
      'Why mixing planning with execution kills progress — and how separate "research days" and "execution days" change everything.',
    icon: SplitSquareVertical,
  },
  {
    title: "The Ritual Recipe",
    description:
      "The Secret Formula , so you dont need willpower to build habits",
    icon: Sparkles,
  },
  {
    title: "Goal Hacking Planner",
    description:
      "A ready-to-use Excel template to track your goals across 5 life areas with built-in milestone tracking.",
    icon: Sheet,
  },
  
];

const accents = [
  "rgba(250,204,21,0.35)", // yellow
  "rgba(59,130,246,0.30)", // blue
  "rgba(34,197,94,0.30)",  // green
  "rgba(168,85,247,0.32)", // purple
  "rgba(56,189,248,0.28)", // cyan
  "rgba(244,63,94,0.28)",  // rose
];

export const MasterySection = () => {
  return (
    <section className="relative py-10 bg-black overflow-hidden">
      
      {/* subtle global glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-28 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-white/5 blur-[140px]" />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-white text-3xl md:text-5xl font-heading2">
            What You’ll Master
          </h2>
          <p className="mt-3 text-white/60 text-base md:text-lg font-body">
            Practical frameworks you can implement immediately
          </p>
        </div>

        {/* 3 x 2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {masteryItems.map((item, index) => {
            const Icon = item.icon;
            const accent = accents[index];

            return (
              <div
                key={item.title}
                className="
                  group relative
                  rounded-2xl
                  border border-white/10
                  bg-[#0B0F1A]
                  p-6 md:p-7
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                {/* Colored glow halo */}
                <div
                  className="absolute -inset-[1px] rounded-2xl opacity-0 group-hover:opacity-100 transition duration-300 pointer-events-none"
                  style={{
                    background: `radial-gradient(600px circle at 20% 0%, ${accent} 0%, transparent 55%)`,
                  }}
                />

                <div className="relative">
                  {/* Icon with glow */}
                  <div
                    className="inline-flex items-center justify-center w-11 h-11 rounded-xl"
                    style={{
                      background: "rgba(255,255,255,0.06)",
                      boxShadow: `0 0 0 1px rgba(255,255,255,0.08) inset, 0 0 28px ${accent}`,
                    }}
                  >
                    <Icon className="w-5 h-5 text-white/90" />
                  </div>

                  <h3 className="mt-5 text-white text-lg font-semibold leading-snug font-body">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm text-white/60 leading-relaxed font-body">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 flex justify-center mt-4">
  <a
    href="#form"
    className="
      inline-flex items-center justify-center
      rounded-xl bg-yellow-400 text-black font-bold 
      px-10 py-4 text-lg
      sm:px-7 sm:py-3 sm:text-sm
      transition-all duration-300
      hover:bg-yellow-300
      focus:outline-none
      focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black

      shadow-[0_0_25px_rgba(250,204,21,0.35)]
      hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]
    "
  >
    Become A Goal-Hacker
  </a>
</div>
        </div>
        

        {/* subtle separator */}
        <div className="mt-14 flex justify-center">
          <div className="h-[1px] w-64 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        </div>
      </div>
    </section>
  );
};