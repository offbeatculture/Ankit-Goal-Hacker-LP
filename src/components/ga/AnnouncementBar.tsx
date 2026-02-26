import { Flame } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#facc15] text-black">
      <div
        className="
        max-w-7xl mx-auto
        px-4 py-3
        flex flex-wrap items-center justify-center
        gap-2
        text-xs sm:text-sm md:text-base
        font-bold text-center
      "
      >
        {/* Animated Icon */}
        <Flame className="w-4 h-4 sm:w-5 sm:h-5 shrink-0 animate-blink" />

        <span className="leading-snug">
          Limited Time Offer — Workshop Access at Launch Price
        </span>

        {/* Price Section */}
        <span
          className="
          bg-black/10
          px-3 py-1
          rounded-full
          flex items-center gap-2
          text-xs sm:text-sm
          font-bold
        "
        >
          <span className="line-through opacity-60">₹999</span>
          <span className="text-black font-extrabold">₹99</span>
        </span>
      </div>

      {/* Animation */}
      <style>{`
        @keyframes blinkPulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.5; transform: scale(1.1); }
          100% { opacity: 1; transform: scale(1); }
        }
        .animate-blink {
          animation: blinkPulse 1.5s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default AnnouncementBar;