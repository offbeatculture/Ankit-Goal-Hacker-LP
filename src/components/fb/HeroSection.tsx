import TrustStrip from "@/components/fb/TrustStrip";
import RegistrationForm from "@/components/fb/RegistrationForm";

const HeroSection = () => {
  return (
    <section className="bg-black">
      <div className="container py-10 md:py-16">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left Content */}
          <div className="space-y-6">
            
            {/* Headline */}
            <div className="space-y-3">
              <h1 className="font-heading2 text-4xl font-bold leading-tight text-white md:text-5xl">
                What If Your Goals
                <br />
                <span className="text-gray-400">Chased You ... ?</span>
              </h1>

              <p className="max-w-lg font-body text-base text-gray-300 md:text-lg font-bold">
                Hack Your Habits. Automate Your Goals.
               
              </p>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#form"
                className="
                  inline-flex items-center justify-center
                  rounded-xl bg-yellow-400 text-black font-bold 
                  px-10 py-4 text-lg
                  sm:px-7 sm:py-3 sm:text-sm
                  transition-all duration-300
                  hover:bg-yellow-300
                  focus:outline-none
                  focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-black

                  shadow-[0_0_25px_rgba(250,204,21,0.35)]
                  hover:shadow-[0_0_35px_rgba(250,204,21,0.45)]
                  
                "
              >
                Become A Goal-Hacker
              </a>
            </div>

            {/* Trust */}
            <TrustStrip />
          </div>

          {/* Right - Form */}
          <div id="form" className="flex justify-center lg:justify-end">
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
