import { useEffect, useMemo, useRef, useState } from "react";
import { Calendar, Clock } from "lucide-react";
import RegistrationForm from "@/components/fb3/RegistrationForm";

const SHEET_CSV =
  "https://docs.google.com/spreadsheets/d/e/2PACX-1vQUwQ0LMvmivZb-94wBdhRzpM5bAxNxGQaxkVEy8ycGhlrvPLt8SISFyK5pdq2Hg-FfBTHAH5k_yKBO/pub?gid=1912301520&single=true&output=csv";

const CONFIG_URL = "https://offbeatn8n.coachswastik.com/webhook/split-ghm";

// storage keys
const AB_KEY = "ghm_ab_variant_v1";
const AB_CFG_CACHE_KEY = "ghm_ab_config_cache_v1";
const AB_DEBUG_KEY = "ghm_ab_debug_counts_v1";

const CFG_TTL = 60 * 1000; // 60s

type AbConfig = {
  active?: boolean;
  Headline1?: string;
  Headline2?: string;
  Perc1?: number;
  Perc2?: number;
  parameter1?: string;
  parameter2?: string;
};

const DEFAULT_H1 = "Join the Workshop — Hit Your Goals Faster";
const DEFAULT_H2 = "Goal Hacking Workshop — Stop Procrastinating Today";

function clampPct(n: any, fallback: number) {
  const v = Number(n);
  if (!isFinite(v)) return fallback;
  return Math.max(0, Math.min(100, v));
}

function getSavedVariant(): "form1" | "form2" | null {
  try {
    const v = localStorage.getItem(AB_KEY);
    return v === "form1" || v === "form2" ? v : null;
  } catch {
    return null;
  }
}

function setSavedVariant(v: "form1" | "form2") {
  try {
    localStorage.setItem(AB_KEY, v);
  } catch {}
}

function chooseVariant(pct1: number): "form1" | "form2" {
  if (pct1 <= 0) return "form2";
  if (pct1 >= 100) return "form1";
  return Math.random() * 100 < pct1 ? "form1" : "form2";
}

function readConfigCache(): AbConfig | null {
  try {
    const raw = localStorage.getItem(AB_CFG_CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    const ts = Number(parsed?.ts ?? 0);
    const cfg = parsed?.cfg ?? null;
    if (!cfg) return null;
    if (Date.now() - ts > CFG_TTL) return null;
    return cfg as AbConfig;
  } catch {
    return null;
  }
}

function writeConfigCache(cfg: AbConfig) {
  try {
    localStorage.setItem(AB_CFG_CACHE_KEY, JSON.stringify({ ts: Date.now(), cfg }));
  } catch {}
}

function getDebugCounts() {
  try {
    const raw = localStorage.getItem(AB_DEBUG_KEY);
    const parsed = raw ? JSON.parse(raw) : null;
    return {
      form1: Number(parsed?.form1 ?? 0),
      form2: Number(parsed?.form2 ?? 0),
      total: Number(parsed?.total ?? 0),
    };
  } catch {
    return { form1: 0, form2: 0, total: 0 };
  }
}

function bumpDebug(variant: "form1" | "form2") {
  const c = getDebugCounts();
  const next = {
    form1: c.form1 + (variant === "form1" ? 1 : 0),
    form2: c.form2 + (variant === "form2" ? 1 : 0),
    total: c.total + 1,
  };
  localStorage.setItem(AB_DEBUG_KEY, JSON.stringify(next));
  return next;
}

/**
 * ✅ IMPORTANT: Decide variant ONCE, sync, before first paint.
 * Order:
 * 1) saved variant
 * 2) cached config -> choose by Perc1
 * 3) fallback Perc1=50
 */
function decideInitialVariant(): { variant: "form1" | "form2"; usedPct1: number; from: string } {
  const saved = getSavedVariant();
  if (saved) return { variant: saved, usedPct1: NaN, from: "saved" };

  const cached = readConfigCache();
  const isActive = cached?.active !== false; // default active
  const pct1 = clampPct(cached?.Perc1, 50);

  // if not active -> force form1
  const chosen = isActive ? chooseVariant(pct1) : "form1";

  setSavedVariant(chosen);
  return { variant: chosen, usedPct1: pct1, from: cached ? "cache" : "fallback" };
}

export default function HeroSection() {
  const [workshopDate, setWorkshopDate] = useState("Loading...");
  const [workshopTime, setWorkshopTime] = useState("Loading...");

  // ✅ config: show cached instantly if present (no delay)
  const cachedCfg = useMemo(() => readConfigCache(), []);

  // ✅ decide variant sync ONCE
  const init = useMemo(() => decideInitialVariant(), []);
  const [variant] = useState<"form1" | "form2">(init.variant); // NOTE: no setVariant -> no shifting
  const [ab, setAb] = useState<AbConfig | null>(cachedCfg);

  const debugLoggedRef = useRef(false);

  // ---- Fetch Date/Time ----
  useEffect(() => {
    (async () => {
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
      } catch {
        setWorkshopDate("Date coming soon");
        setWorkshopTime("Time coming soon");
      }
    })();
  }, []);

  // ---- Fetch AB Config (background) ----
  useEffect(() => {
    (async () => {
      const t0 = performance.now();
      try {
        const res = await fetch(CONFIG_URL, { cache: "no-store" });
        const text = await res.text();
        if (!res.ok) throw new Error(text || "Config fetch failed");
        const parsed = text ? JSON.parse(text) : null;
        const cfg: AbConfig | null = Array.isArray(parsed) ? parsed[0] : parsed;
        if (!cfg) throw new Error("Empty config");

        setAb(cfg);
        writeConfigCache(cfg);

        // ✅ DO NOT reassign variant here
        // Variant stays fixed per user once chosen.

        // debug once
        if (!debugLoggedRef.current) {
          debugLoggedRef.current = true;

          const counts = bumpDebug(variant);
          const seenPct1 = counts.total ? Math.round((counts.form1 / counts.total) * 100) : 0;
          const seenPct2 = counts.total ? Math.round((counts.form2 / counts.total) * 100) : 0;

          console.log("[AB] init:", init);
          console.log("[AB] config:", cfg);
          console.log("[AB] fixed variant:", variant);
          console.log("[AB] observed(local):", {
            form1: `${seenPct1}%`,
            form2: `${seenPct2}%`,
            total: counts.total,
          });
          console.log("[AB] fetch time(ms):", Math.round(performance.now() - t0));
        }
      } catch (e: any) {
        console.warn("[AB] config fetch failed -> cached/default used:", e?.message || e);
      }
    })();
  }, [variant, init]);

  // ✅ Headline changes instantly based on variant; config updates text only
  const headline = useMemo(() => {
    const h1 = ab?.Headline1 || DEFAULT_H1;
    const h2 = ab?.Headline2 || DEFAULT_H2;
    return variant === "form1" ? h1 : h2;
  }, [ab, variant]);

  const DateTimeCard = () => (
    <div className="w-full max-w-sm rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md p-4 text-white">
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
      <div className="container py-4 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left */}
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left space-y-4">
            <div className="space-y-2">
              <h1 className="font-heading2 text-5xl font-bold leading-tight md:text-8xl">
                <span className="text-[#facc15]">{headline}</span>
              </h1>

              <p className="max-w-2xl font-body text-base md:text-2xl text-white font-semibold">
                Install the 4-step system that makes achieving goals automatic
              </p>

              <div className="mt-10 py-6 flex flex-col items-center gap-2 text-center">
                <p className="text-sm md:text-base text-white font-bold">
                  Finish What You Start <span className="mx-2 text-gray-500">•</span> Kill Procrastination
                </p>
                <p className="text-sm md:text-base text-white font-bold">Build Unbreakable Momentum</p>
              </div>
            </div>

            <div className="flex justify-center lg:justify-start w-full">
              <a
                href="#form"
                className="inline-flex items-center justify-center rounded-xl bg-yellow-400 text-black font-bold px-10 py-4 text-lg sm:px-7 sm:py-3 sm:text-sm transition-all duration-300 hover:bg-yellow-300 shadow-[0_0_25px_rgba(250,204,21,0.35)]"
              >
                Become A Goal-Hacker
              </a>
            </div>

            <div className="hidden lg:block">
              <DateTimeCard />
            </div>
          </div>

          {/* Right */}
          <div id="form" className="flex flex-col items-center lg:items-end">
            <div className="w-full flex justify-center lg:hidden mb-4">
              <DateTimeCard />
            </div>

            <div className="w-full max-w-sm rounded-2xl bg-white p-5">
              <RegistrationForm variant={variant} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}