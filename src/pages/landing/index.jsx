import React from "react";
import HeroSection from "../../components/hero";
import PremiumSection from "../../components/premiumSection";
import StoryAboutBrand from "../../components/storyAboutBrand";
import Achievement from "../../components/achievement";
import CustomersReview from "../../components/customersReview";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <PremiumSection />
      <StoryAboutBrand />
      <Achievement />
      <CustomersReview />
    </div>
  );
};

export default Home;
