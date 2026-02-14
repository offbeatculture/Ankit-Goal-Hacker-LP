
import SocialProof from "@/components/fb/SocialProof";
import ValueSection from "@/components/fb/ValueSection";
import FinalCTA from "@/components/fb/FinalCTA";
import Footer from "@/components/fb/Footer";
import CoachSection from "@/components/fb/CoachSection";
import StickyCTA from "@/components/fb/StickyCTA";
import FAQSection from "@/components/fb-netflix/FaqSection";
import HeroSection from "@/components/fb-netflix/HeroSection";
import WhatIsWorkshop from "@/components/fb-netflix/WhatIsWorkshop";
import MentorSection from "@/components/fb-netflix/MentorSection";


const IndexfbNetflix = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <WhatIsWorkshop/>
      <MentorSection/>
      <FAQSection/>
      {/* <SocialProof />
      <ValueSection />
      <CoachSection/>
      <FinalCTA />
      <FAQSection/>
      <StickyCTA/> */}
    </main>
  );
};

export default IndexfbNetflix;
