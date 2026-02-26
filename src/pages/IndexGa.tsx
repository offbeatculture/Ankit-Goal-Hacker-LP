import HeroSection from "@/components/ga/HeroSection";
import SocialProof from "@/components/ga/SocialProof";
import ValueSection from "@/components/ga/ValueSection";
import FinalCTA from "@/components/ga/FinalCTA";
import Footer from "@/components/ga/Footer";
import CoachSection from "@/components/ga/CoachSection";
import StickyCTA from "@/components/ga/StickyCTA";
import FAQSection from "@/components/ga/Faq";
import { ProblemSection } from "@/components/ga/ProblemSection";
import { GoalsPulledSection } from "@/components/ga/GoalsPulledSection";
import { MasterySection } from "@/components/ga/MasterySection";
import AnnouncementBar from "@/components/ga/AnnouncementBar";
import LaunchOfferSection from "@/components/ga/LaunchOfferSection";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";


const IndexGa = () => { 
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

export default IndexGa;
