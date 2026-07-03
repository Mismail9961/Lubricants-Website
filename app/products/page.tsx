import Image from "next/image";
import BannerDropSection from "../components/BannerDropSection";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import ProductBannerDropSection from "../components/ProductBannerDropSection";
import AxionLegacy from "../components/AxionLegacySection";
import AxionCommitment from "../components/AxionCommitmentSection";
import AixonValuesSection from "../components/AixonValuesSection";
import NewsEventsSection from "../components/NewsEventsSection";
import AxionProductGroup from "../components/AxionProductGroup";
import AxionProductSlider from "../components/AxionProductSlider";
export default function Product() {
  return (
    <div >
      <Header/>
      <ProductBannerDropSection />
      <AxionProductGroup/>
      <AxionProductSlider/>
      <AxionLegacy/>
      <AxionCommitment/>
      <AixonValuesSection/>
      <NewsEventsSection/>
      <Footer/>
    </div>
  );
}
