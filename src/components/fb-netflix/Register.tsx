import { useMemo, useState } from "react";
import { ArrowRight, ChevronDown, Check, Loader2 } from "lucide-react";

/* ---------- CONFIG ---------- */

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^[0-9]{10}$/;

const APPS_SCRIPT_URL = "PASTE_YOUR_APPS_SCRIPT_WEB_APP_URL_HERE";
const RAZORPAY_LINK = "PASTE_YOUR_RAZORPAY_PAYMENT_LINK_HERE";

type FormState = {
  fullName: string;
  email: string;
  phone: string;
  profession: string;
  objective: string;
};

type TouchedState = Partial<Record<keyof FormState, boolean>>;

/* ---------- VALIDATION ---------- */

function validate(form: FormState) {
  const errors: Partial<Record<keyof FormState, string>> = {};

  const name = form.fullName.trim();
  const email = form.email.trim();
  const phone = form.phone.trim();

  if (!name) errors.fullName = "Enter your full name";
  if (!email) errors.email = "Enter your email";
  else if (!EMAIL_RE.test(email)) errors.email = "Enter a valid email";

  if (!phone) errors.phone = "Enter your phone number";
  else if (!PHONE_RE.test(phone)) errors.phone = "Enter a valid 10-digit phone number";

  if (!form.profession) errors.profession = "Select your profession";
  if (!form.objective) errors.objective = "Select your objective";

  return errors;
}

/* ---------- MAIN ---------- */

export default function Register() {
  const [form, setForm] = useState<FormState>({
    fullName: "",
    email: "",
    phone: "",
    profession: "",
    objective: "",
  });

  const [touched, setTouched] = useState<TouchedState>({});
  const [submitting, setSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");

  const errors = useMemo(() => validate(form), [form]);
  const isValid = useMemo(() => Object.keys(errors).length === 0, [errors]);

  const showError = (key: keyof FormState) => touched[key] ? errors[key] : "";

  const setField =
    (key: keyof FormState) =>
    (val: string) => {
      setForm((p) => ({ ...p, [key]: val }));
    };

  const onBlur = (key: keyof FormState) => {
    setTouched((t) => ({ ...t, [key]: true }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError("");

    // mark all touched (so all errors show)
    setTouched({
      fullName: true,
      email: true,
      phone: true,
      profession: true,
      objective: true,
    });

    if (!isValid) return;

    try {
      setSubmitting(true);

      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({
          ...form,
          fullName: form.fullName.trim(),
          email: form.email.trim(),
          phone: form.phone.trim(),
          page: window.location.pathname,
          ts: new Date().toISOString(),
        }),
      });

      window.location.href = RAZORPAY_LINK;
    } catch {
      setServerError("Something went wrong. Please try again.");
      setSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-[720px] rounded-2xl bg-[#1c1f26] border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
        <div className="px-6 py-8 md:px-10 md:py-10">

          {/* Header */}
          <p className="text-xs uppercase tracking-widest text-white/50">
            Registration
          </p>

          <h1 className="mt-4 text-3xl md:text-4xl font-semibold text-white">
            Contact information
          </h1>

          <p className="mt-2 text-sm text-white/60">
            Fill the details below to continue.
          </p>

          <form onSubmit={submit} className="mt-10 grid gap-7">
            <UnderlineInput
              label="Full Name*"
              value={form.fullName}
              onChange={(v) => setField("fullName")(v)}
              onBlur={() => onBlur("fullName")}
              error={showError("fullName")}
            />

            <UnderlineInput
              label="Email*"
              value={form.email}
              inputMode="email"
              helper="Use a valid email like name@company.com"
              onChange={(v) => setField("email")(v)}
              onBlur={() => onBlur("email")}
              error={showError("email")}
            />

            <UnderlineInput
              label="Phone Number*"
              value={form.phone}
              inputMode="numeric"
              helper="10-digit Indian mobile"
              onChange={(v) =>
                setField("phone")(v.replace(/\D/g, "").slice(0, 10))
              }
              onBlur={() => onBlur("phone")}
              error={showError("phone")}
            />

            <FancySelect
              label="Profession*"
              value={form.profession}
              placeholder="Select profession"
              options={[
                "Business Owner / Entrepreneur",
                "Working Professional",
                "Freelancer / Self-Employed",
                "Student / Recent Graduate",
                "Other",
              ]}
              onChange={(v) => setField("profession")(v)}
              onBlur={() => onBlur("profession")}
              error={showError("profession")}
            />

            <FancySelect
              label="Reason to join*"
              value={form.objective}
              placeholder="Select your objective"
              options={[
                "Build leadership confidence",
                "Gain mental clarity & focus",
                "Overcome self-doubt",
                "Accelerate professional growth",
              ]}
              onChange={(v) => setField("objective")(v)}
              onBlur={() => onBlur("objective")}
              error={showError("objective")}
            />

            {serverError ? (
              <p className="text-sm text-red-400">{serverError}</p>
            ) : null}

            <button
              type="submit"
              disabled={!isValid || submitting}
              className="
                mt-4 inline-flex items-center justify-center gap-2
                rounded-xl bg-[#fdc702] px-7 py-3.5
                text-sm font-extrabold text-black
                shadow-[0_0_32px_rgba(253,199,2,0.45)]
                hover:brightness-95
                disabled:opacity-50 disabled:cursor-not-allowed
                transition
              "
            >
              {submitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Redirecting…
                </>
              ) : (
                <>
                  Proceed to Payment <ArrowRight className="h-4 w-4" />
                </>
              )}
            </button>

            <p className="text-xs text-white/40 text-center">
              Secure payment • Instant access
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

/* ---------- INPUT ---------- */

function UnderlineInput({
  label,
  value,
  onChange,
  onBlur,
  inputMode,
  helper,
  error,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  onBlur?: () => void;
  inputMode?: React.HTMLAttributes<HTMLInputElement>["inputMode"];
  helper?: string;
  error?: string;
}) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-semibold text-white/80">{label}</label>

      <input
        value={value}
        inputMode={inputMode}
        onChange={(e) => onChange(e.target.value)}
        onBlur={onBlur}
        className="
          w-full bg-transparent pb-3
          text-base text-white
          border-b border-white/30
          outline-none
          focus:border-white
        "
      />

      {helper && <p className="text-xs text-white/40">{helper}</p>}
      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}

/* ---------- CUSTOM DROPDOWN ---------- */

function FancySelect({
  label,
  value,
  placeholder,
  options,
  onChange,
  onBlur,
  error,
}: {
  label: string;
  value: string;
  placeholder: string;
  options: string[];
  onChange: (v: string) => void;
  onBlur?: () => void;
  error?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="space-y-2 relative">
      <label className="text-sm font-semibold text-white/80">{label}</label>

      <button
        type="button"
        onClick={() => setOpen((s) => !s)}
        onBlur={() => {
          // close and mark touched a beat later so click selection still works
          setTimeout(() => {
            setOpen(false);
            onBlur?.();
          }, 120);
        }}
        className="
          w-full flex items-center justify-between
          border-b border-white/30
          bg-transparent pb-3
          text-base text-white
        "
      >
        <span className={value ? "" : "text-white/40"}>
          {value || placeholder}
        </span>
        <ChevronDown className={`h-4 w-4 transition ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <div className="
          absolute left-0 right-0 top-full z-20 mt-3
          rounded-xl bg-[#2a2f38]
          border border-white/10
          shadow-[0_25px_60px_rgba(0,0,0,0.7)]
          overflow-hidden
        ">
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                onChange(opt);
                setOpen(false);
                onBlur?.();
              }}
              className="
                w-full flex items-center justify-between
                px-4 py-3 text-sm
                text-white/85
                hover:bg-white/5
              "
            >
              {opt}
              {opt === value && <Check className="h-4 w-4 text-[#fdc702]" />}
            </button>
          ))}
        </div>
      )}

      {error ? <p className="text-xs text-red-400">{error}</p> : null}
    </div>
  );
}
