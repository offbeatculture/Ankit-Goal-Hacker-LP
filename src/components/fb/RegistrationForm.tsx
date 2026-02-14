import { useEffect, useState } from "react";
import {
  User,
  Mail,
  Phone,
  ChevronDown,
  Target,
  Briefcase,
  Timer,
} from "lucide-react";

const RegistrationForm = () => {
  // ⏳ Countdown (5 minutes)
  const [timeLeft, setTimeLeft] = useState(5 * 60);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  return (
    <div className="space-y-4">

      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-gray-900">
          Get Instant Access
        </h3>

        {/* Timer */}
        <div className="inline-flex items-center gap-2 rounded-full bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-700">
          <Timer className="h-4 w-4" />
          Offer expires in
          <span className="ml-1 font-bold tracking-widest">
            {minutes} : {seconds}
          </span>
        </div>

        <p className="text-sm text-gray-500">
          Fill in your details to secure your spot
        </p>
      </div>

      {/* Form */}
      <form className="space-y-3 pt-2">

        {/* Full Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-3 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Email
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-3 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Phone */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-3 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* Profession */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Profession
          </label>
          <div className="relative group">
            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-yellow-500" />
            <select
              className="
                w-full appearance-none rounded-xl border border-gray-300
                bg-white py-3 pl-10 pr-10 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400
                cursor-pointer
              "
            >
              <option value="">Select profession</option>
              <option>Business Owner / Entrepreneur</option>
              <option>Working Professional</option>
              <option>Freelancer / Self-Employed</option>
              <option>Student / Recent Graduate</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Objective */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Why are you joining?
          </label>
          <div className="relative group">
            <Target className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-yellow-500" />
            <select
              className="
                w-full appearance-none rounded-xl border border-gray-300
                bg-white py-3 pl-10 pr-10 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400
                cursor-pointer
              "
            >
              <option value="">Select your objective</option>
              <option>Build leadership confidence</option>
              <option>Gain mental clarity & focus</option>
              <option>Overcome self-doubt</option>
              <option>Accelerate professional growth</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
        </div>

        {/* Submit CTA */}
        <button
          type="submit"
          className="
            mt-4 w-full rounded-xl bg-black py-4 text-base font-bold text-white
            transition-all duration-300
            hover:bg-gray-900
            shadow-[0_14px_32px_rgba(0,0,0,0.35)]
            hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]
          "
        >
          Register Now & Get Access →
        </button>
      </form>

      {/* Trust */}
      <p className="pt-2 text-center text-xs text-gray-400">
        🔒 Your information is safe & never shared
      </p>
    </div>
  );
};

export default RegistrationForm;
