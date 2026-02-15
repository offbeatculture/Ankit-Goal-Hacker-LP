import { useEffect, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import RegistrationForm from "@/components/fb/RegistrationForm";

const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUwQ0LMvmivZb-94wBdhRzpM5bAxNxGQaxkVEy8ycGhlrvPLt8SISFyK5pdq2Hg-FfBTHAH5k_yKBO/pub?gid=1912301520&single=true&output=csv";

const HeroSection = () => {
  const [workshopDate, setWorkshopDate] = useState("Loading...");
  const [workshopTime, setWorkshopTime] = useState("Loading...");

  useEffect(() => {
    const fetchDateTime = async () => {
      try {
        const res = await fetch(SHEET_CSV, { cache: "no-store" });
        const csv = await res.text();

        const rows = csv.trim().split(/\r?\n/);

        if (rows.length > 1) {
          const secondRow = rows[1].split(",");

          const date = secondRow[0]?.replace(/^"(.*)"$/, "$1") || "";
          const time = secondRow[1]?.replace(/^"(.*)"$/, "$1") || "";

          setWorkshopDate(date || "Date coming soon");
          setWorkshopTime(time || "Time coming soon");
        }
      } catch (err) {
        setWorkshopDate("Date coming soon");
        setWorkshopTime("Time coming soon");
      }
    };

    fetchDateTime();
  }, []);

  const DateTimeCard = () => (
    <div
      className="
        w-full max-w-sm
        rounded-2xl border border-white/10
        bg-white/5 backdrop-blur-md
        p-4
        text-white
      "
    >
      <div className="flex items-center justify-center lg:justify-start gap-6">
        <div className="flex items-center gap-2 text-white/90">
          <Calendar className="w-5 h-5 text-[#facc15]" />
          <span className="font-body font-semibold">{workshopDate}</span>
        </div>

        <div className="h-6 w-px bg-white/15" />

        <div className="flex items-center gap-2 text-white/90">
          <Clock className="w-5 h-5 text-[#facc15]" />
          <span className="font-body font-semibold">{workshopTime}</span>
        </div>
      </div>
    </div>
  );

  return (
    <section className="bg-black">
      <div className="container py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-6">
            <div className="space-y-3">
              <h1 className="font-heading2 text-5xl font-bold leading-tight text-white md:text-5xl">
                What If Your Goals
                <br />
                <span className="text-gray-400">Chased You.. ?</span>
              </h1>

              <p className="max-w-lg font-body text-base text-gray-300 md:text-lg font-bold">
                Hack Your Habits. Automate Your Goals.
              </p>
            </div>

            <div className="flex justify-center lg:justify-start w-full">
              <a
                href="#form"
                className="
                  inline-flex items-center justify-center
                  rounded-xl bg-yellow-400 text-black font-bold 
                  px-10 py-4 text-lg
                  sm:px-7 sm:py-3 sm:text-sm
                  transition-all duration-300
                  hover:bg-yellow-300
                  shadow-[0_0_25px_rgba(250,204,21,0.35)]
                "
              >
                Become A Goal-Hacker
              </a>
            </div>

            {/* Desktop placement */}
            <div className="hidden lg:block">
              <DateTimeCard />
            </div>
          </div>

          {/* Right - Form */}
          <div id="form" className="flex flex-col items-center lg:items-end">
            {/* Mobile placement */}
            <div className="w-full flex justify-center lg:hidden mb-4">
              <DateTimeCard />
            </div>

            <div className="w-full max-w-sm rounded-2xl bg-white p-5">
              <RegistrationForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;