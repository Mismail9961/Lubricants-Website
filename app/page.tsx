import HeroSection from "./components/HeroSection";
import BannerSection from "./components/BannerSection";
import ProductGroup from "./components/ProductGroup";
import AxionFullSection from "./components/AxionFullSection";
import AxionSection from "./components/AxionSection";
import NewsEventsSection from "./components/NewsEventsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { VideoSection } from "./components/PrimeVideoSection";

export default function Home() {
  return (
    <div >
      <Header />
      <HeroSection />
      <BannerSection />
      <VideoSection />
      <ProductGroup />
      <AxionFullSection />
      <AxionSection />
      <NewsEventsSection />
      <Footer />
    </div>
  );
}
