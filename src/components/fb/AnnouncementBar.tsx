import { Flame } from "lucide-react";

const AnnouncementBar = () => {
  return (
    <div className="w-full bg-[#facc15] text-black">
      <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-center gap-3 text-sm md:text-base font-semibold">

        {/* Animated Icon */}
        <Flame className="w-5 h-5 animate-blink" />

        <span>
          Limited Time Offer — Workshop Access at Launch Price
        </span>

        <span className="bg-black/15 text-black px-4 py-1 rounded-full text-xs md:text-sm font-bold">
          Only ₹99
        </span>

      </div>

      {/* Animation */}
      <style>{`
        @keyframes blinkPulse {
          0% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.4; transform: scale(1.15); }
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