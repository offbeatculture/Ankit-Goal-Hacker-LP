import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className="relative bg-black overflow-hidden">
      {/* Background image (Netflix-style) */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: "url('/hero-bg.webp')" }}
        aria-hidden="true"
      />

      {/* Dark overlay + vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0.82) 65%, rgba(0,0,0,0.95) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Top bar (Netflix-like) */}
      <div className="relative z-10">
        <div className="container flex items-center justify-between py-3">
          <div className="font-heading2 text-xl tracking-wide text-white">
            ANKIT NEERAV
          </div>

          <div className="flex items-center gap-3">
            {/* <button className="hidden sm:inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10">
              English
            </button> */}
            <Link
              to="/register"
              className="inline-flex items-center justify-center rounded-md bg-yellow-400 px-4 py-2 text-xs font-extrabold text-black hover:bg-yellow-300"
            >
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Hero center (Netflix-like) */}
      <div className="relative z-10">
   <div className="
  container flex
  min-h-[60vh] md:min-h-[72vh]
  items-start md:items-center
  justify-center
  pt-14 md:pt-16
  pb-2
">

          <div className="mx-auto w-full max-w-3xl text-center space-y-6">
            {/* Headline */}
            <h1 className="font-heading2 text-3xl font-semibold leading-tight text-white md:text-5xl">
              Unlock Leadership Confidence
              <br />
              <span className="text-gray-400">with Metacognition</span>
            </h1>

            {/* Subheadline */}
            <p className="mx-auto max-w-2xl font-body text-sm text-gray-300 md:text-lg">
              Most people don’t fail because they lack ambition.
              <br />
              They fail because their goals depend on motivation.
            </p>

            {/* Supporting line (Netflix-style microcopy) */}
            <p className="mx-auto max-w-xl text-sm text-white/60 md:text-base">
              Register now to access the workshop system and execution framework.
            </p>

            {/* CTA */}
            <div className="flex justify-center pt-2">
  <a
    href="#register"
    className="
      relative inline-flex items-center justify-center
      rounded-xl bg-yellow-400 text-black font-extrabold
      px-10 py-4 text-base md:text-lg
      transition-all duration-300
      hover:bg-yellow-300
      focus:outline-none
      focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black

      animate-cta-glow
    "
  >
    Register for ₹99
  </a>
</div>


            {/* Small trust line (optional, Netflix-like) */}
            <p className="pt-1 text-xs text-white">
              Limited seats • Recording included • Lifetime access
            </p>
          </div>
        </div>

        {/* Bottom fade */}
        {/* <div
          className="h-10 md:h-14"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%)",
          }}
          aria-hidden="true"
        /> */}
      </div>
    </section>
  );
};

export default HeroSection;
