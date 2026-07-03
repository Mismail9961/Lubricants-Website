import ContactBannerDropSection from "../components/ContactBannerDropSection";
import { Footer } from "../components/Footer";
import Header from "../components/Header";
import BannerSection from "../components/BannerSection";
import AxionLegacy from "../components/AxionLegacySection";
import AxionCommitment from "../components/AxionCommitmentSection";
import AixonValuesSection from "../components/AixonValuesSection";
import NewsEventsSection from "../components/NewsEventsSection";
import ContactSection from "../components/ContactSection";
import ContactUsBanner from "../components/ContactUsBanner";
export default function ContactUs() {
  return (
    <div >
      <Header/>
      <ContactBannerDropSection />
      <ContactSection />
      <ContactUsBanner />
      <AixonValuesSection/>
      <NewsEventsSection/>
      <Footer/>
    </div>
  );
}
