import HeroSection from "@/components/home/HeroSection";
import FeaturedListings from "@/components/home/FeaturedListings";
import StatsSection from "@/components/home/StatsSection";
import AgentSection from "@/components/home/AgentSection";
import CTABanner from "@/components/home/CTABanner";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedListings />
      <StatsSection />
      <AgentSection />
      <CTABanner />
    </>
  );
}
