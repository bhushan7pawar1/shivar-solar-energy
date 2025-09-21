import Header from "@/components/Layout/Header";
import Footer from "@/components/Layout/Footer";
import HeroSection from "@/components/Sections/HeroSection";
import AboutSection from "@/components/Sections/AboutSection";
import ServicesSection from "@/components/Sections/ServicesSection";
import ProductsSection from "@/components/Sections/ProductsSection";
import SolarFarmingSection from "@/components/Sections/SolarFarmingSection";
import CatalogSection from "@/components/Sections/CatalogSection";
import ContactSection from "@/components/Sections/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProductsSection />
        <SolarFarmingSection />
        <CatalogSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
