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


const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <SocialProof />
      <ProblemSection/>
      <GoalsPulledSection/>
      <MasterySection/>
      <CoachSection/>
      <FinalCTA />
      <FAQSection/>
      <StickyCTA/>
    </main>
  );
};

export default Index;
