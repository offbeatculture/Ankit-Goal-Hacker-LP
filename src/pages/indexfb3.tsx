import HeroSection from "@/components/fb3/HeroSection";
import SocialProof from "@/components/fb3/SocialProof";
import ValueSection from "@/components/fb3/ValueSection";
import FinalCTA from "@/components/fb3/FinalCTA";
import Footer from "@/components/fb3/Footer";
import CoachSection from "@/components/fb3/CoachSection";
import StickyCTA from "@/components/fb3/StickyCTA";
import FAQSection from "@/components/fb3/Faq";
import { ProblemSection } from "@/components/fb3/ProblemSection";
import { GoalsPulledSection } from "@/components/fb3/GoalsPulledSection";
import { MasterySection } from "@/components/fb3/MasterySection";
import AnnouncementBar from "@/components/fb3/AnnouncementBar";
import LaunchOfferSection from "@/components/fb3/LaunchOfferSection";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";


const IndexFb3 = () => {

    useFacebookPixel();
    
  return (
    <main className="min-h-screen bg-background">
      <AnnouncementBar/>
      <HeroSection />
      <SocialProof />
      <ProblemSection/>
      <GoalsPulledSection/>
      <MasterySection/>
      <CoachSection/>
      <LaunchOfferSection/>
      <FinalCTA />
      <FAQSection/>
      <StickyCTA/>
      
    </main>
  );
};

export default IndexFb3;
