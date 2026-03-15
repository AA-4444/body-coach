import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AppSection from "@/components/AppSection";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";
import TestimonialsSection from "@/components/TestimonialsSection";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <AppSection />
      <TestimonialsSection />
      <NewsletterSection />
      
      <Footer />
    </div>
  );
};

export default Index;
