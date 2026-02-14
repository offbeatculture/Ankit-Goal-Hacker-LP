const testimonials = [
  {
    name: "Swastik Nandakumar",
    image: "/testimonials/asus.jpg",
    url: "https://your-testimonial-link.com/1",
  },
  {
    name: "Shankar Kulkarni",
    image: "/testimonials/dupont.jpg",
    url: "https://your-testimonial-link.com/2",
  },
  {
    name: "May Pierce",
    image: "/testimonials/nuxe.jpg",
    url: "https://your-testimonial-link.com/3",
  },
  {
    name: "Nevil",
    image: "/testimonials/indira.jpg",
    url: "https://your-testimonial-link.com/4",
  },
];

const TrustStrip = () => {
  return (
    <div className="pt-4">
      <p className="mb-3 text-sm text-gray-400">
        Trusted by leaders from global brands
      </p>

      <div className="flex items-center gap-4 overflow-x-auto no-scrollbar">
        {testimonials.map((item) => (
          <button
            key={item.name}
            type="button"
            className="group flex flex-col items-center gap-1"
          >
            {/* Avatar */}
            <div className="relative">
              <div className="h-14 w-14 sm:h-16 sm:w-16 rounded-full border-2 border-yellow-400 p-[2px] transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="h-full w-full rounded-full object-cover"
                />
              </div>

              {/* Play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black/70">
                  <svg
                    className="h-3.5 w-3.5 translate-x-[1px] text-yellow-400"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M6 4l10 6-10 6V4z" />
                  </svg>
                </div>
              </div>
            </div>

            <span className="text-[11px] text-gray-400">
              {item.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default TrustStrip;
