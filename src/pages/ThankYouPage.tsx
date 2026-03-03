import { useEffect, useState } from "react";
import { CheckCircle, MessageCircle, Sparkles, Bell } from "lucide-react";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";

const WHATSAPP_GROUP_LINK = "http://connect.ankitneerav.in/ghm-wap-fb"; // 🔁 replace this

const ThankYouPage = () => {
  const [countdown, setCountdown] = useState(10);

  useEffect(() => {
    if (countdown <= 0) {
      window.location.href = WHATSAPP_GROUP_LINK;
      return;
    }

    const t = setTimeout(() => setCountdown((p) => p - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown]);

  useFacebookPixel();
  return (
    <section className="min-h-screen bg-black flex items-center justify-center px-6 py-16">
      <div className="max-w-2xl w-full text-center">
        {/* Success Icon */}
        <div className="flex justify-center">
          <div className="h-20 w-20 rounded-full bg-[#facc15]/15 border border-[#facc15]/40 flex items-center justify-center">
            <CheckCircle className="h-10 w-10 text-[#facc15]" />
          </div>
        </div>

        {/* Heading */}
        <h1 className="mt-8 text-3xl md:text-5xl font-heading2 text-white">
          Payment Successful
        </h1>

        <p className="mt-4 text-white/70 text-base md:text-lg font-body">
          Your seat is confirmed. Next step: join the community where we’ll keep you on track.
        </p>

        {/* Points Card */}
        <div className="mt-10 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-md p-6 text-left space-y-4">
          <div className="flex items-start gap-3 text-white/80">
            <Bell className="h-5 w-5 text-[#facc15] mt-0.5" />
            <p className="text-sm md:text-base">
              All updates, reminders, and workshop links will be shared inside the WhatsApp community.
            </p>
          </div>

          {/* <div className="flex items-start gap-3 text-white/80">
            <Sparkles className="h-5 w-5 text-[#facc15] mt-0.5" />
            <p className="text-sm md:text-base">
              Show up once, apply the system, and let momentum do the heavy lifting — no motivation required.
            </p>
          </div> */}

          {/* <div className="flex items-start gap-3 text-white/80">
            <MessageCircle className="h-5 w-5 text-[#facc15] mt-0.5" />
            <p className="text-sm md:text-base">
              You’ll also get quick prompts + accountability so your goals don’t fade after week one.
            </p>
          </div> */}
        </div>

        {/* WhatsApp CTA */}
        <div className="mt-10 flex justify-center">
          <a
            href={WHATSAPP_GROUP_LINK}
            className="
              inline-flex items-center justify-center gap-2
              rounded-full bg-[#25D366]
              px-8 py-4
              font-bold text-white
              transition hover:brightness-95
              shadow-[0_0_30px_rgba(37,211,102,0.35)]
            "
          >
            <MessageCircle className="h-5 w-5" />
            Join WhatsApp Community
          </a>
        </div>

        {/* Auto Redirect Notice */}
        <p className="mt-6 text-sm text-white/50">
          Redirecting you automatically in{" "}
          <span className="text-[#facc15] font-bold">{countdown}</span> seconds...
        </p>

        <p className="mt-3 text-xs text-white/40">
          If you’re not redirected, click the button above.
        </p>
      </div>
    </section>
  );
};

export default ThankYouPage;