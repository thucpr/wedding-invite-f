import HeroSection from "@/components/wedding/HeroSection";
import CoupleSection from "@/components/wedding/CoupleSection";
import TimelineSection from "@/components/wedding/TimelineSection";
import ScrollToTop from "@/components/wedding/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <main className="max-w-lg mx-auto">
        <HeroSection />
        <CoupleSection />
        <TimelineSection />
      </main>
      <ScrollToTop />
    </div>
  );
};

export default Index;
