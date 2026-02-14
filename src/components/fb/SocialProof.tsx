const items = [
  {
    text: "Impact Awardee — Robbins-Madanes Institute",
    color: "#d02752",
  },
  {
    text: "Unicorn Coach ’23 • Unicorn X ’24",
    color: "#0c2c55",
  },
  {
    text: "Generated ₹50+ Crore in Business Revenue",
    color: "#215d61",
  },
  {
    text: "1,000,000+ Students Enrolled in Trainings",
    color: "#280b07",
  },
];

const SocialProof = () => {
  return (
    <section className="border-t border-border bg-muted/40 py-6 overflow-hidden">
      <div className="container">

        {/* Heading */}
        <p className="mb-4 text-center text-sm md:text-base font-semibold uppercase tracking-widest text-muted-foreground">
          Proven Impact & Recognition
        </p>

        {/* Marquee */}
        <div className="relative overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-12 bg-gradient-to-r from-background to-transparent z-10" />
          <div className="pointer-events-none absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-background to-transparent z-10" />

          {/* Track */}
          <div className="flex w-max animate-marquee items-center">
            {[...items, ...items].map((item, index) => (
              <div
                key={index}
                className="flex items-center"
              >
                <span
                style={{ color: item.color }}
                  className={`
                    text-lg md:text-xl
                    font-extrabold
                    whitespace-nowrap
                    px-6
                  `}
                >
                  {item.text}
                </span>

                {/* Divider */}
                <span className="text-white/30 text-xl">•</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
