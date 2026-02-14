import {
  BookOpen,
  Flame,
  Clock,
  FileText,
} from "lucide-react";

const problems = [
  {
    title: "Bought Courses You Never Finished",
    description:
      "That certification is still at 12%. The books remain unread. The skills remain unlearned.",
    icon: BookOpen,
  },
  {
    title: "Goals That Die After 2 Weeks",
    description:
      "January motivation becomes February guilt. You start strong but can’t maintain momentum.",
    icon: Flame,
  },
  {
    title: "Regret Over Missed Opportunities",
    description:
      "That business you didn’t start. That promotion you didn’t chase. That health transformation you keep delaying.",
    icon: Clock,
  },
  {
    title: "Planning Without Execution",
    description:
      "Beautiful journals. Detailed spreadsheets. Zero follow-through. Nothing changes.",
    icon: FileText,
  },
];

export const ProblemSection = () => {
  return (
    <section className="relative py-8 bg-black overflow-hidden">
      
      {/* Subtle yellow glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-yellow-400/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-yellow-300/10 blur-[120px] rounded-full" />
      </div>

      <div className="relative container mx-auto px-6 max-w-6xl">

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                  group relative
                  rounded-2xl
                  border border-white/10
                  bg-white/[0.04]
                  backdrop-blur-md
                  p-6
                  transition-all duration-300
                  hover:border-[#facc15]/60
                  hover:bg-white/[0.06]
                  hover:shadow-[0_0_40px_rgba(250,204,21,0.15)]
                  font-body
                "
              >
                {/* Top yellow glow line */}
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#facc15]/60 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-[#facc15]/10 border border-[#facc15]/30">
                    <Icon className="w-5 h-5 text-[#facc15]" />
                  </div>

                  <h3 className="text-lg font-medium text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-white/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

                {/* Closing Emotional Line */}
        <div className="mt-4 text-center">
          <p className="text-white text-2xl md:text-4xl font-heading2">
            Sound familiar? You’re not alone.
          </p>

          {/* Subtle Grey Shine Separator */}
          <div className="mt-8 flex justify-center">
            <div className="h-[2px] w-72 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};