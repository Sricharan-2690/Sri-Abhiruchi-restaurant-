import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MenuSection from "@/components/MenuSection";
import AboutSection from "@/components/AboutSection";
import BestsellersSection from "@/components/BestsellersSection";
import ReviewsSection from "@/components/ReviewsSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MenuSection />
      <AboutSection />
      <BestsellersSection />
      <ReviewsSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default Index;
