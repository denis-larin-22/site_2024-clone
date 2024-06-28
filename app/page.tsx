import AccordionSection from "./components/main-page/AccordionSection";
import BusinessPromo from "./components/main-page/BusinessPromo";
import CarouselSection from "./components/main-page/CarouselSection";
import HeroSection from "./components/main-page/HeroSection";
import InfoPanel from "./components/main-page/InfoSection";
import PromoBanner from "./components/main-page/PromoBanner";
import TabsSection from "./components/main-page/TabsSection";
import VideoBanner from "./components/main-page/VideoBanner";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

export default function Home() {
  return (
    <div className="bg-t-pale relative">
      <Header />
      <main className="overflow-hidden">
        <HeroSection />
        <VideoBanner />
        <TabsSection />
        <AccordionSection />
        <PromoBanner />
        <InfoPanel />
        <CarouselSection />
        <BusinessPromo />
      </main>
      <Footer />
    </div >
  );
}
