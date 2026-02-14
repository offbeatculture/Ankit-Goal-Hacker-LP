const FinalCTA = () => {
  return (
    <section className="relative bg-black py-14 md:py-24 overflow-hidden">
      {/* Soft ambient glow (matches screenshot mood) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[900px] h-[420px] rounded-full bg-purple-500/15 blur-[140px]" />
        <div className="absolute bottom-0 left-1/3 w-[520px] h-[520px] rounded-full bg-yellow-400/10 blur-[160px]" />
      </div>

      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          {/* Headline */}
          <h2 className="font-heading2 text-3xl md:text-5xl font-semibold text-white leading-tight">
            Your 10-Year Transformation Starts Today
          </h2>

          {/* Sub-copy */}
          <p className="mt-4 text-white/60 text-base md:text-lg font-body leading-relaxed">
            Stop setting goals you’ll abandon. Start building systems that make
            achievement automatic.
          </p>

          {/* CTA Button (purple → yellow gradient like screenshot) */}
          <div className="mt-10 flex justify-center">
            <a
              href="#form"
              className="
                relative inline-flex items-center justify-center
                rounded-full px-10 md:px-12 py-4
                text-sm md:text-base font-extrabold text-white
                shadow-[0_18px_50px_rgba(168,85,247,0.20)]
                transition hover:brightness-105
              "
              style={{
                background:
                  "linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(250,204,21,1) 100%)",
              }}
            >
              JOIN FOR JUST ₹99 →
              {/* subtle glow ring */}
              <span
                className="pointer-events-none absolute -inset-[2px] rounded-full opacity-40 blur-[10px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(168,85,247,1) 0%, rgba(250,204,21,1) 100%)",
                }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;