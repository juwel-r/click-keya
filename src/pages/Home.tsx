import BuyVerifiedAccountsSection from "@/components/modules/home/BuyVerifiedAccountsSection";
import ExperienceSection from "@/components/modules/home/ExperienceSection";
import FeaturedSection from "@/components/modules/home/FeaturedSection";
import HeroSection from "@/components/modules/home/HeroSection";
import SeoAnalysisForm from "@/components/modules/home/SeoAnalysisForm";
import StatsSection from "@/components/modules/home/StatsSection";
import TestimonialsSection from "@/components/modules/home/TestimonialsSection";
import WhatWeOfferSection from "@/components/modules/home/WhatWeOffer";

export default function Home() {
  return (
    <div>
      <HeroSection></HeroSection>
      <WhatWeOfferSection/>
      <ExperienceSection/>
      <StatsSection/>
      <FeaturedSection/>
      <SeoAnalysisForm/>
      <BuyVerifiedAccountsSection/>
      <TestimonialsSection/>
    </div>
  );
}
