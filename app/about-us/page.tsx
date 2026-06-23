import Image from "next/image";
import BannerDropSection from "../components/BannerDropSection";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import BannerSection from "../components/BannerSection";
import AxionLegacy from "../components/AxionLegacySection";
import AxionCommitment from "../components/AxionCommitmentSection";
import AixonValuesSection from "../components/AixonValuesSection";
import NewsEventsSection from "../components/NewsEventsSection";
export default function Home() {
  return (
    <div >
      <Header/>
      <BannerDropSection />
      <BannerSection/>
      <AxionLegacy/>
      <AxionCommitment/>
      <AixonValuesSection/>
      <NewsEventsSection/>
      <Footer/>
    </div>
  );
}
