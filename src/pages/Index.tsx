import HeroSection from "@/components/fb/HeroSection";
import SocialProof from "@/components/fb/SocialProof";
import ValueSection from "@/components/fb/ValueSection";
import FinalCTA from "@/components/fb/FinalCTA";
import Footer from "@/components/fb/Footer";
import CoachSection from "@/components/fb/CoachSection";
import StickyCTA from "@/components/fb/StickyCTA";
import FAQSection from "@/components/fb/Faq";
import { ProblemSection } from "@/components/fb/ProblemSection";
import { GoalsPulledSection } from "@/components/fb/GoalsPulledSection";
import { MasterySection } from "@/components/fb/MasterySection";
import AnnouncementBar from "@/components/fb/AnnouncementBar";
import LaunchOfferSection from "@/components/fb/LaunchOfferSection";
import { useFacebookPixel } from "@/hooks/useFacebookPixel";


const Index = () => {

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

export default Index;
