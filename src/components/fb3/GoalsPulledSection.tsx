import React from "react";

const steps = [
  {
    num: 1,
    title: "CLARITY",
    desc: "Visualize your 10-year dream life with crystal clear detail",
  },
  {
    num: 2,
    title: "BREAKDOWN",
    desc: "Transform big visions into 30-day actionable milestones",
  },
  {
    num: 3,
    title: "GAMIFICATION",
    desc: "Make progress addictive with the MMIR formula",
  },
  {
    num: 4,
    title: "AUTOMATION",
    desc: "Install habits that run on autopilot without willpower",
  },
];

export const GoalsPulledSection = () => {
  return (
    <section className="relative py-6 bg-white overflow-hidden">
      
      {/* Soft Yellow Ambient Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-yellow-400/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-4 max-w-6xl">

        {/* Heading */}
        <div className="text-center">
          <h2 className="text-gray-900 text-2xl md:text-5xl font-heading2 tracking-tight">
            What If Your Goals{" "}
            <span className="relative inline-block text-[#facc15]">
              Pulled You
              <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-[#facc15]/40 rounded-full" />
            </span>{" "}
            Towards Them?
          </h2>

          <p className="mt-4 mx-auto max-w-3xl text-gray-600 text-sm md:text-lg font-body leading-relaxed">
            Instead of pushing yourself with willpower that runs out by Wednesday,
            discover the 4-part Goal Hacking System that makes goal achievement automatic.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="
                group relative
                rounded-2xl
                border border-gray-200
                bg-white
                p-5 md:p-8
                transition-all duration-300
                hover:border-[#facc15]
                hover:shadow-[0_10px_40px_rgba(250,204,21,0.15)]
              "
            >
              {/* subtle yellow top line */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-[#facc15] opacity-0 group-hover:opacity-100 transition duration-300 rounded-t-2xl" />

              {/* Number + Title (Mobile inline, Desktop stacked) */}
              <div className="flex items-center gap-3 md:block">
                <div className="h-9 w-9 md:h-12 md:w-12 rounded-full bg-[#facc15] text-black flex items-center justify-center font-semibold text-sm md:text-lg shrink-0">
                  {s.num}
                </div>

                <h3 className="text-gray-900 font-semibold tracking-wide font-body md:mt-6">
                  {s.title}
                </h3>
              </div>

              <p className="mt-3 text-sm text-gray-600 leading-relaxed font-body">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Subtle Separator */}
        <div className="mt-12 flex justify-center">
          <div className="h-[1px] w-48 bg-gradient-to-r from-transparent via-gray-300 to-transparent" />
        </div>
      </div>
    </section>
  );
};