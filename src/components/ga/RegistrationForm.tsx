import { useEffect, useState } from "react";
import { User, Mail, Phone, ChevronDown, Briefcase, Timer } from "lucide-react";

const RAZORPAY_PAGE_URL = "https://pages.razorpay.com/ghm-ga1";
const WEBHOOK_URL = "https://offbeatn8n.coachswastik.com/webhook/goal-hacking-ga";

/** ✅ Grab UTMs (and persist) */
const UTM_KEY = "lead_utms_goal_hacking";
function getUTMs() {
  const empty = {
    utm_source: "",
    utm_campaign: "",
    utm_medium: "",
    utm_content: "",
    fbclid: "",
  };

  if (typeof window === "undefined") return empty;

  const params = new URLSearchParams(window.location.search);
  const fromUrl = {
    utm_source: params.get("utm_source") || "",
    utm_campaign: params.get("utm_campaign") || "",
    utm_medium: params.get("utm_medium") || "",
    utm_content: params.get("utm_content") || "",
    fbclid: params.get("fbclid") || "",
  };

  const saved = localStorage.getItem(UTM_KEY);
  const hasAny = Object.values(fromUrl).some(Boolean);

  if (!saved && hasAny) {
    localStorage.setItem(UTM_KEY, JSON.stringify(fromUrl));
  }

  try {
    const stored = saved ? JSON.parse(saved) : {};
    return { ...empty, ...stored, ...fromUrl }; // URL wins
  } catch {
    return { ...empty, ...fromUrl };
  }
}

/**
 * Razorpay Payment Pages often prefill dropdown/custom fields ONLY when the value
 * matches EXACTLY, and "/" can cause mismatch. We send a safe version for Razorpay.
 *
 * IMPORTANT: This must match EXACT option text on the Razorpay page.
 * If your Razorpay option is "Business Owner Entrepreneur" (without "/"), keep as below.
 * If Razorpay option includes "/", then remove this mapping.
 */
function toRazorpayProfession(value: string) {
  const v = (value || "").trim();
  if (v === "Business Owner / Entrepreneur") return "Business Owner Entrepreneur";
  return v;
}

const RegistrationForm = () => {
  // ⏳ Countdown (5 minutes)
  const [timeLeft, setTimeLeft] = useState(5 * 60);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    profession: "",
  });

  /** ✅ Capture UTMs once (so refresh/navigation keeps them) */
  useEffect(() => {
    getUTMs();
  }, []);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => setTimeLeft((prev) => prev - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
  const seconds = String(timeLeft % 60).padStart(2, "0");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (submitting) return;

    setError("");

    // ✅ Enforce EXACT 10 digits
    if (!/^\d{10}$/.test(form.phone)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    }

    if (!form.name || !form.email || !form.profession) {
      setError("Please fill all fields.");
      return;
    }

    setSubmitting(true);

    const professionForPay = toRazorpayProfession(form.profession);
    const utms = getUTMs();

    // 1) Trigger webhook (best effort) + include UTMs
    try {
      await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          whatsapp_number: form.phone,
          profession: form.profession, // original label
          profession_for_pay: professionForPay, // what we pass to Razorpay
          ...utms, // ✅ utm_source, utm_campaign, utm_medium, utm_content, fbclid
          page_url: window.location.href,
          ts: new Date().toISOString(),
        }),
        keepalive: true,
      });
    } catch {
      // silent fail
    }

    // 2) Redirect to Razorpay page with query params + UTMs
    const payUrl =
      `${RAZORPAY_PAGE_URL}` +
      `?name=${encodeURIComponent(form.name)}` +
      `&email=${encodeURIComponent(form.email)}` +
      `&whatsapp_number=${encodeURIComponent(form.phone)}` +
      `&profession=${encodeURIComponent(professionForPay)}` +
      `&utm_source=${encodeURIComponent(utms.utm_source)}` +
      `&utm_campaign=${encodeURIComponent(utms.utm_campaign)}` +
      `&utm_medium=${encodeURIComponent(utms.utm_medium)}` +
      `&utm_content=${encodeURIComponent(utms.utm_content)}` +
      `&fbclid=${encodeURIComponent(utms.fbclid)}`;

    window.location.href = payUrl;
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="text-center space-y-2">
        <h3 className="text-xl font-bold text-gray-900">Join The Workshop</h3>

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
      <form onSubmit={onSubmit} className="space-y-3 pt-2">
        {/* Full Name */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              required
              type="text"
              placeholder="Enter your name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
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
              required
              type="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
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
              required
              type="tel"
              inputMode="numeric"
              placeholder="Enter 10-digit number"
              value={form.phone}
              onChange={(e) => {
                const digits = e.target.value.replace(/\D/g, "").slice(0, 10);
                setForm({ ...form, phone: digits });
              }}
              className="w-full rounded-xl border border-gray-300 py-3 pl-10 pr-3 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400"
            />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            Enter exactly 10 digits (no country code).
          </p>
        </div>

        {/* Profession */}
        <div>
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Profession
          </label>
          <div className="relative group">
            <Briefcase className="absolute left-3 top-3 h-4 w-4 text-gray-400 group-focus-within:text-yellow-500" />
            <select
              required
              value={form.profession}
              onChange={(e) => setForm({ ...form, profession: e.target.value })}
              className="
                w-full appearance-none rounded-xl border border-gray-300
                bg-white py-3 pl-10 pr-10 text-sm
                transition
                focus:border-yellow-400 focus:outline-none focus:ring-1 focus:ring-yellow-400
                cursor-pointer
              "
            >
              <option value="" disabled>
                Select profession
              </option>
              <option>Business Owner / Entrepreneur</option>
              <option>Working Professional</option>
              <option>Freelancer</option>
              <option>Student</option>
              <option>Other</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          <p className="mt-1 text-xs text-gray-500">
            (We’ll pass a Razorpay-safe value for checkout.)
          </p>
        </div>

        {/* Error */}
        {error ? (
          <div className="rounded-xl bg-red-50 border border-red-200 px-4 py-2 text-sm text-red-700">
            {error}
          </div>
        ) : null}

        {/* Submit CTA */}
        <button
          type="submit"
          disabled={submitting}
          className="
            mt-4 w-full rounded-xl bg-black py-4 text-base font-bold text-white
            transition-all duration-300
            hover:bg-gray-900
            shadow-[0_14px_32px_rgba(0,0,0,0.35)]
            hover:shadow-[0_18px_42px_rgba(0,0,0,0.45)]
            disabled:opacity-60 disabled:cursor-not-allowed
          "
        >
          {submitting ? "Processing..." : "Join The Workshop (Rs.99 Only)"}
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