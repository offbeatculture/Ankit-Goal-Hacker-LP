import { useEffect, useState } from "react";
import { Timer, ArrowRight } from "lucide-react";

const StickyCTA = () => {
  const DURATION = 15 * 60;
  const [timeLeft, setTimeLeft] = useState(DURATION);

  useEffect(() => {
    const stored = localStorage.getItem("sticky_cta_timer");
    if (stored) setTimeLeft(parseInt(stored, 10));

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) return 0;
        const next = prev - 1;
        localStorage.setItem("sticky_cta_timer", next.toString());
        return next;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-white">
      <div className="container flex flex-col items-center gap-4 py-4 md:flex-row md:justify-between">

        {/* TEXT */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-sm md:text-base font-extrabold text-black">
            Join The Goal Hacking Workshop —{" "}
            <span className="text-black/70">₹99</span>
          </p>
          <p className="text-xs md:text-sm text-black/60">
            Hack Your Habits, Automate Your Goals
          </p>
        </div>

        {/* TIMER + CTA */}
        <div className="flex items-center gap-5">

          {/* TIMER */}
          <div className="flex items-center gap-2 rounded-lg border border-black/10 bg-black/5 px-2 py-2">
            <Timer className="h-5 w-5 text-black/60" />
            <span className="tabular-nums text-lg md:text-xl font-bold text-black">
              {minutes}:{seconds}
            </span>
          </div>

          {/* CTA BUTTON */}
          <a
            href="#form"
            className="
              relative inline-flex items-center gap-2
              rounded-full bg-black px-7 py-3
              text-xs md:text-sm font-extrabold text-white
              transition hover:bg-black/90
              shadow-[0_0_22px_rgba(0,0,0,0.25)]
            "
          >
            Become A Goal-Hacker
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StickyCTA;
