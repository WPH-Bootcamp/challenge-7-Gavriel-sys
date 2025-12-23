import { Navbar } from "./components/container/Navbar";
import { HeroSection } from "./components/container/HeroSection";
import { ServiceSection } from "./components/container/ServiceSection";
import { CompanyLogos } from "./components/container/CompanyLogos";
import { StatsSection } from "./components/container/StatsSection";
import { ProcessSection } from "./components/container/ProcessSection";
import { IndustrySection } from "./components/container/IndustrySection";
import { PortfolioSection } from "./components/container/PortfolioSection";
import { TestimonialSection } from "./components/container/TestimonialSection";
import { FaqSection } from "./components/container/FaqSection";
import { ContactSection } from "./components/container/ContactSection";
import { Footer } from "./components/container/Footer";

import Button from "./components/ui/Button";

function App() {
  return (
    <main className="bg-white dark:bg-black text-gray-900 dark:text-white min-h-screen font-quicksand overflow-x-hidden transition-colors duration-300">
      <Navbar />
      <HeroSection />
      <CompanyLogos />
      <StatsSection />
      <ProcessSection />
      <ServiceSection />
      <IndustrySection />
      <PortfolioSection />
      <TestimonialSection />
      <FaqSection />
      <ContactSection />
      <Footer />
    </main>
  );
}

export default App;
